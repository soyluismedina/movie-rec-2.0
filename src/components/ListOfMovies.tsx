import Image from "next/image";
import Link from "next/link";
import { BiData } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function ListOfMovies({
  movies,
  title,
  viewAll = false,
  limit = 6,
}) {
  const displayMovies = movies && movies.results.slice(0, limit);

  return (
    movies && (
      <section className="py-12">
        <div className="flex justify-between items-center mb-6 w-11/12 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <BiData className="text-red-500 w-5 h-5" />
            <h2 className="font-semibold text-lg md:text-xl text-gray-700">
              {title}
            </h2>
          </div>
          {viewAll && (
            <div className="flex items-center gap-2 text-gray-600 hover:text-red-500 cursor-pointer transition-colors duration-200">
              <span className="text-sm">View All</span>
              <HiOutlineArrowNarrowRight className="w-4 h-4" />
            </div>
          )}
        </div>
        <div className="grid w-11/12 max-w-7xl mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 place-content-center">
          {displayMovies.map(({ id, poster_path, title }) => (
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
    )
  );
}
