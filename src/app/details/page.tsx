'use client';

import AppDrawer from "@/app/components/AppDrawer";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import styles from './details.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import images
import img1 from '../assets/images/1.jpeg';
import img2 from '../assets/images/2.jpeg';
import img3 from '../assets/images/3.jpeg';
import img4 from '../assets/images/4.jpeg';
import img5 from '../assets/images/5.jpeg';
import img6 from '../assets/images/6.jpeg';

export default function DetailsPage() {
    const images = [
        { src: img1, alt: 'Image 1' },
        { src: img2, alt: 'Image 2' },
        { src: img3, alt: 'Image 3' },
        { src: img4, alt: 'Image 4' },
        { src: img5, alt: 'Image 5' },
        { src: img6, alt: 'Image 6' },
    ];

    return (
         <AppDrawer>
             <section className={`${styles.detailSection}`}>
                 <h1 className="text-light">
                        Pet Details Page
                 </h1>
                 <div className="container">
                     <div className="row justify-content-center">
                         <div className="col-md-8 ">
                             <p className="text-light">
                                 Universal Pet Hub is dedicated to providing compassionate and comprehensive care for your beloved pets. Our experienced team offers a wide range of veterinary services in a welcoming environment, ensuring every pet receives the attention they deserve. At Universal Pet Hub, your pet’s health and happiness are our top priorities.
                             </p>
                         </div>
                     </div>
                     <div className="row mt-4">
                         <div className="col-md-4">
                             <h2 className="text-lg text-white text-start">
                                 Sample title
                             </h2>
                             <p className="text-white text-start">
                                 Universal Pet Hub is dedicated to providing compassionate and comprehensive care for your beloved pets. Our experienced team offers a wide range of veterinary services in a welcoming environment, ensuring every pet receives the attention they deserve. At Universal Pet Hub, your pet’s health and happiness are our top priorities.
                             </p>
                         </div>
                         <div className="col-md-4">
                             <h2 className="text-lg text-white text-start">
                                 Sample title
                             </h2>
                             <p className="text-white text-start">
                                 Universal Pet Hub is dedicated to providing compassionate and comprehensive care for your beloved pets. Our experienced team offers a wide range of veterinary services in a welcoming environment, ensuring every pet receives the attention they deserve. At Universal Pet Hub, your pet’s health and happiness are our top priorities.
                             </p>
                         </div>

                         <div className="col-md-4">
                             <h2 className="text-lg text-white text-start">
                                 Sample title
                             </h2>
                             <p className="text-white text-start">
                                 Universal Pet Hub is dedicated to providing compassionate and comprehensive care for your beloved pets. Our experienced team offers a wide range of veterinary services in a welcoming environment, ensuring every pet receives the attention they deserve. At Universal Pet Hub, your pet’s health and happiness are our top priorities.
                             </p>
                         </div>
                     </div>
                 </div>



             </section>

             <section>
                 <div className="container">
                     <div className="row">
                       <div className="col-md-6">
                           <h2 className="text-lg text-black text-start">
                               Sample title
                           </h2>
                           <p className="text-black text-start">
                               Universal Pet Hub is dedicated to providing compassionate and comprehensive care for your beloved pets. Our experienced team offers a wide range of veterinary services in a welcoming environment, ensuring every pet receives the attention they deserve. At Universal Pet Hub, your pet’s health and happiness are our top priorities.
                           </p>
                       </div>
                         <div className="col-md-6">
                             <h2 className="text-lg text-black text-start">
                                 Sample title
                             </h2>
                             <p className="text-black text-start">
                                 Universal Pet Hub is dedicated to providing compassionate and comprehensive care for your beloved pets. Our experienced team offers a wide range of veterinary services in a welcoming environment, ensuring every pet receives the attention they deserve. At Universal Pet Hub, your pet’s health and happiness are our top priorities.
                             </p>
                         </div>
                     </div>
                 </div>
             </section>
             <section className="image-gallery-section container">
                 <div className="row justify-content-center">
                    <div className="col-md-6">
                        <h1 className="page-title">Image Gallery</h1>
                        <div className={`swiperContainer ${styles.carouselContainer}`}>
                            <Swiper
                                modules={[Navigation, Pagination]}
                                navigation
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true
                                }}
                                spaceBetween={20}
                                slidesPerView={1}
                                breakpoints={{
                                    // When window width is >= 640px (sm)
                                    640: {
                                        slidesPerView: 1,
                                    },
                                    // When window width is >= 768px (md)
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    // When window width is >= 1024px (lg)
                                    1024: {
                                        slidesPerView: 1,
                                    },
                                }}
                                className={`mySwiper ${styles.swiper}`}
                            >
                                {images.map((image, index) => (
                                    <SwiperSlide key={index} className={styles.slide}>
                                        <div className="swiper-item-image">
                                            <Image
                                                src={image.src}
                                                alt={image.alt}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                priority={index === 0}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                     <div className="col-md-6 mb-5">
                         <h1 className="page-title">Image Gallery</h1>
                         <div className={`swiperContainer ${styles.carouselContainer}`}>
                             <Swiper
                                 modules={[Navigation, Pagination]}
                                 navigation
                                 pagination={{
                                     clickable: true,
                                     dynamicBullets: true
                                 }}
                                 spaceBetween={20}
                                 slidesPerView={1}
                                 breakpoints={{
                                     // When window width is >= 640px (sm)
                                     640: {
                                         slidesPerView: 1,
                                     },
                                     // When window width is >= 768px (md)
                                     768: {
                                         slidesPerView: 2,
                                     },
                                     // When window width is >= 1024px (lg)
                                     1024: {
                                         slidesPerView: 1,
                                     },
                                 }}
                                 className={`mySwiper ${styles.swiper}`}
                             >
                                 {images.map((image, index) => (
                                     <SwiperSlide key={index} className={styles.slide}>
                                         <div className="swiper-item-image">
                                             <Image
                                                 src={image.src}
                                                 alt={image.alt}
                                                 fill
                                                 className="object-cover"
                                                 sizes="(max-width: 768px) 100vw, 50vw"
                                                 priority={index === 0}
                                             />
                                         </div>
                                     </SwiperSlide>
                                 ))}
                             </Swiper>
                         </div>
                     </div>
                 </div>
             </section>
         </AppDrawer>
    );
}
