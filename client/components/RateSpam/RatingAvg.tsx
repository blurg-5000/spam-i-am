// import React from 'react'
import { styled } from '@mui/material/styles'
import Rating from '@mui/material/Rating'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useState } from 'react'
import { useAvgRatingById } from '../../hooks/useRatings'

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
})
export default function RatingAvg({ spamId }: { spamId: number }) {
  // TODO: Display the Rating:
  // using the spamId parameter, call `useAvgRatingById` from
  // the custom `useRatings` hook to get data.
  const { data } = useAvgRatingById(spamId)
  const [value, setValue] = useState<number | null>(4)

  function handleChange(event: any) {
    // TODO: Adding a Rating:
    // Some logic to call the useRatings mutation and add a new rating.
  }

  if (data)
    return (
      <>
        {/* TODO: Display a Rating: 
        // use the data from avgRating to display 
        // the data using a customisable <Rating/> from the MUI library */}
        <StyledRating
          name="customized-color"
          value={data}
          onChange={(event) => {
            handleChange(event)
          }}
          getLabelText={(value: number) =>
            `${value} Heart${value !== 1 ? 's' : ''}`
          }
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </>
    )
}
