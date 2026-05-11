import { useState } from "react"

function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    mensaje: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const enviarWhatsApp = () => {
    const texto = `Hola, soy ${form.nombre} y necesito ${form.mensaje}`
    const url = `https://wa.me/+573107682780?text=${encodeURIComponent(texto)}`
    window.open(url, "_blank")
  }

  return (
    <section id="contact" className="contact">
      
      <div className="contact-container">

        <h2>Contáctanos</h2>
        <p>Cuéntanos qué necesitas y te cotizamos en minutos</p>

        <div className="contact-grid">

          {/* INFO */}
          <div className="contact-info">
            <h3>Textiles JYM</h3>
            <p>Dotaciones y publicidad al por mayor y al detal</p>

            <p>📍 Bogotá, Colombia</p>
            <p>📞 +57 310 7682780</p>
            <p>📞 +57 310 6798053</p>
            <p>✉️ contacto@textilesjym.com</p>
          </div>

          {/* FORMULARIO */}
          <div className="contact-form">
            <input 
              type="text" 
              name="nombre"
              placeholder="Tu nombre"
              onChange={handleChange}
            />

            <textarea 
              name="mensaje"
              placeholder="¿Qué necesitas?"
              onChange={handleChange}
            ></textarea>

            <button onClick={enviarWhatsApp}>
              Cotizar por WhatsApp
            </button>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact