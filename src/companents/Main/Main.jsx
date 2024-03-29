import React , {useEffect} from 'react'
import './main.css'
import Data from './Data'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";
import Aos from 'aos';
import 'aos/dist/aos.css'



function Main() {

    useEffect(()=>{
      Aos.init({duration:2000})
    },[])
  return (
    <>
      <section className="main container section">
        <div className="secTitle">
          <h3 className="title" data-aos="fade-right">En Çok Ziyaret Edilen Yerler:</h3>
        </div>



        <div className="secContent grid">
          {
            Data.map(({id, imgSrc,destTitle,location,grade,fees,description})=>{
              return(
                <div className="singleDestination" key={id} data-aos="fade-up">
                 <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                 </div>
                 <div className="cardInfo">
                  <h4 className="destTitle"> {destTitle} </h4>
                  <span className="continent">
                  <HiOutlineLocationMarker className='icon'/>
                  <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees} </h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description} </p>
                  </div>

                  <button className='btn flex' style={{color:"white"}}>Detaylar
                  <LuClipboardCheck className='icon' />
                  </button>
                 </div>
                </div>
              )
            })
          }
          
        </div>
      </section>
    </>
  )
}

export default Main
