import React, { useEffect, useState } from "react";

const Hero = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://kinotime.world/api/banners?lang=uz")
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.error(err));
  }, []);

  if (!movies || movies.length === 0) return <p>Hech qanday film topilmadi.</p>;

  return (
    <div>
      {movies.map(item => {
        const movie = item.movie;
        return (
          <section key={movie.id} className="w-full h-[100vh] flex flex-col justify-center  bg-cover bg-center"
            style={{ backgroundImage: `url('https://kinotime.world${movie.backdrop}')`  }}>
            <div className="w-[500px] pl-[50px] ">
              <h2 className="text-[22px] text-white font-bold w-[50%] text-center ">{movie.title}</h2>
              {/* <p className="italic">{movie.originalTitle}</p>
              <p><strong>Yil:</strong> {movie.year}</p>
              <p><strong>Davlat:</strong> {movie.productionCountries.map(c => c.name).join(", ")}</p>
              <p><strong>Janrlar:</strong> {movie.genres.map(g => g.name).join(", ")}</p>
              <p><strong>IMDb reyting:</strong> {movie.imdbRating}</p>
              <p className="mt-4">{movie.overview}</p> */}
              <p>{movie.genres.name}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Hero;

