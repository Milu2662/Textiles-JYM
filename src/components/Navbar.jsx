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

      {/* MENÚ */}
      <ul className="nav-links">
        <li>Inicio</li>
        <li>Productos</li>
        <li>Promociones</li>
        <li>Nosotros</li>
        <li>Contacto</li>
      </ul>

    </nav>
  )
}

export default Navbar