import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaChevronDown, FaPenToSquare, FaUserNinja } from "react-icons/fa6";
import { RiShare2Line } from "react-icons/ri";
import { useChatLog } from "../gptContexts/chatLog";
import { useUser } from "@auth0/nextjs-auth0/client";
import axios from "axios";

export const Navbar = () => {
  const { user } = useUser();

  const path = usePathname();
  const handleLogout = async() => {
    console.log("here");
    await axios.get(
      "https://dev-f81q46epvoek8tzj.us.auth0.com/v2/logout?client_id=x9QR5YdxqltV247l3mGi9VTnPrEGn9Ln&returnTo=http://localhost:3000/char"
    )
      .then((response) => {
        if (!response.ok) {
          console.log(response);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  };
  const [setChatLog] = useChatLog();
  return (
    <nav className="flex justify-between items-center p-3">
      <div className="flex items-center gap-2 text-dark-primary">
        {path === "/" && (
          <FaPenToSquare
            onClick={() => setChatLog([])}
            size={18}
            className="hover:text-dark-primary-100 "
          />
        )}
        <span className="font-semibold text-lg capitalize">
          ChatGPT {path === "/" && 3.5} {user?.nickname ?? user?.name}{" "}
        </span>
        <FaChevronDown className="text-sm" />
      </div>
      {path !== "/" ? (
        <div className="flex items-center gap-4 text-dark-primary">
          <button
            className="bg-white text-center text-dark-secondary px-2 py-1 font-semibold rounded-full"
            onClick={handleLogout}
          >
            Log out
          </button>

          <RiShare2Line size={25} className="cursor-pointer" />
          {user?.picture ? (
            <img
              className="rounded-full w-8"
              src={user?.picture}
              alt={user?.nickname ?? "user"}
            />
          ) : (
            <FaUserNinja />
          )}
        </div>
      ) : (
        <div>
          <Link href={"/api/auth/login"}>
            <button className="bg-white text-center text-dark-secondary px-2 py-1 font-semibold rounded-full">
              Log in
            </button>
          </Link>
          <button className="text-dark-primary-100 text-center border border-dark-secondary px-2 py-1 ml-3 font-semibold rounded-full">
            Sign up
          </button>
        </div>
      )}
    </nav>
  );
};
