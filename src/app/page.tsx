import Image from "next/image";
import IconVerification from "@/app/assets/images/icon-blue-star.png";
import IconEmail from "@/app/assets/images/icon-envlope.png";
import IconBadge from "@/app/assets/images/icon-badge.png";
import IneedHelp from "@/app/assets/images/dog-person.png";
import mainImage from "@/app/assets/images/photo.png";
import IconDog from "@/app/assets/images/dog-outline.png";
import IconCat from "@/app/assets/images/cat-outline.png";
import IconOther from "@/app/assets/images/icon-circles.png";
import {ShapedTitle} from "@/app/components";
import DogImageOne from "@/app/assets/images/1.jpeg";
import DogImageTwo from "@/app/assets/images/2.jpeg";
import DogImageThree from "@/app/assets/images/3.jpeg";
import DogImageFour from "@/app/assets/images/4.jpeg";
import DogImageFive from "@/app/assets/images/5.jpeg";
import DogImageSix from "@/app/assets/images/6.jpeg";
import CatImageOne from "@/app/assets/images/c1.jpeg";
import CatImageTwo from "@/app/assets/images/c2.jpeg";
import CatImageThree from "@/app/assets/images/c3.jpeg";
import CatImageFour from "@/app/assets/images/c4.jpeg";
import CatImageFive from "@/app/assets/images/c5.jpeg";
import CatImageSix from "@/app/assets/images/c6.jpeg";

import Link from "next/link";
export default function Home() {
  return (
     <article className="article-body">
         <section className="body-section">
             <div className="container">
                 <div className="row">
                     <div className="col-lg-6">
                       <div className="main-image-wrapper">
                            <ShapedTitle/>
                           <Image src={mainImage} alt="Universal Pet Hub" className="main-image"/>
                       </div>
                     </div>
                     <div className="col-lg-6">
                         <form className="form-connect-breeders">
                             <h2>
                                 Connect with trusted <br/>
                                 breeders and rescuers
                             </h2>

                             <div className="bread-types">
                                 <div className="hexagon_large">
                                     <div className="hexagon">
                                         <button className="hexagon_button">
                                             <Image src={IconDog} alt="icon-dogs"/>
                                             <p className="button_text">
                                                 Dogs
                                             </p>
                                         </button>
                                     </div>
                                 </div>
                                 <div className="hexagon_large">
                                     <div className="hexagon">
                                         <button className="hexagon_button">
                                             <Image src={IconCat} alt="icon-dogs"/>
                                             <p className="button_text">
                                                 Cats
                                             </p>
                                         </button>
                                     </div>
                                 </div>
                                 <div className="hexagon_large">
                                     <div className="hexagon">
                                         <button className="hexagon_button">
                                             <Image src={IconOther} alt="icon-dogs"/>
                                             <p className="button_text">
                                               Other
                                             </p>
                                         </button>
                                     </div>
                                 </div>
                             </div>

                             <div className="form-element">
                                 <div className="icon-arrow-down">
                                     <i className="fa-solid fa-chevron-down"></i>
                                 </div>
                                 <select>
                                     <option value="-1">
                                         Select
                                     </option>
                                 </select>
                             </div>

                             <div className="form-element">
                                 <input type="text" placeholder="Select Location"/>
                             </div>

                             <div className="form-element no_bg">
                                 <button type="submit">
                                     Search
                                 </button>
                             </div>

                         </form>
                     </div>
                 </div>
             </div>
         </section>
         <section className="body-section-gradiant">

            <div className="container">
                <section className="section-three-tiles">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="item">
                                <div className="item_icon">
                                    <Image src={IconVerification} alt=""/>
                                </div>
                                <h3 className="item_title">
                                    Robust ID Verification
                                </h3>
                                <p className="item_text">
                                    ID Verified breeders and buyers to make our site even safer and more transparent.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="item">
                                <div className="item_icon">
                                    <Image src={IconEmail} alt=""/>
                                </div>
                                <h3 className="item_title">
                                    Robust ID Verification
                                </h3>
                                <p className="item_text">
                                    ID Verified breeders and buyers to make our site even safer and more transparent.
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="item">
                                <div className="item_icon">
                                    <Image src={IconBadge} alt="" />
                                </div>
                                <h3 className="item_title">
                                    Robust ID Verification
                                </h3>
                                <p className="item_text">
                                    ID Verified breeders and buyers to make our site even safer and more transparent.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-help">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-8">
                            <h3>
                                Need Help? We are here to provide a safe start to your lifelong f
                                friendship
                            </h3>
                            <p>
                                We have a bunch of handy article to answer common questions.
                                Can&#39;t find what you are looking for ? Contact our dedicated trust and safety team.
                            </p>

                            <Link href="#" className="btn-primary">
                                Learn more about pet safety
                            </Link>
                            <Link href="#" className="btn-default">
                                I need help
                            </Link>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4 m-0">
                            <Image src={IneedHelp} alt=""/>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <section className="popular-breeds">

                            <h4>
                                Popular Dog Breeds
                            </h4>

                            <div className="images-array">

                                <Image src={DogImageOne} alt=""/>
                                <Image src={DogImageTwo} alt=""/>
                                <Image src={DogImageThree} alt=""/>
                                <Image src={DogImageFour} alt=""/>
                                <Image src={DogImageFive} alt=""/>
                                <Image src={DogImageSix} alt=""/>

                            </div>

                        </section>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <section className="popular-breeds">
                            <h4>
                                Popular Cat Breeds
                            </h4>
                            <div className="images-array">

                                <Image src={CatImageOne} alt=""/>
                                <Image src={CatImageTwo} alt=""/>
                                <Image src={CatImageThree} alt=""/>
                                <Image src={CatImageFour} alt=""/>
                                <Image src={CatImageFive} alt=""/>
                                <Image src={CatImageSix} alt=""/>

                            </div>
                        </section>
                    </div>
                </div>
            </div>
         </section>

         <section className="top-footer">
             <div className="container">
                 <div className="row">
                     <div className="col-sm-12 col-md-6 col-lg-6 top-footer_left">
                        <h2>
                            UNIVERSAL PET HUB
                            <small>
                                The one place for everything pets!
                            </small>
                        </h2>
                     </div>

                     <div className="col-sm-12 col-md-6 col-lg-6 top-footer_right">
                         <h2>
                             Register for a new Univeral Pet Hub Account
                             <small>
                              Create your account, and get ready to connect safely with thousands of adopters and pets rehomers
                             </small>
                         </h2>
                         <a href="#">
                           REGISTER
                         </a>
                     </div>
                 </div>
             </div>
         </section>

     </article>
  );
}
