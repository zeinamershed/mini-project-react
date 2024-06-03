import React from 'react'
import Tasks from '../components/Tasks'

const DashBoard = (props) => {
  return (
    <div>
          <main className="main">
          <button className="main-button">To-do List</button>
          <Tasks data={props.dataState} deleteToDo={props.deleteToDo} />
        </main>
    </div>
  )
}

export default DashBoard
