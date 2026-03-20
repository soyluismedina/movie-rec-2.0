import Image from "next/image";
import Link from "next/link";
import { BiData } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function ListOfMovies({ movies, title, viewAll = false }) {
  const justSixMovies = movies && movies.results.slice(0, 6);

  return (
    movies && (
      <section className="bg-linear-to-br from-gray-50 to-gray-100 py-16">
        <div className="flex justify-between items-center mb-8 w-11/12 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <BiData className="text-red-500 w-6 h-6" />
            <h2 className="font-bold text-2xl md:text-3xl text-gray-800">
              {title}
            </h2>
          </div>
          {viewAll && (
            <div className="flex items-center gap-2 text-red-500 hover:text-red-600 cursor-pointer transition-colors duration-300">
              <span className="font-medium">View All</span>
              <HiOutlineArrowNarrowRight className="w-5 h-5" />
            </div>
          )}
        </div>
        <div className="grid w-11/12 max-w-7xl mx-auto grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 place-content-center">
          {justSixMovies.map(({ id, poster_path }) => (
            <Link
              key={id}
              href={`/movie-detail/${id}`}
              prefetch
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Image
                className="w-full h-auto object-cover group-hover:brightness-110 transition-all duration-300"
                width={200}
                height={300}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={`Poster of the movie ${id}`}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </section>
    )
  );
}
