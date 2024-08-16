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

export default function Ratings({ spamId }: { spamId: number }) {
  const { data } = useAvgRatingById(spamId)
  const [value, setValue] = useState<number | null>(4)
  function handleChange(event: any) {
    // console.log(newValue)
    console.log(event.target.value)
    setValue(event.target.value)
  }

  if (data) {
    console.log(data)

    return (
      <>
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
        {/* <Rating name="customized-10" defaultValue={2} max={10} /> */}
      </>
    )
  }
}
