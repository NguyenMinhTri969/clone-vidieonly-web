import React from "react";
// import react swiper
import {Swiper, SwiperSlide} from "swiper/react/swiper-react.js";
// import swiper styles
import 'swiper/swiper.scss';
//import component style (scss)
import "./Slide.scss";
// import swiper core and required modules
import SwiperCore, {Navigation} from "swiper";

import {rollingBanner1,
    rollingBanner2,
    rollingBanner3,
    rollingBanner4,
    rollingBanner5,
    rollingBanner6} from "../../assets/images"

import Card from "../card/Card";
import {activationBanner} from "../../assets/images";
//install swiper modules
SwiperCore.use([Navigation]);

export default function Slide() {
    return (
        <div>
            <Swiper
                slidesPerView={5}
                spaceBetween={16}
                grabCursor={true}
                loop={true}
                className="swiper" 
            >
                <SwiperSlide><Card bg={rollingBanner1} className="card__swiper"><img src={activationBanner} alt=""/></Card></SwiperSlide>
                <SwiperSlide><Card bg={rollingBanner2} className="card__swiper"><img src={activationBanner} alt=""/></Card></SwiperSlide>
                <SwiperSlide><Card bg={rollingBanner3} className="card__swiper"><img src={activationBanner} alt=""/></Card></SwiperSlide>
                <SwiperSlide><Card bg={rollingBanner4} className="card__swiper"><img src={activationBanner} alt=""/></Card></SwiperSlide>
                <SwiperSlide><Card bg={rollingBanner5} className="card__swiper"><img src={activationBanner} alt=""/></Card></SwiperSlide>
                <SwiperSlide><Card bg={rollingBanner6} className="card__swiper"><img src={activationBanner} alt=""/></Card></SwiperSlide>
            </Swiper>
        </div>
    )
}