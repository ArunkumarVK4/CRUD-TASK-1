import { Switch,Route } from "react-router-dom";
import "./App.css"
import Student from './StudentComponents/Student';
import AddStud from './StudentComponents/AddStud';
import EditStudent from './StudentComponents/EditStudent';


function App() {
  return (
    <div className="App">
     <Switch>
        {/* Main page */}
        <Route exact path="/">
         <Student/>

        </Route>
        {/* ADD STUDENTS */}
        <Route path="/addStudent">
          <AddStud />
        </Route>
        {/* EDIT STUDENTS */}
        <Route path="/editStudent/:id">
          <EditStudent />
        </Route>
        {/* STAFF DASHBOARD */}
        {/* <Route path="/staff-Dashboard">
          <Staff />
        </Route> */}

        {/* <Route path="/addStaff/:id">
          <AddStaff />
        </Route> */}


      </Switch>
    </div>
  );
}

export default App;



