import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/lazy/lazy.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    Lazy, Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Lazy, Pagination, Navigation]);

export default function App(props) {


    return (
        <>
            {props.images[0] !== undefined && (
                <Swiper style={{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff'}} lazy={true}
                        pagination={{
                            "clickable": true
                        }}
                        navigation={false}
                        className="mySwiper1">



                    {
                        props.images.map((item, index) => (
                            <>
                                {item !== undefined && (
                                    <SwiperSlide>
                                        <img data-src={item}
                                             style={{width: "100%", display: "block", objectFit: "cover"}}
                                             alt="Glorious Church" className="swiper-lazy"/>
                                        <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                                    </SwiperSlide>
                                )}

                            </>
                        ))
                    }
                </Swiper>
            )}
        </>
    )
}