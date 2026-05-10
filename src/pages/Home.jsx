import React from 'react'

export default function home() {
  return (
<div className="home">
      <div className="profile-card">
        <img
          src="https://static-cdn.jtvnw.net/jtv_user_pictures/2107a86b-d8c8-433a-8a6f-5dbebd6e5904-profile_image-300x300.png"
          alt="Profile"
          className="profile-image"
        />

        <h1>my name is Anastasia Dzotsenidze</h1>

        <p  className="bio">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, sit!
        </p>

        <div className="info">
          <p>Contact Info : 599 899 661</p>
         
            <p>
              Github:
              <a
                href="https://github.com/PataraVampiri"
                target="_blank"
                rel="noopener noreferrer"
              >
                PataraVampir
              </a>
            </p>
          <p>Gmail:taso.dzotsenidze2012@gmail.com</p>
        </div>
      </div>
    </div>  
    )
}
