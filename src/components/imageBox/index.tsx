import React from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { Link } from 'react-router-dom'

type IImageBox = {
  url: string
  id: number
  title: string
  onDeleteModal: () => void
  route: string
}

export const ImageBox: React.FC<IImageBox> = ({
  url,
  id,
  title,
  onDeleteModal,
  route
}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <Link to={route}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={url}
            alt={`image_${id}`}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        <Button size="small" color="primary" onClick={onDeleteModal}>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}
