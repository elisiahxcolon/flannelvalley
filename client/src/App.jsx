import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "./App.css"

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1)

  const slides = [
    { src: "img1.jpg" },
    { src: "img2.jpg" },
    { src: "img3.jpg" },
    { src: "img4.jpg" },
    { src: "img5.jpg" },
{ src: "img6.jpg" },
{ src: "img7.jpg" },
{ src: "img8.jpg" },
{ src: "img9.jpg" },
{ src: "img10.jpg" },
{ src: "img11.jpg" }
  ]

  function nextSlide(n) {
    let newIndex = slideIndex + n
    if (newIndex > slides.length) newIndex = 1
    if (newIndex < 1) newIndex = slides.length
    setSlideIndex(newIndex)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide(1)
    }, 4000)
    return () => clearInterval(timer)
  }, [slideIndex])

  return (
    <div className="slideshow"> {/* <--- CORRECTED: ADDED className="slideshow" */}
      <img src={slides[slideIndex - 1].src} alt="slide" width="100%" />
      <button onClick={() => nextSlide(-1)}>❮</button>
      <button onClick={() => nextSlide(1)}>❯</button>
    </div>
  )
}

function Home() {
  return (
    <section>
      <h1>Welcome to Flannel Valley</h1>
      <p>
        Your new go-to, veteran-owned and operated FFL dealer. Built on service,
        discipline, and trust. Look sharp. Trust your equipment. Stand ready.
      </p>
      <Slideshow />
    </section>
  )
}


function Team() {
  return (
    <section className="team-section">
      <h2>Meet the Team</h2>
      <p>
        Veteran-led and mission-driven. Our team brings military discipline,
        operational experience, and a commitment to responsible firearms ownership.
      </p>
      
      <div className="team-member">
        <img src="team1.jpg" alt="Team member Flannel John" />
        <p className="member-name">Flannel John</p>
      </div>

      <div className="team-member">
        <img src="team2.jpg" alt="Team member Sergeant Sarah" />
        <p className="member-name">Sergeant Sarah</p>
      </div>
      
    </section>
  )
}

function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>
        Reach out for transfers, inventory questions, or general inquiries.
      </p>
      <p>Email: contact@flannelvalley.com</p>
      <p>Phone: (555) 123-4567</p>
    </section>
  )
}

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/team">Team</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>© 2026 Flannel Valley</footer>
    </Router>
  )
}
