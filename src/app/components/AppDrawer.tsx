'use client';
import React, {useEffect, useRef} from 'react';
import Swiper from 'swiper';
import {Header} from "@/app/components/Header";
import {Footer} from "@/app/components/Footer";
import Link from "next/link";
import {ShapedButton} from "@/app/components/Shapes";


const AppDrawer = ({
                       children,
                   }: Readonly<{
    children: React.ReactNode;
}>) => {

    const swiperRef = useRef<Swiper | null>(null);
    const menuButtonRef = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    function toggleHeader(){
       setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {

            swiperRef.current?.slideTo(isMenuOpen ? 1 :0)

    }, [isMenuOpen]);

    useEffect(() => {
        swiperRef.current = new Swiper('.swiper', {
            slidesPerView: 'auto',
            initialSlide: 0,
            resistanceRatio: 0,
            slideToClickedSlide: false,
            allowTouchMove:false,
            on: {
                slideChangeTransitionStart: () => {
                },
                slideChangeTransitionEnd: () => {
                },
            },
        });

        return () => {
            swiperRef.current?.destroy();
        };
    }, []);

    return (
        <div className="swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide content">
                    <button className="mobile-menu-button" onClick={toggleHeader}>
                        {
                            !isMenuOpen ?     <i className="fa-solid fa-bars"></i> :     <i className="fa-solid fa-close"></i>
                        }
                    </button>
                    <Header/>
                    {children}
                    <Footer/>
                </div>
                <div className="swiper-slide swiper-menu" ref={menuButtonRef}>
                    <div className="header-form mobile-only">
                        <div className="d-flex flex-column">
                            <div className="d-lg-flex flex-column">
                                <div className="header-icons">
                                    <div className="icon-wrapper">
                                        <div className="hexagon-small-wrapper">
                                            <div className="hexagon-small">
                                                <Link href="#">
                                                    <i className="fa-solid fa-user"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-wrapper">
                                        <div className="hexagon-small-wrapper">
                                            <div className="hexagon-small">
                                                <a href="#">
                                                    <i className="fa-solid fa-location-dot"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="icon-wrapper">
                                        <span>02</span>
                                        <div className="hexagon-small-wrapper">
                                            <div className="hexagon-small">
                                                <a href="#">
                                                    <i className="fa-solid fa-cart-shopping"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="search-box">
                                    <form>
                                        <input id="search"
                                               name="search"
                                               type="text"
                                               placeholder="Search for products"
                                               aria-label="Search"/>
                                        <button className="btn btn-outline-success">
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="d-lg-flex flex-column align-items-center">
                                <ShapedButton/>
                                <div className="user-sign-in">
                                    <img src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                                         className="hexagon-profile-pic" alt="User Profile"/>
                                    <p>
                                        Signed in <br/>
                                        Welcome Robert
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="app-main-menu">
                        <ul className="accordion app-main-menu__list">
                            <li className="app-main-menu__item">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="app-main-menu__item">
                                <Link href="/">About Us</Link>
                            </li>

                            <li className="app-main-menu__item accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Products
                                    </button>
                                </div>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="list-group">
                                            <Link href="#" className="list-group-item list-group-item-action active"
                                                  aria-current="true">
                                                The current link item
                                            </Link>
                                            <Link href="#" className="list-group-item list-group-item-action">A second link
                                                item</Link>
                                            <Link href="#"  className="list-group-item list-group-item-action">A third link
                                                item</Link>
                                            <Link href="#"  className="list-group-item list-group-item-action">A fourth link
                                                item</Link>
                                            <Link href="#"  className="list-group-item list-group-item-action disabled"
                                                  aria-disabled="true">A disabled link item</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="app-main-menu__item accordion-item">
                                <div className="accordion-header">
                                    <button className="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                        Services
                                    </button>
                                </div>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                     data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div className="list-group">
                                            <Link href="#" className="list-group-item list-group-item-action active"
                                                  aria-current="true">
                                                The current link item
                                            </Link>
                                            <Link href="#" className="list-group-item list-group-item-action">A second link
                                                item</Link>
                                            <Link href="#"  className="list-group-item list-group-item-action">A third link
                                                item</Link>
                                            <Link href="#"  className="list-group-item list-group-item-action">A fourth link
                                                item</Link>
                                            <Link href="#"  className="list-group-item list-group-item-action disabled"
                                                  aria-disabled="true">A disabled link item</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    );
};

export default AppDrawer;
