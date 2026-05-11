import Navbar from "./components/Navbar"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Navbar />
        <a
          href="https://wa.me/573107682780"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
          />
        </a>
      <Home />
    </>
  )
}

export default App