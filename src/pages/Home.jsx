import Promociones from "../components/Promotion";
import About from "../components/About";
import Products from "../components/Products"
import Contact from "../components/Contact"
import { useEffect } from "react"

function Home() {

  useEffect(() => {
    const handleScroll = () => {
      const bg = document.querySelector(".hero-bg")
      if (!bg) return

      const scroll = window.scrollY
      bg.style.transform = `translateY(${scroll * 0.4}px)`
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    
    <div>

      <section className="hero" id="home">
        <div className="hero-bg"></div>

        <div className="hero-content">
          <h1>Textiles JYM</h1>
          <p>Dotaciones y publicidad al detal y al por mayor</p>

          <a href="#products" className="scroll-arrow">↓</a>
        </div>
      </section>

      <section className="about" id="about">
        <About />
      </section>

      <section className="promotions" id="promotions">
        <Promociones />
      </section>

      <section className="products" id="products">
        <h2>Nuestros Productos</h2>
        <Products />
      </section>

      <section className="contacts" id="contacts">
        <Contact />
      </section>

      <div className="footer" id="contacto">
        © 2026 Textiles JYM
      </div>
    </div>
  )
}

export default Home