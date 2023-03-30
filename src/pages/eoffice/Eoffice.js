import React, { useState } from 'react';
import './Eoffice.css';
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { useRef } from 'react';
import Loading from 'react-loading-components';

const Eoffice = () => {

  const imageRef = useRef();

  const [image, setImage] = useState();
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
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
      const res = await axios.post("https://server.archanatusharpatil.in/complaintlist", formData, config);
      // const res = await axios.post("http://localhost:5000/complaintlist", formData, config);
  
      if (res) {
        setLoading(false);
        alert(`Your Complaint Successfully Submited, Complaint No : ${res.data.insertId}`);
      }
      else {
        alert("There is Problem form not submited");
      }
      setData({ name: "", location: "", address: "", mobile: "", dob: "", complaints: "" });
      setCategory("");
      imageRef.current.value = "";
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
      const image = await resizeFile(file);
      setImage(image);
    } catch (err) {
      console.warn(err);
    }
  };


  return (
    <>
           {loading ? <div className='submit-box'><Loading type='oval' width={80} height={80} fill='#F97D09' /></div> :
          null
        }
      <div className="form-wrapper">
        <h1 className='text-center'>Complaint Box</h1>
        <form onSubmit={(e) => getData(e)}>
          <input id="name" onChange={(e) => collectdata(e)} name="name" value={data.name} type="text" placeholder="Name | नाव :" required /><br />
          <div className='loc-mob-container'>
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
          <label className='category' >Select Category :</label><br />
          <label className='radio-label'>रस्ते :</label>
          <input type="radio" value={category} name="category" onChange={(e) => setCategory("कचरा")} />
          <label className='radio-label'>कचरा :</label>
          <input type="radio" value={category} name="category" onChange={(e) => setCategory("ड्रेनेज")} />
          <label className='radio-label'>ड्रेनेज :</label>
          <input type="radio" value={category} name="category" onChange={(e) => setCategory("पाणी")} />
          <label className='radio-label'>पाणी :</label>
          <input type="radio" value={category} name="category" onChange={(e) => setCategory("पथदिवे")} />
          <label className='radio-label'>पथदिवे :</label>
          <input type="radio" value={category} name="category" onChange={(e) => setCategory("इमर्जन्सी")} />
          <label className='radio-label'>इमर्जन्सी :</label>
          <input type="radio" value={category} name="category" onChange={(e) => setCategory("इतर")} />
          <label className='radio-label'>इतर :</label>
          <input type="radio" value={category} name="category" onChange={(e) => setCategory(e)} />
          <textarea onChange={(e) => collectdata(e)} name="complaints" value={data.complaints} placeholder='Write a Complaint | तक्रार लिहा :' id="" cols="30" rows="3" required ></textarea>
          <input type="file" ref={imageRef} name="photo" accept=".png, .jpg, .jpeg" onChange={(e) => imageResize(e)} /><br />
          <input type="submit" />
          <p>आपल्या आजूबाजूच्या समस्यांच्या तक्रारी आमच्यापर्यंत पोहोचविण्यासाठी हा फॉर्म मध्ये माहिती भरा.</p>
        </form>
      </div>
    </>
  )
}

export default Eoffice