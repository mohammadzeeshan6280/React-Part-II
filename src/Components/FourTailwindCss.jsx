// #22: Tailwind CSS in React v19: Installing and Using Tailwind CSS to Style Your React App

// import styles from "../Components/FourStyle.module.css";
// import styled from "styled-components";

// export default function FourTailwindCss({data}) {
//     const {img_url, name, rating, description, cast, genre, watch_url } = data;

//     // const btn_style = { }
//      // Example - 1 Styled in Objects
//     // const ButtonAnsari = styled.button({
//     //         padding: "1.2rem 2.4rem",
//     //         border: "none",
//     //         fontSize: "1.22rem",
//     //         backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
//     //         cursor: "pointer",
//     //         borderRadius : "5px",
//     //         color: "#000",
//     //         fontWeight: "600",
//     //     });

//         // Example - 2 Styled in Template Literals
//         const ButtonAnsari = styled.button`
//             padding: 1.2rem 2.4rem;
//             border: none;
//             font-size: 1.22rem;
//             background-color: ${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
//             cursor: pointer;
//             border-radius : 5px;
//             color: #000;
//             font-weight: 600;
//         `;

//         const ratingClass = rating >= 8.4 ? styles.super_hit : styles.average;
    

//         const Rating = styled.h3`
//         font-size : 1.6rem;
//         color : red;
//         text-transform : capitalize;
//         `;


//   return (
//     <>
//     <li className={styles.card}>
//  <div>
//    <img src={img_url} alt={name} width="40%" />
//  </div>
//  {/* <div className="card-content"> */}
//  <div className={styles["card-content"]}>
// <h2>Name : {name}</h2>
// {/* <h3>
// Rating : 
// <span className={`${styles.rating}  ${ratingClass}`}>{rating}
// </span> 
// </h3> */}

// <Rating>
// Rating : 
// <span className={`${styles.rating}  ${ratingClass}`}>{rating}
// </span> 
// </Rating>
// <p className="text-3xl font-bold underline">Summary : {description}</p>
// <p>Genre : {genre} </p>
// <p>Cast : {cast} </p>
// <a href={watch_url} target='_blank'>
// {/* <button style={btn_style}>Watch Now</button> */}
// {/* <ButtonAnsari>Watch Now</ButtonAnsari> */}
// <ButtonAnsari rating={rating}>Watch Now</ButtonAnsari>

// </a>
//  </div>
// </li>
//  </>
//   )
// }



// Tailwind Css Using for React Js
import styles from "../Components/FourStyle.module.css";
import styled from "styled-components";

export default function FourTailwindCss({data}) {
    const {img_url, name, rating, description, cast, genre, watch_url } = data;

    // const btn_style = { }
     // Example - 1 Styled in Objects
    // const ButtonAnsari = styled.button({
    //         padding: "1.2rem 2.4rem",
    //         border: "none",
    //         fontSize: "1.22rem",
    //         backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
    //         cursor: "pointer",
    //         borderRadius : "5px",
    //         color: "#000",
    //         fontWeight: "600",
    //     });

        // Example - 2 Styled in Template Literals
        const ButtonAnsari = styled.button`
            padding: 1.2rem 2.4rem;
            border: none;
            font-size: 1.22rem;
            background-color: ${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
            cursor: pointer;
            border-radius : 5px;
            color: #000;
            font-weight: 600;
        `;

        const ratingClass = rating >= 8.4 ? styles.super_hit : styles.average;
    

        const Rating = styled.h3`
        font-size : 1.6rem;
        color : red;
        text-transform : capitalize;
        `;


  return (
    <>
    <li className="flex flex-col gap-6 py-2">
 <div>
   <img src={img_url} alt={name} width="40%" />
 </div>
 {/* <div className="card-content"> */}
 <div className={styles["card-content"]}>
<h2>Name : {name}</h2>
{/* <h3>
Rating : 
<span className={`${styles.rating}  ${ratingClass}`}>{rating}
</span> 
</h3> */}

<Rating>
Rating : 
<span className={`${styles.rating}  ${ratingClass}`}>{rating}
</span> 
</Rating>
<p className="text-3xl font-bold underline">Summary : {description}</p>
<p>Genre : {genre} </p>
<p>Cast : {cast} </p>
<a href={watch_url} target='_blank'>
{/* <button style={btn_style}>Watch Now</button> */}
{/* <ButtonAnsari>Watch Now</ButtonAnsari> */}
<ButtonAnsari rating={rating}>Watch Now</ButtonAnsari>

</a>
 </div>
</li>
 </>
  )
}



