// Example - 1
// export default function SecondPropsCard(props) {
//   console.log(props);
//   return (
//     <>
//     <li key={props}>
//     <div>
//       <img src={props.curElem.img_url} alt={props.curElem.name} width="80%" />
//     </div>
//   <h2>Name : {props.curElem.name}</h2>
//    <h3>Rating : {props.curElem.rating}</h3>
//    <p>Summary : {props.curElem.description}</p>
//    <p>Genre : {props.curElem.genre} </p>
//     <p>Cast : {props.curElem.cast} </p>
//   <a href={props.curElem.watch_url} target='_blank'>
//  <button>Watch Now</button></a>
//  </li>
// </>
//   )
// }

// Example - 2
// export default function SecondPropsCard(props) {
//   console.log(props);
//   return (
//     <>
//     <div>
//       <img src={props.data.img_url} alt={props.data.name} width="80%" />
//     </div>
//   <h2>Name : {props.data.name}</h2>
//    <h3>Rating : {props.data.rating}</h3>
//    <p>Summary : {props.data.description}</p>
//    <p>Genre : {props.data.genre} </p>
//     <p>Cast : {props.data.cast} </p>
//   <a href={props.data.watch_url} target='_blank'>
//  <button>Watch Now</button></a>
// </>
//   )
// }

// // Example - 3
// export default function SecondPropsCard(props) {
//   console.log(props);
//   // const { data } = props;
//   const { id, img_url, name, rating, description, cast, genre, watch_url } = props.data;
//   return (
//     <>
//       <li>
//         <div>
//           <img src={img_url} alt={name} width="40%" />
//         </div>
//         <h2>Name : {name}</h2>
//         <h3>Rating : {rating}</h3>
//         <p>Summary : {description}</p>
//         <p>Genre : {genre} </p>
//         <p>Cast : {cast} </p>
//         <a href={watch_url} target="_blank">
//           <button>Watch Now</button>
//         </a>
//       </li>
//     </>
//   );
// }

// Example - 3
export default function SecondPropsCard({data}) {
  const { id, img_url, name, rating, description, cast, genre, watch_url } = data;

  return (
    <>
      <li>
        <div>
          <img src={img_url} alt={name} width="40%" />
        </div>
        <h2>Name : {name}</h2>
        <h3>Rating : {rating}</h3>
        <p>Summary : {description}</p>
        <p>Genre : {genre} </p>
        <p>Cast : {cast} </p>
        <a href={watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
      </li>
    </>
  );
}

