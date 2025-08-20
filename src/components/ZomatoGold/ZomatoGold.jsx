
import React from "react";
import "./ZomatoGold.css";

const ZomatoGold = () => {
    return (
        <div className="gold-container">
            <div className="left-gold">
                    <img src="goldleft.png" alt="" />
                </div>
                <div className="right-gold">
                    <img src="goldright.png" alt="" />
                </div>
            <div className="gold-header">
                
                <img src="goldicon.png" alt="" />
                <p className="gold-subtitle">
                    India’s Top Savings <br /> Program for Food Lovers
                </p>
            </div>

            <div className="gold-benefits">
                <h3> GOLD BENEFITS </h3>
                <div className="benefits-list">
                    <div className="benefit">
                        <img src="scotter.png" alt="delivery" />
                        <p>
                            <strong>Free Delivery</strong>
                            <span>At all restaurants within 7 km</span>
                        </p>

                    </div>
                    <div className="benefit">
                        <img src="profitbox.png" alt="discount" />
                        <p>
                            <strong>Up to 30% extra off</strong>
                            <span>At 20,000+ partner restaurants</span>
                        </p>

                    </div>
                </div>
            </div>
            <div className="gold-down">
                <img src="goldstraight.png" alt="" />
            </div>
        </div>
    );
};

export default ZomatoGold;
