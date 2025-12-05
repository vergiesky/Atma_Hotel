<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function show(Request $request)
    {
        return response()->json([
            'data' => $request->user(),
        ], 200);
    }

    public function updateFoto(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'user_profile' => 'sometimes|nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // nilai biasa
        $user->fill(collect($validated)->toArray());

        // handle upload foto baru
        if ($request->hasFile('user_profile')) {
            // hapus foto lama jika ada
            if ($user->user_profile) {
                Storage::disk('public')->delete($user->user_profile);
            }
            $path = $request->file('user_profile')->store('profile_pictures', 'public');
            $user->user_profile = $path;
        }

        $user->save();

        return response()->json([
            'message' => 'Profile updated successfully',
            'data'    => $user->fresh(),
        ], 200);
    }

    public function update(Request $request)
    {
        $user = $request->user();

        $validated = $request->validate([
            'nama' => 'sometimes|string|max:255',
            'no_telp' => 'sometimes|string|max:50',
            'email' => ['sometimes', 'email', 'max:255', Rule::unique('users', 'email')->ignore($user->id_user, 'id_user')],
            'tanggal_lahir' => 'sometimes|date',
        ]);

        // nilai biasa
        $user->fill(collect($validated)->toArray());

        $user->save();

        return response()->json([
            'message' => 'Profile updated successfully',
            'data'    => $user->fresh(),
        ], 200);
    }

    public function updatePassword(Request $request)
    {
        $user = $request->user();

        $request->validate(
            [
                'password_lama' => 'required|string',
                'password_baru' => 'required|string|min:8|confirmed',
                'password_baru_confirmation' => 'required|string',
            ],
            [
                'password_lama.required' => 'Password Lama tidak boleh kosong.',
                'password_baru.required' => 'Password Baru tidak boleh kosong.',
                'password_baru.min' => 'Password Baru minimal 8 karakter.',
                'password_baru_confirmation.required' => 'Konfirmasi Password Baru tidak boleh kosong.',
                'password_baru.confirmed' => 'Password Baru dan Konfirmasi Password Baru harus sama.',
            ]
        );

        if (!Hash::check($request->password_lama, $user->password)) {
            return response()->json([
                'message' => 'Password Lama yang Anda masukkan tidak sesuai',
            ], 400);
        }

        $user->update([
            'password' => Hash::make($request->password_baru),
        ]);

        return response()->json([
            'message' => 'Password berhasil diubah',
        ], 200);
    }

    public function destroy(Request $request)
    {
        $user = $request->user();

        if ($user->user_profile) {
            Storage::disk('public')->delete($user->user_profile);
        }

        if (method_exists($user, 'tokens')) {
            $user->tokens()->delete();
        }

        $user->delete();

        return response()->json([
            'message' => 'Account deleted successfully',
        ], 200);
    }
}
