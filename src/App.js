import { createContext, useContext, useEffect, useState } from "react";
import data from "./Data/data";
import Base from "./Base/Base";
import { Switch, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./App.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { green, grey } from "@mui/material/colors";

const studCtx = createContext(null);

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;

function Main() {
  const [students, setStudents] = useState(data);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [sub1, setSub1] = useState("");
  const [sub2, setSub2] = useState("");
  const [sub3, setSub3] = useState("");
  return (
    <div>
      <studCtx.Provider
        value={{
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
        }}
      >
        <Switch>
          {/* Main page */}
          <Route exact path="/">
            <Student />
          </Route>
          {/* ADD STUDENTS */}
          <Route path="/add">
            <AddStud />
          </Route>
          {/* EDIT STUDENTS */}
          <Route path="/edit/:id">
            <EditStudent />
          </Route>
        </Switch>
      </studCtx.Provider>
    </div>
  );
}

// Students DashBoard Page Create
function Student() {
  const {
    students,
    setStudents,

  } = useContext(studCtx);

  const history = useHistory();

  // Delete Function
  function deleteStudent(index) {
    const remainingStudent = students.filter((e, idx) => idx !== index);
    setStudents(remainingStudent);
  }
  return (
    <Base>




      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          {/* Card Details */}
          {students.map((e, idx) => (
            <div className="col-xl-3 col-sm-6" key={idx}>
              <Card sx={{ maxWidth: 200, margin :5,backgroundColor:green }}>
      <CardContent sx={{padding:3, backgroundColor:""}}>
        <Typography gutterBottom variant="h5" component="div">
         {e.name}
        </Typography>
        <hr />
        <Typography variant="body2" color="text.secondary">
        Gender: {e.gender}
        </Typography>

        <Typography variant="body2" color="text.secondary">
        English : {e.english}
          </Typography>

          <Typography variant="body2" color="text.secondary">
          Maths : {e.maths}
          </Typography>

          <Typography variant="body2" color="text.secondary">
          physics : {e.physics}
          </Typography>

      </CardContent>
      <hr />
      <CardActions>
       {/* Edit Button */}
       <Button
                    type="Button"
                    className="btn btn-primary mr-5"
                    variant="contained"
                    onClick={() => history.push(`/edit/${idx}`)}
                  >
                    EDIT
                  </Button>
                  {/* Delete Button */}
                  <Button
                    type="Button"
                    className="btn btn-danger"
                    variant="contained"
                    onClick={() => deleteStudent(idx)}
                  >
                    DELETE
                  </Button>
              
      </CardActions>
    </Card>
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
}

function AddStud() {
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
  } = useContext(studCtx);

  // ADD STUDENT FUNCTION
  function addStudent() {
    const newStudent = {
      name,
      gender,
      sub1,
      sub2,
      sub3,
    };
    setStudents([...students, newStudent]);
    history.push("/")
  }

  return (
    <Base>
      <div>
        <h3>ADD STUDENT</h3>
        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Gender Input */}
        <input
          type="text"
          placeholder="Enter Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        {/* Sub1 Input */}
        <input
          type="number"
          placeholder="Enter ENGLISH MARK"
          value={sub1}
          onChange={(e) => setSub1(e.target.value)}
        />
        {/* Sub2 Input */}
        <input
          type="number"
          placeholder="Enter MATHS MARK"
          value={sub2}
          onChange={(e) => setSub2(e.target.value)}
        />
        {/* Sub3 Input */}
        <input
          type="number"
          placeholder="Enter PHYSICS"
          value={sub3}
          onChange={(e) => setSub3(e.target.value)}
        />{" "}
        <br /> <br />
        <button type="button" className="btn btn-success" onClick={addStudent}>
          ADD STUDENT
        </button>
      </div>
    </Base>
  );
}

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
  } = useContext(studCtx);

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
    history.push("/")

  }
  return (
    <Base>
      <div>
        <h3>EDIT STUDENT</h3>
        {/* Name Input */}
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* Gender Input */}
        <input
          type="text"
          placeholder="Enter Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        {/* Sub1 Input */}
        <input
          type="number"
          placeholder="Enter ENGLISH MARK"
          value={sub1}
          onChange={(e) => setSub1(e.target.value)}
        />
        {/* Sub2 Input */}
        <input
          type="number"
          placeholder="Enter MATHS MARK"
          value={sub2}
          onChange={(e) => setSub2(e.target.value)}
        />
        {/* Sub3 Input */}
        <input
          type="number"
          placeholder="Enter PHYSICS"
          value={sub3}
          onChange={(e) => setSub3(e.target.value)}
        />{" "}
        <br />
        <button type="button" className="btn btn-success" onClick={editStudent}>
          UPDATE STUDENT
        </button>
      </div>
    </Base>
  );
}

// const {name,setName,gender,setGender} = useContext(studCtx);

// const handleChange = ({ target: { name, value } }) => { setUser((data) => { return { ...data, [name]: value }; }); };
// const [user, setUser]= useState({email,password})
// function nameChange(){
//   setName(e.target.value)
// }
// return(
//   <div >

//           <input key={idx}
//           type="text"
//           placeholder="Enter Name"
//           name="email"
//           onChange={handleChange}

//           />
//           </div>

//     ))}

//     function React(){
//       return(
//         <div></div>
//       )
//     }
