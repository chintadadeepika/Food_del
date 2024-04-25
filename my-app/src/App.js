import Textfield from "./component/Textfield";
import './App.css'
// import  {Button}  from "react-bootstrap";



function App() {
  return (
   <>
   
   <div className="container">
   <Textfield
     heading="Count Your Word!!"
     />
   </div>
     
   {/* <Button onClick={()=>alert("Hello world")}>Click ME</Button> */}
   
   </>
  );
}

export default App;