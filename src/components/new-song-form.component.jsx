import React, { useState } from 'react'

const NewSongForm = ({addSong}) => {

  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    // stop the page refresh after submit the page
    e.preventDefault()
    addSong(title)
    setTitle('')
  }

  return (
    <form onSubmit = {handleSubmit}>
      <label>Song name:</label>
      <input type = "text" value = {title} required onChange = {(e) => setTitle(e.target.value)}/>
      <input type = "submit" value = "add song" />
    </form>
  )
}

export default NewSongForm

/*
useEffect like a bit of lifeCycle methods

when u use functional components, we dont have access to those lifeCycle methods
If u want to run some code, ie: when the component update, then we normally use class components talking to lifeCycle methods

now we can use useEffect instead inside functional components to do just that
it has a callback func, that callback will run everytime the component rendered or re-rendered  <=> everytime the data inside the component changed and also on the initial render
*/ 

