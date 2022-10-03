import React from "react"
import styled from "styled-components"

import Profile from "../../components/Perfil/index"
import Repository from "../../components/Repositório/index"

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;

  @media screen and (max-width: 723px) {
    flex-direction: column;
  }
`

const User = () => {
  return (
    <Container>
      <Profile />
      <Repository />
    </Container>
  )
}

export default User
