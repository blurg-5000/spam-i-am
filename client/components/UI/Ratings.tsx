// import React from 'react'
import { styled } from '@mui/material/styles'
import Rating from '@mui/material/Rating'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useState } from 'react'

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
})

export default function Ratings() {
  const [value, setValue] = useState<number | null>(4)
  function handleChange(event: any) {
    // console.log(newValue)
    console.log(event.target.value)
    setValue(event.target.value)
  }
  return (
    <>
      <StyledRating
        name="customized-color"
        value={value}
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
