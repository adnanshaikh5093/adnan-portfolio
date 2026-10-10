import { useEffect, useState } from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import "./App.css";
import SilkBackground from "./components/SilkBackground";

const pages = {
  "/": { label: "Home", component: Home },
  "/about": { label: "About", component: About },
  "/projects": { label: "Projects", component: Projects },
  "/resume": { label: "Resume", component: Resume },
  "/contact": { label: "Contact", component: Contact },
};

function App() {
  const [route, setRoute] = useState(() => window.location.hash.slice(1) || "/");
  const page = pages[route] || pages["/"];
  const Page = page.component;

  useEffect(() => {
    const updateRoute = () => {
      const nextRoute = window.location.hash.slice(1) || "/";
      if (pages[nextRoute]) setRoute(nextRoute);
    };

    window.addEventListener("hashchange", updateRoute);
    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  useEffect(() => {
    document.title = `${page.label} | Adnan Shaikh`;
  }, [page.label]);

  return (
    <div className="site-shell">
      <SilkBackground />
      <header className="site-header">
        <a className="site-brand" href="#/" aria-label="Adnan Shaikh home">
          AS<span>.</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          {Object.entries(pages).map(([path, item]) => (
            <a
              aria-current={route === path ? "page" : undefined}
              href={`#${path}`}
              key={path}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <Page key={route} />

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Adnan Shaikh</p>
        <a href="#/">Back to home ↑</a>
      </footer>
    </div>
  );
}

export default App;