import React from "react";
import Title from "../assets/title.png";
import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* background-color: rgb(0, 0, 0, 0.7); */
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
  position: absolute;
  width: 100%;
  padding: 3rem 0;
  top: 0;
`;
export const TitleImage = styled.img`
  height: 5rem;
`;

export const Main = styled.main`
  width: 100%;
`;

export const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 30rem;
  height: 3rem;
  border: none;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: rgb(0, 0, 0, 0.05);
  outline: none;
  font-size: 1rem;
  color: rgb(0, 0, 0, 0.7);
`;

export const SearchButton = styled.button`
  font-size: 1rem;
  background-color: #056cf2;
  color: white;
  border: none;
  height: 3rem;
  padding: 0 1rem;
  border-radius: 0 0.5rem 0.5rem 0;
  cursor: pointer;
`;

export default function Home() {
  return (
    <Body>
      <Header>
        <TitleImage src={Title} />
      </Header>
      <Main>
        <InputWrap>
          <SearchInput placeholder=" 노선, 자치구, 카테고리에 맞춰 검색해보세요." />
          <SearchButton>OK</SearchButton>
        </InputWrap>
      </Main>
    </Body>
  );
}
