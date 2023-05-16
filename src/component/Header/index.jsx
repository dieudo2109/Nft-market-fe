import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getNftnew } from '../../redux/api';
import './Header.css'
const Header = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const [search, setSearch] = useState([])
    const [check, setCheck] = useState('')
    const dispatch = useDispatch();
    const { newNft } = useSelector((state) => state.data);
    useEffect(() => {
        dispatch(getNftnew());
    }, [dispatch]);
    useEffect(() => {
        if (check === '') {
            setSearch([])
        }
    }, [check])
    const handleSearch = (event) => {
        const query = event.target.value;
        setCheck(query)
        const results = newNft.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        setSearch(results);
    };
    console.log(check)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("border_text");
            } else {
                headerRef.current.classList.remove("border_text");
            }
        });
        return () => {
            window.removeEventListener("scroll", null)
        };
    }, [])
    const toggleMenu = () => menuRef.current.classList.toggle("active_menu")
    return (
        <>
            <div className="containerr" ref={headerRef}>
                <div className="wrapper d-flex justify-content-around align-items-center ">
                    <Link to="/" >
                        <div className="logo">
                            <h2 className="gap-3 align-items-center">
                                <span><i className="fa-solid fa-rocket"></i></span>
                                NFTs</h2>
                        </div>
                    </Link>
                    <div className="header-menu" ref={menuRef} onClick={toggleMenu}>
                        <ul className='nav-list'>
                            <li className='menu-item'>
                                <NavLink to="/" >Home</NavLink>
                            </li>

                            <li className='menu-item'>
                                <NavLink to="/market">Market</NavLink>
                            </li>

                            <li className='menu-item'>
                                <NavLink to="/create">Create</NavLink>
                            </li>
                            <li className='menu-item'>
                                <NavLink to="/blogpage">Blog</NavLink>
                            </li>
                            <li className='menu-item'>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="search d-flex align-items-center" value={check} onChange={handleSearch}>
                        <input type='text' name='search' placeholder='Search Heare' />
                        <ul>
                            {search.map((item) => (
                                <Link to={`detailnft/${item._id}`}>
                                    <li key={item._id}>
                                        {item.title}<span>{item.price} ETH</span>
                                    </li></Link>
                            ))}
                        </ul>
                        <i className="fa fa-search text-light"></i>
                    </div>
                    <span className="mobile-menu">
                        <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
                    </span>
                </div>
            </div>
        </>
    )
}
export default Header
