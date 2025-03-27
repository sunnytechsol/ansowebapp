import logoNav from "../images/logo.svg";
import aboutImg from "../images/aboutLeftImg.png"
function EnsoF() {
    return (
        <>
            <section className="py-5 text-center text-white">
        <div className="container">
            <h2 className="fw-bold mb-3 theme-heading">What is ANSO Finance ?</h2>
            <div className="theme-underline mb-4 mx-auto"></div>
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <p className="text-white mb-0">
                    ANSO Finance is a platform that connects crypto assets with real-world utility, offering
                        financial
                        services, payments, and fractional investments.
                    </p>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row align-items-center mt-5">

                <div className="col-lg-8 mb-4 mb-lg-0">
                    <img src={aboutImg} alt="ANSO Graphic" className="img-fluid h-100" />
                </div>

                <div className="col-lg-4">
                    <div className="col-lg-12">
                        <div className="position-relative timeline-wrapper">

                            <div className="timeline-item mb-5">
                                <div className="icon-circle">
                                    <i className="bi bi-bank"></i>
                                </div>
                                <h5>DeFi Innovation</h5>
                                <p className="mb-0">
                                ANSO leverages decentralized finance to offer flexible financial services like
                                    staking, lending, and borrowing, without traditional intermediaries.
                                </p>
                            </div>

                            <div className="timeline-item mb-5">
                                <div className="icon-circle">
                                    <i className="bi bi-globe2"></i>
                                </div>
                                <h5>Real-World Integration</h5>
                                <p className="mb-0">
                                ANSO connects crypto assets to real-life use cases, allowing users to make payments,
                                    send money globally, and invest in fractional assets like real estate.
                                </p>
                            </div>

                            <div className="timeline-item">
                                <div className="icon-circle">
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <h5>Exclusive Access & Rewards</h5>
                                <p className="mb-0">
                                ANSO provides users with exclusive community access, governance rights, and passive
                                    income opportunities through staking, creating a comprehensive ecosystem.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
        </>
    )
}

export default EnsoF;
