'use client';
import Image from "next/image";
import TransparentLogo from "@/app/assets/images/logo-transparent.png";
import AppLogo from "@/app/assets/images/logo.png";
import {ShapedButton} from "@/app/components/Shapes";
import Link from "next/link";
import React from "react";

export const Header = () => {

    const [isHeaderOpen, setIsHeaderOpen] = React.useState(false);
    function toggleHeader(){
        setIsHeaderOpen(!isHeaderOpen);

    }
    return (
        <header>
            <button className="mobile-menu-button" onClick={toggleHeader}>
                {
                    isHeaderOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>
                }

            </button>
            <div className="transparent_logo">
                <Image alt="" src={TransparentLogo} width={211} height={255}/>
            </div>
            <div className="container">
                <section className="top_header">
                    <div className="logo_name">
                       <Link href="/">
                           <h1>
                               UNIVERSAL <span>
                            PET HUB
                         </span>
                           </h1>
                       </Link>
                    </div>
                    <div className="logo">
                        <Image src={AppLogo} alt="Universal Pet Hub"/>
                    </div>
                    <div className={isHeaderOpen ?'header-form header-open':'header-form'}>
                        <div className="d-flex flex-column">
                        <div className="d-lg-flex d-md-flex">
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
                            <div className="d-lg-flex d-md-flex flex-row align-items-center">
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
                </section>
            </div>
            <div className="header-background"></div>
            <div className="triangle-wrapper">
                <div className="header-triangle-down-top"></div>
                <div className="header-triangle-down"></div>
            </div>
        </header>
    )
}
