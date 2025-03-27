import x from "../images/icon/x.svg"
import fb from "../images/icon/fb.svg"
import linkd from "../images/icon/linkd.svg"
import arrow from "../images/icon/arrow.png"
import clients1 from "../images/clients/1.svg"
import clients2 from "../images/clients/2.svg"
import clients3 from "../images/clients/3.svg"
import clients4 from "../images/clients/4.svg"
import clients5 from "../images/clients/5.svg"
import teamImg from "../images/teamImg.png"
import msg from "../images/icon/msg.svg"
import call from "../images/icon/call.svg"
import home from "../images/icon/home.svg"

function TeamPlayers() {
    return (
        <>

            <div className="teamPlayersSideBg">
                <section className="brand-strip py-5">
                    <style>
                        {`
      .scroll-wrapper {
        overflow: hidden;
        width: 100%;
      }

      .scroll-track {
        display: flex;
        width: max-content;
        gap: 4rem;
        animation: scrollLeft 25s linear infinite;
      }

      .scroll-track img {
        height: 40px;
        width: auto;
        object-fit: contain;
      }

      @keyframes scrollLeft {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}
                    </style>

                    <div className="scroll-wrapper">
                        <div className="scroll-track">
                            <img src={clients1} alt="nem" />
                            <img src={clients2} alt="coinomi" />
                            <img src={clients3} alt="nem" />
                            <img src={clients4} alt="bitcoin" />
                            <img src={clients5} alt="coindesk" />
                            {/* Repeat logos for smooth infinite loop */}
                            <img src={clients1} alt="nem" />
                            <img src={clients2} alt="coinomi" />
                            <img src={clients3} alt="nem" />
                            <img src={clients4} alt="bitcoin" />
                            <img src={clients5} alt="coindesk" />
                        </div>
                    </div>
                </section>



                <section className="py-5 teamCoverBg teamSection text-white">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold">Team Players</h2>
                            <div className="teamSection-underline mx-auto my-3"></div>
                            <p className="text-white small">
                                Our team player alway finds effective ways to improve the<br />
                                product and process
                            </p>
                        </div>

                        <div className="row g-4">
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="teamSection-card">
                                    <img src={teamImg} className="img-fluid teamSection-img" alt="Tristana Lewan" />
                                    <div className="px-3 py-4">
                                        <h6 className="fw-bold mb-1">Tristana Lewan</h6>
                                        <p className="text-white small mb-0">Co-founder & COO</p>
                                        <div className="teamSection-line mt-1"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="teamSection-card">
                                    <img src={teamImg} className="img-fluid teamSection-img" alt="Herman Ledfor" />
                                    <div className="px-3 py-4">
                                        <h6 className="fw-bold mb-1">Herman Ledfor</h6>
                                        <p className="text-white small mb-0">Co-founder & COO</p>
                                        <div className="teamSection-line mt-1"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="teamSection-card">
                                    <img src={teamImg} className="img-fluid teamSection-img" alt="Emerson Anderson" />
                                    <div className="px-3 py-4">
                                        <h6 className="fw-bold mb-1">Emerson Anderson</h6>
                                        <p className="text-white small mb-0">Head of Investor</p>
                                        <div className="teamSection-line mt-1"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="teamSection-card">
                                    <img src={teamImg} className="img-fluid teamSection-img" alt="Steven Beals" />
                                    <div className="px-3 py-4">
                                        <h6 className="fw-bold mb-1">Steven Beals</h6>
                                        <p className="text-white small mb-0">Co-founder & COO</p>
                                        <div className="teamSection-line mt-1"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="teamSection-card">
                                    <img src={teamImg} className="img-fluid teamSection-img" alt="Evelyn Snyder" />
                                    <div className="px-3 py-4">
                                        <h6 className="fw-bold mb-1">Evelyn Snyder</h6>
                                        <p className="text-white small mb-0">Co-founder & COO</p>
                                        <div className="teamSection-line mt-1"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="teamSection-card">
                                    <img src={teamImg} className="img-fluid teamSection-img" alt="Christian Perry" />
                                    <div className="px-3 py-4">
                                        <h6 className="fw-bold mb-1">Christian Perry</h6>
                                        <p className="text-white small mb-0">Business Analyst</p>
                                        <div className="teamSection-line mt-1"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="teamSection-card">
                                    <img src={teamImg} className="img-fluid teamSection-img" alt="Gordon Edwards" />
                                    <div className="px-3 py-4">
                                        <h6 className="fw-bold mb-1">Gordon Edwards</h6>
                                        <p className="text-white small mb-0">Co-founder & COO</p>
                                        <div className="teamSection-line mt-1"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="teamSection-card">
                                    <img src={teamImg} className="img-fluid teamSection-img" alt="Tristana Lewan" />
                                    <div className="px-3 py-4">
                                        <h6 className="fw-bold mb-1">Tristana Lewan</h6>
                                        <p className="text-white small mb-0">Founder, Crypto mediator</p>
                                        <div className="teamSection-line mt-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                <section className="py-5 contactSection text-white">
                    <div className="container">
                        <h2 className="fw-bold mb-2">Contact Us</h2>
                        <div className="contactSection-underline mb-4"></div>

                        <div className="row gy-4">
                            <div className="col-lg-5">
                                <div className="blackShade2 rounded-4 p-4">
                                    <div className="d-flex align-items-start mb-4">
                                        <div className="iconBox bg-icon me-3">
                                            <img src={msg} className="img-fluid" />
                                        </div>

                                        <span className="fw-600 mt-2">Info@ansofinance.co</span>
                                    </div>
                                    <div className="d-flex align-items-start mb-4">
                                        <div className="iconBox bg-icon me-3">
                                            <img src={call} className="img-fluid" />
                                        </div>
                                        <span className="fw-600 mt-2">+1 702 123 4567</span>
                                    </div>
                                    <div className="d-flex align-items-start">
                                        <div className="iconBox bg-icon me-3">
                                            <img src={home} className="img-fluid" />
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-600">Ap #867-859 Sit Rd, Azusa<br />New York 39531</p>

                                        </div>
                                    </div>
                                    <div className="row align-items-end">
                                        <div className="col-3 text-center">
                                            <img src={arrow} className="img-fluid" />
                                        </div>

                                        <div className="col arrStyle" >
                                            <a href="#" className="text-info small d-inline-block mt-2">
                                                <i className="bi bi-geo-alt-fill me-1"></i> View map
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <p className="mb-2">Follow our Socials:</p>
                                    <div className="d-flex gap-3">
                                        <a href="#" className="socialIcon">

                                            <img src={x} className="img-fluid" />
                                        </a>
                                        <a href="#" className="socialIcon">
                                            <img src={fb} className="img-fluid" />
                                        </a>
                                        <a href="#" className="socialIcon">
                                            <img src={linkd} className="img-fluid" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <div className="blackShade2 rounded-4 p-4">
                                    <h5 className="fw-bold">Leave Us a Message</h5>
                                    <div className="contactSection-underline mb-4"></div>

                                    <form>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <input type="text" className="form-control contactInput" placeholder="First name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="text" className="form-control contactInput" placeholder="Last name" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="email" className="form-control contactInput" placeholder="Email" />
                                            </div>
                                            <div className="col-md-6">
                                                <input type="tel" className="form-control contactInput"
                                                    placeholder="Phone number" />
                                            </div>
                                            <div className="col-12">
                                                <textarea rows="4" className="form-control contactInput"
                                                    placeholder="Messenger...."></textarea>
                                            </div>
                                            <div className="col-12 text-center text-md-start">
                                                <button type="submit"
                                                    className="btn btn text-white GreenBtnStyle px-3 py-3 text-uppercase px-4 py-2 mt-2">SUBMIT
                                                    YOUR
                                                    MESSAGE</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



            </div>
        </>
    )
}

export default TeamPlayers;
