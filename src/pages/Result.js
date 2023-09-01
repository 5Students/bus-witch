import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Title4 from "../assets/images/title4.png";
import Ontology from "../assets/images/ontology.png";

export const Body = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  background-color: #f9f9f9;
`;

export const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 7rem;
  display: flex;
  box-sizing: border-box;
  padding: 1rem 2rem;
  justify-content: space-between;
  background-color: #0a2533;
`;

export const TitleImage = styled.img`
  height: 4rem;
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  padding-left: 1rem;
  width: 30rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
  /* background-color: rgb(0, 0, 0, 0.1); */
  background-color: #f9f9f9;
  outline: none;
  font-size: 1rem;
  color: rgb(0, 0, 0, 0.7);
`;

export const SearchButton = styled.button`
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: bold;
  background-color: #056cf2;
  color: white;
  border: none;
  height: 3rem;
  padding: 0 1rem;
  border-radius: 0 0.5rem 0.5rem 0;
  cursor: pointer;
`;
export const Dashboard = styled.iframe`
  box-sizing: border-box;
  margin-top: 7rem;
`;

export default function Result() {
  // variable management---------------------
  const navigation = useNavigate();
  // 넘겨받는 params management -------------------
  const location = useLocation();
  const [parameter, setParameter] = useState(
    location.state && location.state.parameter
  );

  // dashboard params management -----------------
  const [key, setKey] = useState();
  const [value, setValue] = useState();

  // input value management -----------------------------
  const [inputValue, setInputValue] = useState(""); // 입력 값 상태

  // 입력 값이 변경될 때마다 상태를 업데이트하는 함수------
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // click handler----------------------------------------
  const clickHandler = () => {
    setParameter(inputValue);
  };

  useEffect(() => {
    console.log(parameter);
    if (!isNaN(parameter)) {
      setKey("routeNum");
    } else if (parameter.endsWith("구")) {
      setKey("borough");
    } else {
    }
    setValue(parameter);
  }, [parameter]);

  return (
    <Body>
      <Header>
        <TitleImage
          onClick={() => {
            navigation("/");
          }}
          src={Title4}
        />
        <InputWrap>
          <SearchInput
            value={inputValue} // 입력 값 상태를 입력란에 바인딩
            onChange={handleInputChange} // 입력 값 변경 이벤트 핸들러
            placeholder="노선, 자치구, 카테고리에 맞춰 검색해보세요."
          />
          <SearchButton onClick={clickHandler}>OK</SearchButton>
        </InputWrap>
      </Header>
      <Dashboard
        width="100%"
        height={1000}
        src={`https://ap-northeast-2.quicksight.aws.amazon.com/sn/embed/share/accounts/629515838455/dashboards/bd9fc5ca-5114-4445-bf27-a33d0eeb78a4?directory_alias=fiveworks#p.${key}=${value}`}
      />
    </Body>
  );
}
