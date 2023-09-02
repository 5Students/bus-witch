import React from "react";
import Title4 from "../assets/images/title4.png";
import Ontology from "../assets/images/ontology.png";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FiArrowUp, FiAlignJustify } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export const Body = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  background-color: #f9f9f9;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media (max-width: 360px) {
    height: fit-content;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 5rem;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0.5rem 2rem;
  background-color: #0a2533;
`;

export const HeaderImage = styled.img`
  height: 3rem;
`;

export const Hamburger = styled(FiAlignJustify)`
  color: #f9f9f9;
  height: 2rem;
  width: 2rem;
`;

export const Category = styled.div`
  color: white;
`;

export const Video = styled.video`
  width: 100%;
  height: auto;
`;

export const TitleImage = styled.img`
  height: 18rem;
  margin-bottom: 5rem;
  @media (max-width: 360px) {
    width: 30%;
    padding: 2rem;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  @media (max-width: 360px) {
    margin-bottom: 2rem;
    width: 80%;
  }
`;

export const SearchInput = styled.input`
  padding-left: 1rem;
  width: 60rem;
  height: 4rem;
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
  /* background-color: rgb(0, 0, 0, 0.1); */
  background-color: #f9f9f9;
  outline: none;
  font-size: 1.5rem;
  color: rgb(0, 0, 0, 0.7);
  @media (max-width: 360px) {
    font-size: 1rem;
    width: 85%;
    height: 2rem;
    border-radius: 0.25rem 0 0 0.25rem;
    ::placeholder {
      content: none;
    }
  }
`;

export const SearchButton = styled.button`
  box-sizing: border-box;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: #056cf2;
  color: white;
  border: none;
  height: 4rem;
  padding: 0 1rem;
  border-radius: 0 0.5rem 0.5rem 0;
  cursor: pointer;
  @media (max-width: 360px) {
    font-size: 1rem;
    width: 15%;
    height: 2rem;
    padding: 0 0.5rem;
    border-radius: 0 0.25rem 0.25rem 0;
  }
`;

export const Dashboard = styled.iframe`
  box-sizing: border-box;
`;

export const ToTopButton = styled.div`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: fit-content;
  height: fit-content;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export const TopIcon = styled(FiArrowUp)`
  width: 2rem;
  height: 2rem;
  color: #056cf2;
  background-color: white;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

export const WrapSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.8);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export default function Home() {
  //variable management----------------------------------
  const navigation = useNavigate();

  // totop button management-----------------------------
  const [isTopButtonVisible, setIsTopButtonVisible] = useState(false);

  // input value management -----------------------------
  const [inputValue, setInputValue] = useState(""); // 입력 값 상태

  // 입력 값이 변경될 때마다 상태를 업데이트하는 함수------
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // click handler----------------------------------------
  const clickHandler = () => {
    const inputValueArray = inputValue.split(",").map((item) => item.trim());
    navigation("/Result", {
      state: {
        parameter: inputValueArray,
      },
    });
  };

  // for totop button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsTopButtonVisible(scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Body>
      <Container id="top">
        <Video autoPlay loop muted controls={false}>
          <source src="videos/bus2.mp4" type="video/mp4" />
        </Video>
        <WrapSection>
          <Header>
            <HeaderImage src={Ontology} />

            <Hamburger />
            {/* <Category>게임</Category> */}
          </Header>
          <TitleImage src={Title4} />
          <InputWrap>
            <SearchInput
              value={inputValue} // 입력 값 상태를 입력란에 바인딩
              onChange={handleInputChange} // 입력 값 변경 이벤트 핸들러
              placeholder="노선, 자치구, 카테고리에 맞춰 검색해보세요."
            />
            <SearchButton onClick={clickHandler}>OK</SearchButton>
          </InputWrap>
        </WrapSection>
      </Container>
      <Container>
        <Dashboard
          width="100%"
          height="200%"
          src="https://ap-northeast-2.quicksight.aws.amazon.com/sn/embed/share/accounts/629515838455/dashboards/bd9fc5ca-5114-4445-bf27-a33d0eeb78a4?directory_alias=fiveworks"
        />
      </Container>
      <ToTopButton visible={isTopButtonVisible}>
        <Link to="top" spy={true} smooth={true}>
          <TopIcon />
        </Link>
      </ToTopButton>
    </Body>
  );
}
