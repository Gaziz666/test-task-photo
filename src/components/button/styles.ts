import styled from 'styled-components'

export const StyledButton = styled.button`
  position: relative;
  padding: 0.5rem 1rem;
  text-decoration: none;
  text-align: center;
  line-height: 1.5rem;
  font-weight: lighter;
  outline: none;
  white-space: nowrap;
  font-size: 1rem;
  border: none;
  border-radius: 15px;
  background: #113cfc;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    -webkit-box-shadow: 4px 6px 16px -6px rgba(0, 0, 0, 0.62);
    box-shadow: 4px 6px 16px -6px rgba(0, 0, 0, 0.62);
    transform: scale(1.05);
  }
`
