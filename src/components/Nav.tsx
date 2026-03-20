"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Nav() {
  const [isPath, setIsPath] = useState(null);
  const router = useRouter();
  const path = usePathname();

  const handleHome = () => {
    router.push("/");
  };

  useEffect(() => {
    if (path == "/") {
      setIsPath(true);
    } else {
      setIsPath(false);
    }
  }, [path]);

  return (
    <nav className="flex justify-between items-center mt-4 mx-6 z-20 backdrop-blur-sm bg-white/10 rounded-full px-6 py-3 shadow-lg">
      <div className="flex items-center">
        <Image
          onClick={handleHome}
          width="200"
          height="25"
          className="h-14 w-24 cursor-pointer transition-transform hover:scale-105"
          src="/assets/logo11.png"
          alt="Image logo of movie rec"
        />
      </div>
      <div className={`${isPath ? "flex" : "hidden"} gap-4`}>
        <button className="text-white hover:text-red-400 font-medium transition-colors duration-300">
          Login
        </button>
        <button className="bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
