import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import '../../../assets/styles/Skills.css';

import "bootstrap/dist/css/bootstrap.min.css"; // Ajoute Bootstrap si ce n'est pas encore fait

type SliderProps = {
    images: string[];
};

const ImageSlider: React.FC<SliderProps> = ({ images }) => {
    return (
        <div className="container text-center mt-4">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={4} // Par défaut, sur grand écran
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="swiper-container"
                breakpoints={{
                    320: { slidesPerView: 1 },  // 1 slide sur les petits écrans (téléphones)
                    480: { slidesPerView: 2 },  // 2 slides sur les écrans moyens
                    768: { slidesPerView: 3 },  // 3 slides sur tablettes
                    1024: { slidesPerView: 4 }  // 4 slides sur grands écrans
                }}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="d-flex justify-content-center mb-5 swiper-slide" style={{ width: "auto" }}>

                        <div>
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="img-fluid rounded img-taille"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default ImageSlider;
