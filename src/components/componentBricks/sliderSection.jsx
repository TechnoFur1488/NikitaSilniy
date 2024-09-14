import React from 'react';
import { SectionSlider } from "../componentsStyle/globalStyles/sections";
import { ImgSliderFirst, ImgSliderFourth, ImgSliderSecond, ImgSliderThird } from "../componentsImages/imagesSwiper";
import { ContainerSlider } from "../componentsStyle/globalStyles/containers";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { SliderH2, SliderH2Second, SliderH2Third } from '../componentsStyle/global/sliderStyles/sliderStyle';


const SliderSection  = () => {
    return (
        <>
            <SectionSlider>
                <ContainerSlider>
                    <Swiper spaceBetween={30} centeredSlides={true}
                    autoplay={{delay: 2500, disableOnInteraction: false,}}
                    modules={[Autoplay]}
                    loop={true}
                    className="mySwiper">
                        <SwiperSlide>
                            <ImgSliderFirst />
                            <SliderH2>«Это один маленький шаг для человека, но гигантский скачок для всего человечества». <br /> Нил Армстронг</SliderH2>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgSliderSecond />
                            <SliderH2Second>«NASA не было проинформировано о решениях ни одного из партнеров, хотя мы продолжаем создавать будущие возможности, чтобы обеспечить наше основное присутствие на низкой околоземной орбите».<br /> Билл Нельсон</SliderH2Second>
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgSliderThird />
                            <SliderH2Third>«Ну, Поехали!»<br /> Юрий Гагарин</SliderH2Third>    
                        </SwiperSlide>
                        <SwiperSlide>
                            <ImgSliderFourth />
                            <SliderH2>«И теперь Америке пора достичь гораздо больших высот, отправив космонавтов на Марс!»<br /> Илон Маск</SliderH2>    
                        </SwiperSlide>
                    </Swiper>
                </ContainerSlider>
            </SectionSlider>
        </>
    )
}

export default SliderSection;