import React from 'react'
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import electricity from '../../assets/Images/electricity.png';
import fire from '../../assets/Images/fire_department.png';
import police from '../../assets/Images/police.png';
import hospital from '../../assets/Images/hospital.png';
import blood from '../../assets/Images/blood_bank.png';


const Contact = () => {
  return (
    <section className='container-flued contact-container'>
      <h1 className="text-center mt-5 mb-0" style={{ fontFamily: "Noto Sans Devanagari sans-serif", fontWeight: "bold" }}>संपर्क</h1>
      <div className="contact-section py-6 mb-3">
        <div className="box">
          <div className='icon'>
            <FontAwesomeIcon icon={faLocationDot} color="#ffffff" size="3x" />
          </div>
          <h1>पत्ता</h1>
          <div>
            <p className='address'>अर्चनाताई तुषार पाटील जनसंपर्क कार्यालय,<br />भवानी पेठ क्षेत्रीय कार्यालयाजवळ, <br />भवानी पेठ काशेवाडी, पुणे- ४११०४२</p>
          </div>
        </div>
        <div className="box">
          <div className='icon'>
            <FontAwesomeIcon icon={faEnvelope} color="#ffffff" size="3x" />
          </div>
          <h1>इ-मेल</h1>
          <div>

          </div>
        </div>
        <div className="box">
          <div className='icon'>
            <FontAwesomeIcon icon={faPhone} color="#ffffff" size="3x" />
          </div>
          <h1>दूरध्वनी</h1>
        </div>
      </div>

      <hr className='line'/>

      <h1 className="text-center mt-5 mb-0" style={{ fontFamily: "Noto Sans Devanagari sans-serif", fontWeight: "bold" }}>महत्वाचे संपर्क</h1>

      <div className='contact-section'>
        <div className="box1">
          <div className='box-top'>
            <div className='img-icon'>
              <img src={police} alt="" />
            </div>
            <h1>पोलिस</h1>
          </div>
          <div className='box-bottom'>
            <table>
              <tbody>
                <tr>
                  <td><p><b>मध्यवर्ती नियंत्रण कक्ष :</b></p></td>
                  <td><p><a href="tel:१००">१००</a><span> & </span>
                    <a href="tel:११२">११२</a></p></td>
                </tr>
                <tr>
                  <td><p><b>जेष्ठ नागरिक :</b></p></td>
                  <td><p><a href="tel:१०९८">१०९८</a></p></td>
                </tr>
                <tr>
                  <td><p><b>महिला हेल्पलाइन :</b></p></td>
                  <td><p><a href="tel:१०९१">१०९१</a> </p></td>
                </tr>
                <tr>
                  <td><p><b>व्हाट्सएप :</b></p></td>
                  <td><p><a href="tel: ८९७५२८३१००"> ८९७५२८३१००</a></p></td>
                </tr>
                <tr>
                  <td><p><b>खडक पोलिस स्टेशन :</b></p></td>
                  <td><p><a href="tel:०२०-२४४७६४२२">०२०-२४४७६४२२</a> </p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="box1">
          <div className="box-top">
            <div className='img-icon'>
              <img src={fire} alt="" />
            </div>
            <h1>अग्निशमन दल</h1>
          </div>
          <div className='box-bottom'>
            <table>
              <tbody>
                <tr>
                  <td><p><b>मध्यवर्ती क्रमांक :</b></p></td>
                  <td><p><a href="tel:१०१">१०१</a></p></td>
                </tr>
                <tr>
                  <td><p><b>मुख्य कार्यालय :</b></p></td>
                  <td><p><a href="tel:०२०-२६४५१७०७">०२०-२६४५१७०७</a></p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="box1">
          <div className="box-top">
            <div className='img-icon'>
              <img src={electricity} alt="" />
            </div>
            <h1>महावितरण</h1>
          </div>
          <div className='box-bottom'>
            <table>
              <tbody>
                <tr>
                  <td><p><b>मध्यवर्ती तक्रार क्रमांक :</b></p></td>
                  <td><p><a href="tel:१८००-२३३-३४३५">१८००-२३३-३४३५</a></p></td>
                </tr>
                <tr>
                  <td><p><b>स्वारगेट विभाग :</b></p></td>
                  <td><p><a href="tel:१८००-२३३-३४३५">१८००-२३३-३४३५</a> </p></td>
                </tr>
                <tr>
                  <td><p><b>स्वारगेट विभाग :</b></p></td>
                  <td><p><a href="tel:१८००-२३३-३४३५">१८००-२३३-३४३५</a> </p></td>
                </tr>
                <tr>
                  <td><p><b>कशेवाडी, भवानीपेठ, हरकनगर :</b></p></td>
                  <td><p><a href="tel: 7875767330">७८७५७६७३३०</a></p></td>
                </tr>
                <tr>
                  <td><p><b>एकबोटे कॉ., लोहियानगर, रायकरमळा :</b></p></td>
                  <td><p><a href="tel: 9049040162">९०४९०४०१६२</a></p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="box1">
          <div className="box-top">
            <div className='img-icon'>
              <img src={hospital} alt="" />
            </div>
            <h1>रुग्णालये व दवाखाना</h1>
            <h3>सरकारी (माफक दरात / मोफत)</h3>
          </div>
          <div className='box-bottom'>
            <table>
              <tbody>
                <tr>
                  <td><p><b>ससून रुग्णालय : </b></p></td>
                  <td><p><a href="tel:०२०-२६१२८०००">०२०-२६१२८०००</a> </p></td>
                </tr>
                <tr>
                  <td><p><b>कमला नेहरू रुग्णालय :</b></p></td>
                  <td><p><a href="tel:०२०- २५५०८५००">०२०- २५५०८५००</a> </p></td>
                </tr>
                <tr>
                  <td><p><b>चंदूमामा सोनावणे रुग्णालय व प्रसूतिगृह :</b></p></td>
                  <td><p><a href="tel:०२०-२५५०६१००">०२०-२५५०६१००</a><span> & </span>
                    <a href="tel:०२०-२५५०६१०५">०२०-२५५०६१०५</a></p></td>
                </tr>
                <tr>
                  <td><p><b>पेस्टनजी बम्मनजी दवाखाना :</b></p></td>
                  <td><p><a href="tel:०२०-२६४३७०९०">०२०-२६४३७०९०</a> </p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="box1">
          <div className="box-top">
            <div className='img-icon'>
              <img src={hospital} alt="" />
            </div>
            <h1>रुग्णालये व दवाखाना</h1>
            <h3>खाजगी</h3>
          </div>
          <div className='box-bottom'>
            <table>
              <tbody>
                <tr>
                  <td><p><b>के.इ.एम. हॉस्पिटल, रास्ता पेठ :</b></p></td>
                  <td><p><a href="tel:०२०-६६०३७३००">०२०-६६०३७३००</a><span> & </span>
                    <a href="tel:०२०-२६२१७३०५">०२०-२६२१७३०५</a> </p></td>
                </tr>
                <tr>
                  <td><p><b>अलायन्स मुनोत हॉस्पिटल, सेव्हन लव्हज चौक :</b></p></td>
                  <td><p><a href="tel:000000000">0000000000</a></p></td>
                </tr>
                <tr>
                  <td><p><b>के.इ.एम. हॉस्पिटल, रास्ता पेठ :</b></p></td>
                  <td><p><a href="tel:०२०-६६०३७३००">०२०-६६०३७३००</a> </p></td>
                </tr>
                <tr>
                  <td><p><b>के.इ.एम. हॉस्पिटल, रास्ता पेठ :</b></p></td>
                  <td><p><a href="tel:०२०-६६०३७३००">०२०-६६०३७३००</a> </p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="box1">
          <div className="box-top">
            <div className='img-icon'>
              <img src={blood} height="60px" alt="" />
            </div>
            <h1>ब्लड बँक</h1>
          </div>
          <div className='box-bottom'>
            <table>
              <tbody>
                <tr>
                  <td><p><b>मध्यवर्ती रक्तपेढी हेल्पलाइन :</b></p></td>
                  <td><p><a href="tel:१९१०">१९१०</a> </p></td>
                </tr>
                <tr>
                  <td><p><b>पुणे ब्लड बँक :</b></p></td>
                  <td><p><a href="tel:०२०-२६९९२८२८">०२०-२६९९२८२८</a> </p></td>
                </tr>
                <tr>
                  <td><p><b>के इ एम रुग्णालय &nbsp; रक्तपेढी :</b></p></td>
                  <td><p><a href="tel:०२०-५६०३७३२४">०२०-५६०३७३२४</a> </p></td>
                </tr>
                <tr>
                  <td><p><b>जहांगीर रुग्णालय &nbsp; रक्तपेढी :</b></p></td>
                  <td><p><a href="tel:०२०-६६८११७२३">०२०-६६८११७२३ </a><span> & </span>
                    <a href="०२०-६६८११७२२">०२०-६६८११७२२</a></p></td>
                </tr>
                <tr>
                  <td><p><b>जनकल्याण रक्तपेढी :</b></p></td>
                  <td><p><a href="tel:०२०-२४४४९५२७">०२०-२४४४९५२७</a> </p></td>
                </tr>
                <tr>
                  <td><p><b>लोकमान्य ब्लड बँक :</b></p></td>
                  <td><p><a href="tel:०२०-२७४५९२२">०२०-२७४५९२२</a> </p></td>
                </tr>
                <tr>
                  <td><p><b>सह्याद्री रुग्णालय रक्तपेढी :</b></p></td>
                  <td><p><a href="tel:०२०-५४५४००१">०२०-५४५४००१</a> </p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="box1">
          <div className="box-top">
            <div className='img-icon'>
              {/* <img src={mnp} alt="" /> */}
              <FontAwesomeIcon icon={faPhone} color="black" size="4x" style={{ marginTop: "7px" }} />
            </div>
            <h1>पुणे मनपा महत्वाचे संपर्क क्रमांक</h1>
          </div>
          <div className='box-bottom'>
            <table>
              <tbody>
                <tr>
                  <td><p><b>भवानी पेठ क्षेत्रीय कार्यालय :</b></p></td>
                  <td><p><a href="tel:०२०-२६४३७०४०">०२०-२६४३७०४०</a>
                    <span> & </span>
                    <a href="tel:०२०-२६४३७०४१">०२०-२६४३७०४१</a></p>
                  </td>
                </tr>
                <tr>
                  <td><p><b>रस्ता दुरुस्ती :</b></p></td>
                  <td><p><a href="tel: 0000000000"> 0000000000</a></p></td>
                </tr>
                <tr>
                  <td><p><b>ड्रेनेज :</b></p></td>
                  <td><p><a href="tel:0000000000">0000000000</a></p></td>
                </tr>
                <tr>
                  <td><p><b>पाणी :</b></p></td>
                  <td><p><a href="tel:0000000000">0000000000</a></p></td>
                </tr>
                <tr>
                  <td><p><b>कचरा समस्या :</b></p></td>
                  <td><p><a href="tel:0000000000">0000000000</a></p></td>
                </tr>
                <tr>
                  <td><p><b>विद्युत :</b></p></td>
                  <td><p><a href="tel:0000000000">0000000000</a></p></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section >
  )
}

export default Contact