import styled from "styled-components"

import { BsLink, BsArrowRightShort, BsFillPeopleFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"

import { SiAboutdotme } from "react-icons/si"

export const Container = styled.div`
  min-height: 100vh;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  gap: 25px;
  background-color: black;

  @media screen and (max-width: 723px){
        width: 100%;;
    }

  .container-item {
    display: flex;
    flex-direction: column;
    gap: 25px;

    padding: 20px;
  }

  .image-perfil {
    margin: 0 auto;
    margin-bottom: 20px;
    color: #fff;
    width: 70%;
    border-radius: 50%;
  }

  .item-nome-usuario {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }

  .item-bio {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
    color: #ececec;

    span {
      width: 290px;
    }
  }

  .link-home {
    margin-top: 20px;
    text-align: center;
    text-decoration: none;
    background-color: #fff;
    border-radius: 10px;
    color: black;
    font-weight: 400;
    width: 90px;
    padding: 8px 0;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .loading {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-weight: 500;
      font-size: 23px;
      color: #ececec;
    }
  }
`

export const IconFollowers = styled(BsFillPeopleFill)`
  width: 20px;
  height: 20px;
`

export const IconLocation = styled(MdLocationOn)`
  width: 20px;
  height: 20px;
`

export const IconLink = styled(BsLink)`
  width: 20px;
  height: 20px;
`

export const IconBio = styled(SiAboutdotme)`
  width: 21px;
  height: 21px;
`
