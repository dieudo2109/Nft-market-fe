import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom'
const Banner = () => {
    return (
        <section className='container bannerr'>
            <div className="row">
                <div className="col-md-6 lg-6 banner-content pt-30 animate__animated animate__slideInDown ">
                    <h2>Discover rare digital art and collect
                        <span>sell extraordinary</span> NFTs
                    </h2>
                    <p className="my-5">Buy and Sales 100+ Cryptocurrencies with 20+ flat currencies has an using bank transfers or your credit.</p>
                    <div className="banner-btn  d-flex gap-4 align-items-center">
                        <Link to="/market">
                            <button className='explore_btn text-light d-flex gap-2'>
                                <i className="fa-solid fa-bolt"></i>
                                Explore
                            </button></Link>
                        <Link to="/create">
                            <button className='explore_btn text-light d-flex gap-2'>
                                <i className="fa-regular fa-file"></i>
                                Create
                            </button></Link>
                    </div>
                </div>
                <div className="col-md-6 lg-6 " >
                    <img className='img-fluid banner-img' src='https://gigaland.io/images/misc/women-with-vr.png' alt='err' />
                </div>
            </div>
        </section>
    )
}

export default Banner