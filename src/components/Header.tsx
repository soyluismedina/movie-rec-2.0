"use client";

import FormSearch from "./FormSearch";
import Nav from "./Nav";

export default function Header({ poster }) {
  const bgImage = {
    backgroundImage:
      poster &&
      `url("https://image.tmdb.org/t/p/original${
        poster.results[Math.floor(Math.random() * poster.results.length)]
          .backdrop_path
      }")`,
  };
  return (
    <header
      suppressHydrationWarning
      className="h-125 relative flex flex-col text-white bg-center bg-no-repeat bg-cover"
      style={bgImage}
    >
      <Nav />
      <div className="mt-16 w-10/12 mx-auto text-center z-20">
        <h1 className="font-bold mb-4 text-center text-5xl md:text-6xl lg:text-7xl tracking-tight">
          Your favorite movies. <span className="text-red-500">Explained.</span>
        </h1>
        <h2 className="font-light text-center text-xl md:text-2xl lg:text-3xl mb-8 text-white/90">
          Figure out what happened. Then find out why.
        </h2>
        <div className="flex justify-center">
          <FormSearch />
        </div>
      </div>
      <div className="bg-linear-to-t from-black via-black/80 to-transparent absolute h-full w-full z-10 top-0 right-0" />
    </header>
  );
}
