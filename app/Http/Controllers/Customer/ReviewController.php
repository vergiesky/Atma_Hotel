<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;
use Illuminate\Support\Facades\Auth;

class ReviewController extends Controller
{
    public function index()
    {
        // $review = $request->user()->reviews;
        $review = Auth::user()->reviews; // bentuk lain

        return response()->json($review);
    }

    // Create Review
    public function store(Request $request)
    {
        $userId = Auth::id();

        $validated = $request->validate([
            'id_pembayaran' => 'required|exists:pembayarans,id_pembayaran',
            'id_user' => $userId,
            'id_kamar' => 'required|exists:kamars,id_kamar',
            'komentar' => 'nullable|text',
            'rating' => 'required|numeric|between:0,5',
            'file_path_review' => 'nullable|string',
            'tanggal_review' => 'required|date',
        ]);

        $review = Review::create($validated);

        return response()->json([
            'message' => 'Review added succesfully',
            'data' => $review,
        ]);
    }

    // Read review
    public function show(string $id)
    {
        $review = Review::find($id);
        // $review = Review::where('id_review', $id)->first(); // bentuk lain search id

        if (!$review) {
            return response()->json([
                'message' => 'Review not found',
            ], 404);
        }

        return response()->json([
            'data' => $review
        ]);
    }

    // Update Review
    public function update(Request $request, string $id)
    {
        $review = Review::find($id);

        if (!$review) {
            return response()->json([
                'message' => 'Review not found',
            ], 404);
        }

        $userId = Auth::id();

        $validated = $request->validate([
            'id_pembayaran' => 'required|exists:pembayarans,id_pembayaran',
            'id_user' => $userId,
            'id_kamar' => 'required|exists:kamars,id_kamar',
            'komentar' => 'nullable|text',
            'rating' => 'required|numeric|between:0,5',
            'file_path_review' => 'nullable|string',
            'tanggal_review' => 'required|date',
        ]);

        $review->update($validated);

        return response()->json([
            'message' => 'Review updated succesfully',
            'data' => $review->fresh(), // ganti dengan data/objek baru
        ]);
    }

    // Delete Review
    public function destroy(string $id)
    {
        $review = Review::find($id);

        if (!$review) {
            return response()->json([
                'message' => 'Review not found',
            ], 404);
        }

        $review->delete();

        return response()->json([
            'message' => 'Review deleted succesfully',
        ]);
    }
}
