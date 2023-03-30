import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { NavLink } from 'react-router-dom';
import './Home.css';
import slide3 from '../../assets/Images/banner archana patil.png';
import slide2 from '../../assets/Images/banner archana patil-2.png';
import slide1 from '../../assets/Images/banner archana patil-3.png';
import ad_image from '../../assets/Images/ad_ticker.jpg';
import Footer from '../footer/Footer';
import SlickCarousel from '../../components/SlickCarousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import profile from '../../assets/Images/archana_about_profile.jpg';
import { useEffect } from 'react';

const Home = () => {

  return (
    <>
      <section className="Carousel-container">
        <Carousel variant="light" >
          <Carousel.Item>
            <img
              className="d-block w-100 slides"
              src={slide1}
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slides"
              src={slide2}
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 slides"
              src={slide3}
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>


      <section className='container-flued about-ad-section'>

        <div className='about-ad-wrapper'>
          <div className='about'>
            <h1 className='text-center mb-4' style={{ fontWeight: "bold" }}><span style={{ color: "#F97D09" }}>अर्चना पाटील </span> <span style={{ color: "gray" }}>यांच्याविषयी..</span> </h1>
            <div className="about-wrapper">
              <div className="about-img">
                <img src={profile} alt="" />
              </div>
              <div className="about-text">
                <p>सौ. अर्चना तुषार पाटील या पुणे महानगरपालिकेच्या प्रभाग क्रमांक १९ च्या भारतीय जनता पक्षातर्फे निर्वाचित नगरसेविका आहेत. त्यांनी पुणे मनपाच्या स्थायी समितीवर सदस्य म्हणूनही काम केले आहे. भारतीय जनता पक्षाच्या महिला आघाडीच्या पुणे शहर अध्यक्ष म्हणून त्या सध्या कार्यरत आहेत. अर्चनाताई या पुणे विद्यापीठातून एमबीए फायनान्स उत्तीर्ण आहेत. जलसंपदा खात्यात लोकसेवक राहिलेल्या वडिलांचा आदर्श व पती तुषार तानाजीराव पाटील यांच्या समाजकार्याच्या साथीने त्या काशेवाडी, लोहियानगर, भवानी पेठ, हरकारनगर या परिसरात कार्यरत आहेत. २०१७ साली त्यांनी पहिल्यांदा भारतीय जनता पक्षाकडून निवडणुक लढवली व नगरसेवक म्हणून निवडून आल्या. समाजसेवेला संविधानिक अधिकार पदाची जोड मिळाल्याने त्यांनी नागरिकांची कामे अधिक जोमाने सुरु केली.
                </p>
                <Link to="/parichay" >पुढे पहा</Link>
              </div>
            </div>
          </div>
          <div className='ad-wrapper'>
            <div className='ad-box'>
              <NavLink to="/e-karyalay"><img src={ad_image} alt="" /></NavLink>
            </div>
          </div>
        </div>
      </section>


      <SlickCarousel />


      <section className='container-flued social-media'>
        <div className="social-media-container">
          {/* ---------------------------------------large-device------------------------------------- */}
          
          <div className='twitter-lg-container'>
            <div className='frame-top'>
              <div className='social-media-heading'>Follow Us</div>
              <div className='heading'>
                <a href="https://twitter.com/ArchanaTpatil?t=JGu5D2do5ouDuMVs1TV-Og&s=09"><div className="twitter-icon icon"><FontAwesomeIcon icon={faTwitter} color="#ffffff" size="4x" /></div></a>
                <h1>Twitter</h1>
              </div>
            </div>
            <div className="large-frame">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="ArchanaTpatil"
                options={{ height: 500 }}
              />
            </div>
          </div>
          <div className='facebook-lg-container'>
            <div className='heading'>
              <a href="https://www.facebook.com/CorporatorArchanaTusharPatil"><div className="facebook-icon icon"><FontAwesomeIcon icon={faFacebook} color="#3b5998" size="5x" /></div></a>
              <h1>Facebook</h1>
            </div>
            <div className='large-frame'>
              <iframe className="frame" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCorporatorArchanaTusharPatil%2F%3Fviewas%3D100000686899395%26show_switched_toast%3D0%26show_invite_to_follow%3D0%26show_switched_tooltip%3D0%26show_podcast_settings%3D0%26show_community_transition%3D0%26show_community_review_changes%3D0%26show_community_rollback%3D0%26show_follower_visibility_disclosure%3D0&tabs=timeline&width=440&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="500px" ></iframe>
            </div>
          </div>

          {/* ---------------------------------------medium-device------------------------------------ */}
          
          <div className='twitter-md-container'>
            <div className='social-media-heading'>Follow Us</div>
            <div className='md-heading'>
              <a href="https://twitter.com/ArchanaTpatil?t=JGu5D2do5ouDuMVs1TV-Og&s=09"><div className="twitter-icon icon"><FontAwesomeIcon icon={faTwitter} color="#ffffff" size="2x" /></div></a>
              <h1>Twitter</h1>
            </div>
            <div className="medium-frame">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="ArchanaTpatil"
                options={{ height: 500, width: 270 }}
              />
            </div>
          </div>
          <div className='facebook-md-container'>
            <div className='md-heading'>
              <a href="https://www.facebook.com/CorporatorArchanaTusharPatil"><div className="facebook-icon icon"><FontAwesomeIcon icon={faFacebook} color="#3b5998" size="3x" /></div></a>
              <h1>Facebook</h1>
            </div>
            <div className='medium-frame'>
              <iframe className='frame' src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCorporatorArchanaTusharPatil%2F%3Fviewas%3D100000686899395%26show_switched_toast%3D0%26show_invite_to_follow%3D0%26show_switched_tooltip%3D0%26show_podcast_settings%3D0%26show_community_transition%3D0%26show_community_review_changes%3D0%26show_community_rollback%3D0%26show_follower_visibility_disclosure%3D0&tabs=timeline&width=270&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100px" height="500px" ></iframe>
            </div>
          </div>

          {/* ---------------------------------------small-device------------------------------------- */}
          
          <div className='twitter-sm-container'>
            <div className='social-media-heading'>Follow Us</div>
            <div className='sm-heading'>
              <a href="https://twitter.com/ArchanaTpatil?t=JGu5D2do5ouDuMVs1TV-Og&s=09"><div className="twitter-icon icon"><FontAwesomeIcon icon={faTwitter} color="#ffffff" size="2x" /></div></a>
              <h1>Twitter</h1>
            </div>
            <div className="mobile-frame">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="ArchanaTpatil"
                options={{ height: 500, width: 240 }}
              />
            </div>
          </div>
          <div className='facebook-sm-container'>
            <div className='sm-heading'>
              <a href="https://www.facebook.com/CorporatorArchanaTusharPatil"><div className="facebook-icon icon"><FontAwesomeIcon icon={faFacebook} color="#3b5998" size="3x" /></div></a>
              <h1>Facebook</h1>
            </div>
            <div className='mobile-frame'>
              <iframe className="small-frame" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCorporatorArchanaTusharPatil%2F%3Fviewas%3D100000686899395%26show_switched_toast%3D0%26show_invite_to_follow%3D0%26show_switched_tooltip%3D0%26show_podcast_settings%3D0%26show_community_transition%3D0%26show_community_review_changes%3D0%26show_community_rollback%3D0%26show_follower_visibility_disclosure%3D0&tabs=timeline&width=220&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="500px" ></iframe>
            </div>
          </div>
        </div>
        
      </section>
    </>
  )
}

export default Home

