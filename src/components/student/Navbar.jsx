import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Assets from '../../assets';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes('/course-list');
  
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const {navigate} = useContext(AppContext);

  return (
    <nav className={`h-16 flex items-center justify-between px-6 py-10 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/60'}`}>
      {/* Logo */}
      <Link to="/" className="flex-shrink-0">
        <img onClick={() => navigate('/')}
          src={Assets.logo} 
          alt="Logo" 
          className="h-60 w-auto pt-4 hover:opacity-80 transition-opacity" 
        /> 
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
       { user &&
        <><button className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
          Become Educator
        </button>
        <Link 
          to="/my-enrollments" 
          className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
        >
          My Enrollments
        </Link> </>}
        
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button
            onClick={openSignIn}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Create Account
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center space-x-4">
       { user && <> <button className="text-gray-600 text-sm">
          Educator
        </button>
        
        <Link to="/my-enrollments" className="text-gray-600 text-sm">
          Enrollments
        </Link> </>}
        
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button onClick={openSignIn}>
            <img 
              src={Assets.user_icon} 
              alt="Account" 
              className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity" 
            />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;