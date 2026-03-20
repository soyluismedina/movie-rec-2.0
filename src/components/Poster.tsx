import Image from "next/image";
import Link from "next/link";

export default function Poster({ id, title, poster_path, vote_average }) {
  return (
    <Link href={`/movie-detail/${id}`} key={id} prefetch>
      <div className="group relative overflow-hidden rounded-lg transition-all duration-200 cursor-pointer">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`Image of the ${title}`}
          width="250"
          height="375"
          className="w-full h-auto object-cover transition-all duration-200"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-200" />
        <div className="absolute bottom-1 left-1 right-1 text-white text-xs font-medium truncate bg-black/15 rounded px-1 py-0.5">
          {title}
        </div>
        <span
          className={`${
            vote_average >= 7
              ? "bg-green-500"
              : vote_average >= 5
                ? "bg-yellow-500"
                : "bg-red-500"
          } absolute top-2 right-2 text-white font-bold text-sm py-1 px-2 rounded-lg shadow-lg transition-all duration-300 transform group-hover:scale-110`}
        >
          {vote_average.toFixed(1)}
        </span>
      </div>
    </Link>
  );
}
