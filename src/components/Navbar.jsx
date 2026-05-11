function Navbar() {
  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo-container">
        <img
          src="/logo.svg"
          alt="Textiles JYM"
          className="logo"
        />

        <h2>TEXTILES JYM</h2>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#products">Productos</a>
        </li>
        <li>
          <a href="#promotions">Promociones</a>
        </li>
        <li>
          <a href="#about">Nosotros</a>
        </li>
        <li>
          <a href="#contacts">Contacto</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar