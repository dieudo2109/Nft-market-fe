import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNftnew } from '../../redux/api';
import { Link } from 'react-router-dom'
import UI from '../UI'
import './Market.css'
function Market() {
    const dispatch = useDispatch();
    const { newNft } = useSelector((state) => state.data);
    useEffect(() => {
        dispatch(getNftnew());
    }, [dispatch]);
    const [data, setData] = useState(newNft)
    const handleSort = (e) => {
        const filterValue = e.target.value;
        if (filterValue === "hight") {
            const filterValue = newNft.filter((item) => item.price >= 50)
            setData(filterValue)
        }
        if (filterValue === "mid") {
            const filterValue = newNft.filter((item) => item.price >= 30 && item.price <= 50)
            setData(filterValue)
        }
        if (filterValue === "low") {
            const filterValue = newNft.filter((item) => item.price < 30)
            setData(filterValue)
        }
    }
    const handleLike = (e) => {
        const filterLike = e.target.value;
        if (filterLike === "hight") {
            const filterLike = newNft.filter((like) => like.like >= 5)
            setData(filterLike)
        }
        if (filterLike === "low") {
            const filterLike = newNft.filter((like) => like.like < 5)
            setData(filterLike)
        }
    }

    const handleTitle = (e) => {
        const filterTitle = e.target.value;
        if (filterTitle === "a") {
            const filteTitle = [...newNft].sort((a, b) => a.title.localeCompare(b.title))
            setData(filteTitle)
        }
        if (filterTitle === "b") {
            const filteTitle = [...newNft].sort((a, b) => b.title.localeCompare(a.title))
            setData(filteTitle)
        }
    }
    return (
        <>
            <UI title="Market" />
            <div className="container">
                <div className="row text-light">
                    <div className="col-lg-12 my-5">
                        <div className="nft-filter">
                            <div className="filter-lef">
                                <select onChange={handleTitle}>
                                    <option >All NFT</option>
                                    <option value="a">A-Z</option>
                                    <option value="b">Z-A</option>
                                </select>
                            </div>

                            <div className="filter-right">
                                <select onChange={handleSort}>
                                    <option>Short By</option>
                                    <option value="hight">Hight Rate</option>
                                    <option value="mid">Mid Rate</option>
                                    <option value="low">Low Rate</option>
                                </select>
                            </div>
                            <div className="filter-end">
                                <select onChange={handleLike}>
                                    <option >Short By Like</option>
                                    <option value="hight">Hight Like</option>
                                    <option value="low">Low Like</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {data && data.map(nft => (
                        <div key={nft._id} className="nft-item col-md-3" style={{ margin: '10px 10px' }}>
                            <div className="wrapp">
                                <Link to={`/detailnft/${nft._id}`}>
                                    <img className="img-nft my-4" src={nft.image} alt="err" />

                                </Link>
                                <div className="content-nft">
                                    <Link to={`/detailnft/${nft._id}`}> <h5>{nft.title}</h5></Link>
                                    <div className="total d-flex">
                                        <div className="price me-4 text-primary">Price: {nft.price} ETH</div>
                                        <div>Create: {nft.date}</div>
                                    </div>
                                    <div>Created By :</div>
                                    <div className="author-img my-2  d-flex">
                                        <img className='image-author me-3' src={nft.author.image} alt='err' />
                                        <div className="author">{nft.author.name}</div>
                                    </div>
                                    <div className="place my-4 d-flex">
                                        <button className="place-bid">
                                            <i className="fa-solid fa-bag-shopping me-2"></i>
                                            Place
                                        </button>
                                        <div className="history d-flex ms-3 mt-1 text-primary">
                                            <i className="fa-solid fa-clock-rotate-left m-2"></i>
                                            <span className='mt-1'>View History</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Market