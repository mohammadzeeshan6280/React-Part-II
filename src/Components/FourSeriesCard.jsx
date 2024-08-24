// Example - 1 FourCard Data
// import SeriesData from "../api/SeriesData.json";
// import FourCard from "./FourCard";


// export default function FourSeriesCard() {
//   return (
//     <>
//     <ul className="grid grid-three-cols">
//       {SeriesData.map((curElem) => (
//         <FourCard key={curElem.id} data={curElem} />
        
//       ))}
//     </ul>
//     </>
//   )
// }


// Example - 2 FourCardInline Inline Css Data Render
// import FourCardInline from "../Components/FourCardInline"
// import SeriesData from "../api/SeriesData.json";

// export default function FourSeriesCard() {
//   return (
//     <>
//     <ul className="grid grid-three-cols">
//       {SeriesData.map((curElem) => (
//         <FourCardInline key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//     </>
//   )
// }


// Example - 2 FourConditionCss Condition Css Data Render
// import SeriesData from "../api/SeriesData.json";
// import FourConditionCss from "../Components/FourConditionCss"

// export default function FourSeriesCard() {
//   return (
//     <>
//     <ul className="grid grid-three-cols">
//       {SeriesData.map((curElem) => (
//         <FourConditionCss key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//     </>
//   )
// }

// Example - 3 FourConditionStyle Condition Css Data Render
// import SeriesData from "../api/SeriesData.json";
// import FourConditionStyle from "../Components/FourConditionStyle"

// export default function FourSeriesCard() {
//   return (
//     <>
//     <ul className="grid grid-three-cols">
//       {SeriesData.map((curElem) => (
//         <FourConditionStyle key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//     </>
//   )
// }


// Example - 4 Styled Components in Packages Css Data Render
// import SeriesData from "../api/SeriesData.json";
// import FourStyleComponents from "./FourStyleComponents";

// export default function FourSeriesCard() {
//   return (
//     <>
//     <ul className="grid grid-three-cols">
//       {SeriesData.map((curElem) => (
//         <FourStyleComponents key={curElem.id} data={curElem} />
//       ))}
//     </ul>
//     </>
//   )
// }


import SeriesData from "../api/SeriesData.json";
import FourTailwindCss from "./FourTailwindCss";

export default function FourSeriesCard() {
  return (
    <>
    <ul className="grid grid-three-cols">
      {SeriesData.map((curElem) => (
        <FourTailwindCss key={curElem.id} data={curElem} />

      ))}
    </ul>
    </>
  )
}




