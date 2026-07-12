import { Footer, Header, PageIntro } from "../components";
const books=[
  ["Designing Machine Learning Systems","Chip Huyen","Reading","Production ML systems, data distribution shifts, monitoring, and system-level decisions."],
  ["Deep Learning from Scratch","Seth Weidman","Reading","Neural networks from the inside: tensors, layers, gradients, and backpropagation."],
];
export default function Notes(){return <main><Header/><PageIntro kicker="READING LIST & NOTES" title="Reading list" copy="Books I am reading and the notes I make along the way."/><section className="bookshelf">{books.map((b,i)=><article key={b[0]}><div className={`book-spine spine-${i}`}><span>{b[0]}</span></div><div><span className="book-status">{b[2]}</span><h2>{b[0]}</h2><p>{b[1]}</p><p className="book-desc">{b[3]}</p><b>Notes coming here ↗</b></div></article>)}</section><Footer/></main>}
