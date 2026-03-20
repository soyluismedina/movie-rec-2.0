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
      className="mt-6 flex items-center mx-auto bg-white/90 py-2 px-3 gap-3 rounded-full max-w-md"
      onSubmit={handleSubmit}
    >
      <BsSearch className="text-gray-500 w-5 h-5" />
      <input
        type="text"
        name="search"
        id="search"
        className="w-full outline-none text-gray-700 text-base font-normal placeholder-gray-400"
        placeholder="Search for a movie..."
      />
      <button
        type="submit"
        className="text-gray-600 hover:text-red-500 font-medium text-sm transition-colors duration-200"
      >
        Search
      </button>
    </form>
  );
}

export default FormSearch;
