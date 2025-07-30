import { Link } from "react-router";


export default function FilterrButton({category, title, className}) {
    return (
    <Link to={`/products?category=${category}`}>
            <button
                type="submit"
                className={`bg-Green  hover:bg-green-500 text-white px-12 py-2 mt-4 rounded cursor-pointer hover:text-white ${className}`}>
                {category}{title }
      </button>
    </Link>
  );
}


