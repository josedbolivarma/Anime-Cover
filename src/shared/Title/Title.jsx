import React from 'react';

export const Title = ({ title, size = 2.3, ml = 0, color = "#FFF", mb = 0 }) => {
  return (
    <div>
        <h2 
          style={{
            fontSize: `${size}rem`,
            marginLeft: `${ml}rem`,
            marginBottom: `${mb}rem`,
            color,
          }}
          >
          { title }
        </h2>
    </div>
  )
}