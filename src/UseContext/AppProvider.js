import React, { useContext } from 'react'
import { useState,createContext } from 'react';
import data from '../Data/data';
import staffData from '../Data/StaffData';



const studCtx = createContext(null);

export function AppProvider({children}) {
    
    const [students, setStudents] = useState(data);
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [sub1, setSub1] = useState("");
    const [sub2, setSub2] = useState("");
    const [sub3, setSub3] = useState("");
    const [staffs, setStaffs] = useState(staffData);
    const [staffsName, setStaffsName] = useState("");
    const [staffsGender, setStaffsGender] = useState("");
    const [staffSubject, setStaffSubject] = useState("");
    const [staffQualification, setsStaffQualification] = useState("");

 
  return (
    <div>
    <studCtx.Provider  
    value={{students,setStudents,name,setName,gender,setGender,sub1,setSub1,sub2,setSub2,sub3,setSub3,staffs,setStaffs,staffsName,setStaffsName,staffsGender,setStaffsGender,staffSubject,setStaffSubject,staffQualification,setsStaffQualification}}
    >
        {children}
    </studCtx.Provider>
    </div>
  )
}
export default function AppPro(){
    return useContext(studCtx)
};


