import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useReviews from '../../../hooks/useReviews';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    const [star, setStar] = useState(5);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data, event) => {

        const name = data.name;
        const description = data.description;
        const ratings = star;
        const review = {name, description, ratings};
        console.log(review);
        event.target.reset();
        toast.success('Review added successfully')
    };

    return (
        <section className='md:mt-5 lg:w-10/12 mg:w-11/12 mx-auto'>
            <div>
                <div className='flex justify-between items-center mx-1 md:mx-5'>
                    <div className='w-36'>
                        <img src="https://i.ibb.co/pLKmYV0/quote-sign-icon-quotation-mark-symbol-vector-3756804.png" alt="" />
                    </div>
                    <div>
                        <i>
                            <h3 className='my-1 text-xl text-blue-400 font-semibold'>Reviews</h3>
                            <p className='text-blue-400'>What our client say about us</p>
                        </i>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-3'>
                    {
                        reviews.map((review, index) => <Review
                            key={index}
                            review={review}
                        ></Review>)
                    }
                </div>
            </div>
            <div id='newReview' className='mt-10 mb-5'>
                <h3 className='text-center text-xl text-blue-500'><i>Add a new review</i></h3>
                <form className='flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <p className='text-red-500'><small>{errors.name.message}</small></p>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Description"
                            className="input input-bordered w-full max-w-xs"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: 'Description is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.description?.type === 'required' && <p className='text-red-500'><small>{errors.description.message}</small></p>}
                        </label>
                    </div>
                    {/* <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Ratings"
                            className="input input-bordered w-full max-w-xs"
                            {...register("ratings", {
                                min: 1,
                                max: 5,
                                required: {
                                    value: true,
                                    message: 'Ratings is required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.ratings?.type === 'required' && <p className='text-red-500'><small>{errors.ratings.message}</small></p>}
                            {errors.ratings?.type === 'min' && <p className='text-red-500'><small>Minimum ratings can be 1</small></p>}
                            {errors.ratings?.type === 'max' && <p className='text-red-500'><small>Maximum ratings can be 5</small></p>}
                        </label>
                    </div> */}
                    {/* alternative */}
                    <div className='form-control w-full max-w-xs'>
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <div class="rating input input-bordered w-full max-w-xs flex items-center mb-5">
                            <input onChange={() => setStar(1)} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input onChange={() => setStar(2)} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input onChange={() => setStar(3)} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input onChange={() => setStar(4)} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input onChange={() => setStar(5)} type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>


                    <input className='btn btn-outline' type="submit" value='Add review' />
                </form>
            </div>
        </section>
    );
};

export default Reviews;