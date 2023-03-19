import React from 'react'
import { RingLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh"
    }}>
        <RingLoader color="#36d7b7" size={180} />
    </div>
  )
}
