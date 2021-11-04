import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 10rem);
  overflow: auto;

  > div {
    margin: 1rem;
  }
`
