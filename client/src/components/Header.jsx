import TopBanner from "./Header/TopBanner";
import Logo from "./Header/Logo";
import Searchbar from "./Header/Searchbar";
import HeadActions from "./Header/HeadActions";

const Header = () => {
  return (
    <header className="w-full shadow-md">
      <TopBanner />
      <div className="flex items-center justify-between px-4 py-3 bg-white">
        <Logo />
        <Searchbar />
        <HeadActions />
      </div>
    </header>
  );
};

export default Header;
