import React from "react";
import Icon1 from "../../assets/Features/svg-1.svg";
import Icon2 from "../../assets/Features/svg-1.svg";
import Icon3 from "../../assets/Features/svg-1.svg";
import {
  FeaturesCard,
  FeaturesContainer,
  FeaturesH1,
  FeaturesH2,
  FeaturesIcon,
  FeaturesP,
  FeaturesWrapper,
  FeaturesH22
} from "./FeaturesElements2";

const Features2 = () => {
  return (
    <FeaturesContainer id="about">
      <FeaturesH1>Our Mission</FeaturesH1>
      <FeaturesWrapper>
        <FeaturesCard>
          <FeaturesIcon src={Icon1} />
          {/* <FeaturesH2>Higher reach</FeaturesH2> */}
          <FeaturesP>Conect non profit organizations with people in need.</FeaturesP>
        </FeaturesCard>
        <FeaturesCard>
          <FeaturesIcon src={Icon2} />
          {/* <FeaturesH2>more donations</FeaturesH2> */}
          <FeaturesP>Promote the NGO to higher audiance.</FeaturesP>
        </FeaturesCard>
        <FeaturesCard>
          <FeaturesIcon src={Icon3} />
          {/* <FeaturesH2>easier communication</FeaturesH2> */}
          <FeaturesP>Promote the NGO to higher audiance.</FeaturesP>
        </FeaturesCard>
      </FeaturesWrapper>
    </FeaturesContainer>
  );
};

export default Features2;
