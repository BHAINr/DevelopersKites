import React, { useState } from 'react';
import '../CSS/RatingFome.css';

const RatingFome = () => {
  const [formData, setFormData] = useState({
    clientName: '',
    rating: '',
    review: '',
    serviceName: ''
  });
  
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:4001/api/v1/post/rating/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSuccessMessage(true);
        setErrorMessage(false);
        
        // Reset form
        setFormData({
          clientName: '',
          rating: '',
          review: '',
          serviceName: ''
        });
        
        // Hide success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage(false);
        }, 3000);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(true);
      setSuccessMessage(false);
      
      // Hide error message after 3 seconds
      setTimeout(() => {
        setErrorMessage(false);
      }, 3000);
    }
  };
  
  return (
    <div className="container">
      <h1>Submit Your Rating</h1>
      <form id="ratingForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="clientName">Your Name *</label>
          <input 
            type="text" 
            id="clientName" 
            name="clientName" 
            value={formData.clientName}
            onChange={handleChange}
            required 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="serviceName">Service Used *</label>
          <select 
            id="serviceName" 
            name="serviceName" 
            value={formData.serviceName}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="SEO Services">SEO Services</option>
            <option value="Content Creation">Content Creation</option>
            <option value="Consulting">Consulting</option>
            <option value="Support">Technical Support</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Rating *</label>
          <div className="rating-stars">
            {[5, 4, 3, 2, 1].map(star => (
              <React.Fragment key={star}>
                <input 
                  type="radio" 
                  id={`star${star}`} 
                  name="rating" 
                  value={star} 
                  checked={formData.rating === star.toString()}
                  onChange={handleChange}
                  required 
                />
                <label htmlFor={`star${star}`} title={`${star} stars`}></label>
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="review">Your Review</label>
          <textarea 
            id="review" 
            name="review" 
            value={formData.review}
            onChange={handleChange}
            placeholder="Optional: Tell us more about your experience..."
          ></textarea>
        </div>
        
        <button type="submit">Submit Rating</button>
      </form>
      
      {successMessage && (
        <div className="success-message">
          Thank you for your feedback! Your rating has been submitted successfully.
        </div>
      )}
      
      {errorMessage && (
        <div className="error-message">
          There was an error submitting your rating. Please try again.
        </div>
      )}
    </div>
  );
};

export default RatingFome;