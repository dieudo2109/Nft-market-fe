import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import './Auction.css'
import { Link } from 'react-router-dom';
function Nftgird(props) {
    const { nfts } = props
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                loop={true}
                breakpoints={{
                    200: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },

                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper">
                <div className="container">
                    {nfts && nfts.map(nft => (
                        <SwiperSlide key={nft._id} className="nft-item">
                            <div className="wrapp">
                                <Link to={`/detailnft/${nft._id}`}>
                                    <img className="img-nft my-4" src={nft.image} alt="err" />
                                    <div className="icon-heart">
                                        <div className="icon-content">
                                            <i className="fas fa-heart text-danger me-2" ></i>
                                            <span>{nft.like}k</span>
                                        </div>
                                    </div>
                                </Link>
                                <div className="content-nft">
                                    <Link to={`/detailnft/${nft._id}`}> <h5>{nft.title}</h5></Link>
                                    <div className="total d-flex">
                                        <div className="price me-4 text-primary">Price: {nft.price} ETH</div>
                                        <div>Create: {nft.date}</div>
                                    </div>
                                    <div>Created By :</div>
                                    <Link to={`author/${nft.author._id}`} className="author-img my-2  d-flex">
                                        <img className='image-author me-3' src={nft.author.image} alt='err' />
                                        <div className="author">{nft.author.name}</div>
                                    </Link>
                                    <div className="place my-4 d-flex">
                                        <button className="place-bid">
                                            <i className="fa-solid fa-bag-shopping me-2"></i>
                                            Place Bid
                                        </button>
                                        <div className="history d-flex ms-2 mt-1 text-primary">
                                            <i className="fa-solid fa-clock-rotate-left m-2"></i>
                                            <span className='mt-1'>View History</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </>
    )
}

export default Nftgird