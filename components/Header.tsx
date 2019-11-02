import React from "react";
import Link from "next/link";

const headerStyle = {
  color: "#f3be85",
  padding: "20px",
  display: "flex",
  justifyContent: "space-between"
};

const Header = () => {
  return (
    <div>
      <style jsx>{`
        .header {
          padding: 25px;
          display: flex;
          justifycontent: space-between;
          background: white;
        }

        section h1 {
          color: #f44336;
          margin: 0px;
          font-size: 30px;
        }

        section p {
          color: black;
          margin: 0px;
        }

        ul {
          list-style: none;
          display: flex;
          height: 30px;
          font-size: 20px;
        }

        ul li {
          margin: 0px 12px;
          cursor: pointer;
        }

        ul li a {
          color: black;
          text-decoration: none;
          margin: 10px;
        }

        ul li a:hover {
          color: #f44336;
        }
      `}</style>
      <header className="header" style={headerStyle}>
        <section>
          <h1>ViajaEnVan</h1>
          <p>Vivamos la experiencia de viajar juntos</p>
        </section>
        <section>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/destinos">
                <a>Destinos</a>
              </Link>
            </li>
            <li>
              <Link href="/servicios">
                <a>Servicios</a>
              </Link>
            </li>
            <li>
              <Link href="/contactenos">
                <a>Contactenos</a>
              </Link>
            </li>
          </ul>
        </section>
      </header>
    </div>
  );
};

export default Header;
