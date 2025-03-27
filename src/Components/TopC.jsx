// src/Components/TopC.jsx
import logoNav from "../images/logoUpdate.svg";
import playBtn from "../images/playBtn.svg"
function TopC() {
    return (
        <>
            <div className="header">

                <nav className="navbar navbar-expand-lg topHeight py-4">
                    <div className="container">

                        <a className="navbar-brand d-flex align-items-center" href="#">
                            <img src={logoNav} alt="Anso Finance Logo" width="160" style={{objectFit: 'cover'}} className="me-2" />
                        </a>


                        <button className="navbar-toggler text-white border" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarContent">
                            <i className="bi bi-list"></i>
                        </button>


                        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
                            <ul className="navbar-nav mb-2 mb-lg-0 align-items-lg-center gap-3">
                                <li className="nav-item">
                                    <a className="nav-link font-13 text-white" href="#">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-13 text-white" href="#">TOKENOMICS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-13 text-white" href="#">DOCUMENTATION</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-13 text-white" href="#">ROADMAP</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-13 text-white" href="#">TEAM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-13 text-white" href="#">STAKING</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link font-13 text-white" href="#">CONTACT</a>
                                </li>
                                <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                                    <button className="btn btn-light fw-600 px-3 font-13">CONNECT WALLET</button>
                                </li>
                                <li className="nav-item ms-2 mt-2 mt-lg-0">
                                    <div className="dropdown">
                                        <button className="btn btn-outline-light dropdown-toggle font-13" type="button"
                                            data-bs-toggle="dropdown">
                                            EN
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li><a className="dropdown-item" href="#">EN</a></li>
                                            <li><a className="dropdown-item" href="#">UR</a></li>
                                            <li><a className="dropdown-item" href="#">FR</a></li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <section className="py-md-5 py-2   min-hStyle d-flex align-items-center">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">

                            <div className="col-lg-6 text-white mb-4 mb-lg-0 textStartCeter">
                                <h2 className="fw-bold">Bridging the Digital and <br />Physical Worlds with<br /> <span
                                    className="text-white">Blockchain</span></h2>
                                <p className="mt-3 text-white">
                                    Unlock the power of blockchain! Seamlessly connect the digital and physical worlds with
                                    secure payments, true asset ownership, and global access.
                                </p>
                                <div className="d-flex align-items-center mt-4 gap-3 justifyStartCeter">
                                    <a href="#" className="btn GreenBtnStyle px-5 py-3">
                                        WHITEPAPER
                                    </a>
                                    <a href="#" className="d-flex align-items-center text-white text-decoration-none ">
                                        <div
                                            className="me-2 d-flex justify-content-center align-items-center rounded-circle payBtnC">
                                            <img src={playBtn} className="playBtnStyle" />
                                        </div>
                                        <span className="border-bottom">Video intro</span>
                                    </a>
                                </div>
                            </div>


                            <div className="col-lg-5">
                                <div className="p-5 rounded-4 text-white blackShade">
                                    <h5 className="text-center fw-bold mb-4">STAGE 1 = $0.0018 - 1 $Anso</h5>

                                    <div className="row mb-3">
                                        <div className="col-6">
                                            <label className="form-label fw-600">PAY WITH SOL:</label>
                                            <input type="text" className="form-control text-white bg-dark border-0 rounded"
                                                placeholder="0.00" />
                                        </div>
                                        <div className="col-6">
                                            <label className="form-label fw-600">RECEIVE $Anso:</label>
                                            <input type="text" className="form-control text-white bg-dark border-0 rounded"
                                                placeholder="0.00" />
                                        </div>
                                    </div>



                                    <small className="text-white mb-3 text-center d-flex justify-content-center ">$18.090
                                        pledget
                                        of $25.000 goal</small>
                                    <div className="progress mb-4 headerRightC">
                                        <div className="progress-bar headerRightG" role="progressbar" aria-valuenow="30"
                                            aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>



                                    <div className="d-grid">
                                        <button className="btn text-white fw-bold py-2 btn GreenBtnStyle px-5 py-3">
                                            PURCHASE TOKENS
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}

export default TopC;
