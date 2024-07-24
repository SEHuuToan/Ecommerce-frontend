import React from "react";
import './HomeContent.css'
const HomeContent = () => {
    return (
        <>
            <div className="home-content">
                <h1>ROYAL MOTOCYCLE</h1>
                <div className="home-content-wrap">
                    <div className="home-content-left">
                        <div>Founded in 2024, with an endless passion and a desire to delve deeper into the unique engineering and design of motorcycles on the market - <span>ROYAL MOTORCYCLE</span> was born from here.</div>
                        <div>With the slogan <span>'Reputation builds brand'</span>, and with a conscientious approach to business, we always strive to bring the BEST & MOST BEAUTIFUL products to our CUSTOMERS.</div>
                        <div>Showrooms are located in the heart of SAIGON, in prime and easily accessible locations. Hundreds of models, from scooters and large displacement motorcycles, are displayed here.</div>
                        <div>Possessing a team of staff equipped with comprehensive knowledge about most VEHICLE BRANDS, as well as an understanding of ENGINEERING TECHNIQUES and LEGAL PROCESSES. Along with ATTENTIVE SERVICE and attractive AFTER-SALES policies.</div>
                        <div>We at <span>Royal Motorcycle</span> sincerely hope to receive high evaluations and satisfaction from our VALUED CUSTOMERS!</div>
                        <div>Respectfully!</div>
                    </div>
                    <div className="home-content-right">
                        <img src="https://ducativietnam.com/upload/files/Panigale%20v4/Gallery/Panigale-V4-S-MY20-Red-Ambience-15-Gallery-1920x1080.jpg" alt="" />
                    </div>
                </div>
                <div className="home-content-address">
                    <div>
                        Address: 123 Truong Chinh, Dong Hung Thuan, District 12, Ho Chi Minh city.
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeContent;