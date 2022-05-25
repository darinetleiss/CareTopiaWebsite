import React from "react";

import {
  FeaturesCard,
  FeaturesContainer,
  FeaturesH1,
  FeaturesH2,
  FeaturesIcon,
  FeaturesP,
  FeaturesWrapper,
  FeaturesH22,
} from "./FeaturesElements";

const Features = ({
  featuresH1,
  featuresH2,
  featuresH22,
  featuresIcon,
  featuresP,
  featuresH222,
  featuresH23,
  featuresIcon2,
  featuresIcon3,
  featuresP3,
  featuresP2,
}) => {
  return (
    <FeaturesContainer id="Features">
      <FeaturesH1>{featuresH1}</FeaturesH1>
      <FeaturesH22>{featuresH22}</FeaturesH22>
      <FeaturesWrapper>
        <FeaturesCard>
          <FeaturesIcon src={featuresIcon} />
          <FeaturesH2>{featuresH2}</FeaturesH2>
          <FeaturesP>{featuresP}</FeaturesP>
        </FeaturesCard>

        <FeaturesCard>
          <FeaturesIcon src={featuresIcon2} />
          <FeaturesH2>{featuresH222}</FeaturesH2>
          <FeaturesP>{featuresP2}</FeaturesP>
        </FeaturesCard>

        <FeaturesCard>
          <FeaturesIcon src={featuresIcon3} />
          <FeaturesH2>{featuresH23}</FeaturesH2>
          <FeaturesP>{featuresP3}</FeaturesP>
        </FeaturesCard>
      </FeaturesWrapper>
    </FeaturesContainer>
  );
};

export default Features;
