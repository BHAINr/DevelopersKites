import React, { useState, useEffect } from 'react';
import '../CSS/RatingFome.css';
import { getRating } from '../action/rFPostActions';

const RatingDisplay = () => {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data
    const fetchRatings = async () => {
      setLoading(true);
      try {
        const result = await getRating();
        
        if (result.success) {
          // Check the structure of the response data
          console.log('API Response:', result);
          
          // Make sure we're setting an array to the ratings state
          if (Array.isArray(result.data)) {
            setRatings(result.data);
          } else if (result.data && Array.isArray(result.data.ratings)) {
            // If the data is nested inside a 'ratings' property
            setRatings(result.data.ratings);
          } else {
            // If we received data but it's not in the expected format
            console.error('Unexpected data format:', result.data);
            setError('Received data is not in the expected format');
            setRatings([]);
          }
        } else {
          setError('Failed to fetch ratings');
          setRatings([]);
        }
      } catch (err) {
        console.error('Error in fetchRatings:', err);
        setError('Error fetching ratings: ' + err.message);
        setRatings([]);
      } finally {
        setLoading(false);
      }
    };
    
    // Call the function
    fetchRatings();
  }, []);

  if (loading) {
    return <div>Loading ratings...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Debug: Check what we actually have in ratings
  console.log('Ratings state:', ratings);

  return (
    <div className="ratings-container">
      <h2>Customer Ratings</h2>
      <div className="ratings-grid">
        {Array.isArray(ratings) && ratings.length > 0 ? (
          // FIXED: This block executes when we HAVE ratings
          ratings.map((item) => (
            <div key={item._id || `rating-${Math.random()}`} className="rating-card">
              <h3>{item.clientName}</h3>
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={i < parseInt(item.rating) ? "star filled" : "star"}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="service-name">Service: {item.serviceName}</p>
              {item.review && <p className="review-text">{item.review}</p>}
              <p className="date-text">
                {item.createdAt ? new Date(item.createdAt).toLocaleDateString() : 'No date available'}
              </p>
            </div>
          ))
        ) : (
          // FIXED: This block executes when we DON'T have ratings
          <p>No ratings found</p>
        )}
      </div>
    </div>
  );
};

export default RatingDisplay;