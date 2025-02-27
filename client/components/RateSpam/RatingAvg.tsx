// import React from 'react'
import { styled } from '@mui/material/styles'
import Rating from '@mui/material/Rating'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useEffect, useState } from 'react'
import { useAvgRatingById, useRatingMutation } from '../../hooks/useRatings'
import { useAuth0 } from '@auth0/auth0-react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
})

export default function RatingAvg({ spamId }: { spamId: number }) {
  const { data, refetch } = useAvgRatingById(spamId)
  // State to track the user's selected rating temporarily
  const [tempUserRating, setTempUserRating] = useState<number | null>(null)
  // State to track if we're in a "submitting" state
  const [isSubmitting, setIsSubmitting] = useState(false)
  // Get the current user ID
  const { getAccessTokenSilently } = useAuth0()

  // Initialize the mutation
  const { mutate, isPending, isSuccess, isError, error } = useRatingMutation()

  // handle successful submission
  useEffect(() => {
    if (isSuccess && isSubmitting) {
      // Reset submission state
      setIsSubmitting(false)

      // Clear temp user rating so we show the average again
      setTempUserRating(null)

      // Refetch the average rating to get the updated value
      refetch()
    }
  }, [isSuccess, refetch, isSubmitting])

  // Handler for rating change - fixed to correctly use the newValue parameter
  async function handleChange(
    event: React.SyntheticEvent,
    newValue: number | null,
  ) {
    event.preventDefault()
    if (newValue !== null) {
      // Set temporary rating for display during submission
      setTempUserRating(newValue)
      setIsSubmitting(true)

      try {
        // Get access token
        const token = await getAccessTokenSilently()

        // Submit the rating
        mutate({ spamId, rating: newValue, token })

        // Note: We don't refetch here - we'll do it in the useEffect after success
      } catch (error) {
        console.error('Failed to get token:', error)
        setIsSubmitting(false)
      }
    } else {
      setTempUserRating(null)
    }
  }
  // Value to display in the rating component
  // During submission, show tempUserRating; otherwise show the average
  const displayValue = isSubmitting ? tempUserRating : data
  return (
    <Box>
      <StyledRating
        name="customized-color"
        value={displayValue ?? 0}
        onChange={handleChange} // Now correctly passing both arguments
        getLabelText={(value: number) =>
          `${value} Heart${value !== 1 ? 's' : ''}`
        }
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        disabled={isPending || isSubmitting}
      />

      {(isPending || isSubmitting) && (
        <Typography variant="caption">Submitting rating...</Typography>
      )}
      {isError && (
        <Typography variant="caption" color="error">
          Error: {(error as Error)?.message || 'Failed to submit rating'}
        </Typography>
      )}
      {isSuccess && !isSubmitting && (
        <Typography variant="caption" color="success.main">
          Rating submitted!
        </Typography>
      )}
    </Box>
  )
}
