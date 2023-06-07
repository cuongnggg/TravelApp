import React,{useEffect} from 'react'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import './main.css'
import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Data = [
  {
    id: 1,
    imgSrc: img,
    desTitle: 'Bora Bora',
    location: 'France',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Bora Bora is an island group in the Leeward Islands. The Leeward Islands comprise the western part of the Society Islands of French Polynesia, which is an overseas collectivity of the French Republic in the Pacific Ocean.',
  },
  {
    id: 2,
    imgSrc: img2,
    desTitle: 'Maui',
    location: 'Hawaii',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'Maui, known also as “The Valley Isle,” is the second largest Hawaiian island. The island beloved for its world-famous beaches, the sacred ʻĪao Valley, views of migrating humpback whales (during winter months), farm-to-table cuisine and the magnificent sunrise and sunset from Haleakalā.',
  },
  {
    id: 3,
    imgSrc: img3,
    desTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: ' The Great Barrier Reef stretches along Australia’s northeastern coast, a spine of 3,800 reefs and atolls arcing through the Coral Sea. Together, they form the largest living structure on Earth.',
  },
  {
    id: 4,
    imgSrc: img4,
    desTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Cappadocia is a beautiful region in central Turkey famous for its fairytale scenery, cave dwellings, remarkable rock formations, and, of course, the hundreds of hot air balloons that soar in the sky during sunrise each morning. ',
  },
  {
    id: 5,
    imgSrc: img5,
    desTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$200',
    description: 'Best known for its Festival Cervantino, an arts festival that draws attendance from around the world, Guanajuato is also a UNESCO World Heritage Site. Its old town dates back to the 16th century, and you can visit many of Mexico’s important religious and artistic sites.',
  },
  {
    id: 6,
    imgSrc: img6,
    desTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Cinque Terre in Italy is known for its five small fishing villages located on the coast of the Ligurian Sea, in the region of Liguria. The Italian name Cinque Terre means `five name` in English.',
  },
  {
    id: 7,
    imgSrc: img7,
    desTitle: 'Angkot wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'Angkor is one of the most important archaeological sites in South-East Asia. Stretching over some 400 km2, including forested area, Angkor Archaeological Park contains the magnificent remains of the different capitals of the Khmer Empire, from the 9th to the 15th century. They include the famous Temple of Angkor Wat and, at Angkor Thom, the Bayon Temple with its countless sculptural decorations.',
  },
  {
    id: 8,
    imgSrc: img8,
    desTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: ' If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.',
  },
  {
    id: 9,
    imgSrc: img9,
    desTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
  },
]

const Main = () => {
  //create scroll animation by hook and aos
  useEffect(() => {
    Aos.init({duration:2000})
  },[])

  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          Data.map(({id, imgSrc, desTitle, location, grade, fees, description}) => {
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                  <div className="imageDiv">
                    <img src={imgSrc} alt={desTitle} />
                  </div>
                  <div className="cardInfo">
                    <h4 className="destTitle">{desTitle}</h4>
                    <span className="continent">
                      <HiOutlineLocationMarker className='icon'/>
                      <span className="name">{location}</span>
                    </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                  </div>
              </div>  
            )
          })
        }
      </div>

    </section>
  )
}

export default Main
