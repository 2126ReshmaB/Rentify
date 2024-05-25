import React from 'react'
import './Description.css'
import { useNavigate } from 'react-router-dom';

const Description = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/home')
  }
  return (
    <div>
    <p className='back-text' onClick={handleClick}>go Back ----</p>
     <div className="details-container">
            <div className="image-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTNFVo589MfDW7ma1JFdFPkSGCrXSb8YcQRoHNX0Luw&s" alt="Rental Property" />
            </div>
            <div className="details-content">
            <h1>Modern Loft in Downtown</h1>
        <p>456 Elm Street, City Center, New York</p>
        <p>$ 2500 per month</p>
        <p>2 Bedrooms</p>
        <p>2 Bathrooms</p>
        <p>1000 sqft</p>
        <p>Features: Balcony, Gym, Pool</p>
        <p>Available from: July 1, 2024</p>
            </div>
        </div>
      </div>
  )
}

export default Description