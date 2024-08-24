import SeriesData from "../api/SeriesData.json";
import ThirdCard from "./ThirdCard";

export default function ThirdPassingProps() {
    return (
        <>
        <ul className="grid grid-three-cols">
          {SeriesData.map((curElem) => (
            <ThirdCard key={curElem.id} data={curElem} />
            
          ))}
        </ul>
      </>
      )
}
