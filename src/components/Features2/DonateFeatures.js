import React from "react";
import Icon1 from "../../assets/Donation/donate.svg";
import Icon2 from "../../assets/Donation/number.svg";
import Icon3 from "../../assets/Donation/doneurs.svg";
import {
  FeaturesCard,
  FeaturesContainerD,
  FeaturesH1,
  FeaturesH2,
  FeaturesIcon,
  FeaturesP,
  FeaturesWrapper,
  FeaturesH22,

} from "./FeaturesElements2";


const DonateFeatures = () => {
    return (
      <FeaturesContainerD id="about">
        <FeaturesWrapper>
          <FeaturesCard>
            <FeaturesIcon src={Icon1} />
            {/* <FeaturesH2>Higher reach</FeaturesH2> */}
            <FeaturesP>Total Amount Donated.</FeaturesP>
            1,594,456,498 LB
          </FeaturesCard>
          <FeaturesCard>
            <FeaturesIcon src={Icon2} />
            {/* <FeaturesH2>more donations</FeaturesH2> */}
            <FeaturesP>The number of beneficiaries.</FeaturesP>
            1,498,465
          </FeaturesCard>
          <FeaturesCard>
            <FeaturesIcon src={Icon3} />
            {/* <FeaturesH2>easier communication</FeaturesH2> */}
            <FeaturesP>Number of donors.</FeaturesP>
            19,459,479
          </FeaturesCard>
        </FeaturesWrapper>
      </FeaturesContainerD>
    );
  };
  
  export default DonateFeatures;