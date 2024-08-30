import { useAvgRatingById } from '../../hooks/useRatings'
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
  const { data, isPending, isError, error } = useAvgRatingById(spamId)

  if (isPending) return <p>Spam ratings loading!</p>

  if (isError) return <p>No spam ratings!{String(error)}</p>

  // function handleChange(event: any) {
  //   // TODO: Adding a Rating:
  //   // Some logic to call the useRatings mutation and add a new rating.
  // }

  return (
    <>
      <Box sx={{ '& > legend': { mt: 2 } }}>
        <Typography component="legend">Rating:</Typography>
        <StyledRating
          name="customized-color"
          defaultValue={data}
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
