import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <h1>Syslog Blog</h1>
      <p>
        <Link to="/blog">View Blog</Link>
      </p>
    </div>
  )
}
