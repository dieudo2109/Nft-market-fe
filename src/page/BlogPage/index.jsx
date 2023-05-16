import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getBlogPage } from '../../redux/api';
import { Link } from 'react-router-dom';
import UI from '../UI'
function BlogPage() {
    const dispatch = useDispatch();
    const { blogPage } = useSelector((state) => state.data);
    useEffect(() => {
        dispatch(getBlogPage());
    }, [dispatch]);
    return (
        <div>
            <UI title="Blog-Page" />
            <div className="container">
                <div className="row mt-5">
                    {blogPage && blogPage.map(blog => (
                        <div key={blog._id} className="col-lg-4 mb-4  col-sm-12">
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
            </div>
        </div>
    )
}

export default BlogPage