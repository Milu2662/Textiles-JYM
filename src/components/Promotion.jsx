import "./promotion.css";

export default function Promotion() {

  return (

    <section id="promotion" className="promotion">

      <div className="promotion-header">
        <h2>Ofertas Imperdibles</h2>
        <p>Desliza para ver más</p>
      </div>

      <div className="slider">

        {/* SLIDE 1 */}
        <div className="slide">

          <picture>

            {/* IMAGEN CELULAR */}
            <source
              media="(max-width: 768px)"
              srcSet="/promotions/promo2-mobile.jpg"
            />

            {/* IMAGEN DESKTOP */}
            <img
              src="/promotions/promo2.jpg"
              alt="Promoción Polos"
              className="slide-image"
            />

          </picture>
          <div className="overlay"></div>
          <div className="slide-content">
            <span className="badge blue">OFERTA</span>
            <h3>3 POLOS $50.000</h3>
            <p>Combina estilos y ahorra más</p>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="slide">

          <picture>

            {/* IMAGEN CELULAR */}
            <source
              media="(max-width: 768px)"
              srcSet="/promotions/oferta2-mobile.jpg"
            />

            {/* IMAGEN DESKTOP */}
            <img
              src="/promotions/oferta2.jpg"
              alt="Promoción Camisetas"
              className="slide-image"
            />

          </picture>
          <div className="overlay"></div>
          <div className="slide-content">
            <span className="badge red">2x1</span>
            <h3>CAMISETAS T-SHIRT</h3>
            <p>Compra 1 y llévate 2</p>
          </div>
        </div>
      </div>
    </section>
  );
}