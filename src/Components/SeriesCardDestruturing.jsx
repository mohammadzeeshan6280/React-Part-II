// import SeriesData from "../api/SeriesData.json";
// import SecondPropsCard from "./SecondPropsCard";


// export default function SeriesCardDestruturing() {
//   return (
//     <>
//     <ul>
//       {SeriesData.map((curElem) => (
//         <SecondPropsCard key={curElem.id} curElem={curElem} />
        
//       ))}
//     </ul>
//   </>
//   )
// }



import SeriesData from "../api/SeriesData.json";
import SecondPropsCard from "./SecondPropsCard";


export default function SeriesCardDestruturing() {
  return (
    <>
    <ul>
      {SeriesData.map((curElem) => (
        <SecondPropsCard key={curElem.id} data={curElem} />
        
      ))}
    </ul>
  </>
  )
}

