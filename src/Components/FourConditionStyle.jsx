import styles from "../Components/FourStyle.module.css"

export default function FourConditionCss({data}) {
    const {img_url, name, rating, description, cast, genre, watch_url } = data;

    const btn_style = {
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.22rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        cursor: "pointer",
        borderRadius : "5px",
        color: "#000",
        fontWeight: "600",
        }

        const ratingClass = rating >= 8.4 ? styles.super_hit : styles.average;
    


  return (
    <>
    <li className={styles.card}>
 <div>
   <img src={img_url} alt={name} width="40%" />
 </div>
 {/* <div className="card-content"> */}
 <div className={styles["card-content"]}>
<h2>Name : {name}</h2>
<h3>
Rating : 
<span className={`${styles.rating}  ${ratingClass}`}>{rating}
</span> 
</h3>
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


