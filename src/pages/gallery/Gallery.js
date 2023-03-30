import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import './Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BlogData from '../../data/BlogData';

const Gallery = () => {

  const [data, setData] = useState(BlogData);
  const [currentimage, setCurrentImage] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagePerPage, setImagePerPage] = useState(6);


  // ---------------pagination---------------------

  const dataLength = data.length;

  console.warn(data);

  const pageArray = [];

  for (let i = 1; i <= Math.ceil(dataLength / 6); i++) {
    pageArray.push(i);
  }

  const lastPageIndex = currentPage * imagePerPage;
  const firstPageIndex = lastPageIndex - imagePerPage;
  const currentPageData = data.slice(firstPageIndex, lastPageIndex);

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

  //----------------------------media--------------------

  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true
        }
      }
    ]
  };



  return (
    <>
      <div className='photo-container'>
        <h1 className='photo-heading' style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>छायाचित्रे</h1>
        <div className='gallery'>
          {
            currentPageData?.map((item) => {
              const { img, head } = item;

              return <>
                <div className="image-container" onClick={() => setCurrentImage(item)}>
                    <img src={img} alt="" />
                  <div className='inner-text'>
                    <p>{head}</p>
                  </div>
                </div>
              </>
            })
          }
        </div>
      </div>

      <div className={currentimage ? "popup-image" : "popup"}>
        <div className={currentimage ? 'icon' : "icon-disable"} onClick={() => setCurrentImage(false)}>
          <FontAwesomeIcon icon={faTimes} size="4x" />
        </div>
        <img src={currentimage.img} alt="" />
        <p className='image-desc'>{currentimage.head}</p>
      </div>

      {/* -------------------------pagination---------------------------------- */}

      <div className="pagination">
        <div className='prev-box' onClick={() => prevPage()}><FontAwesomeIcon icon={faArrowLeft} size="lg" /></div>
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
        <div className='next-box' onClick={() => nextPage()}><FontAwesomeIcon icon={faArrowRight} size="lg" /></div>
      </div>

      {/* ---------------------------pagination-end------------------------------------- */}

      <div className='media-container'>
        <h1 className='media-heading' style={{ fontFamily: "Noto Sans Devanagari, sans-serif" }}>व्हिडिओ</h1>
        <div className='video-container'>
          <Slider {...settings}>

            <div className="video">
              <iframe src="https://www.youtube.com/embed/M0tGWUq9YhY" title="YouTube video" allowFullScreen></iframe>
            </div>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/D-rT4XFeJUI" title="YouTube video" allowFullScreen></iframe>
            </div>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/tFxz2hYDuuk" title="YouTube video" allowFullScreen></iframe>
            </div>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/QBn5zsz9bMo" title="YouTube video" allowFullScreen></iframe>
            </div>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/K-TK_kP4DS4" title="YouTube video" allowFullScreen></iframe>
            </div>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/uOkvKJhUPOI" title="YouTube video" allowFullScreen></iframe>
            </div>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/jfYjq6o6vX8" title="YouTube video" allowFullScreen></iframe>
            </div>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/3aXooNCrfqw" title="YouTube video" allowFullScreen></iframe>
            </div>
            <div className="video">
              <iframe src="https://www.youtube.com/embed/cRo6IKGv7qo" title="YouTube video" allowFullScreen></iframe>
            </div>

          </Slider>
        </div>
      </div>
    </>
  )
}

export default Gallery
