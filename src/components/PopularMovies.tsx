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
          <GoFlame className="text-red-500 w-6 h-6" />
          <h2 className="font-semibold text-xl md:text-2xl text-gray-700">
            Popular Movies
          </h2>
        </div>
        <div className="flex items-center gap-2 text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-200">
          <Link href="/popular-movies" className="text-sm">
            View All
          </Link>
          <HiOutlineArrowNarrowRight className="w-4 h-4" />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 place-content-center">
        {justNivePopularMovies.map(({ id, poster_path, title }) => (
          <Link
            key={id}
            href={`/movie-detail/${id}`}
            prefetch
            className="group relative overflow-hidden rounded-lg transition-all duration-200"
          >
            <Image
              className="w-full h-auto object-cover transition-all duration-200"
              width={200}
              height={300}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`Poster of the movie ${title}`}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
            <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium truncate bg-black/15 rounded px-1 py-0.5">
              {title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
