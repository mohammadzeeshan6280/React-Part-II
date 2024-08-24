
export default function FiveEventProps() {

    const HandleWelcomeUser = (user) => {
        alert(` Hey ${user}`)
    }

    const handleHover = () => {
        alert("Hey Thanks for Hovering me")
    };

  return (
   <>
      <WelcomeUser className="btn"
       onClick={() => HandleWelcomeUser("ansari")}
       onMouseEnter={handleHover}

       />
   </>
  )
}

// Example - 2
// const WelcomeUser = (props) => {
//     const handleGreeting = () => {
//         console.log("Hey User , Welcome")
//         props.onClick();
//     }
// return (
//     <>
//         <button className="btn" onClick={props.onClick}>Click me</button>
//         <button className="btn" onMouseEnter={props.onMouseEnter}>Hover me</button>
//         <button className="btn" onClick={handleGreeting}>Greeting</button>
//     </>
// )
// }

const WelcomeUser = (props) => {
    const {onClick, onMouseEnter} = props;
    const handleGreeting = () => {
        console.log("Hey User , Welcome")
        onClick();
    }
return (
    <>
        <button className="btn" onClick={onClick}>Click me</button>
        <button className="btn" onMouseEnter={onMouseEnter}>Hover me</button>
        <button className="btn" onClick={handleGreeting}>Greeting</button>
    </>
)
}
