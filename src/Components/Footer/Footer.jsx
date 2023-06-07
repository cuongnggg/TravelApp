import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../assets/video2.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillFacebook,AiFillYoutube } from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {GiMapleLeaf} from 'react-icons/gi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  //create scroll animation by hook and aos
  useEffect(() => {
    Aos.init({duration:2000})
  },[])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter enail address' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="/" className='logo flex'>
                <MdOutlineTravelExplore className='icon' /> Travel.
              </a>
            </div>

            <div className="footerParagraph">
              Get updates on fun stuff you probably want to know about in your inbox.
            </div>

            <div className="footerSocials flex">
              <AiFillFacebook className='icon'/>
              <AiFillYoutube className='icon'/>
              <BsTwitter className='icon'/>
              <GiMapleLeaf className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* group one */}
            <div className="linkGroup">
              <span className='groupTitle'>
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> Service
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> Payment
              </li>
            </div>
            {/* group two */}
            <div className="linkGroup">
              <span className='groupTitle'>
                PARTNERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> TripAdvisor
              </li>
            </div>
            {/* group three */}
            <div className="linkGroup">
              <span className='groupTitle'>
                LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> London
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> California
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> VietNam
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon'/> Oceania
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE</small>
            <small>COPYRIGHTS RESERVED - RICKC 2023</small>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Footer
