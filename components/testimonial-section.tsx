'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import axios from 'axios';
import type { Review } from '@/types/reviews';
import Image from 'next/image';
import ReviewSkeleton from '@/components/review-skeleton';

const TestimonialSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const getReviews = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('/api/google-maps-reviews');
      if (response.status !== 200) {
        setErrorMsg('Gagal memuat ulasan');
      }
      setReviews(response.data.data);
    } catch (error) {
      console.error(error);
      setErrorMsg('Gagal memuat ulasan');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    getReviews();
  }, []);
  return (
    <section id="testimonial" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Apa Kata Mereka?</h2>

        {errorMsg && <p className="text-red-500 text-center">{errorMsg}</p>}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading && Array.from({ length: 3 }).map((_, index) => <ReviewSkeleton key={index} />)}
          {!isLoading && reviews.map((review, index) => <Review key={index} review={review} animationDuration={index * 200 + 400} />)}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

const Review = ({ review, animationDuration }: { review: Review; animationDuration: number }) => {
  return (
    <div data-aos="fade-right" data-aos-duration={`${animationDuration}`} className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center mb-4">
        <Image src={review.user.thumbnail} alt="Customer" width={48} height={48} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-bold text-gray-800">{review.user.name}</h4>
        </div>
      </div>
      <p className="text-gray-600">"{review.snippet}"</p>
      <div className="mt-4 flex items-center gap-x-2">
        <div>
          {Array.from({ length: review.rating }).map((_, index) => (
            <div key={index} className="inline-block text-orange-500">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500">{review.duration}</p>
      </div>
    </div>
  );
};
