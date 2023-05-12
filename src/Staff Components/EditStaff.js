import React, { useEffect } from 'react'
import AppPro from '../UseContext/AppProvider';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import {Button, TextField } from '@mui/material';
import Base from '../Base/Base';

 function EditStaff() {
    const { staffs,setStaffs,staffsName,setStaffsName,staffsGender,setStaffsGender,staffSubject,setStaffSubject,staffQualification,setsStaffQualification } = AppPro();

    const { id } = useParams();
    
    const history = useHistory()

  const sData = staffs[id];
  
  useEffect(() => {
    setStaffsName(sData.name)
    setStaffsGender(sData.gender);
    setStaffSubject(sData.subject);
    setsStaffQualification(sData.qualification)
  }, [sData]);


  function editStaff() {
    const newStaff = {
      name : staffsName,
      gender : staffsGender,
      subject:staffSubject,
      qualification:staffQualification ,
    }
    staffs[id]=newStaff
   setStaffs([...staffs]);
    history.push("/staffs")
  }

 
  return (
    <Base>
    <div>
    <Button variant="contained" onClick={()=>history.push("/addStaff")}>ADD STAFF</Button>
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        margin: "0 auto",
        marginTop: "10%",
      }}
    >
      <TextField
        id="filled-basic"
        variant="filled"
        className="m-3"
        value={staffsName}
        onChange={(e) => setStaffsName(e.target.value)} />

      <TextField
        id="filled-basic"
        variant="filled"
        className="m-3"
        value={staffsGender}
        onChange={(e) => setStaffsGender(e.target.value)} />

      <TextField
        id="filled-basic"
        variant="filled"
        className="m-3"
        value={staffSubject}
        onChange={(e) => setStaffSubject(e.target.value)} />

      <TextField
        id="filled-basic"
        variant="filled"
        className="m-3"
        value={staffQualification}
        onChange={(e) => setsStaffQualification(e.target.value)} />

      <Button variant="contained" className="m-5" onClick={editStaff}>
        UPDATE STAFF
      </Button>
    </div>
    </Base>
  )
}

export default EditStaff