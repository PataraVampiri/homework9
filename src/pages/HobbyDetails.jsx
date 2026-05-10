import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function HobbyDetails() {

  const { id } = useParams()

  const hobbies = {
    1: {
      name: "Volleyball",
      desc: "I play volleyball every day for 1 hour",
      image: "https://i.pinimg.com/736x/49/64/8e/49648e77681494ea651f9d034aeb24ad.jpg"
    },

    2: {
      name: "Guitar",
      desc: "I play for 2 hours daily",
      image: "https://i.pinimg.com/1200x/9a/7e/fd/9a7efd1ea834d25247e7a5a7cfaad387.jpg"
    },

    3: {
      name: "Music",
      desc: "I love listening to and playing music",
      image: "https://i.pinimg.com/1200x/e4/6d/d2/e46dd2bf98ce7f99311b1ecf395d8361.jpg"
    }
  }

  const hobby = hobbies[id]

  return (
    <div className="hobby-details">

      <div className="details-card">

        <Link to="/hobbies">← Back</Link>

        <img
          src={hobby.image}
          alt={hobby.name}
          className="details-image"
        />

        <h1>{hobby.name}</h1>

        <p>{hobby.desc}</p>

      </div>

    </div>
  )
}