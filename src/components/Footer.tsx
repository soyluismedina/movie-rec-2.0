"use client";
import { MdDone } from "react-icons/md";

export default function Footer({ popularMovies }) {
  const bgImage2 =
    popularMovies &&
    `url("https://image.tmdb.org/t/p/original${
      popularMovies.results[
        Math.floor(Math.random() * popularMovies.results.length)
      ].backdrop_path
    }")`;

  return (
    <section
      className="h-auto py-20 bg-center bg-cover bg-no-repeat relative flex justify-center items-center "
      suppressHydrationWarning
      style={{ backgroundImage: bgImage2 }}
    >
      <div className="max-w-5xl grid grid-cols-1 sm:grid-cols-2 w-9/12 mx-auto  place-content-center gap-10">
        <div className="text-white z-20">
          <h3 className="font-bold text-2xl text-center mb-2">
            Want to Annotate?
          </h3>
          <p className="text-justify mb-3">
            Are you a writer? Feel like you could provide some great feedback on
            movies. Here are the features and benefits of becoming a member.
          </p>
          <ol className="font-semibold">
            <li className="flex items-center">
              <MdDone className="text-red-500 h-6 mr-2" /> Discuss movies with
              friends
            </li>
            <li className="flex items-center">
              <MdDone className="text-red-500 h-6 mr-2" /> Build your collection
              of discussed films
            </li>
            <li className="flex items-center">
              <MdDone className="text-red-500 h-6 mr-2" /> Save your favorite
              movies
            </li>
          </ol>
        </div>
        <div className="z-20 flex flex-col">
          <h3 className="font-semibold text-lg text-white text-center mb-3">
            Create Account
          </h3>
          <form className="flex flex-col gap-2 sm:grid">
            <input
              type="text"
              name="first"
              id="first"
              placeholder="First Name"
              className="outline-none px-3 py-2 rounded-lg w-full bg-white/90 text-gray-700 placeholder-gray-500 focus:bg-white transition-all duration-200"
            />
            <input
              type="text"
              name="last"
              id="last"
              placeholder="Last Name"
              className="outline-none px-3 py-2 rounded-lg w-full bg-white/90 text-gray-700 placeholder-gray-500 focus:bg-white transition-all duration-200"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="outline-none px-3 py-2 rounded-lg w-full bg-white/90 text-gray-700 placeholder-gray-500 focus:bg-white transition-all duration-200"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="outline-none px-3 py-2 rounded-lg w-full bg-white/90 text-gray-700 placeholder-gray-500 focus:bg-white transition-all duration-200"
            />
            <div className="flex justify-between items-center pt-2 gap-2 col-span-2">
              <p className="text-white text-xs font-medium">
                Already have an account?
                <span className="text-red-500 cursor-pointer">Sign In</span>
              </p>
              <button
                className="text-gray-600 hover:text-red-500 font-medium text-sm transition-colors duration-200"
                type="submit"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
        <div className="absolute top-0 h-full w-full right-0 bg-[#00000080] z-10" />
      </div>
    </section>
  );
}
