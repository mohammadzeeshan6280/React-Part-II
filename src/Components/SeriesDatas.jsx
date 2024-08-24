// import SeriesData from "../api/SeriesData.json"
// import FirstProps from "./FirstProps"

// export default function SeriesDatas() {
//   return (
//     <>
//       <ul>
//       {SeriesData.map((curElem) => ( <FirstProps key={curElem.id} curElem={curElem}/>
//        ))}
//      </ul>
//         </>
//   )
// }

import SeriesData from "../api/SeriesData.json";
import FirstProps from "./FirstProps";

export default function SeriesDatas() {
  return (
    <>
      <ul>
        {SeriesData.map((curElem) => (
          <FirstProps key={curElem.id} curElem={curElem} />
        ))}
      </ul>
    </>
  );
}
