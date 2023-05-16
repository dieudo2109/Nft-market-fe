import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getDetailBlog } from '../../redux/api';
import { useParams } from 'react-router-dom';
import UI from "../../page/UI";
import Blog from "../Blog"
function BlogDetail() {
    const dispatch = useDispatch();
    const { detailBlog } = useSelector((state) => state.data)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getDetailBlog(id))
    }, [dispatch, id])
    return (
        <>
            <UI title="Blog-Details" />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-9 blog-detail">
                        <img src='https://html.dreamitsolution.net/nftpro/assets/images/resource/blog-d.png' className='w-100' alt='err' />
                        <h3 className="title mt-3">{detailBlog.title}</h3>
                        <div className="blog-view my-2">
                            {detailBlog.author &&
                                <div className="blog-content me-3">
                                    <i className="fas fa-user me-1"></i>
                                    <span>{detailBlog.author.name}</span>
                                </div>}
                            <div className="blog-content">
                                <i className="fa-regular fa-eye me-1"></i><span>{detailBlog.numberView}</span>
                            </div>
                        </div>
                        <div className="blog-description">{detailBlog.description}
                            NFTs - The Future of Digital Assets?

                            Non-fungible tokens (NFTs) have taken the digital world by storm in recent years, revolutionizing the way we think about digital ownership and authenticity. NFTs are unique digital assets that are stored on a blockchain, making them immutable and tamper-proof. They are often used to represent artwork, music, videos, and other types of digital content, allowing creators to sell their work as one-of-a-kind, authenticated items.<br />

                            The rise of NFTs has been fueled by a growing interest in blockchain technology and the desire for more secure and transparent ways to buy and sell digital assets. With NFTs, buyers can be sure that they are purchasing a unique, verified item, and sellers can benefit from the scarcity and exclusivity that comes with owning a one-of-a-kind<br />

                            But NFTs are not without their controversies. Some critics argue that they are a bubble waiting to burst, with prices for some NFTs reaching astronomical levels that are not sustainable in the long term. Others worry about the environmental impact of NFTs, as the energy required to maintain the blockchain infrastructure can be significant.<br />

                            Despite these concerns, NFTs show no signs of slowing down. Major companies and organizations are jumping on the NFT bandwagon, with everyone from sports teams to celebrities to luxury brands creating their own NFTs. The potential uses for NFTs are virtually limitless, from representing virtual real estate to creating digital identities for people and objects.<br />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="category">
                                    <h5>Post Castegory</h5>
                                    <ul>
                                        <li>
                                            <i className="fas fa-angle-double-right text-primary me-3"></i> Crypto Bitcoin<span>15</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-angle-double-right text-primary me-3"></i> Blockchain<span>30</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-angle-double-right text-primary me-3"></i> Bit Coin<span>22</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-angle-double-right text-primary me-3"></i> ICO Coin<span>19</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-angle-double-right text-primary me-3"></i> Uncatagoied<span>25</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Blog />
        </>
    )
}

export default BlogDetail