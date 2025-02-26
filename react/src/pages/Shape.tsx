import React from 'react'
import AnimatedShape from '../components/Trapezium'

export default function Shape() {
  return (
    <div
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
      }}
    >
      <AnimatedShape />
    </div>
  )
}
