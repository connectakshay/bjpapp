import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import bjplogo from '../../assets/Images/bjp_logo.png';
import profile from '../../assets/Images/profile.png';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import nameImage from '../../assets/Images/ArchanaCalligraphy.png';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useRef } from 'react';
import Loading from 'react-loading-components';


const Navbar = () => {

  const imageRef = useRef();
  const categoryRef = useRef();

  const [isMobile, setIsMobile] = useState(false);
  const [isToggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();
  const [category, setCategory] = useState("");
  const [data, setData] = useState({
    name: "",
    location: "",
    address: "",
    mobile: "",
    dob: "",
    complaints: ""
  })

  const datePickerId_max = new Date().toLocaleDateString('en-ca')

  const collectdata = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData((prev) => {
      return ({ ...prev, [name]: value });
    })
  }

  const getData = async (e) => {


    const { name, location, address, mobile, dob, complaints } = data;

    // -------------------------------sms-------------------------------------------






    // ------------------------------sms---------------------------------------------

    let formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("address", address);
    formData.append("mobile", mobile);
    formData.append("dob", dob);
    formData.append("category", category);
    formData.append("complaints", complaints);
    formData.append("photo", image);


    let config = {
      headers: "Content-Type': 'multipart/form-data"
    }

    e.preventDefault();

    if (mobile.length != 10) {
      alert(" Please Enter Valid Mobile no. ")
      return false;
    }
    else {
      setLoading(!loading)
      // const res = await axios.post("https://server.archanatusharpatil.in/complaintlist", formData, config);
      const res = await axios.post("http://localhost:5000/complaintlist", formData, config);

      if (res) {
        setLoading(false);
        alert(`Your Complaint Successfully Submited, Complaint No : ${res.data.insertId}`);
      }

      setData({ name: "", location: "", address: "", mobile: "", dob: "", category: "", complaints: "" });
      imageRef.current.value = "";
      categoryRef.current.value = "";
      setImage(null);
    }

  }

  // ---------------------image-resize----------------------------

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1000,
        1000,
        "JPEG",
        90,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });

  const imageResize = async (event) => {
    try {
      const file = event.target.files[0];
      const img = await resizeFile(file);
      setImage(img);
    } catch (err) {
      console.warn(err);
    }
  };


  return (
    <>
      <div className='ambulance_box'>
        <a href="tel:8766964015">
          <p>Ambulance <b>8766964015</b></p>
        </a>
      </div>
      <div className='ambulance_footer'>
        <a href="tel:8766964015">
          <p>Ambulance - <b>8766964015</b></p>
        </a>
      </div>
      
      <button className='toggle' onClick={() => setToggle(!isToggle)} >ई-कार्यालय</button>

      <section className={isToggle ? "toggle-active" : "toggle-deactive"}>
        <div className="form-container">
          <div className='toggle-off' onClick={() => setToggle(false)}>
            <FontAwesomeIcon icon={faCircleXmark} size="3x" color="#ffffff" />
          </div>
          <h1 className='text-center mb-4' style={{ color: "#ffffff" }}>Complaint Box</h1>
          <form onSubmit={(e) => getData(e)}>
            <input id="name" onChange={(e) => collectdata(e)} name="name" value={data.name} type="text" placeholder="Name | नाव :" required /><br />
            <div className='mob-loc-container'>
              <input id="loc" onChange={(e) => collectdata(e)} name="location" value={data.location} type="text" placeholder="Location | स्थळ :" required />
              <input id="mob" onChange={(e) => collectdata(e)} name="mobile" type="text" value={data.mobile} placeholder="Mobile | संपर्क :" pattern="[0-9]+" required />
            </div>
            <div className='add-dob-container'>
              <input id="add" onChange={(e) => collectdata(e)} name="address" value={data.address} type="text" placeholder="Address | पत्ता :" required />
              <div className='dob-container'>
                <label>Date of Birth : </label>
                <input onChange={(e) => collectdata(e)} name="dob" type="date" max={datePickerId_max} value={data.dob} required />
              </div>
            </div>
            <label className='category'>Select Category :</label><br />
            <label className='radio-label'>रस्ते :</label>
            <input ref={categoryRef} type="radio" name="category" onChange={(e) => setCategory("रस्ते")} />
            <label className='radio-label'>कचरा :</label>
            <input ref={categoryRef} type="radio" name="category" onChange={(e) => setCategory("कचरा")} />
            <label className='radio-label'>ड्रेनेज :</label>
            <input ref={categoryRef} type="radio" name="category" onChange={(e) => setCategory("ड्रेनेज")} />
            <label className='radio-label'>पाणी :</label>
            <input ref={categoryRef} type="radio" name="category" onChange={(e) => setCategory("पाणी")} />
            <label className='radio-label'>पथदिवे :</label>
            <input ref={categoryRef} type="radio" name="category" onChange={(e) => setCategory("पथदिवे")} />
            <label className='radio-label'>इमर्जन्सी :</label>
            <input ref={categoryRef} type="radio" name="category" onChange={(e) => setCategory("इमर्जन्सी")} />
            <label className='radio-label'>इतर :</label>
            <input ref={categoryRef} type="radio" name="category" onChange={(e) => setCategory("इतर")} />
            <textarea onChange={(e) => collectdata(e)} name="complaints" value={data.complaints} placeholder='Write a Complaint | तक्रार लिहा :' id="" cols="30" rows="3" required ></textarea>
            <input type="file" ref={imageRef} name="photo" accept=".png, .jpg, .jpeg" onChange={(e) => imageResize(e)} /><br />
            <input type="submit" />
            <p>आपल्या आजूबाजूच्या समस्यांच्या तक्रारी आमच्यापर्यंत पोहोचविण्यासाठी हा फॉर्म मध्ये माहिती भरा.</p>
          </form>
        </div>
        {loading ? <div className='submit-box'><Loading type='oval' width={80} height={80} fill='#F97D09' /></div> :
          null
        }
      </section>
      <div className='sideToggle'>
        <div className='side-toggle-icon'>
          <a href="https://www.facebook.com/CorporatorArchanaTusharPatil"><div className="facebook-icon icon"><FontAwesomeIcon icon={faFacebook} color="#3b5998" size="5x" /></div></a>
          <a href="https://instagram.com/archana_tushar_patil?igshid=YmMyMTA2M2Y="><div className="instagram-icon icon"><FontAwesomeIcon icon={faInstagram} color="#ffffff" size="4x" /></div></a>
          <a href="https://twitter.com/ArchanaTpatil?t=JGu5D2do5ouDuMVs1TV-Og&s=09"><div className="twitter-icon icon"><FontAwesomeIcon icon={faTwitter} color="#ffffff" size="4x" /></div></a>
        </div>
        <div className='right-arrow'>
          <FontAwesomeIcon icon={faAngleRight} size="2x" />
        </div>
      </div>
      <div className="container-flued topbar">
        <div className="header">
          <NavLink to="/">
            <div className='left-logo'>
              <img src={profile} alt="" />
            </div>
          </NavLink>
          <NavLink to="/">
            <div className='name-desc'>
              <img src={nameImage} alt="" />
            </div>
          </NavLink>
          <div className='right-logo'>
            <img src={bjplogo} alt="" />
          </div>
        </div>
      </div>
      <div className='nav-container'>
        <div className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FontAwesomeIcon icon={faTimes} size="3x" /> : <FontAwesomeIcon icon={faBars} size="3x" />}
        </div>
        <ul style={{ fontFamily: "Roboto, sans-serif" }} className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
          <li><NavLink to="/" end><h1>मुखपृष्ठ</h1></NavLink></li>
          <li><NavLink to="/parichay"><h1>परिचय</h1></NavLink></li>
          <li><NavLink to="/vikaskame"><h1>आमची कामे</h1></NavLink></li>
          <li><NavLink to="/sarakariyojana" ><h1>सरकारी योजना</h1></NavLink></li>
          <li><NavLink to="/gallery"><h1>गॅलरी</h1></NavLink></li>
          <li><NavLink to="/contact"><h1>संपर्क</h1></NavLink></li>
          <li><NavLink to="/e-karyalay"><h1>ई-कार्यालय</h1></NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar