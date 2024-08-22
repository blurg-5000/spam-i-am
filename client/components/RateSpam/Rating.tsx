interface Props {
  spamId: number
}

function Rating({ spamId }: Props) {
  console.log(spamId)
  // call the useAvgRatingById function inside useRatings.ts to render the avg rating for a spam in the browser
  return <p>rating TBC</p>
}
export default Rating
