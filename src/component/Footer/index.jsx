import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
function Footer() {
    return (
        <>
            <div className="container-fuild footer-main">
                <div className="row">
                    <div className="col-md-3">
                        <div className="wraps">
                            <Link >
                                <div className="logo">
                                    <h2 className="gap-3 align-items-center">
                                        <span><i className="fa-solid fa-rocket"></i></span>
                                        NFTs</h2>
                                </div>
                            </Link>
                            <p>Buy and Sales 100+ Cryptocurrencies with flat currencies market using bank transfer your credit/debit card.</p>
                            <div className="compony-icon">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-linkedin-in"></i>
                                <i className="fab fa-pinterest-p"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <div className="footer-content">
                                <div className="col-md-3">
                                    <div className="h4">About</div>
                                    <ul className="footer-menu mt-3">
                                        <li><Link>Explore</Link></li>
                                        <li><Link>Supports</Link></li>
                                        <li><Link>How Works</Link></li>
                                        <li><Link>FAQ</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <div className="h4">Market Place</div>
                                    <ul className="footer-menu mt-3">
                                        <li><Link>Sell Assests</Link></li>
                                        <li><Link>Your Purches</Link></li>
                                        <li><Link>Gelary</Link></li>
                                        <li><Link>Support</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <div className="h4">Company</div>
                                    <ul className="footer-menu mt-3">
                                        <li><Link>About</Link></li>
                                        <li><Link>Blog</Link></li>
                                        <li><Link>Contact Us</Link></li>
                                        <li><Link>Services</Link></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <div className="h4">Community</div>
                                    <ul className="footer-menu mt-3">
                                        <li><Link>NFT Token</Link></li>
                                        <li><Link>Voting</Link></li>
                                        <li><Link>Discussion</Link></li>
                                        <li><Link>Feature</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer