import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AppPro from "../UseContext/AppProvider";
import Base from "../Base/Base";
import { Button } from "@mui/material";

function EditStudent() {
  const history = useHistory();

  const {
    students,
    setStudents,
    name,
    setName,
    gender,
    setGender,
    sub1,
    setSub1,
    sub2,
    setSub2,
    sub3,
    setSub3,
  } = AppPro();

  const { id } = useParams();
  const edit = students[id];

  // USE EFFECT
  useEffect(() => {
    setName(edit.name);
    setGender(edit.gender);
    setSub1(edit.english);
    setSub2(edit.maths);
    setSub3(edit.physics);
  }, [id, students]);

  function editStudent() {
    const updatedStudent = {
      name,
      gender,
      english: sub1,
      maths: sub2,
      physics: sub3,
    };
    students[id] = updatedStudent;
    setStudents([...students]);
    history.push("/student");
    console.log("object");
  }
  return (
    <Base>
      <div>
        <div style={{margin:"20px"}}>
          <Button variant="contained" onClick={() => history.push("/student")}>
            STUDENT DASHBOARD
          </Button>

          <Button variant="contained"
          style={{marginLeft:"50px"}}
          onClick={() => history.push("/addStudent")}>
            ADD STUDENT
          </Button>
        </div>
        <h3 style={{ margin: "40px" }}>EDIT STUDENT</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "60%",
            margin: "0 auto",
          }}
        >
          {/* Name Input */}
          <input
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              height: "2rem",
              padding: "5px",
            }}
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Gender Input */}
          <input
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              height: "2rem",
              padding: "5px",
            }}
            type="text"
            placeholder="Enter Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          {/* Sub1 Input */}
          <input
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              height: "2rem",
              padding: "5px",
            }}
            type="number"
            placeholder="Enter ENGLISH MARK"
            value={sub1}
            onChange={(e) => setSub1(e.target.value)}
          />
          {/* Sub2 Input */}
          <input
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              height: "2rem",
              padding: "5px",
            }}
            type="number"
            placeholder="Enter MATHS MARK"
            value={sub2}
            onChange={(e) => setSub2(e.target.value)}
          />
          {/* Sub3 Input */}
          <input
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              height: "2rem",
              padding: "5px",
            }}
            type="number"
            placeholder="Enter PHYSICS"
            value={sub3}
            onChange={(e) => setSub3(e.target.value)}
          />{" "}
        </div>
        <br />
        <button type="button" className="btn btn-success" onClick={editStudent}>
          UPDATE STUDENT
        </button>
      </div>
    </Base>
  );
}

export default EditStudent;
