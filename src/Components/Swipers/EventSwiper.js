import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper/core';
import {useSelector} from "react-redux";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


export default function EventSwiper(props) {

    const {Images} = props

    return (
        <>
            {Images === undefined ? <></> :
                <Swiper slidesPerView={3} spaceBetween={10} freeMode={true}
                        autoplay={{
                            "delay": 1500,
                            "disableOnInteraction": false
                        }}
                        pagination={{
                            "clickable": true
                        }}
                        style={{
                            height: "auto",
                            marginTop: 20
                        }}
                        navigation={true}
                        className="mySwiper swiper-container"
                >
                    {Images.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div style={{display: "flex", maxHeight: 160,}}>
                                        <img src={image.image} alt="Glorious Church Ug" height="160px"/>
                                    </div>
                                </SwiperSlide>
                            ))
                    }
                </Swiper>
            }
        </>
    )
}