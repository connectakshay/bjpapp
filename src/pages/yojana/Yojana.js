import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { Scrollbar } from 'react-scrollbars-custom';
import './Yojana.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import YojanaData from '../../data/YojanaData';
import Loading from 'react-loading-components';
import Application_form_for_Income_Certificate from '../../assets/pdf/Application_form_for_Income_Certificate.pdf';

const Yojana = () => {

  const [plansData, setPlansData] = useState(YojanaData);
  const [mobErr, setmobErr] = useState(false);
  const [emailErr, setemailErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    pattern: ""
  })

  const datePickerId_max = new Date().toLocaleDateString('en-ca')

  const getData = (event) => {
    const { name, value } = event.target;

    setData((prev) => {
      return ({ ...prev, [name]: value });
    })

  }

  const sendData = async () => {

    const { name, email, mobile, date, pattern } = data;

    if (!(validator.isEmail(email))) {
      setemailErr(!emailErr);
      return false;
    }
    if (mobile.length != 10) {
      setmobErr(!mobErr);
      return false;
    }
    else {
      setemailErr(false);
      setmobErr(false);
      setLoading(!loading);
      const res = await fetch("https://server.archanatusharpatil.in/refLetter", {
        method: "POST",
        body: JSON.stringify({ name, email, mobile, date, pattern }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await res.json();
      if (result) {
        setLoading(false);
        alert(`Your Form Successfully Submited, Form No : ${result.insertId}`);
      }
      else {
        alert(" Your form Not Submitted");
      }
      setData({ name: "", email: "", mobile: "", date: "", pattern: "" });
    }
  }

  return (
    <>
      <section className='plan-container'>
        <div className="gov-plan">
          <h1>महत्वाच्या सरकारी योजना</h1>
          <hr />

          <Scrollbar className='scrollbar'>
            {
              plansData?.map((item) => {
                return (
                  <div className="plan-card">
                    <h3>{item.subject}</h3>
                    <p>{item.information}</p>
                    <div className='readMore_box'>
                      <button className='readMore'><a href={item.web_link}>पुढे पहा</a></button>
                    </div>
                  </div>
                )
              })
            }
          </Scrollbar>

        </div>
        <div className="ref-letter">
          <h1>शिफारस पत्र अर्ज</h1>
          <p>शासकीय योजनांसाठी नगरसेवक, आमदार, खासदार महोदयांची शिफारस पत्रे आवश्यक असल्यास, याची विनंती इथे पाठवू शकता. </p>
          <hr />
          <input type="text" placeholder='Name | नाव :' name="name" value={data.name} onChange={(e) => getData(e)} required /><br />
          <input type="email" placeholder='E-Mail | इ मेल :' name="email" value={data.email} onChange={(e) => getData(e)} required /><br />
          {emailErr ? <p className='errorMsg'>Please Enter Valid Email Id </p> : ""}
          <input type="text" placeholder='Mobile | संपर्क :' name="mobile" value={data.mobile} onChange={(e) => getData(e)} pattern="[0-9]+" required /><br />
          {mobErr ? <p className='errorMsg'>Mobile no. should be 10 digit</p> : ""}
          <lable>Date of Birth</lable><input type="date" name="date" max={datePickerId_max} value={data.date} onChange={(e) => getData(e)} required /><br />
          <textarea name="pattern" id="" cols="20" rows="10" placeholder='Write a pattern | शिफारस पत्राचा नमुना :' value={data.pattern} onChange={(e) => getData(e)} required></textarea>
          <button className='submit' onClick={() => sendData()}>Submit</button>
          <hr />
          <div className='letters-container'>
            <h2>महत्वाचे अर्ज येथे डाउनलोड करा</h2>
            <div className='forms-container'>
              <table>
                <tr>
                  <th>अर्जाचे नाव</th>
                  <th>Download</th>
                </tr>
                <tr>
                  <td>उत्पन्नाचा दाखला अर्ज</td>
                  <td><a href={Application_form_for_Income_Certificate} download="Income Certificate.pdf">
                    <FontAwesomeIcon icon={faFileDownload} />
                  </a></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        {loading ? <div className='submit-box'><Loading type='oval' width={80} height={80} fill='#F97D09' /></div> :
          null
        }
      </section>

    </>
  )
}

export default Yojana