import Image from "next/image";
import Link from "next/link";
import { BiData } from "react-icons/bi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function ListOfMovies({ movies, title, viewAll = false }) {
  const justSixMovies = movies && movies.results.slice(0, 6);

  return (
    movies && (
      <section className="bg-gray-200 pb-20">
        <div className="flex justify-between mb-4 pt-10 w-9/12 max-w-5xl mx-auto">
          <div className="flex items-center gap-1">
            <BiData className="text-red-400" />
            <p className="font-bold">{title}</p>
          </div>
          {viewAll && (
            <div className="flex items-center gap-1 text-gray-500 cursor-pointer">
              <p className="font-light">View All</p>
              <HiOutlineArrowNarrowRight />
            </div>
          )}
        </div>
        <div className="grid w-9/12 max-w-5xl mx-auto grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 place-content-center">
          {justSixMovies.map(({ id, poster_path }) => (
            <Link key={id} href={`/movie-detail/${id}`} prefetch>
              <Image
                className="w-full object-contain hover:scale-105 transition-transform duration-200"
                width={125}
                height={200}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={`Poster of the movie ${id}`}
              />
            </Link>
          ))}
        </div>
      </section>
    )
  );
}
