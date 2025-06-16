import React, { createContext, use, useEffect, useState } from "react";
import { dummyCourses } from "../assets";

// Create context
export const AppContext = createContext();

// Provider component
export const AppContextProvider = ({ children }) => {
  const currency = import.meta.env.VITE_CURRENCY || '$';
  const navigate = useNavigate();

  // States
  const [allCourses, setAllCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all courses (simulated API call)
  const fetchAllCourses = async () => {
    try {
      setLoading(true);
      setError(null);

      await new Promise(resolve => setTimeout(resolve, 500)); // simulate network delay
      setAllCourses(dummyCourses); // use mock data
    } catch (err) {
      setError("Failed to load courses");
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  };

  // Get courses by category
  const getCoursesByCategory = (category) => {
    if (!category || category.toLowerCase() === 'all') return allCourses;
    return allCourses.filter(course =>
      course.category?.toLowerCase() === category.toLowerCase()
    );
  };

  // Search courses by title, instructor or category
  const searchCourses = (query) => {
    if (!query) return allCourses;
    const searchTerm = query.toLowerCase();
    return allCourses.filter(course =>
      course.courseTitle?.toLowerCase().includes(searchTerm) ||
      course.instructor?.name?.toLowerCase().includes(searchTerm) ||
      course.category?.toLowerCase().includes(searchTerm)
    );
  };

  // Get course by ID
  const getCourseById = (id) => {
    return allCourses.find(course => course.id === id);
  };

  // Get top-rated or featured courses
  const getFeaturedCourses = () => {
    return allCourses
      .filter(course => course.featured || course.rating >= 4.5)
      .slice(0, 6);
  };

  //claculate average rating
  const calculateAverageRating = (course) => {
    if (!course || !course.reviews || course.reviews.length === 0) return 0;
    const totalRating = course.reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / course.reviews.length).toFixed(1);
  };

  // Fetch on mount
  useEffect(() => {
    fetchAllCourses();
  }, []);

  // Shared context value
  const value = {
    currency,
    allCourses,
    loading,
    error,
    fetchAllCourses,
    getCoursesByCategory,
    searchCourses,
    getCourseById,
    getFeaturedCourses,
    navigate,
    calculateAverageRating
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to consume context
export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
