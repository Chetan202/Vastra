import React from 'react';
// import './LogoSlider.css'; // Import CSS file with animation styles
import styled, { keyframes, css } from "styled-components";
import dior from "../assets/dior.png"
import lv from "../assets/lv.png"
import gucci from "../assets/gucci.png"
import prada from "../assets/prada.png"

function LogoSlider() {
  const row1 = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVW8dyQv2_HP6gadClDQXNNSOH_YDO2W1duA&usqp=CAU",
    "https://thumbs.dreamstime.com/b/prada-logo-icon-vector-logos-logo-icons-set-social-media-flat-banner-vectors-svg-eps-jpg-jpeg-emblem-wallpaper-background-prada-208329661.jpg",
    "https://product.hstatic.net/200000174405/product/bd5aead8c7458578d70c00eeec5f17df_a66f23c460684ccba2ab65c8938b8bf6.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/023/871/269/small_2x/gap-logo-symbol-brand-black-design-clothes-fashion-illustration-free-vector.jpg",
    "https://1000logos.net/wp-content/uploads/2021/04/U.S.-Polo-Assn-logo.png",
    "https://e1.pxfuel.com/desktop-wallpaper/369/998/desktop-wallpaper-giorgio-armani-logo-emporio-armani-logo.jpg",
  ];

  const row2 = [
    dior,
    lv,
    gucci,
    prada,
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Text> Great Products.</Text>
        <Note>Our customers have gotten offers from awesome companies.</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default LogoSlider;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  opacity:.5;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  // box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

