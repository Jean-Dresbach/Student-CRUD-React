import styled from "styled-components"

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 32px;

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }
`

export const Title = styled.h1`
  margin-bottom: 32px;
`

export const Card = styled.li`
  min-width: 300px;
  padding: 15px;

  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.5);

  div {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }

  hr {
    margin: 10px 0;
  }
`

export const Button = styled.button`
  background: blueviolet;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: min-content;

  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 18.75px;
  letter-spacing: 0.5px;

  &:disabled {
    opacity: 0.5;
  }
`
