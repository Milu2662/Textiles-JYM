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
        </div>
      </div>
    </section>
  );
}