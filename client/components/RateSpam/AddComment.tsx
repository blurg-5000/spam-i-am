import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { useState } from 'react'
import { addComment } from '../../apis/apiClient'
import { useAuth0 } from '@auth0/auth0-react'
import { useParams } from 'react-router-dom'
import { useAddComment } from '../../hooks/useComments'
import { AddComment as NewComment } from '../../../models/spam'

export default function AddComment() {
  const { getAccessTokenSilently } = useAuth0()

  //  TODO: create form state
  const [form, setForm] = useState('')

  //  TODO: get id from params
  const { id } = useParams()

  //  TODO: Call custom hook for addMutation
  const addComment = useAddComment()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // TODO: Update form state
    setForm(event.target.value)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: get access token
    // TODO: if the params id exists, call our custom hook mutation
    // and give it an object with: form data, spamId and token
    try {
      const token = await getAccessTokenSilently()
      const comment = form
      console.log(comment)
      const data: NewComment = { token, comment, spamId: Number(id) }
      addComment.mutate(data)
    } catch (error) {
      alert('Please log in to leave a comment.')
    }
    setForm('')
  }
  return (
    <>
      <div>Add Comment</div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          data-testid="commentbox"
          className="rounded border  border-spamBlue"
          aria-label="Add a comment"
          id="add-comment"
          value={form}
        ></input>
      </form>
    </>
  )
}
