import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import assets from '../../assets'
import { AppContext } from '../../context/AppContext'

// Star rating as a separate component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={assets.star}
          alt="Star"
          className={`w-4 h-4 ${index < Math.floor(rating) ? 'opacity-100' : 'opacity-30'}`}
        />
      ))}
    </div>
  )
}

const CourseCard = ({ course }) => {
  const { currency, calculateAverageRating } = useContext(AppContext)

  const discountedPrice = course.coursePrice - (course.discount * course.coursePrice / 100)
  const hasDiscount = course.discount > 0

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={course.courseThumbnail}
          alt={course.courseTitle || 'Course Thumbnail'}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {course.discount}% OFF
          </div>
        )}

        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
          {course.duration || '8 weeks'}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {course.courseTitle}
        </h3>

        {/* Instructor */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-gray-600">
              {course.instructor?.name?.charAt(0) || 'I'}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            {course.instructor?.name || 'Expert Instructor'}
          </p>
        </div>

        {/* Ratings */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex items-center gap-1">
            <span className="text-sm font-semibold text-gray-900">
              {calculateAverageRating(course) || '4.5'}
            </span>
            <StarRating rating={course.rating || 4.5} />
          </div>
          <span className="text-sm text-gray-500">
            ({course.reviews || '22'} reviews)
          </span>
        </div>

        {/* Course Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
            <span>{course.students || '1.2k'} students</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{course.duration || '8 weeks'}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">
              {currency}{discountedPrice.toFixed(2)}
            </span>
            {hasDiscount && (
              <span className="text-sm text-gray-500 line-through">
                {currency}{course.coursePrice.toFixed(2)}
              </span>
            )}
          </div>

          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            course.level === 'Beginner'
              ? 'bg-green-100 text-green-700'
              : course.level === 'Intermediate'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {course.level || 'Beginner'}
          </span>
        </div>

        {/* CTA */}
        <Link
          to={`/course/${course.id}`}
          className="block w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-center transition-colors duration-200"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  )
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    courseThumbnail: PropTypes.string,
    courseTitle: PropTypes.string,
    instructor: PropTypes.shape({
      name: PropTypes.string,
    }),
    rating: PropTypes.number,
    reviews: PropTypes.number,
    students: PropTypes.string,
    duration: PropTypes.string,
    discount: PropTypes.number,
    coursePrice: PropTypes.number,
    level: PropTypes.string,
  }).isRequired,
}

export default CourseCard
