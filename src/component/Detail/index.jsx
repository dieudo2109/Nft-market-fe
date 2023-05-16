import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetailNft } from '../../redux/api';
import { useParams } from 'react-router-dom';
import UI from "../../page/UI";
import Auction from "../Auction";
import "./Detailnft.css"
function Detail() {
    const dispatch = useDispatch()
    const { detailNft } = useSelector((state) => state.data)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getDetailNft(id))
    }, [dispatch, id])
    return (
        <>
            <UI title={detailNft.title} />
            <div className="container detail-nft mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-detail" src={detailNft.image} alt="err" />
                    </div>
                    <div className="col-md-6">
                        <h2 className="title-detail">{detailNft.title}</h2>
                        <div className="item-icon mt-4">
                            <div className="like-detail">
                                <i className="fa-regular fa-eye gap-3 me-2"></i>
                                <span>{detailNft.watch}K</span>
                            </div>
                            <div className="like-detail">
                                <i className="fas fa-heart text-danger  me-2"></i>
                                <span>{detailNft.like}K</span>
                            </div>
                        </div>
                        <div className="author-nft my-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="author-content">
                                        {detailNft.author && <img src={detailNft.author.image} alt={detailNft.author.name} />}
                                        <div className="author-info ms-3">
                                            <span>Owned By :</span>
                                            {detailNft.author && <h5>{detailNft.author.name}</h5>}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="author-content">
                                        {detailNft.author && <img src={detailNft.author.image} alt={detailNft.author.name} />}
                                        <div className="author-info ms-3">
                                            <span>Create Date :</span>
                                            <h5>{detailNft.date}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="price-detail">
                            Price: <span className="mx-2">{detailNft.price} ETH</span>
                        </div>
                        <div className="overview my-3">{detailNft.description} </div>

                        <div className="button-detail mt-5">
                            <button className="place-detail">
                                <i className="fa-solid fa-bag-shopping me-2"></i>
                                Place Bid
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <Auction />
        </>
    );
}

export default Detail;