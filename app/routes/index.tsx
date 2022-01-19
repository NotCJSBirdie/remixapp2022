import { Link } from "remix";
import RemixLogo from "../assets/remixlogo.svg";

export default function Index() {
  return (
    <div className="overflow-hidden">
      <h1 className="text-purple-400 text-6xl font-bold p-16 border-8 border-purple-500 hover:scale-110 ease-in-out transition-all text-center">
        Welcome to my very First REMIX APP
      </h1>

      <img
        src={RemixLogo}
        alt="logo"
        className="w-full h-auto hover:scale-110 ease-in-out transition-all"
      />

      <h1 className="text-blue-400 text-4xl font-bold p-16 border-8 border-purple-500 hover:scale-110 ease-in-out transition-all text-center">
        IT IS VERY COLORFUL
      </h1>
      <h1 className="text-yellow-500 text-4xl font-bold p-16 border-8 border-purple-500 hover:scale-110 ease-in-out transition-all text-center">
        REMIX IS A FULL STACK FRAMEWORK BUILT ON REACT! SO YEAH!
      </h1>
      <h1 className="text-red-500 text-4xl font-bold p-16 border-8 border-purple-500 hover:scale-110 ease-in-out transition-all text-center">
        REMIX CAN BE USED FOR FRONTEND AND BACKEND DEVELOPMENT WHICH IS VERY
        NICE ACTUALLY
      </h1>
      <h1 className=" text-4xl font-bold p-16 border-8 border-purple-500 hover:scale-110 ease-in-out transition-all text-center">
        <Link to="/about" className="no-underline bg-transparent">
          <button className="text-purple-900 font-bold text-center no-underline bg-transparent">
            About Page!
          </button>
        </Link>
      </h1>
    </div>
  );
}
