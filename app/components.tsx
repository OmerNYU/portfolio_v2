import Link from "next/link";

export const socialLinks = {
  github: "https://github.com/OmerNYU",
  linkedin: "https://www.linkedin.com/in/omer-hayat-974678204/",
  email: "mailto:omer.hyt17@gmail.com",
} as const;

export const codeRows = [
  ["const", "builder", "=", "new", "Omer();"], ["builder", ".learn", "(", "mistakes", ");"],
  ["if", "(", "idea", ")", "build();"], ["model", ".fit", "(", "pastOnly", ");"],
  ["tests", ".forEach", "(", "run", ");"], ["git", ".commit", "(", "progress", ");"],
  ["while", "(", "curious", ")", "tinker();"], ["return", "oneEpochStronger", "();"],
];

export function Header() {
  return <header className="site-header">
    <Link className="wordmark omer-mark" href="/" aria-label="Omer Hayat home">
      <span className="mark-o">O</span><span className="mark-h">H</span><i className="mark-streak"/><small>OMER HAYAT</small>
    </Link>
    <nav aria-label="Primary navigation">
      <Link href="/projects">Projects</Link><Link href="/experience">Experience</Link>
      <Link href="/writing">Writing</Link><Link href="/notes">Notes</Link>
    </nav>
    <a className="contact-pill" href="/Omer_Hayat_Resume.pdf" target="_blank" rel="noreferrer">Résumé <span>↗</span></a>
  </header>;
}

export function Footer() {
  return <footer id="contact">
    <div><p>GET IN TOUCH</p><h2>Got an idea?<br /><em>Let&apos;s build it.</em></h2></div>
    <div className="footer-links">
      <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
      <a href={socialLinks.email}>Email ↗</a>
    </div>
  </footer>;
}

export function CodeHero() {
  return <div className="hero-art" aria-label="An original broad heroic silhouette in navy, red, white, and yellow">
    <div className="comic-burst" aria-hidden="true" />
    <div className="silhouette-hero" aria-hidden="true">
      <div className="silhouette-hair"><i/><i/></div>
      <div className="silhouette-head"/>
      <div className="silhouette-torso"><i className="chest-white"/><i className="chest-red"/><b className="code-text">build(); test(); learn();</b></div>
      <div className="silhouette-arm arm-l"><i/></div><div className="silhouette-arm arm-r"><i/></div>
      <div className="silhouette-hips"/>
      <div className="silhouette-leg leg-l"><i/></div><div className="silhouette-leg leg-r"><i/></div>
    </div>
    <div className="compile-card"><span className="compile-dot"/><div><small>BUILD STATUS</small><strong>still curious ✓</strong></div></div>
    <p className="art-caption"><span>00</span> CODE SILHOUETTE</p>
  </div>;
}

export function PageIntro({kicker, title, copy}:{kicker:string; title:string; copy:string}) {
  return <section className="page-intro"><p>{kicker}</p><h1>{title}</h1><p className="page-copy">{copy}</p></section>;
}
