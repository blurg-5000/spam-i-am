import { useAvgRatingById } from '../../hooks/useRatings'
import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Rating from '@mui/material/Rating'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import Typography from '@mui/material/Typography'

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

  function handleChange(event: any) {
    // TODO: Adding a Rating:
    // Some logic to call the useRatings mutation and add a new rating.
  }

  return (
    <>
      <Box sx={{ '& > legend': { mt: 2 } }}>
        <Typography component="legend">Custom icon and color</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={2}
          getLabelText={(value: number) =>
            `${value} Heart${value !== 1 ? 's' : ''}`
          }
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </Box>
    </>
  )
}
