import { Link } from "react-router-dom";
import "./PricingCardStyles.css"
import React from 'react'

const PricingCard = () => {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>-PROJECT NAME-</h3>
                <span className="bar"></span>
                <p className="btc">MY Projects </p>
                <p> I AM</p>
        <p> Working</p>
        <p>on it</p>
        
        <Link to="/contact" className="btn"> Contact me</Link>
            </div>
        </div>
    </div>
  )
};

export default PricingCard;