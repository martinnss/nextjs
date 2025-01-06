//layout va a estar dentro de todos los elemtnos dentro de dashboard
import React from "react"

const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <p>navbar dashboard</p>
        {children} {/* esto afecatá todo dentro de dashboard*/}
        <p>footer dashboard</p>
    </div>
  )
}

export default layout