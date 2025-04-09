import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

function Topic() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    // Check login status from localStorage
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleTestSelect = (testId) => {
    if (!isLoggedIn) {
      // If not logged in, redirect to login page
      navigate('/dang-nhap');
    } else {
      // Redirect to the selected test
      navigate(`/thi-thu/${testId}`);
    }
  };

  return (
    <div className="main-content">
      <h1>Đề thi thử</h1>
      <p>Chọn một trong số những đề thi dưới đây.</p>

      {/* Box containing links to tests */}
      <div className="link-box">
        <div className="link-item">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTestSelect('de-01');
            }}
          >
            Link 1
          </a>
        </div>
        <div className="link-item">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTestSelect('de-02');
            }}
          >
            Link 2
          </a>
        </div>
        <div className="link-item">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTestSelect('de-03');
            }}
          >
            Link 3
          </a>
        </div>
        <div className="link-item">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTestSelect('de-04');
            }}
          >
            Link 4
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topic;
