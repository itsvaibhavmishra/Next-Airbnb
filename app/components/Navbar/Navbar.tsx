// components
import Container from "../UIElements/Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-10">
      <div className="py-4 border-b-[1px]">
        <Container>
          {/* Set up a grid with three columns */}
          <div className="flex justify-between gap-2 md:grid md:grid-cols-3 items-center">
            {/* Left-aligned Logo */}
            <div className="hidden md:flex justify-start">
              <Logo />
            </div>

            {/* Centered Search */}
            <div className="flex justify-center w-full">
              <Search />
            </div>

            {/* Right-aligned User Menu */}
            <div className="flex justify-end">
              <UserMenu />
            </div>
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
