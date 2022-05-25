import styled from "styled-components";
//import HeroImage from "./assets/HeroImage.png"

export const HeroContainer = styled.div`
  background: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  position: relative;
  z-index: 1;

  @media screen and(max-width:900px) {
    height: 10px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ImgBg = styled.img`
width: 100%;
height: auto;
object-fit: cover;
position: absolute;
 -o-object-fit:cover;
 margin-top: 80px;
`;

/*export const ImgBg = styled.img`
 
export const ImgBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  -o-object-fit: cover;
  background:#232a34;
`;
`;*/
