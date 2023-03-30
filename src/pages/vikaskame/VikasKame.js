import React, { useState } from 'react'
import './VikasKame.css';
import { useNavigate } from 'react-router-dom';
import blog_data from '../../data/BlogData';
import aamchi_kame from '../../assets/Images/aamchi_kame.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const VikasKame = () => {

  const navigate = useNavigate();

  const [data, setData] = useState(blog_data);
  const [filterData, setFilterData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage, setImagePerPage] = useState(9);

  const blogPage = (index) => {
    navigate(`/blog/${index}`);
  }

  const search = (key) => {
    setFilterData(data.filter((item) => {
      return item.head.includes(key.trim()) || item.caption.includes(key.trim()) || item.location.includes(key.trim()) || item.date.includes(key.trim());
    }))
  }

  // ----------------------pagination---------------------------------

  const dataLength = filterData.length;

  const pageArray = [];

  for (let i = 1; i <= Math.ceil(dataLength / 9); i++) {
    pageArray.push(i);
  }

  const lastPageIndex = currentPage * imagePerPage;
  const firstPageIndex = lastPageIndex - imagePerPage;
  const currentPageData = filterData.slice(firstPageIndex, lastPageIndex);

  const prevPage = () => {
    if (currentPage == "1") {
      return false
    }
    else {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (pageArray.length === currentPage) {
      return false;
    }
    else {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <section className='container-fliued blog_page'>
      <div className='banner'>
        <img src={aamchi_kame} alt="" />
      </div>
      <div className='search-box'>
        <input type="text" placeholder='कामे शोधा...' onChange={(e) => search(e.target.value)} />
      </div>
      <div className='blog_container'>

        {
          currentPageData.length != 0 ? currentPageData.map((item) => {
            return (
              <div className='blog-card'>
                <div className="image">
                  <img src={item.img} alt="" />
                </div>
                <div className='card-bottom'>
                  <p className='blog_date'><span style={{ color: "green" }}>Date : {item.date}</span> | {item.location}</p>
                  <div className='item_head'><p>{item.head}</p></div>
                  <p>{item.caption}</p>
                  <button onClick={() => blogPage(item.id)} className="readMore">पुढे पहा</button>
                </div>
              </div>
            )
          })
            :
            <h1>Sorry, no data found</h1>
        }

      </div>
      <div className="pagination-container">
        {
          pageArray.length != "0" ? <div className='prev-box' onClick={() => prevPage()}><FontAwesomeIcon icon={faArrowLeft} size="lg" /></div>
          : null
        }
        
        <div className='page-btn'>
          {
            pageArray.map((item) => {
              if (item <= 4) {
                return <button className={currentPage == item ? "activePage" : "pageButton"} onClick={() => setCurrentPage(item)}>{item}</button>
              }
            })
          }
          {
            currentPage > 4 ? <>...<button className='activePage'>{currentPage}</button></>
              : null
          }

        </div>
        {
            pageArray.length != "0" ? <div className='next-box' onClick={() => nextPage()}><FontAwesomeIcon icon={faArrowRight} size="lg" /></div>
            : null
        }
      </div>
    </section>
  )
}

export default VikasKame