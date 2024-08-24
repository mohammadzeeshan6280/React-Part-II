// Example - 1 Inline CSS
// export default function FourCardInline({data}) {
//     const {img_url, name, rating, description, cast, genre, watch_url } = data;

//     const btn_style = {
//     padding: "1.2rem 2.4rem",
//     border: "none",
//     fontSize: "1.22rem",
//     backgroundColor: "purple",
//     cursor: "pointer",
//     borderRadius : "5px",
//     color: "white",
//     fontWeight: "600",
//     }

//     return (
//       <>
//          <li className="card">
//       <div>
//         <img src={img_url} alt={name} width="40%" />
//       </div>
//       <div className="card-content">
//     <h2>Name : {name}</h2>
    
//     {/*Single Inline Css */}
//      <h3 style={{margin : "1.2rem 0;"}}>Rating : {rating}</h3>

// {/* Inline Css */}
//      <p style={{margin : "1.2rem 0"}}>Summary : {description}</p>

//      <p>Genre : {genre} </p>
//       <p>Cast : {cast} </p>

//    {/*Multiple Inline Css */}
//     {/* <a href={watch_url} target='_blank'>
//    <button style={{padding : "1.2rem 2.4rem",
//    border : "none",
//    fontSize : "1.22rem",
//    backgroundColor : "purple",
//    cursor : "pointer",
//    borderRadius : "5px",
//    color : "white",
//    fontWeight : "600"
//    }}>Watch Now</button></a> */}

//    <a href={watch_url} target='_blank'>
//    <button style={btn_style}>Watch Now</button></a>
//       </div>
//    </li>
//       </>
//   )
// }


// ----------------------------------------------------------

// Example - 2 Inline CSS
export default function FourCardInline({data}) {
    const {img_url, name, rating, description, cast, genre, watch_url } = data;

    const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.22rem",
    backgroundColor: "purple",
    cursor: "pointer",
    borderRadius : "5px",
    color: "white",
    fontWeight: "600",
    }

    return (
      <>
         <li className="card">
      <div>
        <img src={img_url} alt={name} width="40%" />
      </div>
      <div className="card-content">
    <h2>Name : {name}</h2>
     <h3>Rating : {rating}</h3>
     <p>Summary : {description}</p>
     <p>Genre : {genre} </p>
      <p>Cast : {cast} </p>
   <a href={watch_url} target='_blank'>
   <button style={btn_style}>Watch Now</button></a>
      </div>
   </li>
      </>
  )
}






