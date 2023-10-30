import './App.css'
import Team from './Team';
import Student from './Student';
import Users from './Users';
import Photo from './Photo';

function App() {
  
  

  function handleClick(){
    alert ("button clicked");
  }
  // aro onno vabow kora jai ta holo :
  const handleClick2 = () => {
           alert("clicked 2nd")
  }
  function AaddToFive(sum){
    alert(sum+5)

  }
  return (
    <>
    <Photo></Photo>
    <Users></Users>
    <Student></Student>
    <Team></Team>
      <h1>React Core Concept 2</h1>
       <button className='button' onClick={handleClick}>Click Me</button>
       <button className='button' onClick={handleClick2}>Click ME2</button>
            {/* arrow function babohar kore button alert  */}
            <button className='button' onClick={()=>{alert
              ('click me3')
            }}>Click Third</button>
            <button onClick={()=> AaddToFive(5)}>four</button>
    </>
  )
}

export default App
