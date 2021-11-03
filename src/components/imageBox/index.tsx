import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Image, Footer } from './styles'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

type IImageBox = {
  url: string
  id: string
  title: string
}

export const ImageBox: React.FC<IImageBox> = ({ url, id, title }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia component="img" height="300" image={url} alt="image" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )
}
