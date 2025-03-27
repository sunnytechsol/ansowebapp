import logoNav from "../images/logo.svg";
import benCard1 from "../images/benCard1.svg"
import benCard2 from "../images/benCard2.svg"
import benCard3 from "../images/benCard3.svg"
import benCard4 from "../images/benCard4.svg"

function EnsoBenefits() {
    return (
        <>
            <section className="py-5  text-white">
                <div className="container text-center">
                    <h2 className="fw-bold mb-3 theme-heading">Anso BENEFITS</h2>
                    <div className="theme-underline mb-4 mx-auto"></div>
                </div>


                <div className="container mt-5">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="benefit-card p-4 h-100">
                                <div className="d-flex align-items-start">
                                    <img src={benCard1} alt="Pay Icon" className="me-3" />
                                        <div>
                                            <h5>Mobile payment made easy</h5>
                                            <p className="mb-0">
                                                With AnsoCard Apple Pay, making payments is quick, secure, and effortless,
                                                allowing you to pay with just a tap of your phone.
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="benefit-card p-4 h-100">
                                <div className="d-flex align-items-start">
                                    <img src={benCard2} alt="APY Icon" className="me-3" />
                                        <div>
                                            <h5 className=" mb-2">High returning Yields (APY)</h5>
                                            <p className="mb-0">
                                                Stake your ANSO tokens and earn up to 55.5% APY in rewards, securing passive
                                                income while supporting the network.
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="benefit-card p-4 h-100">
                                <div className="d-flex align-items-start">
                                    <img src={benCard3} alt="Smart Contracts" className="me-3" />
                                        <div>
                                            <h5 className="mb-2">Secure & Audited Smart Contracts</h5>
                                            <p className="mb-0">
                                                We prioritize the security and trust of our investors by using only safe and
                                                audited smart contracts.
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="benefit-card p-4 h-100">
                                <div className="d-flex align-items-start">
                                    <img src={benCard4} alt="Utility Icon" className="me-3" />
                                        <div>
                                            <h5 className=" mb-2">Real-World Utility</h5>
                                            <p className=" mb-0">
                                                Anso isn't just for trading.. They have tangible use cases. You can spend them
                                                on goods, prove ownership, and access exclusive services, adding true value
                                                beyond speculation.
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

export default EnsoBenefits;
