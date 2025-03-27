

function Staking() {
    return (
        <>
            <section className="py-5 text-white staking-section">
                <div className="container text-center">
                    <h2 className="fw-bold mb-3 staking-sub-title">STAKING TIERS & APY</h2>
                    <div className="staking-sub-underline mb-5 mx-auto"></div>


                    <div className="row text-center mb-5 staking-line-row">
                        <div className="col staking-dot-wrapper">
                            <div className="staking-dot"></div>
                        </div>
                        <div className="col staking-dot-wrapper">
                            <div className="staking-dot"></div>
                        </div>
                        <div className="col staking-dot-wrapper">
                            <div className="staking-dot"></div>
                        </div>
                        <div className="col staking-dot-wrapper">
                            <div className="staking-dot"></div>
                        </div>
                        <div className="col staking-dot-wrapper">
                            <div className="staking-dot"></div>
                        </div>
                    </div>

                    <div className="row g-4 justify-content-center d-none d-lg-flex">
                        <div className="col">
                            <div className="staking-card p-4 text-center">
                                <h6 className="text-uppercase mb-2">Bronze</h6>
                                <h5 className="fw-bold">10–12% APY</h5>
                                <small className="text-white">No lock-up</small>
                            </div>
                        </div>
                        <div className="col">
                            <div className="staking-card p-4 text-center">
                                <h6 className="text-uppercase mb-2">Silver</h6>
                                <h5 className="fw-bold">18–22% APY</h5>
                                <small className="text-white">1 Month lock-up</small>
                            </div>
                        </div>
                        <div className="col">
                            <div className="staking-card p-4 text-center">
                                <h6 className="text-uppercase mb-2">Gold</h6>
                                <h5 className="fw-bold">25–30% APY</h5>
                                <small className="text-white">2 Months lock-up</small>
                            </div>
                        </div>
                        <div className="col">
                            <div className="staking-card p-4 text-center">
                                <h6 className="text-uppercase mb-2">Platinum</h6>
                                <h5 className="fw-bold">40–50% APY</h5>
                                <small className="text-white">4 Months lock-up</small>
                            </div>
                        </div>
                        <div className="col">
                            <div className="staking-card p-4 text-center">
                                <h6 className="text-uppercase mb-2">Bonuses</h6>
                                <h5 className="fw-bold">1–12%</h5>
                                <small className="text-white">ONE-TIME BONUS</small>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center  d-lg-none">
                        <div className="col-6">
                            <div className="staking-card p-4 text-center">
                                <h6 className="text-uppercase mb-2">Bronze</h6>
                                <h5 className="fw-bold">10–12% APY</h5>
                                <small className="text-white">No lock-up</small>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="staking-card p-4 text-center">
                                <h6 className="text-uppercase mb-2">Silver</h6>
                                <h5 className="fw-bold">18–22% APY</h5>
                                <small className="text-white">1 Month lock-up</small>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="staking-card p-4 text-center">
                                <h6 className="text-uppercase mb-2">Gold</h6>
                                <h5 className="fw-bold">25–30% APY</h5>
                                <small className="text-white">2 Months lock-up</small>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="staking-card p-4 text-center">
                                <h6 className="text-uppercase mb-2">Platinum</h6>
                                <h5 className="fw-bold">40–50% APY</h5>
                                <small className="text-white">4 Months lock-up</small>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="staking-card p-4 text-center">
                                <h6 className="text-uppercase mb-2">Bonuses</h6>
                                <h5 className="fw-bold">1–12%</h5>
                                <small className="text-white">ONE-TIME BONUS</small>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex align-items-center justify-content-center my-5 gap-3">
                            <a href="#!" className="btn GreenBtnStyle px-3 py-3">
                                STAKING POOL
                            </a>
                            <a href="#!" className="btn BlueBtnStyle px-3 py-3">
                                DOCUMENTATION
                            </a>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Staking;
