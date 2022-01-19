import { Link } from "remix";

const about = () => {
  return (
    <div>
      <h1 className="text-purple-900 font-bold text-center p-16 text-5xl border-8 border-purple-800 hover:scale-110 ease-in-out transition-all">
        Welcome to the about page!!
      </h1>
      <h1 className="text-purple-900 font-bold text-center p-16 text-5xl border-8 border-purple-800 hover:scale-110 ease-in-out transition-all">
        <Link to="/" className="no-underline">
          <button className="text-purple-900 text-center no-underline bg-transparent font-bold">
            Back to HOMEPAGE
          </button>
        </Link>
      </h1>
    </div>
  );
};

export default about;
