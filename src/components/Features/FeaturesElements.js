import styled from "styled-components";

export const FeaturesContainer = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and(max-width:480px) {
    height: 1300px;
  }
`;

export const FeaturesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const FeaturesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const FeaturesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const FeaturesH1 = styled.h1`
  font-size: 2.5rem;
  color: #1B8DA6;
  margin-bottom: 40px;

  @media screen and(max-width:480px) {
    font-size: 2rem;
  }
`;

export const FeaturesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const FeaturesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const FeaturesH22=styled.h1`
font-size: 1rem;
color: #000;
margin-bottom:10px;

@media screen and(max-width:480px) {
  font-size: 2rem;
}
`
