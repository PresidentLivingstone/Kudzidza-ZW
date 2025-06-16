import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import { AppContext } from '../../context/AppContext';
const CourseSection = () => {
  const { allCourses, loading, error } = useContext(AppContext);

  // --- LOADING STATE ---
  if (loading) {
    return (
      <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4" />
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-4">
                <div className="h-48 bg-gray-200 rounded-xl mb-4" />
                <div className="h-4 bg-gray-200 rounded mb-2" />
                <div className="h-3 bg-gray-100 rounded mb-4" />
                <div className="h-6 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // --- ERROR STATE ---
  if (error) {
    return (
      <section className="py-16 px-6 bg-gradient-to-br from-indigo-50 to-blue-50 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-2">Unable to load courses</h3>
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  // --- MAIN CONTENT ---
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learn from the{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Best
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our courses are designed to equip you with practical skills and the confidence to excel in your career.
          </p>
        </div>

        {/* Course Cards */}
        {allCourses.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {allCourses.slice(0, 4).map((course, index) => (
                <div
                  key={course.id || index}
                  className="transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 text-center">
              <StatBlock value={`${allCourses.length}+`} label="Courses Available" />
              <StatBlock value="50K+" label="Students Enrolled" />
              <StatBlock value="95%" label="Completion Rate" />
              <StatBlock value="4.8" label="Average Rating" />
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                to="/course-list"
                onClick={() => window.scrollTo(0, 0)}
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Show All Courses
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </>
        ) : (
          // No courses
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No courses available</h3>
            <p className="text-gray-600">Check back later for new courses!</p>
          </div>
        )}
      </div>
    </section>
  );
};

// Reusable stat block component
const StatBlock = ({ value, label }) => (
  <div className="text-center">
    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-gray-600 text-sm">{label}</div>
  </div>
);

export default CourseSection;
