import Image from "next/image";
import Link from "next/link";

export default function Poster({ id, title, poster_path, vote_average }) {
  return (
    <Link href={`/movie-detail/${id}`} key={id} prefetch>
      <div className="hover:scale-105 transition-transform duration-200  flex flex-col items-center justify-center mx-auto cursor-pointer relative">
        <Image
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={`Image of the ${title}`}
          width="250"
          height="250"
          className="h-full flex"
        />
        <p className="text-center">{title}</p>
        <span
          className={`${
            vote_average > 5 ? "bg-yellow-500" : "bg-red-500"
          } absolute text-black -top-3 py-2 bg-red-500 px-3 rounded-xl w-14 text-center`}
        >
          {vote_average}
        </span>
      </div>
    </Link>
  );
}
