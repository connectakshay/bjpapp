import React from 'react'
import './Footer.css';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <>
      <div className="container-flued footer">
        <div className='info-section'>
          <div className='address-section'>
            <table>
              <tbody>
                <tr>
                  <td>पत्ता&nbsp;:</td>
                  <td>अर्चनाताई तुषार पाटील जनसंपर्क कार्यालय, भवानी पेठ क्षेत्रीय कार्यालयाजवळ, काशेवाडी, पुणे- ४११०४२</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="social-section">
          <div className="icon facebook">
            <a href="https://www.facebook.com/CorporatorArchanaTusharPatil"><FontAwesomeIcon icon={faFacebook} color="#ffffff" size="3x" /></a>
          </div>
          <div className="icon instagram">
            <a href="https://instagram.com/archana_tushar_patil?igshid=YmMyMTA2M2Y="><FontAwesomeIcon icon={faInstagram} color="#ffffff" size="3x" /></a>
          </div>
          <div className="icon twitter">
            <a href="https://twitter.com/ArchanaTpatil?t=JGu5D2do5ouDuMVs1TV-Og&s=09"><FontAwesomeIcon icon={faTwitter} color="#ffffff" size="3x" /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer