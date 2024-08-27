import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useAddComment } from '../../hooks/useComments'
import { useParams } from 'react-router-dom'

export default function AddComment() {
  const [form, setForm] = useState('')
  const { getAccessTokenSilently } = useAuth0()
  const { id } = useParams()
  const addMutation = useAddComment()
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm(event.target.value)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('submitted')
    const token = await getAccessTokenSilently()

    // TODO: call our custom hook mutation and give it form data and the token

    if (id) {
      const newComment = { spamId: Number(id), comment: form }
      console.log(typeof token)

      addMutation.mutate(newComment, token)
      setForm('')
    }
  }
  return (
    <>
      <div>AddComment</div>
      <form onSubmit={handleSubmit}>
        <input
          className="rounded border  border-spamBlue"
          aria-label="Add a comment"
          id="add-comment"
          value={form}
          onChange={handleChange}
          autoFocus={true}
        ></input>
      </form>
    </>
  )
}
