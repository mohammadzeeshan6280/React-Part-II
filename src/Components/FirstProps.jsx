
// import SeriesData from "../api/SeriesData.json"

// export default function FirstProps() {
//   return (
//     <>
//  <ul>   {SeriesData.map((curElem) => {
//      return (
//          <li key={curElem.id}>
// <div>
//      <img src={curElem.img_url} alt={curElem.name} width="80%" />
//     </div>
//    <h2>Name : {curElem.name}</h2>
//     <h3>Rating : {curElem.rating}</h3>
//     <p>Summary : {curElem.description}</p>
//     <p>Genre : {curElem.genre} </p>
//      <p>Cast : {curElem.cast} </p>
//   <a href={curElem.watch_url} target='_blank'>
//   <button>Watch Now</button></a>
//      </li>
//          )
        
//     })}
//      </ul>
//      </>
//   )
// }



export default function FirstProps(props) {
  console.log(props);
  return (
    <>
    <li key={props}>
    <div>
      <img src={props.curElem.img_url} alt={props.curElem.name} width="80%" />
    </div>
  <h2>Name : {props.curElem.name}</h2>
   <h3>Rating : {props.curElem.rating}</h3>
   <p>Summary : {props.curElem.description}</p>
   <p>Genre : {props.curElem.genre} </p>
    <p>Cast : {props.curElem.cast} </p>
  <a href={props.curElem.watch_url} target='_blank'>
 <button>Watch Now</button></a>
 </li>
</>
  )
}