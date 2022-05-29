import "./donate.css";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import DonateFeatures from "../../components/Features2/DonateFeatures";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

export default function Donate() {
  const donationAmount = useRef();
  const [cases, seCases] = useState({});
  const [amount, setAmount] = useState(0);

  const handleToken = (token) => {
    fetch("http://localhost:3003/api/shared/payment/donateToCasesWeb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, amount }),
    })
    .then(res => res.json())
    .then(_ => {
      window.alert("Transaction Successful.");
    }).catch(_ => window.alert("Transaction Failed."))
  }

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "http://localhost:3003/api/shared/casespage/getAllCases"
      );
      seCases(res.data);
    };
    fetchPosts();
  }, [cases]);

  return (
    <>
      <NavBar />
      {cases.length > 0 &&
        cases.map((e) => (
          <div className="bodyDOnate">
            <div className="containerDonate">
              <div className="donate-card">
                {/* <!-- alert component     --> */}
                <div className="alert-wrapper">
                  <div className="alert">
                    {e.amountGoal - e.amountCollected} LBP still needed for this
                    project
                  </div>
                </div>

                <div className="main-section-donate">
                  <div className="progress-bar"></div>
                  {/* <!-- main section containerDonate --> */}
                  <div className="containerDonate">
                    <div className="notice">
                      <span className="highlightDonate">{e.caseName}</span>
                    </div>
                    <div className="descriptionDonation">
                      {/* Join the <span className="highlightDonate">42</span>
                  other donors who have already supported this project. Every
                  dollar helps. */}
                      {e.description}
                    </div>
                    {/* <!-- donate form --> */}
                    <div className="formDonation">
                      <span className="currency"> </span>
                      <input
                        id="donationinput"
                        type="text"
                        placeholder="Amount to donate"
                        className="donation-form-item amount-input"
                        value={amount}
                        onChange={handleAmountChange}
                      />
                      {/* <button
                    id="donationbutton"
                    className="donation-form-item btn-donate"
                  >
                    DONATE
                  </button> */}
                      <StripeCheckout
                        stripeKey="pk_test_51KnhHxArPq1X5eRz37lRa7fZqvvLAQ88zzKHPTR6rgmnux8CHJ7oGXEnqEuQrBcX0d8jRfgJVktaDi1RLaIVgONP00zjefwVPS"
                        token={handleToken}
                        name=""
                        panelLabel={`Donate`}
                        currency="LBP"
                        amount={amount * 100}
                      ></StripeCheckout>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <DonateFeatures />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Footer />
    </>
  );
}
