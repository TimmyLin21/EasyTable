import { useNavigate } from "react-router-dom";
import { Search } from "../Icons/Search";

export const SearchBar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    navigate(`/search?q=${search}`);
  };

  return (
    <form
      className="relative md:min-w-[480px] lg:min-w-[600px] max-w-[800px] mx-auto"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="search"
        className="flex items-center justify-center absolute left-0 h-14 w-14 top-0 bottom-0"
      >
        <Search />
        <span className="sr-only">Search</span>
      </label>
      <input
        type="text"
        id="search"
        name="search"
        className="block w-full h-14 pl-14 rounded-[28px] bg-slate-50 placeholder:text-slate-500 font-medium"
        placeholder="Cuisine, dish, dietary, restaurant ..."
      />
      <button
        type="submit"
        className="absolute top-0 bottom-0 right-0 px-6 py-3 bg-success-500 text-white border-success-600 border rounded-[28px] text-xl font-bold hover:bg-success-600 active:bg-success-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
};
