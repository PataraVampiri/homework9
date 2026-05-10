import React from 'react'
import { Link } from 'react-router-dom'

export default function Hobby() {

  const hobbies = [
    { id: 1, name: "Volleyball" },
    { id: 2, name: "Guitar" },
    { id: 3, name: "Music" }
  ]

  return (
    <div className="hobbies-page">

      <div className="hobbies-container">

        <h1>Hobbies</h1>

        {hobbies.map((hobby) => (
          <div key={hobby.id} className="hobby-card">

            <h3>{hobby.name}</h3>

            <Link to={`/hobby/${hobby.id}`}>
              Open Hobby
            </Link>

          </div>
        ))}

      </div>

    </div>
  )
}