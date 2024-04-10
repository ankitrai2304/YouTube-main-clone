import { useState } from "react";
import { Categories, you } from "../utils/config";
import { PageContext } from "../utils/activePage";
import { useContext } from "react";

const Navbar = () => {
  const [current, setCurrent] = useState("New");
  const { setActivePage } = useContext(PageContext);
  return (
    <div className="flex flex-col min-w-fit m-4" key={111 + "nav"}>
      <h1 className="text-2xl font-bold">Categories</h1>
      {Categories.map((category) => {
        return current === category.name ? (
          <button
            onClick={() => {
              setActivePage(category.name);
            }}
            key={category.name + "key"}
          >
            <div className="text-left m-1 p-1  rounded-xl bg-red-600 text-white scale-105 transition 100 ease-in-out">
              <span className="m-2">{category.icon}</span>
              <span className="m-2 text-lg font-thin">{category.name}</span>
            </div>
          </button>
        ) : (
          <button
            onClick={() => {
              setCurrent(category.name);
              setActivePage(category.name);
            }}
            key={category.name + "key"}
          >
            <div className="text-left m-1 p-1 text-red-600 rounded-xl hover:bg-red-600 hover:text-white hover:scale-105 transition 200 ease-in-out">
              <span className="m-2">{category.icon}</span>
              <span className="m-2 text-lg font-thin">{category.name}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;
