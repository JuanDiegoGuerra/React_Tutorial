import Navbar from "./Navbar";
import '../style/header.css';

const Header = () => {
    return (
      <header className="header">
        <Navbar />
        <h1>todos</h1>
      </header>
    );
  };

  export default Header;
  