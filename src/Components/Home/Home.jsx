import React, {useEffect} from 'react'
import './home.css'
import video from '../../assets/video.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { IoLogoTiktok } from 'react-icons/io5'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  //create scroll animation by hook and aos
  useEffect(() => {
    Aos.init({duration:2000})
  },[])

  return (
    <section className="home">
      <div className="overlay"></div>
      {/* Adding a video tag in home */}
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          {/* data-aos: animation fade-up */}
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          {/* data-aos: animation fade-up */}
          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holidays
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city" >Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='You want to go .....' />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="destinationInput">
            <label htmlFor="date" >Selecte your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="pricenput">
            <div className="label_total flex">
              <label htmlFor="price">Max price: </label>
              <h3 className='total'>$ 3000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className='icon' />
            <span>More options</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <IoLogoTiktok className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home
