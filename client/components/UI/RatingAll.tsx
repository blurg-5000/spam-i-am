// import React from 'react'
import { styled } from '@mui/material/styles'
import Rating from '@mui/material/Rating'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useState } from 'react'
import { useAvgRatingById, useGetAllRatings } from '../../hooks/useRatings'

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
})

export default function RatingAll({ rating, spamId }: any) {
  if (rating) {
    console.log('rating for RatingsAll is: ', rating)

    return (
      <>
        <StyledRating
          name="customized-color"
          value={rating}
          getLabelText={(value: number) =>
            `${value} Heart${value !== 1 ? 's' : ''}`
          }
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
        {/* <Rating name="customized-10" defaultValue={2} max={10} /> */}
      </>
    )
  }
}
