"use client";
import Image from "next/image";
import Nav from "../../components/Nav";
import { useRouter } from "next/navigation";

export default function DetailView({ movieDetails }) {
  const router = useRouter();

  const bgImage = {
    backgroundImage: movieDetails.backdrop_path
      ? `url("https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}")`
      : `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTos6aPN9yJ1aUky6C5ml-VqNSykiCzQyS9OLS5-Wot&s')`,
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div
      className="min-h-screen bg-center bg-no-repeat relative bg-cover pt-10"
      style={bgImage}
    >
      <div className="flex w-11/12 max-w-7xl mx-auto items-center justify-between">
        <Nav />
        <button
          type="button"
          onClick={handleBack}
          className="bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl z-20"
        >
          <span className="text-sm">Back</span>
        </button>
      </div>
      <section className="grid place-content-center md:grid-cols-2 mt-12 mx-auto max-w-6xl gap-8">
        <div className="z-20 mx-auto group">
          <div className="relative overflow-hidden rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={`Poster of the movie ${movieDetails.title}`}
              width={300}
              height={450}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>
        <div className="text-white z-20 mt-5 pb-10 md:mt-0">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-4 text-shadow-lg">
            {movieDetails.title}
          </h1>
          <div className="mt-4 flex flex-col gap-4 w-10/12 mx-auto">
            {movieDetails.genres && (
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {movieDetails.genres.map((res) => (
                  <span
                    key={res.id}
                    className="bg-red-500/80 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-red-600 transition-colors duration-300"
                  >
                    {res.name}
                  </span>
                ))}
              </div>
            )}
            <div className="grid grid-cols-2 gap-4 text-lg">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <span className="font-semibold">Release Date:</span>
                <p className="text-white/80">{movieDetails.release_date}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <span className="font-semibold">Duration:</span>
                <p className="text-white/80">{movieDetails.runtime} min</p>
              </div>
            </div>
            <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <span className="text-3xl">
                  {"★"
                    .repeat(Math.round(movieDetails.vote_average / 2))
                    .padEnd(5, "☆")}
                </span>
                <span className="ml-2 text-xl font-bold text-yellow-400">
                  {movieDetails.vote_average.toFixed(1)}/10
                </span>
              </div>
            </div>
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h2 className="font-semibold text-xl mb-2">Overview</h2>
              <p className="text-white/90 leading-relaxed">
                {movieDetails.overview}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute top-0 right-0 h-full w-full z-10 bg-linear-to-t from-black via-black/80 to-transparent" />
    </div>
  );
}
