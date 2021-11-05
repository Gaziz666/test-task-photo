import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { Input } from '../input'
import { Container } from './styles'

type ISearchInput = {
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const SearchInput: React.FC<ISearchInput> = ({ onChange }) => {
  return (
    <Container>
      <SearchIcon />
      <Input placeholder="Search..." onChange={onChange} />
    </Container>
  )
}
