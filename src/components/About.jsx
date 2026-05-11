import "./about.css";

export default function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        {/* TEXTO */}
        <div className="about-text">
          <h2>Sobre Nosotros</h2>

          <p>
            En <strong>Textiles JYM & Asociados </strong> somos pioneros en la industria textil colombiana, con más de 20 años de experiencia
            ofreciendo soluciones de alta calidad para empresas, emprendimientos y clientes individuales.
          </p>

          <p>
            Nos especializamos en la producción de prendas personalizadas tanto al detal como al por mayor,
            adaptándonos a las necesidades de cada cliente.
          </p>

          {/* SERVICIOS */}
          <div className="about-services">
            <div>✔ Estampación</div>
            <div>✔ Sublimación</div>
            <div>✔ DTF</div>
            <div>✔ Bordados</div>
          </div>

          <p className="about-highlight">
            Calidad, cumplimiento y personalización que hacen destacar tu marca.
          </p>
        </div>

        {/* IMAGEN */}
        <div className="about-image">
          <img src="/about/textilesjym.jpg" alt="Textiles JYM" />
        </div>

      </div>

    </section>
  );
}