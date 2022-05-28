import "./donate.css";
import NavBar from "../../components/NavBar";
 import Footer from "../../components/Footer";
 import DonateFeatures from "../../components/Features2/DonateFeatures"
export default function Donate() {
  return (
    <>
    <NavBar/>
    <div className="bodyDOnate">
      <div className="containerDonate">
        <div className="donate-card">
          {/* <!-- alert component     --> */}
          <div className="alert-wrapper">
            <div className="alert">$167 still needed for this project</div>
          </div>

          <div className="main-section-donate">
            <div className="progress-bar"></div>
            {/* <!-- main section containerDonate --> */}
            <div className="containerDonate">
              <div className="notice">
                <span className="highlightDonate">
                  School stationery supplies for students in need
                </span>
              </div>
              <div className="descriptionDonation">
                Join the <span className="highlightDonate">42</span>
                other donors who have already supported this project. Every
                dollar helps.
              </div>
              {/* <!-- donate form --> */}
              <div className="formDonation">
                <span className="currency"> </span>
                <input
                id="donationinput"
                  type="text"
                  placeholder="Amount to donate"
                  className="donation-form-item amount-input"
                />
                <button id="donationbutton" className="donation-form-item btn-donate">DONATE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DonateFeatures/>
 <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>  
    <Footer/>
    </>
  );
}
