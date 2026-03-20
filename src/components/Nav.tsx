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
    <div className="flex justify-between items-center mt-2 mx-5 z-20">
      <div className="flex items-center">
        <Image
          onClick={handleHome}
          width="200"
          height="25"
          className="h-16 w-28 cursor-pointer"
          src="/assets/logo11.png"
          alt="Image logo of movie rec"
        />
      </div>
      <div className={`${isPath ? "flex" : "hidden"} gap-2`}>
        <button>Login</button>
        <button className="text-red-500 border-2 border-red-500 rounded-3xl px-2 py-1 cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
}
