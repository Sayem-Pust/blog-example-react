import React from 'react'

export default function Comment({ serial, name, email, body }) {
  return (
    <div>
      <h4>
        <strong>{serial + 1}</strong>
      </h4>
      <h5>
        Name: <strong>{name}</strong>
      </h5>
      <h5>
        <strong>Email:</strong> {email}
      </h5>
      <p>
        <strong>Message: </strong>
        {body}
      </p>
    </div>
  );
}
