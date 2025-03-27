import { useState } from "react";
import faqsRight from "../images/faqsRight.svg";
import plusIcon from "../images/icon/plus.png";
import minIcon from "../images/icon/min.png";

const faqsData = [
  {
    question: "Can you explain in detail what Cryptlight is ?",
    answer:
      "Cryptlight is the most popular platform that is secure, smart and easy to buy, store and sell tokens.",
  },
  {
    question: "How do you buy Cryptlight ?",
    answer:
      "You can buy Cryptlight directly using your wallet and supported platforms.",
  },
  {
    question: "Why the price of Cryptlight move so much in the market ?",
    answer:
      "Crypto markets are volatile. Price is based on demand, trading volume and market news.",
  },
  {
    question: "I wonder that What happens if i lost my Cryptlight?",
    answer:
      "If you lose access to your wallet and don't have a backup phrase, the assets cannot be recovered.",
  },
  {
    question: "Can you tell in detail what is the blockchain?",
    answer:
      "Blockchain is a decentralized, distributed ledger that stores transactions across many computers securely.",
  },
];

function Faqs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqBg">
      <section className="faqSection py-5 text-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">FAQ</h2>
            <div className="faqSection-underline mx-auto my-3"></div>
            <h5 className="text-white">Frequently Questions</h5>
          </div>

          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="accordion">
                {faqsData.map((faq, index) => (
                  <div
                    key={index}
                    className="accordion-item bg-transparent border-0 border-bottom"
                  >
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button faqBtn ${
                          openIndex === index ? "" : "collapsed"
                        }`}
                        onClick={() => toggleFaq(index)}
                      >
                        <span className="me-2 text-white">•</span>
                        <span className="flex-grow-1">{faq.question}</span>
                        <img
                          src={openIndex === index ? minIcon : plusIcon}
                          className="faq-icon ms-2"
                          alt="toggle-icon"
                          width={20}
                        />
                      </button>
                    </h2>
                    <div
                      className={`faq-answer-wrapper ${
                        openIndex === index ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body text-white ps-4 pt-2">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src={faqsRight}
                alt="FAQ Illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faqs;
