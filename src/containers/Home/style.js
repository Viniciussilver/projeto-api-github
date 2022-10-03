import styled from "styled-components"

import { AiOutlineSearch } from "react-icons/ai"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  background-color: black;

  .container-item {
    display: flex;
    align-items: center;
    padding: 14px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 10px;

    input {
      background: transparent;
      color: #ececec;
      width: 280px;
      border: none;
      outline: none;
      font-weight: 400;
      font-size: 17.5px;
    }

    button {
      background: transparent;
      border: none;
    }
  }
`

export const IconSearch = styled(AiOutlineSearch)`
  width: 24px;
  height: 24px;
  color: #fff;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`
export const Typography = styled.p`
  font-weight: ${(props) => props.fontWeight || "500"};
  font-size: ${(props) => props.size || "18px"};
  line-height: ${(props) => props.lineHeight || "27px"};
  color: ${(props) => props.primary || "#ececec"};
  text-align: ${(props) => props.align || "none"};
  width: ${(props) => props.width || "auto"};
  padding: ${(props) => props.padding || "0"};
`
