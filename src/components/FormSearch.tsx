"use client";
import { useRouter } from "next/navigation";
import { BsSearch } from "react-icons/bs";

function FormSearch() {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    const target = event.target.search.value;
    if (target) router.push(`/search/${target}`);
  };

  return (
    <form
      className="mt-8 flex items-center mx-auto bg-white/95 backdrop-blur-sm py-3 px-4 gap-4 rounded-full max-w-md shadow-xl hover:shadow-2xl transition-shadow duration-300"
      onSubmit={handleSubmit}
    >
      <BsSearch className="text-red-500 w-6 h-6" />
      <input
        type="text"
        name="search"
        id="search"
        className="w-full outline-none text-gray-800 text-lg font-medium placeholder-gray-500"
        placeholder="Search for a movie..."
      />
      <button
        type="submit"
        className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
      >
        Search
      </button>
    </form>
  );
}

export default FormSearch;
