import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNftlive } from '../../redux/api';
import './Auction.css'
import { Link } from 'react-router-dom'
import Nftgird from './Nftgird';
function Auction() {
    const dispatch = useDispatch();
    const { liveNft } = useSelector((state) => state.data);
    useEffect(() => {
        dispatch(getNftlive());
    }, [dispatch]);
    return (
        <>
            <div className="container ">
                <div className="row fadeInLeft">
                    <div className="col-lg-6 col-sm-12">
                        <div className="auction-title">
                            <h4>AUCTIONS</h4>
                            <h1>Live Auction</h1>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 pt-5">
                        <Link to="/market" className="explore-button ">
                            Explore More
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </Link>
                    </div>
                </div>
                <div className="row text-white">
                    <Nftgird nfts={liveNft} />
                </div>
            </div>
        </>
    )
}

export default Auction