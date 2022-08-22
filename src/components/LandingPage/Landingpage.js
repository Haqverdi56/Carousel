import React from "react";
import '../LandingPage/landingpage.scss'
import whalecard from '../../assets/images/whalecard.png'
import Slider from 'react-slick'

const Landingpage = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const verticalSettings = {
    // dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  

  return (
    <>
    <div>
      <div className="hero-div">
        <div className="directions">
          <div className="whalecard-logo"><img src={whalecard} alt="" /></div>
        </div>
        <div className="talents">
            <Slider {...verticalSettings}>
            <div className="talent-containers">
                <Slider {...settings} className='slider'>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://png.pngitem.com/pimgs/s/78-787647_user-female-skin-type-1-2-icon-100.png" alt="" />
                  </div>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://media.istockphoto.com/vectors/pixel-human-skull-isolated-vector-vector-id497144576?s=612x612" alt="" />
                  </div>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://thumbs.dreamstime.com/z/cute-anime-girl-pixel-image-vector-illustration-221609492.jpg" alt="" />
                  </div>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://thumbs.dreamstime.com/z/pixel-image-cute-anime-little-girl-vector-illustration-221609510.jpg" alt="" />
                  </div>
                </Slider>
            </div>
            <div className="talent-containers">
                <Slider {...settings} className='slider'>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://png.pngitem.com/pimgs/s/78-787647_user-female-skin-type-1-2-icon-100.png" alt="" />
                  </div>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://media.istockphoto.com/vectors/pixel-human-skull-isolated-vector-vector-id497144576?s=612x612" alt="" />
                  </div>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://thumbs.dreamstime.com/z/cute-anime-girl-pixel-image-vector-illustration-221609492.jpg" alt="" />
                  </div>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://thumbs.dreamstime.com/z/pixel-image-cute-anime-little-girl-vector-illustration-221609510.jpg" alt="" />
                  </div>
                </Slider>
            </div>
            <div className="talent-containers">
                <Slider {...settings} className='slider'>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://png.pngitem.com/pimgs/s/78-787647_user-female-skin-type-1-2-icon-100.png" alt="" />
                  </div>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://media.istockphoto.com/vectors/pixel-human-skull-isolated-vector-vector-id497144576?s=612x612" alt="" />
                  </div>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://thumbs.dreamstime.com/z/cute-anime-girl-pixel-image-vector-illustration-221609492.jpg" alt="" />
                  </div>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://thumbs.dreamstime.com/z/pixel-image-cute-anime-little-girl-vector-illustration-221609510.jpg" alt="" />
                  </div>
                </Slider>
            </div>
            <div className="talent-containers">
                <Slider {...settings} className='slider'>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://png.pngitem.com/pimgs/s/78-787647_user-female-skin-type-1-2-icon-100.png" alt="" />
                  </div>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://media.istockphoto.com/vectors/pixel-human-skull-isolated-vector-vector-id497144576?s=612x612" alt="" />
                  </div>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://thumbs.dreamstime.com/z/cute-anime-girl-pixel-image-vector-illustration-221609492.jpg" alt="" />
                  </div>
                  <div className="talent-pofile">
                      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                      <img className="avatar" src="https://thumbs.dreamstime.com/z/pixel-image-cute-anime-little-girl-vector-illustration-221609510.jpg" alt="" />
                  </div>
                </Slider>
            </div>
            </Slider>
        </div>
        <div className="customer-logo">

        </div>
      </div>
    </div>
    </>
  );
};

export default Landingpage;

<div className="talent-containers">
  <div className="talent-pofile">
      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
      <img className="avatar" src="https://png.pngitem.com/pimgs/s/78-787647_user-female-skin-type-1-2-icon-100.png" alt="" />
  </div>
  <div className="talent-pofile">
      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
      <img className="avatar" src="https://png.pngitem.com/pimgs/s/78-787647_user-female-skin-type-1-2-icon-100.png" alt="" />
  </div>
  <div className="talent-pofile">
      <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
      <img className="avatar" src="https://png.pngitem.com/pimgs/s/78-787647_user-female-skin-type-1-2-icon-100.png" alt="" />
  </div>
</div>

                {/* <SwiperSlide>
                    <div className="talent-containers">
                        <div className="talent-pofile">
                            <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                            <img className="avatar" src="https://png.pngitem.com/pimgs/s/78-787647_user-female-skin-type-1-2-icon-100.png" alt="" />
                        </div>
                        <div className="talent-pofile">
                            <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                            <img className="avatar" src="https://media.istockphoto.com/vectors/pixel-human-skull-isolated-vector-vector-id497144576?s=612x612" alt="" />
                        </div>
                        <div className="talent-pofile">
                            <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                            <img className="avatar" src="https://thumbs.dreamstime.com/z/cute-anime-girl-pixel-image-vector-illustration-221609492.jpg" alt="" />
                        </div>
                        <div className="talent-pofile">
                            <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                            <img className="avatar" src="https://thumbs.dreamstime.com/z/pixel-image-cute-anime-little-girl-vector-illustration-221609510.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="talent-containers">
                        <div className="talent-pofile">
                            <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                            <img className="avatar" src="https://png.pngitem.com/pimgs/s/78-787647_user-female-skin-type-1-2-icon-100.png" alt="" />
                        </div>
                        <div className="talent-pofile">
                            <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                            <img className="avatar" src="https://media.istockphoto.com/vectors/pixel-human-skull-isolated-vector-vector-id497144576?s=612x612" alt="" />
                        </div>
                        <div className="talent-pofile">
                            <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                            <img className="avatar" src="https://thumbs.dreamstime.com/z/cute-anime-girl-pixel-image-vector-illustration-221609492.jpg" alt="" />
                        </div>
                        <div className="talent-pofile">
                            <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                            <img className="avatar" src="https://thumbs.dreamstime.com/z/pixel-image-cute-anime-little-girl-vector-illustration-221609510.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="talent-containers">
                        <div className="talent-pofile">
                            <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                            <img className="avatar" src="https://png.pngitem.com/pimgs/s/78-787647_user-female-skin-type-1-2-icon-100.png" alt="" />
                        </div>
                        <div className="talent-pofile">
                            <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                            <img className="avatar" src="https://media.istockphoto.com/vectors/pixel-human-skull-isolated-vector-vector-id497144576?s=612x612" alt="" />
                        </div>
                        <div className="talent-pofile">
                            <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                            <img className="avatar" src="https://thumbs.dreamstime.com/z/cute-anime-girl-pixel-image-vector-illustration-221609492.jpg" alt="" />
                        </div>
                        <div className="talent-pofile">
                            <img className="flag" src="http://www.flags-and-anthems.com/images/flags/a/flag-azerbaijan-flagge-rechteckig-100x201.gif" alt="" />
                            <img className="avatar" src="https://thumbs.dreamstime.com/z/pixel-image-cute-anime-little-girl-vector-illustration-221609510.jpg" alt="" />
                        </div>
                    </div>
                </SwiperSlide> */}