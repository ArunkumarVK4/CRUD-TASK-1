import React from 'react'
import { useHistory } from 'react-router-dom'
import AppPro from '../UseContext/AppProvider'

function Base({children}) {
    const history = useHistory()
    const {setName,setGender,setSub1,setSub2,setSub3} = AppPro();

    function addStudent(){
      setName("")
      setGender("")
      setSub1("")
      setSub2("")
      setSub3("")
      history.push("/addStudent")
    }

  return (
    <div>
      {/* DASHBOARD BUTTON */}
        <button type="button" className="btn btn-primary m-5" onClick={()=>history.push("/")}>DASHBOARD</button>

        <button type="button" className="btn btn-primary m-5" onClick={addStudent}>ADD STUDENTS</button>
<div>
    {children}
</div>
    </div>
  )
}

export default Base