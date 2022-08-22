import React from 'react'
import Slider from 'react-slick';
import { MdLocationPin } from 'react-icons/md'

const TalentContainer = () => {
    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        accessibility: true,
        // autoplay: true,
        // autoplaySpeed: 3000
      };
  return (
    <div className="talent-containers">
        <div className='programming-language'>
            <p>JAVA</p>
        </div>
        <Slider {...settings} className='slider'>
            <div className="talent-pofile">
                <img className="avatar" src="https://media.istockphoto.com/photos/beautiful-afro-girl-with-curly-hairstyle-picture-id1381221247?b=1&k=20&m=1381221247&s=170667a&w=0&h=4bt0RFmAffRSqrKa2N2vJAFbWgmbRg7x-0ziJaRtpxE=" alt="" />
                <p>Diana</p>
                {/* <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" /> */}
                <p className='job-status'>Actively interested</p>
                <div className='talent-location'>
                    <i><MdLocationPin /></i>
                    <p>Spain</p>
                </div> 
            </div>
            <div className="talent-pofile">
                <img className="avatar" src="https://media.istockphoto.com/photos/headshot-portrait-african-30s-man-smile-look-at-camera-picture-id1338134336?b=1&k=20&m=1338134336&s=170667a&w=0&h=924F3rXz03F8-uw6NQyXpe9DeAFlQMmgg-b2Tz8J7eQ=" alt="" />
                <p>Maria</p>
                {/* <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" /> */}
                <p className='job-status'>Actively interested</p>
                <div className='talent-location'>
                    <i><MdLocationPin /></i>
                    <p>Austuria</p>
                </div> 
            </div>
            <div className="talent-pofile">
                <img className="avatar" src="https://images.unsplash.com/photo-1660963414622-3095b1119484?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <p>Varun</p>
                {/* <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" /> */}
                <p className='job-status'>Actively interested</p>
                <div className='talent-location'>
                    <i><MdLocationPin /></i>
                    <p>Italy</p>
                </div> 
            </div>
            <div className="talent-pofile">
                <img className="avatar" src="https://images.unsplash.com/photo-1660906865138-c638361f1a7f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <p>Patrick</p>
                {/* <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" /> */}
                <p className='job-status'>Actively interested</p>
                <div className='talent-location'>
                    <i><MdLocationPin /></i>
                    <p>Ukrain</p>
                </div> 
            </div>
        </Slider>
    </div>
  )
}

export default TalentContainer