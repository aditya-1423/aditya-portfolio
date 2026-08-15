import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          {/* LOGO */}
          <a href="#home" className="navbar-logo" onClick={closeMenu}>
            Aditya Verma<span>...</span>
          </a>

          {/* DESKTOP MENU */}
          <div className="desktop-navbar-menu">
            <a href="#home" className="navbar-link">Home</a>
            <a href="#about" className="navbar-link">About</a>
            <a href="#skills" className="navbar-link">Skills</a>
            <a href="#projects" className="navbar-link">Projects</a>
            <a href="#contact" className="navbar-link">Contact</a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className={`mobile-menu-button ${
              menuOpen ? "active" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`mobile-navbar-menu ${
            menuOpen ? "mobile-menu-open" : ""
          }`}
        >
          <a
            href="#home"
            className="mobile-navbar-link"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="#about"
            className="mobile-navbar-link"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="#skills"
            className="mobile-navbar-link"
            onClick={closeMenu}
          >
            Skills
          </a>

          <a
            href="#projects"
            className="mobile-navbar-link"
            onClick={closeMenu}
          >
            Projects
          </a>

          <a
            href="#contact"
            className="mobile-navbar-link"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* =========================
          NAVBAR CSS
      ========================= */}
      <style>{`

        /* =========================
           NAVBAR
        ========================= */

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 9999;

          background: rgba(0, 0, 0, 0.92);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);

          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .navbar-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;

          min-height: 74px;
          padding: 0 30px;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }


        /* =========================
           LOGO
        ========================= */

        .navbar-logo {
          color: #ffffff !important;
          text-decoration: none !important;

          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.8px;

          transition: transform 0.3s ease;
        }

        .navbar-logo span {
          color: #ff6b00 !important;
        }

        .navbar-logo:hover {
          transform: translateY(-1px);
        }


        /* =========================
           DESKTOP MENU
        ========================= */

        .desktop-navbar-menu {
          display: flex;
          align-items: center;
          gap: 34px;
        }

        .navbar-link {
          position: relative;

          color: #ffffff !important;
          text-decoration: none !important;

          font-size: 15px;
          font-weight: 500;

          padding: 8px 0;

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .navbar-link::after {
          content: "";

          position: absolute;
          left: 0;
          bottom: 0;

          width: 0;
          height: 2px;

          background: #ff6b00;

          transition: width 0.3s ease;
        }

        .navbar-link:hover {
          color: #ff6b00 !important;
          transform: translateY(-2px);
        }

        .navbar-link:hover::after {
          width: 100%;
        }


        /* =========================
           MOBILE BUTTON
        ========================= */

        .mobile-menu-button {
          display: none;

          width: 44px;
          height: 44px;

          padding: 8px;
          margin: 0;

          border: none;
          outline: none;

          background: transparent;

          cursor: pointer;

          flex-direction: column;
          justify-content: center;
          align-items: center;

          gap: 6px;

          -webkit-tap-highlight-color: transparent;
        }

        .mobile-menu-button span {
          display: block;

          width: 27px;
          height: 2px;

          background: #ffffff;
          border-radius: 10px;

          transform-origin: center;

          transition:
            transform 0.35s cubic-bezier(.68,-0.55,.27,1.55),
            opacity 0.2s ease,
            width 0.3s ease;
        }


        /* =========================
           HAMBURGER → X
        ========================= */

        .mobile-menu-button.active span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .mobile-menu-button.active span:nth-child(2) {
          opacity: 0;
          width: 0;
        }

        .mobile-menu-button.active span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }


        /* =========================
           MOBILE MENU
        ========================= */

        .mobile-navbar-menu {
          display: none;

          overflow: hidden;

          background: rgba(0, 0, 0, 0.97);

          border-top: 1px solid rgba(255, 255, 255, 0.06);

          padding: 0 25px;

          max-height: 0;
          opacity: 0;

          transform: translateY(-10px);

          transition:
            max-height 0.45s ease,
            opacity 0.3s ease,
            transform 0.35s ease,
            padding 0.35s ease;
        }

        .mobile-navbar-menu.mobile-menu-open {
          max-height: 500px;

          padding-top: 18px;
          padding-bottom: 20px;

          opacity: 1;

          transform: translateY(0);
        }


        /* =========================
           MOBILE LINKS
        ========================= */

        .mobile-navbar-link {
          display: block;

          color: #ffffff !important;
          text-decoration: none !important;

          font-size: 18px;
          font-weight: 600;

          padding: 15px 5px;

          border-bottom: 1px solid rgba(255, 255, 255, 0.06);

          opacity: 0;
          transform: translateY(-15px);

          transition:
            color 0.25s ease,
            transform 0.3s ease,
            opacity 0.3s ease;
        }

        .mobile-menu-open .mobile-navbar-link {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-menu-open .mobile-navbar-link:nth-child(1) {
          transition-delay: 0.05s;
        }

        .mobile-menu-open .mobile-navbar-link:nth-child(2) {
          transition-delay: 0.10s;
        }

        .mobile-menu-open .mobile-navbar-link:nth-child(3) {
          transition-delay: 0.15s;
        }

        .mobile-menu-open .mobile-navbar-link:nth-child(4) {
          transition-delay: 0.20s;
        }

        .mobile-menu-open .mobile-navbar-link:nth-child(5) {
          transition-delay: 0.25s;
        }

        .mobile-navbar-link:hover {
          color: #ff6b00 !important;
          transform: translateX(7px) !important;
        }

        .mobile-navbar-link:last-child {
          border-bottom: none;
        }


        /* =========================
           MOBILE RESPONSIVE
        ========================= */

        @media (max-width: 768px) {

          .navbar-container {
            min-height: 68px;
            padding: 0 20px;
          }

          .navbar-logo {
            font-size: 22px;
          }

          .desktop-navbar-menu {
            display: none !important;
          }

          .mobile-menu-button {
            display: flex !important;
          }

          .mobile-navbar-menu {
            display: block;
          }
        }


        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 480px) {

          .navbar-container {
            padding: 0 16px;
          }

          .navbar-logo {
            font-size: 21px;
          }

          .mobile-menu-button {
            width: 42px;
            height: 42px;
          }

          .mobile-navbar-menu {
            padding-left: 18px;
            padding-right: 18px;
          }

          .mobile-navbar-link {
            font-size: 17px;
          }
        }

      `}</style>
    </>
  );
}

export default Navbar;