import Image from "next/image";
import Link from "next/link";
import { GoFlame } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function PopularMovies({ popularMovies }) {
  const justNivePopularMovies = popularMovies.results.slice(0, 9);
  return (
    <section className="w-11/12 mx-auto my-16 max-w-7xl">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <GoFlame className="text-red-500 w-8 h-8" />
          <h2 className="font-bold text-2xl md:text-3xl text-gray-800">
            Popular Movies
          </h2>
        </div>
        <div className="flex items-center gap-2 text-red-500 hover:text-red-600 cursor-pointer transition-colors duration-300">
          <Link href="/popular-movies" className="font-medium">
            View All
          </Link>
          <HiOutlineArrowNarrowRight className="w-5 h-5" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 place-content-center">
        {justNivePopularMovies.map(({ id, poster_path, title }) => (
          <Link
            key={id}
            href={`/movie-detail/${id}`}
            prefetch
            className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-200"
          >
            <Image
              className="w-full h-auto object-cover transition-all duration-200"
              width={200}
              height={300}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`Poster of the movie ${title}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-200" />
            <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-medium truncate bg-black/20 backdrop-blur-sm rounded px-2 py-1">
              {title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
