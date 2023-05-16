import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBlog } from '../../redux/api';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import './Blog.css'
function Blog() {
    const dispatch = useDispatch();
    const { blogs } = useSelector((state) => state.data);
    useEffect(() => {
        dispatch(getBlog());
    }, [dispatch]);

    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-in-out',
            offset: 200,
            delay: 200,
            once: true
        });
    }, [])
    return (
        <>
            <div className="container">
                <div className="row fadeInLeft">
                    <div className="col-sm-12 mt-5">
                        <div className="auction-title">
                            <h4>BLOG POST</h4>
                            <h1>Latest Articles</h1>
                        </div>
                    </div>
                </div>

                <div className="row mt-5 " >
                    {blogs && blogs.map(blog => (
                        <div key={blog._id} className="col-lg-4 mb-4  col-sm-12" data-aos="fade-right">
                            <Link to={`/blog/${blog._id}`}>
                                <div className="blog-main">
                                    <img src={blog.image} alt='err' />
                                    <div className="blog-view my-2">
                                        <div className="blog-content me-3">
                                            <i className="fas fa-user me-1"></i>
                                            {blog.author.name && <span>{blog.author.name}</span>}
                                        </div>
                                        <div className="blog-content">
                                            <i className="fa-regular fa-eye me-1"></i><span>{blog.numberView}</span>
                                        </div>
                                    </div>
                                    <div className="blog-title">{blog.title}</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/blogpage" className='view-more my-5'>Load More<i className="fa-solid fa-rotate ms-2"></i></Link>
            </div>
        </>
    )
}

export default Blog