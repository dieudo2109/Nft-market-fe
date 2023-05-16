import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNftnew } from '../../redux/api';
import { Link } from 'react-router-dom'
import Nftgird from '../Auction/Nftgird';

function Trending() {
    const dispatch = useDispatch();
    const { newNft } = useSelector((state) => state.data);
    useEffect(() => {
        dispatch(getNftnew());
    }, [dispatch]);

    return (
        <>
            <div className="container ">
                <div className="row fadeInLeft">
                    <div className="col-lg-6 col-sm-12">
                        <div className="auction-title">
                            <h4>EXPLORE</h4>
                            <h1>Trending</h1>
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
                    <Nftgird nfts={newNft} />
                </div>
            </div>
        </>
    )
}
export default Trending