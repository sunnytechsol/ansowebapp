
import tokenomicsCenterImg from "../images/tokenomicsCenterImg.svg"

function Tokenomics() {
    return (
        <>
            <section>
                <div className="tokenomics">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <a href="#!" className="btn text-white GreenBtnStyle px-3 py-3 text-uppercase">
                                    tokenomics
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="py-5 text-white container">
                        <div className="row align-items-center text-center text-lg-start">


                            <div className="col-lg-4 mb-4 mb-lg-0">
                                <div className="mb-4">
                                    <label className="d-block mb-1">Presale : 20%</label>
                                    <div className="progress custom-progress bgbg-presale">
                                        <div className="progress-bar bg-presale w20"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="d-block mb-1">Development Funds: 10%</label>
                                    <div className="progress custom-progress bgbg-dev">
                                        <div className="progress-bar bg-dev w10"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="d-block mb-1">Treasury: 5%</label>
                                    <div className="progress custom-progress bgbg-treasury">
                                        <div className="progress-bar bg-treasury w5"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 d-flex justify-content-center mb-4 mb-lg-0">
                                <img src={tokenomicsCenterImg} alt="Token Pie Chart" className="img-fluid" />
                            </div>

                            <div className="col-lg-4">
                                <div className="mb-4">
                                    <label className="d-block mb-1 text-end">Community Rewards/Staking: 25%</label>
                                    <div className="progress custom-progress bgbg-rewards">
                                        <div className="progress-bar bg-rewards w25"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="d-block mb-1 text-end">Team & Advisors: 10%</label>
                                    <div className="progress custom-progress bgbg-team">
                                        <div className="progress-bar bg-team w10"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="d-block mb-1 text-end">Liquidity Pool: 30%</label>
                                    <div className="progress custom-progress bgbg-liquidity">
                                        <div className="progress-bar bg-liquidity w30"></div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-12 py-5 text-center">
                                <h2 className="fw-bold mb-3 theme-heading">1.000.000.000 $ANSO Tokens</h2>
                            </div>
                        </div>
                    </div>
                </div>
        </section >
        </>
    )
}

export default Tokenomics;
