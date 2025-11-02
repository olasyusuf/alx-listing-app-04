const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {reviews.length === 0 && <p className="text-gray-500">No reviews yet.</p>}

      {reviews.map((review, index) => (
        <div
          key={index}
          className="border-b border-gray-200 pb-4 mb-4 flex flex-col md:flex-row md:items-start"
        >
          <img
            src={review.avatar}
            alt={review.name}
            className="w-14 h-14 rounded-full mr-4 mb-3 md:mb-0 object-cover"
          />
          <div>
            <p className="font-bold text-gray-800">{review.name}</p>
            <p className="text-yellow-500">{review.rating} ★</p>
            <p className="text-gray-700 mt-1">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
