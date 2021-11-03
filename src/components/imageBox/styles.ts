import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 4px 6px 30px -6px rgba(0, 0, 0, 0.62);
  }
`
export const Image = styled.img`
  width: 150px;
  height: 150px;
`

export const Footer = styled.div``
