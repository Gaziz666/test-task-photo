import React, { useState, useContext, useEffect } from 'react'
import { SearchInput } from '../../components/searchInput'
import { PhotoContext } from '../../contexts/photoContext'
import { Container } from './styles'

export const PhotoSearch = () => {
  const [value, setValue] = useState<string>('')
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setValue(e.currentTarget.value)
  }
  const { setContextPhoto, allPhoto, setPageNumber } = useContext(PhotoContext)

  useEffect(() => {
    if (value === '') {
      setContextPhoto!(allPhoto!)
    } else {
      setContextPhoto!(() => {
        return allPhoto!.filter((item) => item.albumId === +value)
      })
    }
    setPageNumber!(0)
  }, [value])

  return (
    <Container>
      <SearchInput onChange={handleChange} />
    </Container>
  )
}
