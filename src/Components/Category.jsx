import { NavLink } from "react-router-dom";

const Category = ({ categories }) => {
  return (
    <div className="h-fit w-fit">
      <div
        role="tablist"
        className="tabs tabs-boxed w-fit flex items-center justify-center flex-col space-y-4 ml-9 "
      >
        {categories.map((category) => (
          <NavLink
            key={category.name}
            to={`/category/${category.name}`}
            role="tab"
            className={({ isActive }) =>
              `tab tabs-boxed font-bold  ${isActive ? "tab-active" : ""}`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
