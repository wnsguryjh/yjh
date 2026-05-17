/* ============================================================
   Yang Junhyuk · Portfolio — App entry
   ============================================================ */

const { useState, useEffect, useRef } = React;

function App() {
  // Language: read from localStorage, default "ko"
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem("yjh.lang") || "ko"; } catch (e) { return "ko"; }
  });
  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem("yjh.lang", l); } catch (e) {}
    document.documentElement.lang = l;
  };
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);

  // Active section tracking — IntersectionObserver
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const ids = ["hero","about","career","projects","skills","education","contact"];
    const els = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
      // Pick the entry with the largest intersection ratio that is currently intersecting
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.1, 0.5, 1] });
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Reveal-on-scroll animation
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach(el => el.classList.add("show"));
      return;
    }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("show");
          obs.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    elements.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [lang]); // re-run when language changes (DOM re-renders)

  return (
    <React.Fragment>
      <TopBar lang={lang} setLang={setLang} activeSection={activeSection} />
      <main>
        <Hero lang={lang} />
        <KPIRow lang={lang} />
        <About lang={lang} />
        <Career lang={lang} />
        <Projects lang={lang} />
        <Skills lang={lang} />
        <Education lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
