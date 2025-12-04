// helper untuk ngitung rating hotel dari daftar review
export function getHotelRatingStats(hotelReviews = [], hotel = null) {
  const reviewCount = hotelReviews.length;
  const avgRating = reviewCount
    ? (
        hotelReviews.reduce((sum, r) => sum + Number(r.rating || 0), 0) /
        reviewCount
      ).toFixed(1)
    : null;

  const totalReviewCount = reviewCount || hotel?.jumlah_ulasan || 0;
  const ratingDisplay = avgRating ?? hotel?.rating_hotel ?? "-";

  return { avgRating, totalReviewCount, ratingDisplay };
}

export default getHotelRatingStats;