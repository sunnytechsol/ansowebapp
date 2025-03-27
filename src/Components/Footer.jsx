import footerLogo from "../images/footerLogo.svg"
import cards from "../images/icon/cards.svg";
function Footer() {
    return (
        <>

            <section className="newsletterSection py-5 mt-5">
                <div className="container py-5 mt-5">
                    <div className="newsletterBox p-4 p-lg-5">
                        <div className="row align-items-center gy-4">

                            <div className="col-lg-4 text-white text-center text-lg-start">
                                <h3 className="mb-1">Newsletter</h3>
                                <p className="mb-0 text-white">Sign up for ICO campaign updates.</p>
                            </div>

                            <div className="col-lg-8">
                                <form className="row g-3">
                                    <div className="col-md-5">
                                        <input type="text" className="form-control newsletterInput" placeholder="Full name" />
                                    </div>
                                    <div className="col-md-5">
                                        <input type="email" className="form-control newsletterInput" placeholder="Email Address" />
                                    </div>
                                    <div className="col-md-2">
                                        <button type="submit" className="btn text-white w-100 GreenBtnStyle text-uppercase  py-2">
                                            SUBCRIBE
                                        </button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <footer className="footerSection pt-5 text-white">
                <div className="container">
                    <div className="row gy-4">

                        <div className="col-lg-4">
                            <div className="d-flex align-items-center mb-3">
                                <img src={footerLogo} alt="Logo" className="me-2" />
                            </div>
                            <p className="text-white mb-4">
                                ICO Landing Page Template. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod
                            </p>
                            <a href="#" className="btn GreenBtnStyle px-4 py-2 text-uppercase fw-bold">About Us</a>
                        </div>

                        <div className="col-6 col-lg-2">
                            <h6 className="fw-bold mb-3">Company</h6>
                            <ul className="list-unstyled text-white">
                                <li><a href="#" className="text-white text-decoration-none d-block mb-2">About</a></li>
                                <li><a href="#" className="text-white text-decoration-none d-block mb-2">Team</a></li>
                                <li><a href="#" className="text-white text-decoration-none d-block mb-2">Blog</a></li>
                                <li><a href="#" className="text-white text-decoration-none d-block">Contact</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-lg-2">
                            <h6 className="fw-bold mb-3">ICO Funding</h6>
                            <ul className="list-unstyled text-white">
                                <li><a href="#" className="text-white text-decoration-none d-block mb-2">Features</a></li>
                                <li><a href="#" className="text-white text-decoration-none d-block mb-2">Product</a></li>
                                <li><a href="#" className="text-white text-decoration-none d-block mb-2">Roadmap</a></li>
                                <li><a href="#" className="text-white text-decoration-none d-block">Token</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4">
                            <h6 className="fw-bold mb-3">We Accept Credit Cards</h6>
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                <img src={cards} />

                            </div>

                            <div className="flowSection mt-4">
                                <p className="fw-bold mb-2">Flow us :</p>
                                <hr className="flowLine mb-3" />

                                <div className="d-flex gap-3 flex-wrap">
                                    <a href="#" className="flowIconBox">
                                        <i className="bi bi-twitter text-twitter"></i>
                                    </a>
                                    <a href="#" className="flowIconBox">
                                        <i className="bi bi-facebook text-facebook"></i>
                                    </a>
                                    <a href="#" className="flowIconBox">
                                        <i className="bi bi-linkedin text-linkedin"></i>
                                    </a>
                                    <a href="#" className="flowIconBox instagramIcon">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </div>
                            </div>



                        </div>
                    </div>

                    <hr className="border-secondary mt-5" />

                    <p className="text-center text-white mb-0 pb-4">
                        Copyright © 2021. All rights reserved by Your Company.
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer;
