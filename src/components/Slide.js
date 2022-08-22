import React,{useRef} from 'react'
import '../components/slide.scss'
import whalecard from '../assets/images/whalecard.png'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay, Navigation, Pagination } from "swiper";
// import "swiper/css/navigation";
// import "swiper/css";
import Slider from 'react-slick'
import CustomerSlider from '../components/CustomerSlider'
import TalentContainer from './TalentContainer';

SwiperCore.use([Autoplay, Pagination])

const Slide = () => {
    const swiperRef = useRef(null)
    
  return (
    <>
    <div
    // onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
    // onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
    >
      <div className="hero-div">
        <div className="directions">
            <div className="whalecard-logo"><img src={whalecard} alt="" /></div>
            <div>
                <ul className='talents-ul'>
                    <li>Features</li>
                    <li>How it works?</li>
                    <li>Customers</li>
                    <li>Sign up</li>
                    <li>FAQ</li>
                </ul>
            </div>
        </div>
        <div className="talents">
            <Swiper
            ref={swiperRef}
            direction='vertical'
            // autoplay={{
            //     delay: 6000,
            // }}
            navigation={true}
            // modules={[Navigation]}
            className="mySwiper"
            >
                <SwiperSlide>
                    <TalentContainer/>
                </SwiperSlide>
                <SwiperSlide>
                    <TalentContainer/>
                </SwiperSlide>
                <SwiperSlide>
                    <TalentContainer/>
                </SwiperSlide>
                <SwiperSlide>
                    <TalentContainer/>
                </SwiperSlide>
                <SwiperSlide>
                    <TalentContainer/>
                </SwiperSlide>
                <SwiperSlide>
                    <TalentContainer/>
                </SwiperSlide>
            </Swiper>
        </div>
        <div className="customer-logo">
            <CustomerSlider/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Slide;
