import "boxicons";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default Header = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const HandelSubmit = (e) => {
    e.preventDefault();

    if (searchText) {
      navigate(`/search/${searchText}`);
      setSearchText("");
    }
  };

  return (
    <div className="w-screen h-16  flex justify-around items-center">
      <Link to="/" className="flex scale-125">
        <box-icon type="logo" color="red" size="lg" name="youtube"></box-icon>
      </Link>
      <div className="flex ">
        <input
          className="w-60 h-8 rounded-xl p-2 text-black"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onSubmit={HandelSubmit}
        />
        <button className="relative right-8 w-10 " onClick={HandelSubmit}>
          <box-icon size="sm" name="search-alt"></box-icon>
        </button>
      </div>
    </div>
  );
};
