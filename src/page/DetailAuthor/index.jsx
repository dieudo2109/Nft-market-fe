import React from 'react'
import './DetailAuthor.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailAuthor } from '../../redux/api'
import Nftgird from "../../component/Auction/Nftgird"
import UI from '../UI'
import './DetailAuthor.css'
function DetailAuthor() {
    const dispatch = useDispatch()
    const { detailAuthor } = useSelector((state) => state.data)
    const { id } = useParams()
    useEffect(() => {
        dispatch(getDetailAuthor(id))
    }, [dispatch, id])
    console.log(detailAuthor)
    return (
        <>
            <UI title={detailAuthor.name} />
            <div className="container text-white">
                <div className="info-content my-5">
                    <div className="name-author">{detailAuthor && detailAuthor.name}</div>
                    <img src={detailAuthor.image} className='mx-5' alt='err' />
                    <div className="year-author">Year: {detailAuthor.year}</div>
                </div>
                <h3>NFT Create By {detailAuthor.name}:</h3>
                <Nftgird nfts={detailAuthor.nft} />
            </div>

        </>
    )
}

export default DetailAuthor