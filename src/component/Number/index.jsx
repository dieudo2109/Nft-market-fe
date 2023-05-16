import React from 'react'
import './Number.css'
import CountUp from 'react-countup'
import { useEffect } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
function Number() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-in-out',
            offset: 200,
            delay: 200,
            once: true
        });
    }, [])
    return (
        <>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6 col-sm-12">
                        <div className="auction-title">
                            <h4>ABOUT US</h4>
                            <h1>About Us</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 wrap-number">
                        <div className="number">
                            <h2>
                                <div className="content" />
                                <VisibilitySensor partialVisibility >
                                    {({ isVisible }) => (
                                        <div style={{ height: 50 }}>
                                            {isVisible ? <CountUp end={1500} suffix='+' /> : 1000}
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12 note">
                                <h2>Developer</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 wrap-number">
                        <div className="number">
                            <h2>
                                <div className="content" />
                                <VisibilitySensor partialVisibility >
                                    {({ isVisible }) => (
                                        <div style={{ height: 50 }}>
                                            {isVisible ? <CountUp end={6000} suffix='+' /> : 6000}
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12 note">
                                <h2>NFT Coin</h2>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 wrap-number">
                        <div className="number">
                            <h2>
                                <div className="content" />
                                <VisibilitySensor partialVisibility >
                                    {({ isVisible }) => (
                                        <div style={{ height: 50 }}>
                                            {isVisible ? <CountUp end={3000} suffix='+' /> : 3000}
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </h2>
                        </div>
                        <div className="row">
                            <div className="col-md-12 note">
                                <h2>Partner</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row backgroud img-fluid">
                    <div className="col-md-6 col-sm-12">
                        <div className="content-backgroud mt-5 ms-5">
                            <h5 data-aos="fade-left" >HOW TT WORK</h5>
                            <h2 data-aos="fade-left">Create, Sell and Collect NFT Digiatal Asessts</h2>
                            <p data-aos="fade-right">Buy and Sales 100+ Cryptocurrencies with 20+ flat currencies market using bank transfers or your credit/debit card.</p>
                            <Link data-aos="fade-up"
                                data-aos-duration="3000" to="/create" className='button-backgroud'>
                                Create NFT
                                <i className="fa-solid fa-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img data-aos="zoom-in" className='mt-5 img-fluid' src='https://html.dreamitsolution.net/nftpro/assets/images/resource/img1.png' alt='err' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Number