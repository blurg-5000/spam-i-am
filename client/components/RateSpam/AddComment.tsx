import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useAddComment } from '../../hooks/useComments'
import { useParams } from 'react-router-dom'

export default function AddComment() {
  const [form, setForm] = useState('')

  const { id } = useParams()

  const addMutation = useAddComment()
  const { getAccessTokenSilently } = useAuth0()

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm(event.target.value)
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // TODO: get access token
    const token = await getAccessTokenSilently()
    // TODO: call our custom hook mutation and give it form data, spamId and token
    if (id) {
      addMutation.mutate({ spamId: Number(id), comment: form, token })
      setForm('')
    }
  }
  return (
    <>
      <div>Add Comment</div>
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
