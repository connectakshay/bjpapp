import React, { useState, Link } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SlickCarousel.css';
import Slider from "react-slick";
import BlogData from '../data/BlogData';
import { useNavigate } from 'react-router-dom';

const SlickCarousel = () => {

    const navigate = useNavigate();

    const [data, setData] = useState(BlogData);

    var settings = {
        focusOnSelect: true,
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        // autoplay: true,
        speed: 300,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    // autoplay: true,
                    speed: 300,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    // autoplay: true,
                    speed: 300,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    // autoplay: true,
                    speed: 300,
                    autoplaySpeed: 2000,
                    cssEase: "linear",
                    arrows: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }
        ]
    };

    const blogPage = (index) => {
        navigate(`/blog/${index}`);
    }

    return (
        <>
            <div className="slick-caraousel">
                <h1 className='slickHeading'>प्रभाग क्र. १९ क कामे</h1>
                <div className="slick-container">
                    <Slider {...settings}>
                        {
                            data.map((item, index) => {
                                return (
                                    <div className='card'>
                                        <div className="card-top">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="card-bottom">
                                            <span style={{ color: "#00A300", fontWeight: "bold" }}>{item.date}</span><strong>&nbsp;|&nbsp;</strong><span style={{ fontWeight: "bold", color: "gray" }}>{item.location}</span>
                                            <div className='descHeading'>
                                                <p><b>{item.head}</b></p>
                                            </div>
                                            <p className="postDesc">{item.caption}</p>
                                            <button onClick={() => blogPage(item.id)} className="readMore">पुढे पहा</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default SlickCarousel