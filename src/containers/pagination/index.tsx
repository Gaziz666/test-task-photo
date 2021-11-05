import React, { useContext } from 'react'
import { Container, PageNumberWrapper } from './styles'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { PhotoContext } from '../../contexts/photoContext'

export const Pagination: React.FC = () => {
  const { contextPhoto, boxCount, pageNumber, setPageNumber } =
    useContext(PhotoContext)

  const length = contextPhoto!.length
  const leftArrowHandle = () => {
    if (pageNumber < 2) {
      return
    }
    setPageNumber!((current) => current - 1)
  }

  const rightArrowHandle = () => {
    if (lastBox === length) {
      return
    }
    setPageNumber!((current) => current + 1)
  }

  const firstBox = (pageNumber - 1) * boxCount + 1
  const lastBox =
    pageNumber * boxCount < length ? pageNumber * boxCount : length

  return (
    <Container>
      <PageNumberWrapper>
        {firstBox}-{lastBox} of {length}
      </PageNumberWrapper>
      <ChevronLeftIcon
        style={{ cursor: pageNumber === 1 ? 'not-allowed' : 'pointer' }}
        onClick={leftArrowHandle}
      />
      <ChevronRightIcon
        style={{
          cursor: lastBox === length ? 'not-allowed' : 'pointer'
        }}
        onClick={rightArrowHandle}
      />
    </Container>
  )
}
