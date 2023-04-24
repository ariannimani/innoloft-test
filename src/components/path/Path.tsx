import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { TbArrowNarrowRight } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const Path = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");

  return (
    <div className="py-3 px-4">
      <div className="max-w-7xl mx-auto">
        <nav
          className="flex items-center text-sm font-medium text-gray-500"
          aria-label="Path"
        >
          <ol className="flex items-center space-x-4">
            <li>
              <Link to="/" className="text-gray-900 hover:text-gray-700">
                <RiHomeLine />
              </Link>
            </li>
            {pathSegments.map((segment, index) => (
              <React.Fragment key={segment}>
                <li>
                  <TbArrowNarrowRight />
                </li>
                <li>
                  <Link
                    to={`/${pathSegments.slice(0, index + 1).join("/")}`}
                    className="text-gray-900 hover:text-gray-700"
                    style={{
                      pointerEvents: "none",
                    }}
                  >
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Path;
