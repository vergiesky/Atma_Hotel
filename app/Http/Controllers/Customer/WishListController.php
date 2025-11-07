<?php

namespace App\Http\Controllers;

use App\Models\Wishlist;
// use Illuminate\Container\Attributes\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class WishListController extends Controller
{
    public function index()
    {
        // $wishList = $request->user()->wishlist; // otomatis ambil milik user login
        $wishList = Auth::user()->wishlist; // bentuk lain

        return response()->json($wishList);
    }


    // Create Wishlist
    public function store(Request $request)
    {
        // $userId = $request->user()->id_user; // bentuk lain untuk id user
        $userId = Auth::id();

        $validated = $request->validate([
            'id_user' => $userId,
            'id_kamar' => 'required|exists:kamars,id_kamar',
        ]);

        $wishList = Wishlist::create($validated);

        return response()->json([
            'message' => 'Wishlist added succesfully',
            'data' => $wishList,
        ]);
    }

    // Read Wishlist
    public function show(string $id)
    {
        $wishList = Wishlist::find($id);
        // $wishList = Wishlist::where('id_wishlist', $id)->first(); // bentuk lain search id

        if (!$wishList) {
            return response()->json([
                'message' => 'Wishlist not found',
            ], 404);
        }

        return response()->json([
            'data' => $wishList
        ]);
    }

    // Update Wishlist
    public function update(Request $request, string $id)
    {
        $wishList = Wishlist::find($id);

        if (!$wishList) {
            return response()->json([
                'message' => 'Wishlist not found',
            ], 404);
        }

        $userId = Auth::id();

        $validated = $request->validate([
            'id_user' => $userId,
            'id_kamar' => 'required',
        ]);

        $wishList->update($validated);

        return response()->json([
            'message' => 'Wishlist updated succesfully',
            'data' => $wishList->fresh(), // ganti dengan data/objek baru
        ]);
    }

    // Delete Wishlist
    public function destroy(string $id)
    {
        // $userId = Auth::id();
        $wishList = Wishlist::find($id);

        if (!$wishList) {
            return response()->json([
                'message' => 'Wishlist not found',
            ], 404);
        }

        $wishList->delete();

        return response()->json([
            'message' => 'Wishlist deleted succesfully',
        ]);
    }
}
