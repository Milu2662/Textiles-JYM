import { useState } from "react"

const productos = [
  {
    nombre: "Camisetas T-shirt",
    desc: "Ideales para promociones",
    img: "/products/camiseta.jpg",

    detalles:
      "Camisetas personalizadas de alta calidad ideales para empresas, eventos, promociones y marcas.",

    especificaciones: [
      "100% algodón",
      "Estampado DTF y sublimación",
      "Tallas S a XXL",
      "Producción al detal y al por mayor"
    ]
  },

  {
    nombre: "Camisetas Polo",
    desc: "Imagen profesional",
    img: "/products/polo.jpg",

    detalles:
      "Polos corporativos elegantes perfectos para uniformes empresariales y dotaciones.",

    especificaciones: [
      "Tela piqué 220 gr",
      "Bordados",
      "Alta durabilidad",
      "Personalización completa"
    ]
  },

  {
    nombre: "Gorras",
    desc: "Perfectas para branding",
    img: "/products/gorra.jpg",

    detalles:
      "Gorras bordadas y estampadas ideales para campañas publicitarias y marcas.",

    especificaciones: [
      "Bordados, estampados, DTF",
      "Diseños personalizados",
      "Múltiples colores",
      "Ajuste regulable"
    ]
  },

  {
    nombre: "Mugs",
    desc: "Regalo publicitario ideal",
    img: "/products/mug.jpg",

    detalles:
      "Mugs personalizados full color ideales para regalos empresariales y branding.",

    especificaciones: [
      "Sublimación full color",
      "Cerámica premium",
      "Aptos para bebidas calientes",
      "Diseños personalizados"
    ]
  },

  {
    nombre: "Hoodies",
    desc: "Estilo y comodidad",
    img: "/products/hoodie.jpg",

    detalles:
      "Hoodies modernos y cómodos para marcas, equipos y uso corporativo.",

    especificaciones: [
      "Tela algodon perchado premium",
      "Capota ajustable",
      "Estampado o bordado",
      "Variedad de colores"
    ]
  },

  {
    nombre: "Chaquetas",
    desc: "Dotación corporativa",
    img: "/products/chaqueta.jpg",

    detalles:
      "Chaquetas resistentes ideales para dotaciones empresariales y trabajo exterior.",

    especificaciones: [
      "Bordado empresarial",
      "Alta resistencia",
      "Diseño personalizado"
    ]
  },

  {
    nombre: "Maletas",
    desc: "Publicidad duradera",
    img: "/products/maleta.jpg",

    detalles:
      "Maletas y bolsos personalizados para publicidad y uso corporativo.",

    especificaciones: [
      "Material resistente",
      "Amplio espacio",
      "Personalización completa",
      "Diseños empresariales"
    ]
  }
]

function Products() {

  // Estado para controlar qué producto está abierto
  const [productoActivo, setProductoActivo] = useState(null)

  return (
    <>
      {/* GRID DE PRODUCTOS */}
      <div className="product-grid">

        {productos.map((p, i) => (
          <div
            key={i}
            className="product-card"
            onClick={() => setProductoActivo(p)}
          >

            {/* IMAGEN */}
            <img src={p.img} alt={p.nombre} />

            {/* OVERLAY */}
            <div className="product-overlay">
              <h3>{p.nombre}</h3>
              <p>{p.desc}</p>

              <button>
                Ver detalles
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* MODAL DETALLES */}
      {productoActivo && (
        <div
          className="modal-bg"
          onClick={() => setProductoActivo(null)}
        >

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            {/* BOTÓN CERRAR */}
            <button
              className="close-btn"
              onClick={() => setProductoActivo(null)}
            >
              ✕
            </button>

            {/* IMAGEN */}
            <img
              src={productoActivo.img}
              alt={productoActivo.nombre}
              className="modal-img"
            />

            {/* INFORMACIÓN */}
            <div className="modal-info">

              <h2>{productoActivo.nombre}</h2>

              <p>{productoActivo.detalles}</p>

              <h3>Especificaciones</h3>

              <ul>
                {productoActivo.especificaciones.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* BOTÓN WHATSAPP */}
              <button
                className="quote-btn"
                onClick={() => {
                  const mensaje =
                    `Hola, quiero cotizar ${productoActivo.nombre}`

                  window.open(
                    `https://wa.me/573001234567?text=${encodeURIComponent(mensaje)}`,
                    "_blank"
                  )
                }}
              >
                Cotizar ahora
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  )
}

export default Products