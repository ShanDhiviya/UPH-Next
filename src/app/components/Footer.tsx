import AppLogo from "@/app/assets/images/logo.png";
import Image from "next/image";
export const Footer = () =>{
    return (
    <>
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 my-4">
                        <h4 className="text-center">
                            Straightforward Pet Rehoming And Adoption
                        </h4>
                        <p className="text-center">
                            Our services connects potential with people who need to rehome their pets. This makes it easier for good people to adopt the right pet whilst
                            maximising the chance of pets finding their forever home.
                            We are also helping to reduce the number of pets going into shelters. This frees up space and resources for the pets who have been abandoned, need immediate help for specialist care.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <Image className="footer-logo" src={AppLogo} alt="Universal Pet Hub Logo" />
                        <h6 className="text-center">
                            Terms of Business Privacy <br/> Policy Press Information
                        </h6>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-center">
                            Quick Links
                        </h5>

                        <a href="#">
                            FAQ for Adoptions
                        </a>
                        <a href="#">
                            FAQ for Rehomers
                        </a>
                        <a href="#">
                            Check if you are Ready to a pet
                        </a>
                        <a href="#">
                            Register
                        </a>
                        <a href="#">
                            Tips for Adoptions
                        </a>
                        <a href="#">
                            Tips for Rehomers
                        </a>
                        <a href="#">
                            Testimonials from Adoptions
                        </a>
                        <a href="#">
                            Testimonials from Rehomers
                        </a>
                        <a href="#">
                            About Us
                        </a>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-center">
                            Quick Links
                        </h5>
                        <a href="#">How it works - Adopters</a>
                        <a href="#">How it works - Rehomers</a>
                        <a href="#">Adoption Guidlines</a>
                        <a href="#">
                            Giving up a dog
                        </a>
                        <a href="#">Giving up a Cat</a>
                        <a href="#">Giving up a Rabbit</a>
                        <a href="#">Pet Care Information</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className="col-md-3">
                        <h5 className="text-center">
                            Follow Us
                        </h5>

                        <div className="social-icons">
                            <a href="#">
                                <i className="fa-brands fa-meta fa-2x"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-instagram fa-2x"></i>
                            </a>
                            <a href="#">
                                <i className="fa-brands fa-whatsapp fa-2x"></i></a>
                        </div>

                        <div className="social-icons">
                            <a href="#"> <i className="fa-brands fa-linkedin fa-2x"></i></a>
                            <a href="#"> <i className="fa-brands fa-youtube fa-2x"></i></a>
                            <a href="#"> <i className="fa-brands fa-facebook-messenger fa-2x"></i></a>
                        </div>

                        <div className="social-icons">
                            <a href="#">  <i className="fa-brands fa-spotify fa-2x"></i></a>

                            <a href="#"><i className="fa-brands fa-pinterest fa-2x"></i></a>

                            <a href="#"> <i className="fa-brands fa-telegram fa-2x"></i></a>
                        </div>

                        <div>
                            <p>
                                &nbsp;
                            </p>
                            <p>
                                &copy; 2025 Copyright - Universal Pet Hub
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-line"></div>
        </footer>

    </>
    )
}
