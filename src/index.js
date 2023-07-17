import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Signnup from "./pages/page3";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="page4" element={<Faq />} />
      <Route path="page2" element={<Login />} />
      <Route path="page3" element={<Signnup />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="checkout" element={<Checkout />}>
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>Silahkan cek URL kembali</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);
