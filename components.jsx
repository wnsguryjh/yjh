/* ============================================================
   Yang Junhyuk · Portfolio — React Components
   ============================================================ */

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ------------------------------------------------------------
// Top bar
// ------------------------------------------------------------
function TopBar({ lang, setLang, activeSection }) {
  const ui = window.UI_STRINGS[lang];
  const links = [
  { id: "about", label: ui.nav.about },
  { id: "career", label: ui.nav.career },
  { id: "projects", label: ui.nav.projects },
  { id: "skills", label: ui.nav.skills },
  { id: "education", label: ui.nav.education },
  { id: "contact", label: ui.nav.contact }];

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a href="#hero" className="topbar-brand">
          Yang<span className="dot"></span>J<span style={{ letterSpacing: '0.04em' }}>.H.</span>
        </a>
        <nav className="topbar-nav">
          {links.map((l) =>
          <a key={l.id} href={`#${l.id}`}
          className={activeSection === l.id ? "active" : ""}>{l.label}</a>
          )}
        </nav>
        <div className="lang-toggle" role="group" aria-label="Language">
          <button className={lang === "ko" ? "on" : ""} onClick={() => setLang("ko")}>KO</button>
          <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </header>);

}

// ------------------------------------------------------------
// Hero
// ------------------------------------------------------------
function Hero({ lang }) {
  const data = window.PORTFOLIO_DATA;
  const ui = window.UI_STRINGS[lang];
  const m = data.meta;
  const [h1, h2] = m.headline[lang];
  return (
    <section className="hero shell" id="hero">
      <div className="hero-marquee">
        <span>VOL. 01 · NO. 01</span>
        <span>YANG · JUNHYUK · PORTFOLIO</span>
        <span>2017 → 2026</span>
      </div>
      <div className="hero-marquee tight">
        <span>SEOUL · INCHEON · KR</span>
        <span>— A SMART GENERAL AFFAIRS PRACTICE —</span>
        <span>EST. 2026</span>
      </div>
      <div className="hero-kicker reveal">{ui.hero.kicker}</div>
      <div className="hero-name reveal">
        <span className="ko">{m.name[lang]}</span>
        <span className="italic">{lang === "ko" ? "Yang, Junhyuk" : "양준혁"}</span>
      </div>
      <h1 className="hero-title reveal">
        {lang === "ko" ?
        <>더 똑똑한 사무실의<br /><em>형태</em><span className="punct">.</span></> :

        <>The shape of<br />a <em>smarter</em> office<span className="punct">.</span></>
        }
      </h1>
      <div className="hero-grid">
        <p className="hero-blurb reveal">{m.blurb[lang]}</p>
        <div className="hero-meta reveal">
          <div className="hero-meta-row">
            <span className="k">{lang === "ko" ? "현재" : "Current"}</span>
            <span className="v">{m.current[lang]}</span>
          </div>
          <div className="hero-meta-row">
            <span className="k">{lang === "ko" ? "경력" : "Tenure"}</span>
            <span className="v">{m.tenure[lang]}</span>
          </div>
          <div className="hero-meta-row">
            <span className="k">{lang === "ko" ? "분야" : "Domain"}</span>
            <span className="v">{lang === "ko" ? "총무 · 경영지원 · 자산" : "GA · Operations · Asset"}</span>
          </div>
          <div className="hero-meta-row">
            <span className="k">{lang === "ko" ? "시그니처" : "Signature"}</span>
            <span className="v"><span className="accent">{lang === "ko" ? "연간 −10.1억 / −65.7%" : "−₩1.01B / −65.7% yr"}</span></span>
          </div>
        </div>
      </div>
    </section>);

}

// ------------------------------------------------------------
// KPI strip
// ------------------------------------------------------------
function KPIRow({ lang }) {
  const data = window.PORTFOLIO_DATA;
  return (
    <div className="shell">
      <div className="kpi-row">
        {data.kpis.map((k, i) =>
        <div className={"kpi reveal" + (k.accent ? " accent" : "")} key={i}>
            <div className="num">— 0{i + 1} —</div>
            <div className="label">{k.label[lang]}</div>
            <div className="value">
              {k.accent ? <em>{k.value}</em> : k.value}
              <span className="unit">{k.unit[lang]}</span>
            </div>
            <div className="sub">{k.sub[lang]}</div>
          </div>
        )}
      </div>
    </div>);

}

// ------------------------------------------------------------
// About
// ------------------------------------------------------------
function About({ lang }) {
  const data = window.PORTFOLIO_DATA;
  const ui = window.UI_STRINGS[lang];
  const m = data.meta;
  const a = data.about;
  return (
    <section className="section shell" id="about">
      <div className="section-head">
        <h2 className="reveal">{lang === "ko" ? <>그가 일하는 <em>방식</em>.</> : <>How he <em>works</em>.</>}</h2>
        <span className="eyebrow">{ui.about.eyebrow}</span>
      </div>
      <div className="about-grid">
        <div className="about-info reveal">
          <figure className="portrait-frame">
            <img src="portrait.jpg" alt={lang === "ko" ? "양준혁 인물 사진" : "Yang Junhyuk portrait"} loading="lazy" />
            <figcaption>
              <span className="portrait-tag">— Plate i.</span>
              <span className="portrait-name">{lang === "ko" ? "양준혁 · Yang, Junhyuk" : "Yang, Junhyuk · 양준혁"}</span>
            </figcaption>
          </figure>
          <Row k={lang === "ko" ? "이름" : "Name"} v={lang === "ko" ? `${m.name.ko} · ${m.nameRoman}` : `${m.nameRoman} · ${m.name.ko}`} />
          <Row k={lang === "ko" ? "출생" : "Born"} v={m.born[lang]} />
          <Row k={lang === "ko" ? "거주" : "Location"} v={m.location[lang]} />
          <Row k="Email" v={<span className="mono">{m.email}</span>} />
          <Row k="Phone" v={<span className="mono">{m.phone}</span>} />
          <Row k={lang === "ko" ? "현재" : "Current"} v={m.current[lang]} />
          <Row k={lang === "ko" ? "분야" : "Domain"} v={lang === "ko" ? "총무 · 경영지원 · 자산 · 행사의전" : "GA · Operations · Asset · Protocol"} />
        </div>
        <div className="about-narrative reveal">
          <p className="pull">
            <em>"{a.quote[lang]}"</em>
            <span className="pull-by">— {a.quoteBy[lang]}</span>
          </p>
          {a.paragraphs[lang].map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
    </section>);

}

function Row({ k, v }) {
  return (
    <div className="about-info-row">
      <span className="k">{k}</span>
      <span className="v">{v}</span>
    </div>);

}

// ------------------------------------------------------------
// Career
// ------------------------------------------------------------
function Career({ lang }) {
  const data = window.PORTFOLIO_DATA;
  const ui = window.UI_STRINGS[lang];
  return (
    <section className="section shell" id="career">
      <div className="section-head">
        <h2 className="reveal">
          {lang === "ko" ? <>발자취, <em>기록</em>.</> : <>A <em>career</em>, traced.</>}
        </h2>
        <span className="eyebrow">{ui.career.eyebrow}</span>
      </div>
      <div className="timeline">
        {data.career.map((c) =>
        <article key={c.id} className="tl reveal">
            <div className="tl-period">
              <span>{c.period}</span>
              <span className="duration">{c.duration[lang]}</span>
              {c.status && <span className="status">{c.status[lang]}</span>}
            </div>
            <div className="tl-content">
              <h3 className="tl-company"><em>{c.company[lang]}</em></h3>
              <div className="tl-role">{c.role[lang]}</div>
              <p className="tl-summary">{c.summary[lang]}</p>
              {c.bullets[lang].length > 0 &&
            <ul className="tl-bullets">
                  {c.bullets[lang].map((b, i) =>
              <li key={i} dangerouslySetInnerHTML={{
                __html: b.replace(/(−[\d.]+억|−\d+%|−₩[\d.]+M|−\d+\.\d+%)/g, '<strong>$1</strong>')
              }} />
              )}
                </ul>
            }
              <div className="tl-tags">
                {c.tags[lang].map((t, i) => <span key={i} className="tl-tag">{t}</span>)}
              </div>
            </div>
          </article>
        )}
      </div>
    </section>);

}

// ------------------------------------------------------------
// Projects — search + filter + grid + modal
// ------------------------------------------------------------
function Projects({ lang }) {
  const data = window.PORTFOLIO_DATA;
  const ui = window.UI_STRINGS[lang];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [open, setOpen] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data.projects.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (!q) return true;
      const hay = [
      p.title[lang], p.summary[lang], p.headline[lang], p.org,
      ...(p.tags[lang] || []),
      ...(p.details[lang] || [])].
      join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [query, category, lang]);

  const counts = useMemo(() => {
    const map = { all: data.projects.length };
    data.projects.forEach((p) => {map[p.category] = (map[p.category] || 0) + 1;});
    return map;
  }, []);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {if (e.key === "Escape") setOpen(null);};
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section className="section shell" id="projects">
      <div className="section-head">
        <h2 className="reveal">
          {lang === "ko" ? <>건드린 <em>현장</em>들.</> : <>Work <em>shipped</em>.</>}
        </h2>
        <span className="eyebrow">{ui.projects.eyebrow}</span>
      </div>

      <div className="project-tools reveal">
        <label className="search">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7"></circle>
            <path d="M21 21l-4.3-4.3"></path>
          </svg>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={ui.projects.searchPlaceholder}
            aria-label={ui.projects.searchPlaceholder} />
          
          {query &&
          <button className="clear" onClick={() => setQuery("")} aria-label="Clear">×</button>
          }
        </label>
        <div className="filter-chips">
          {window.PROJECT_CATEGORIES.map((c) =>
          <button
            key={c.id}
            className={"filter-chip" + (category === c.id ? " on" : "")}
            onClick={() => setCategory(c.id)}>
              {c[lang]} <span className="count">{counts[c.id] || 0}</span>
            </button>
          )}
        </div>
      </div>

      <div className="project-grid reveal">
        {filtered.length === 0 ?
        <div className="empty">{ui.projects.empty}</div> :
        filtered.map((p) =>
        <button key={p.id} className="project-card" onClick={() => setOpen(p)}>
            <div className="pc-meta">
              <span>{p.year}</span>
              <span className="org">{p.org}</span>
            </div>
            <h3 className="pc-title">{p.title[lang]}</h3>
            <div className="pc-headline">{p.headline[lang]}</div>
            <p className="pc-summary">{p.summary[lang]}</p>
            <div className="pc-tags">
              {p.tags[lang].slice(0, 4).map((t, i) => <span key={i} className="tl-tag">{t}</span>)}
            </div>
            {p.hasDashboard && <span className="pc-badge">● Live</span>}
            <span className="pc-arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {open && <ProjectModal project={open} onClose={() => setOpen(null)} lang={lang} ui={ui} />}
    </section>);

}

function ProjectModal({ project, onClose, lang, ui }) {
  const onBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };
  return (
    <div className="modal-backdrop" onClick={onBackdrop}>
      <div className="modal" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label={ui.projects.close}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M6 6l12 12M18 6l-6 6-6 6" />
          </svg>
        </button>
        <div className="modal-meta">
          <span>— {project.year}</span>
          <span>{project.org}</span>
          <span className="accent">{(window.PROJECT_CATEGORIES.find((c) => c.id === project.category) || {})[lang]}</span>
        </div>
        <h3 className="modal-title">{project.title[lang]}</h3>
        <div className="modal-headline">{project.headline[lang]}</div>

        <p className="modal-summary">{project.summary[lang]}</p>

        <div className="modal-section-title">— {ui.projects.keyOutcomes}</div>
        <ol className="modal-bullets">
          {project.details[lang].map((d, i) => <li key={i}>{d}</li>)}
        </ol>

        <div className="modal-section-title">— {ui.projects.tags}</div>
        <div className="modal-tags">
          {project.tags[lang].map((t, i) => <span key={i} className="tl-tag">{t}</span>)}
        </div>
      </div>
    </div>);

}

// ------------------------------------------------------------
// Skills
// ------------------------------------------------------------
function Skills({ lang }) {
  const data = window.PORTFOLIO_DATA;
  const ui = window.UI_STRINGS[lang];
  return (
    <section className="section shell" id="skills">
      <div className="section-head">
        <h2 className="reveal">
          {lang === "ko" ? <>현장에서 쓰는 <em>도구</em>.</> : <>The <em>toolkit</em>.</>}
        </h2>
        <span className="eyebrow">{ui.skills.eyebrow}</span>
      </div>
      <div className="skills-grid">
        {data.skills.map((g, i) =>
        <div key={i} className="skill-group reveal">
            <div className="skill-group-title">— {g.group[lang]}</div>
            <div className="chips">
              {g.chips.map((c, j) =>
            <span key={j} className={"chip" + (c.p ? " primary" : "")}>
                  {lang === "ko" ? c.l : c.e}
                </span>
            )}
            </div>
          </div>
        )}
      </div>
    </section>);

}

// ------------------------------------------------------------
// Education + Certifications
// ------------------------------------------------------------
function Education({ lang }) {
  const data = window.PORTFOLIO_DATA;
  const ui = window.UI_STRINGS[lang];
  return (
    <section className="section shell" id="education">
      <div className="section-head">
        <h2 className="reveal">
          {lang === "ko" ? <>학력과 <em>자격</em>.</> : <>Schools & <em>credentials</em>.</>}
        </h2>
        <span className="eyebrow">{ui.education.eyebrow}</span>
      </div>
      <table className="edu-table reveal">
        <thead>
          <tr>
            <th>{lang === "ko" ? "학교" : "School"}</th>
            <th>{lang === "ko" ? "기간" : "Period"}</th>
            <th>GPA</th>
            <th>{lang === "ko" ? "상태" : "Status"}</th>
          </tr>
        </thead>
        <tbody>
          {data.education.map((e, i) =>
          <tr key={i}>
              <td>
                <div className="edu-school">
                  {e.school[lang]}
                  <span className="deg">{e.degree[lang]}</span>
                </div>
              </td>
              <td className="mono" style={{ whiteSpace: 'nowrap' }}>{e.period}</td>
              <td className="mono">{e.gpa}</td>
              <td>{e.status[lang]}</td>
            </tr>
          )}
        </tbody>
      </table>

      <h3 className="cert-title reveal"><em>{ui.education.certifications}</em></h3>
      <div className="cert-grid reveal">
        {data.certifications.map((c, i) =>
        <div key={i} className="cert-cell">
            <div className="cert-name">{c.name[lang]}</div>
            <div className="cert-meta">{c.date} · {c.issuer[lang]}</div>
          </div>
        )}
      </div>
    </section>);

}

// ------------------------------------------------------------
// Contact + Footer
// ------------------------------------------------------------
function Contact({ lang }) {
  const data = window.PORTFOLIO_DATA;
  const ui = window.UI_STRINGS[lang];
  const m = data.meta;
  return (
    <section className="section shell contact" id="contact">
      <div className="section-head" style={{ marginBottom: 24 }}>
        <span className="eyebrow">{ui.contact.eyebrow}</span>
        <span className="eyebrow" style={{ textAlign: 'right' }}>Open to roles</span>
      </div>
      <h2 className="reveal">
        {lang === "ko" ? <>안정적인 <em style={{ fontSize: "75px" }}>경영지원</em>을<br />함께 만들 자리.</> : <>A place to build <em>operations</em> together.</>}
      </h2>
      <p style={{ fontFamily: 'var(--serif)', fontSize: 20, maxWidth: '56ch', lineHeight: 1.55, color: 'var(--ink-2)', marginBottom: 8 }}>
        {ui.contact.subtitle}
      </p>
      <div className="contact-grid reveal">
        <div className="contact-row">
          <div className="k">— Email</div>
          <div className="v"><a href={`mailto:${m.email}`} className="mono">{m.email}</a></div>
        </div>
        <div className="contact-row">
          <div className="k">— Mobile</div>
          <div className="v"><a href={`tel:${m.phone.replace(/\s/g, '')}`} className="mono">{m.phone}</a></div>
        </div>
        <div className="contact-row">
          <div className="k">— {lang === "ko" ? "거주지" : "Location"}</div>
          <div className="v">{m.location[lang]}</div>
        </div>
        <div className="contact-row">
          <div className="k">— Open to</div>
          <div className="v">{lang === "ko" ? "총무 · 자산 · 구매 · 경영지원" : "GA · Asset · Procurement · Operations"}</div>
        </div>
      </div>
      <div className="contact-cta reveal">
        <a className="btn primary" href={`mailto:${m.email}`}>{ui.contact.emailMe} →</a>
        <a className="btn" href={`tel:${m.phone.replace(/\s/g, '')}`}>{ui.contact.call}</a>
      </div>
    </section>);

}

function Footer({ lang }) {
  const ui = window.UI_STRINGS[lang];
  return (
    <footer className="shell footer">
      <div>
        <div className="brand">Yang · Junhyuk</div>
        <div style={{ marginTop: 6, textTransform: 'uppercase' }}>— A General Affairs Portfolio · v.02 —</div>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div>{ui.footer.compiled}</div>
        <div style={{ marginTop: 4 }}>{ui.footer.tag}</div>
      </div>
    </footer>);

}

// Expose to global so app.jsx can use them
Object.assign(window, {
  TopBar, Hero, KPIRow, About, Career, Projects, Skills, Education, Contact, Footer
});