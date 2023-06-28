import { useState, useEffect } from 'react'
import React from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect (()=>{
    fetch ("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backendData.users == "undefined") ? 
      "Loading..." : 
      
      (
        backendData.users.map((user, i) => (
          <p id={i}>{user}</p>
        ))
      )
      }
    </div>
  )
}

export default App
