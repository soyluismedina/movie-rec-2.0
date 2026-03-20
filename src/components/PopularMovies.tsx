import Image from "next/image";
import Link from "next/link";
import { GoFlame } from "react-icons/go";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function PopularMovies({ popularMovies }) {
  const justNivePopularMovies = popularMovies.results.slice(0, 9);
  return (
    <section className="w-9/12 mx-auto my-14 max-w-5xl">
      <div className="flex justify-between mb-4">
        <div className="flex items-center gap-1">
          <GoFlame className="text-red-400" />
          <p className="font-bold">Popular Movies</p>
        </div>
        <div className="flex items-center gap-1 text-gray-500 cursor-pointer">
          <p className="font-light">View All</p>
          <HiOutlineArrowNarrowRight />
        </div>
      </div>
      <div className="grid  grid-rows-2 first grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 place-content-center">
        {justNivePopularMovies.map(({ id, poster_path, title }) => (
          <Link key={id} href={`/movie-detail/${id}`} prefetch>
            <Image
              className="w-full object-contain hover:scale-105 duration-200 transition-transform"
              key={id}
              width={125}
              height={200}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={`Poster of the movie ${title}`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
