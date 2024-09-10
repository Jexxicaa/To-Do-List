//This is the component where users can type in a new task and add it.

import React from 'react'

export default function ToDoInput() {
  return (
    <header>
        <input placeholder="Type a task here!"/>
        <button>Add</button>
    </header>
  )
}
