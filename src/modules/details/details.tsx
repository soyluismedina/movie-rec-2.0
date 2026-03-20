"use client";
import Nav from "@components/Nav";
import Image from "next/image";
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
          className="text-gray-600 hover:text-red-500 font-medium text-sm transition-colors duration-200 cursor-pointer z-20"
        >
          ← Back
        </button>
      </div>
      <section className="grid place-content-center md:grid-cols-2 mt-12 mx-auto max-w-6xl gap-8">
        <div className="z-20 mx-auto group">
          <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-200">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={`Poster of the movie ${movieDetails.title}`}
              width={300}
              height={450}
              className="w-full h-auto object-cover"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-200" />
          </div>
        </div>
        <div className="text-white z-20 mt-5 pb-10 md:mt-0">
          <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-center mb-3">
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
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-gray-100/50 rounded-lg p-2">
                <span className="font-medium text-gray-600">Release:</span>
                <p className="text-gray-700">{movieDetails.release_date}</p>
              </div>
              <div className="bg-gray-100/50 rounded-lg p-2">
                <span className="font-medium text-gray-600">Duration:</span>
                <p className="text-gray-700">{movieDetails.runtime} min</p>
              </div>
            </div>
            <div className="mt-3 bg-gray-100/50 rounded-lg p-3">
              <div className="flex items-center justify-center mb-1">
                <span className="text-lg">
                  {"★"
                    .repeat(Math.round(movieDetails.vote_average / 2))
                    .padEnd(5, "☆")}
                </span>
                <span className="ml-2 text-sm font-medium text-gray-600">
                  {movieDetails.vote_average.toFixed(1)}/10
                </span>
              </div>
            </div>
            <div className="mt-4 bg-gray-100/50 rounded-lg p-3">
              <h2 className="font-medium text-sm mb-1 text-gray-600">
                Overview
              </h2>
              <p className="text-gray-700 text-sm leading-relaxed">
                {movieDetails.overview}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="absolute top-0 right-0 h-full w-full z-10 bg-linear-to-t from-black via-black/60 to-transparent" />
    </div>
  );
}
