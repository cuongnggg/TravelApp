import React from 'react'
import './home.css'
import video from '../../assets/video.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { IoLogoTiktok } from 'react-icons/io5'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'



const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">
            Our Packages
          </span>
          <h1 className="homeTitle">
            Search your Holidays
          </h1>
        </div>

        <div className="cardDiv grid">
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

        <div className="homeFooterIcons flex">
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
