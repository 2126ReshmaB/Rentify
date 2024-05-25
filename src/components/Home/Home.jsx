import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {
    const navigate = useNavigate();
  function handleClick() {
    navigate('/description')
  }
  
  return (
  
    <div className='mt-5px'>
      <p><Link to='/'>LogIn</Link></p>
      <h1>Explore Rentals Near You</h1>
      <div className="card-container">
                <div className="card">
                  <Link to='/description'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTNFVo589MfDW7ma1JFdFPkSGCrXSb8YcQRoHNX0Luw&s" alt="Card 1" />
                    <h3>101 San Fermando</h3>
                    <p>123 Main Street, Bay Area, California, 517589</p>
                    <p>$ 2000</p>
                    </Link>
                </div>
                <div className="card">
                <Link to='/description2'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSacY2KMKs9rK1QH-UxSPaGL8CjdjYQJG8joEQP8NAWDKSDjYpRqupgMe30bTlwFNLhPro&usqp=CAU" alt="Card 2" />
                    <h3>101 San Fermando</h3>
                    <p>123 Main Street, Bay Area, California, 517589</p>
                    <p>$ 2000</p>
                    </Link>
                </div>
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGPtM5rSdBq_gXyYepV5FcwUsalFqhcAwrxdRy4hgQZLBo3xa6l3nb7KUo79iazWwi2jo&usqp=CAU" alt="Card 3" />
                    <h3>101 San Fermando</h3>
                    <p>123 Main Street, Bay Area, California, 517589</p>
                    <p>$ 2000</p>
                </div>
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-GGQ95izCD1uw7szhWFhzPUdjhfDCoAQgyxievr1kGQ&s" alt="Card 3" />
                    <h3>101 San Fermando</h3>
                    <p>123 Main Street, Bay Area, California, 517589</p>
                    <p>$ 2000</p>
                </div>
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgotcgXieVNGcUO9ZW4BDQ5sWVQVHoP1jUggOC3T5W2OYCdRYhzu8mYyxfzxQT0UD5UJs&usqp=CAU" alt="Card 3" />
                    <h3>101 San Fermando</h3>
                    <p>123 Main Street, Bay Area, California, 517589</p>
                    <p>$ 2000</p>
                </div>
                <div className="card">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLbROmm5PGDhOHxSDrCzVS2v1iHAUvX51bnkKPQ63pBQ&s" alt="Card 3" />
                    <h3>101 San Fermando</h3>
                    <p>123 Main Street, Bay Area, California, 517589</p>
                    <p>$ 2000</p>
                </div>
                {/* Add more cards as needed */}
            </div>
        
    </div>
  )
}

export default Home