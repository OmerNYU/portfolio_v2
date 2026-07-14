"""Copy certificate PDFs into public/certs and render compact PNG thumbs.

Source PDFs are expected in assets/portfolio_certs (original names).
If that folder is missing, re-renders thumbs from existing public/certs/*.pdf.
"""

from pathlib import Path

import fitz

root = Path(__file__).resolve().parents[1]
src = root / "assets" / "portfolio_certs"
pub = root / "public" / "certs"
thumbs = pub / "thumbs"
pub.mkdir(parents=True, exist_ok=True)
thumbs.mkdir(parents=True, exist_ok=True)

# ~2x the on-page thumb (~160px) for retina clarity without huge files
TARGET_WIDTH = 320

certs = [
    {
        "file": "Coursera ML Specialization.pdf",
        "slug": "coursera-ml-specialization",
    },
    {
        "file": "Coursera Supervised ML - Regression and Classification.pdf",
        "slug": "coursera-supervised-ml",
    },
    {
        "file": "Coursera Advanced Learning Algorithms.pdf",
        "slug": "coursera-advanced-learning-algorithms",
    },
    {
        "file": "Coursera ML - Unsupervised Learning.pdf",
        "slug": "coursera-unsupervised-learning",
    },
    {
        "file": "Google Data Analytics.pdf",
        "slug": "google-data-analytics",
    },
    {
        "file": "AWS Artificial Intelligence Practitioner Learning Plan.pdf",
        "slug": "aws-ai-practitioner-learning-plan",
    },
    {
        "file": "AWS AI Practitioner Udacity.pdf",
        "slug": "aws-ai-practitioner-udacity",
    },
    {
        "file": "AWS Developing Generative Artificial Intelligence Solutions.pdf",
        "slug": "aws-developing-generative-ai-solutions",
    },
    {
        "file": "AWS Developing Machine Learning Solutions.pdf",
        "slug": "aws-developing-ml-solutions",
    },
    {
        "file": "AWS Essentials of Prompt Engineering.pdf",
        "slug": "aws-essentials-of-prompt-engineering",
    },
]


def render_thumb(pdf_path: Path, png_path: Path) -> tuple[int, int]:
    doc = fitz.open(pdf_path)
    page = doc[0]
    zoom = TARGET_WIDTH / page.rect.width
    pix = page.get_pixmap(matrix=fitz.Matrix(zoom, zoom), alpha=False)
    pix.save(str(png_path))
    size = (pix.width, pix.height)
    doc.close()
    return size


for cert in certs:
    slug = cert["slug"]
    dest_pdf = pub / f"{slug}.pdf"
    src_pdf = src / cert["file"]

    if src_pdf.exists():
        dest_pdf.write_bytes(src_pdf.read_bytes())
    elif not dest_pdf.exists():
        print("MISSING", cert["file"], "and", dest_pdf.name)
        continue

    w, h = render_thumb(dest_pdf, thumbs / f"{slug}.png")
    print("OK", slug, f"{w}x{h}")

print(
    "DONE",
    len(list(pub.glob("*.pdf"))),
    "pdfs,",
    len(list(thumbs.glob("*.png"))),
    "thumbs",
)
