import React from 'react';
import './Blog.css';
import BlogData from '../../data/BlogData';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

const Blog = () => {

  const [data, setData] = useState(BlogData);
  const [blog, setBlog] = useState([]);
  const param = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const blogData = data.filter((item) => {
      return item.id == param.id;
    });
    setBlog(() => {
      return (blogData);
    })
  }


  return (
    <>
      <div className='blog-page'>
        <div className="blog-container">
          {blog.map((item) => {
            return <>
              <h2>{item.head}</h2>
              <div className='blog-image'><img src={item.img} alt="blog image" /></div>
              <span className='date'>{item.date}</span><span className='location'> | {item.location}</span>
              <p className='blog-desc'>{item.caption}</p>
            </>
          })
          }
        </div>
      </div>
    </>
  )
}

export default Blog;