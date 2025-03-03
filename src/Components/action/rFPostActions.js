// src/services/ratingService.js
import axios from 'axios';

//Post data
export const submitRating = async (formData) => {
  try {
    const response = await axios.post(
      '/api/v1/post/rating/data',
      formData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

//Get Daata

export const getRating = async()=>{
    try {
        const response = await axios.get('/api/v1/all/ratings');
        return {
          success: true,
          data: response.data
        };
      } catch (error) {
        console.error('Error fetching ratings:', error);
        return {
          success: false,
          error
        };
      }
}

