import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #1d2226;
  display: flex;
  flex-direction: column;
  padding: 20px;

  .container-loading {
    margin: 0 auto;
    margin-top: 100px;
  }

  .section-filter {
    display: flex;
    align-items: center;
    gap: 18px;
    width: 100%;
    padding: 18px;

    @media screen and (max-width: 880px) {
      flex-direction: column;
    }

    select {
      width: 200px;
      height: 40px;
      border: 1px solid #bbbbbb;
      border-radius: 4px;
      font-style: normal;
      font-weight: normal;
      font-size: 17px;
      line-height: 18px;
      padding: 0 17px;
      color: #777777;

      outline: none;
      cursor: pointer;
    }
  }

  .container-repositories {
    display: flex;
    flex-wrap: wrap;
  }

  .box-info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-weight: 400;
      font-size: 15px;
      text-decoration: none;
      cursor: pointer;
      color: #551255;

      &:hover {
        color: tomato;
      }
    }
  }
`

export const ContainerItem = styled.div`
  min-height: 100px;
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 14px;
  margin: 8px 16px;
  background-color: black;
  border-left: 4px solid ${({ borderColor }) => borderColor || '#551255'};
`
