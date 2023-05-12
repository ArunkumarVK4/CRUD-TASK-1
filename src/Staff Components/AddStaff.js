import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Swal from "sweetalert";
import AppPro from "../UseContext/AppProvider";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export function AddStaff() {
  const { staffsName, setStaffsName, setStaffsGender, setStaffSubject, setsStaffQualification, staffsGender, staffSubject, staffQualification, staffs, setStaffs } = AppPro();

  const history = useHistory()

  function addStaff() {
    if (!staffsName || !staffsGender || !staffSubject || !staffQualification) {
      Swal("Field To Add", "Please fill all the Fields", "error");
    } else {
      const newStaff = {
        name: staffsName,
        gender: setStaffsGender,
        subject: staffSubject,
        qualification: staffQualification,
      };
      setStaffs([...staffs, newStaff]);
      history.push("/staffs")
    }
  }
  return (
    <Base>
    <Button variant="contained"
    onClick={()=>history.push("/staffs")}
    >STAFF DASHBOARD</Button>
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
        label="ENTER NAME"
        variant="filled"
        className="m-3"
        onChange={(e) => setStaffsName(e.target.value)} />

      <TextField
        id="filled-basic"
        label="ENTER GENDER"
        variant="filled"
        className="m-3"
        onChange={(e) => setStaffsGender(e.target.value)} />

      <TextField
        id="filled-basic"
        label="ENTER SUBJECT"
        variant="filled"
        className="m-3"
        onChange={(e) => setStaffSubject(e.target.value)} />

      <TextField
        id="filled-basic"
        label="ENTER QUALIFICATION"
        variant="filled"
        className="m-3"
        onChange={(e) => setsStaffQualification(e.target.value)} />

      <Button variant="contained" className="m-5" onClick={addStaff}>
        ADD NEW STAFF
      </Button>
    </div>
    </Base>
  );
}
