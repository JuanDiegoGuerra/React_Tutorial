import { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from "../useOnClickOutside";
import '../style/navbar.css';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';


const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const ref = useRef();
    useEffect(() => {
      const handler = (event) => {
        if (
          navbarOpen &&
          ref.current &&
          !ref.current.contains(event.target)
        ) {
          setNavbarOpen(false);
        }
      };
      document.addEventListener('mousedown', handler);
      return () => {
        // Cleanup the event listener
        document.removeEventListener('mousedown', handler);
      };
    }, [navbarOpen]);

    useOnClickOutside(ref, dropdown, () => setDropdown(false));
 
    return (
      <nav ref={ref} className="navbar">
        <button className="toggle" onClick={() => setNavbarOpen((prev) => !prev)}>
          {navbarOpen ? 
            (
              <MdClose style={{ width: '32px', height: '32px' }} />
            ) : (
              <FiMenu
                style={{
                  width: '32px',
                  height: '32px',
                }}
              />
            )}
        </button>
        <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
          <li>Home</li>
          <li>About</li>
          <li ref={ref}>
                <button onClick={() => setDropdown((prev) => !prev)}>
                    Services <span>&#8595;</span>
                </button>
                {dropdown && (
                    <ul>
                    <li>Design</li>
                    <li>Development</li>
                    </ul>
                )}
          </li>
        </ul>
      </nav>
    );
  };

  export default Navbar;
  