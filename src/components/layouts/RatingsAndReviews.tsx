import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { z } from 'zod';

const reviewSchema = z.object({
  author: z.string().min(1, { message: "Name is required" }),
  rating: z.number().min(1, { message: "Rating is required" }),
  comment: z.string().min(1, { message: "Comment is required" }),
});

interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
}

export const RatingsAndReviews: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [errors, setErrors] = useState<{ author?: string; rating?: string; comment?: string }>({});

  useEffect(() => {
    // Load reviews from local storage
    const savedReviews = localStorage.getItem('reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();

    const validationResult = reviewSchema.safeParse({
      author,
      rating,
      comment,
    });

    if (!validationResult.success) {
      // If validation fails, set the errors
      const validationErrors = validationResult.error.format();
      setErrors({
        author: validationErrors.author?._errors[0],
        rating: validationErrors.rating?._errors[0],
        comment: validationErrors.comment?._errors[0],
      });
      return;
    }

    // Clear errors if validation passes
    setErrors({});

    const newReview: Review = {
      id: Date.now(),
      author: author || 'Anonymous', // Fallback to 'Anonymous' if author field is empty
      rating,
      comment,
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));

    setRating(0);
    setComment('');
    setAuthor('');
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 bg-white">
        <div className="divider text-gray-500 mt-4 mb-8">Rating & Reviews</div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4 text-gray-500">Leave a Review for Paul</h3>
            <form onSubmit={handleSubmitReview} className="card border-2 border-gray-200 py-2 px-4 rounded-lg">
              <div className="card-body">
                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2" htmlFor="author">
                    Your Name:
                  </label>
                  <input
                    type="text"
                    id="author"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Enter your name"
                  />
                  {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
                </div>
                <div className="flex items-center mb-4">
                  <span className="mr-2">Your Rating:</span>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`cursor-pointer w-6 h-6  ${star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      onClick={() => setRating(star)}
                    />
                  ))}
                  {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
                </div>
                <textarea
                  className="textarea border bg-gray-100 w-full h-24 px-4 py-2 rounded-lg"
                  placeholder="Write your review here..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                {errors.comment && <p className="text-red-500 text-sm">{errors.comment}</p>}
                <div className="card-actions justify-end m-4">
                  <button type="submit" className="px-4 py-2 btn bg-blue-600 text-white rounded-lg">
                    Submit Review
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-xl text-gray-500 mb-4">Recent Reviews</h3>
            <div className="space-y-4">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <div key={review.id} className="card bg-gray-100 px-4 py-2 shadow-md rounded-lg">
                    <div className="card-body">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="card-title">{review.author}</h4>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p>{review.comment}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews available.</p>
              )}
            </div>
          </div>
        </div>
        <div className="divider text-gray-500 my-8">Availability for the week</div>
      </div>
    </>
  );
};
