import React, { useState, useEffect } from 'react'
import uuid from "uuid/v1"
import NewSongForm from './new-song-form.component'

const SongList = () => {
  // use this hook at the top. 1st, invoking it
  // this hook accept an arg, which is gonna be the initial value for this piece of state that we want to use 
  // so we define a property of state inside this function

  // those 3 values are the initial values of the state
  // this state return you 2 things
  // the first is state value & 2nd is an function that help you to change the state

  // now u can use song to reference this array of data
  const [songs, setSongs] = useState([
    {title: "almost home", id: 1},
    {title: "memory gospel", id: 2},
    {title: "this wild darkness", id: 3},
  ])

  const [age, setAge] = useState(15)

  // to change the data with setSongs
  // inside (), you pass whatever value you want to be
  // u still want it be an array so u pass in an array, this will completely replace whatever the current value songs is, use ... spread syntax. 

  // it will put each and every element currently in the songs array, into this new array
  // then you want new additional items in this array
  const addSong = (title) => {
    setSongs([...songs, {title, id: uuid()}])
  }

  // only run this callback when the data inside this array changed
  // only run useEffect hook when the songs data changed and not when age data changed
  // this how we limit this callback 
  useEffect(() => {
    console.log('useEffect hook ran', songs)
  }, [songs])

  useEffect(() => {
    console.log('useEffect hook ran', age)
  }, [age])

  return (
    <div className = "song-list">
      <ul>
        {songs.map(song => {
          return (
            <li key = {song.id}> {song.title} </li>
          )
        })}
      </ul>
      <NewSongForm addSong = {addSong} />
      <button onClick = {() => setAge(age + 1)}> Add 1 to age: {age} </button>
    </div>
  )
}

export default SongList

/*
Now you can use state inside the functional component as well, by using a hook called 'useState' 

it is a function and allows you to use a piece of state inside this component
*/ 