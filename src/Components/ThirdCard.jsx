
export default function ThirdCard({data}) {
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
