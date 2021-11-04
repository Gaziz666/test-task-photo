import React, { useContext } from 'react'
import TablePagination from '@mui/material/TablePagination'
import { PhotoContext } from '../../contexts/photoContext'
import { Wrapper } from './styles'

export const MUIPagination = () => {
  const { contextPhoto, boxCount, pageNumber, setPageNumber, setBoxCount } =
    useContext(PhotoContext)

  const count = contextPhoto!.length

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPageNumber!(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBoxCount!(parseInt(event.target.value, 10))
    setPageNumber!(0)
  }

  return (
    <Wrapper>
      <TablePagination
        component="div"
        count={count}
        page={pageNumber}
        onPageChange={handleChangePage}
        rowsPerPage={boxCount}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Wrapper>
  )
}
