
export default function FiveEvent() {

//   const handleButtonClick = () => {
//  alert("Hey I am onClick Event")
//   }

// Example- 1 Named Function
// const handleButtonClick = (event) => {
//   console.log(event)
//   console.log(event.target)
//   console.log(event.type)
//   alert("Hey I am onClick Event")
//    }
   
// Example- 2 Fat Arrow Function
const handleButtonClick = (event) => {
  console.log(event)
    console.log(event.target)
    console.log(event.type)
  alert("Hey I am onClick Event")
   }

   const handleWelcomeUser = (user) => {
    // console.log("Hey User Welcome")
    console.log(`Hey ${user} Welcome`)
   }
   

  return (
    <>
    <h1 style={{textAlign : "center"}}>Event Handler</h1>
    
    {/* Named Function Handler */}
      <button className="btn" onClick={handleButtonClick}>Click Me</button>

       {/* Automatic Function Call */}
       {/* <button className="btn" onClick={handleButtonClick()}>Click Me</button> */}

{/* Inline Fat Arrow Function */}
      {/* <button className="btn" onClick={() => handleButtonClick()}>Click Me 2</button> */}

      {/* Inline Fat Arrow Function */}
      <button className="btn" onClick={(event) => handleButtonClick(event)}>Click Me 2</button>

      {/* Inline Event Handlers */}
      <button className="btn" onClick={(event) => console.log(event)}>Click Me 3</button>
     
     {/* Inline arrow Functions */}
     <button className="btn"  onClick={() => alert("Inline event Function")}>Click Me 4</button>

         {/* Passing Arguments to Event Handlers */}
         {/* <button className="btn"  onClick={handleWelcomeUser("whitehat")}>Click Me 5</button> */}
         <button className="btn"  onClick={() => handleWelcomeUser("whitehat")}>Click Me 5</button>
         <button className="btn"  onClick={() => handleWelcomeUser("Ansari")}>Click Me 6</button>
    </>
  )
}
