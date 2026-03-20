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
      <div className="mt-10 w-9/12 mx-auto text-justify z-20">
        <h1 className="font-bold mb-4 text-center text-3xl">
          Your favorite movies. Explanined.
        </h1>
        <h2 className="font-normal text-center text-xl">
          Figure out what happend. Then find out why.
        </h2>
        <FormSearch />
      </div>
      <div className="bg-[#00000080] absolute h-full w-full z-10 top-0 right-0" />
    </header>
  );
}
