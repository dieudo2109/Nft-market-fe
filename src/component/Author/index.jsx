import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAuthor } from '../../redux/api';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Author.css'
function Seller() {
    const dispatch = useDispatch();
    const { author } = useSelector((state) => state.data);
    useEffect(() => {
        dispatch(getAuthor());
    }, [dispatch]);
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-in-out',
            offset: 200,
            delay: 100,
            once: true
        });
    }, [])
    return (
        <div>
            <div className="container">
                <div className="row fadeInLeft mt-5">
                    <div className="col-lg-6 col-sm-12">
                        <div className="auction-title">
                            <h4>CREATIVES</h4>
                            <h1>Top Sellers</h1>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-between">
                    {author && author.map(seller => (
                        <div key={seller._id} data-aos="fade-left" className="col-md-2 my-5">
                            <Link to={`/author/${seller._id}`}>
                                <div className="author-infos">
                                    <img className='seller-img' src={seller.image} alt='err' />
                                    <div className="name-seller mt-3">{seller.name}</div>
                                    <div className="year">{seller.year} Age</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Seller
