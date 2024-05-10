import { Link } from "react-router-dom";
import { useState } from "react";
import CustomNavLink from "./CustomNavLink";

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b-[1px] border-solid border-neutral-100 bg-white/75 py-6">
      <nav className="flex max-w-[800px] mx-auto px-4">
        <h3 className="flex-grow inline-block font-bold font-mansalva text-lg">
          <Link
            to="/"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Wander Lens &nbsp; {isHovered ? "📸" : "📷"}
          </Link>
        </h3>

        <span className="hidden md:flex gap-4 text-sm font-semibold">
          <CustomNavLink to="/vancouver">Vancouver</CustomNavLink>
          <CustomNavLink to="/vietnam">Vietnam</CustomNavLink>
          <CustomNavLink to="/mongolia">Mongolia</CustomNavLink>
        </span>
      </nav>
    </header>
  );
}

export default Header;
