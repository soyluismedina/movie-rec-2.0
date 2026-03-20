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
    <nav className="flex justify-between items-center mt-4 mx-6 z-20 px-6 py-2">
      <div className="flex items-center" suppressHydrationWarning>
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
        <button className="text-gray-600 hover:text-red-500 font-medium text-sm transition-colors duration-200">
          Login
        </button>
        <button className="text-gray-600 hover:text-red-500 font-medium text-sm transition-colors duration-200">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
