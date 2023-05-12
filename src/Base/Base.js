import React from 'react'
import { useHistory } from 'react-router-dom'


function Base({children}) {
    const history = useHistory()
  return (
    <div>
      {/* DASHBOARD BUTTON */}
        <button type="button" className="btn btn-primary m-5" onClick={()=>history.push("/")}>DASHBOARD</button>

        <button type="button" className="btn btn-primary m-5" onClick={()=>history.push("/add")}>ADD STUDENTS</button>
<div>
    {children}
</div>
    </div>
  )
}

export default Base