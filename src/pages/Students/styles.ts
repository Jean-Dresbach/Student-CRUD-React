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
  padding: 15px;

  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.5);

  div {
    display: flex;
    gap: 15px;
  }

  hr {
    margin: 10px 0;
  }
`
