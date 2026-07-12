import shutil
from pathlib import Path

import fitz

src = Path(r"C:\Users\omerh\OneDrive\Desktop\Portfolio_Website\assets\portfolio_certs")
pub = Path(r"C:\Users\omerh\OneDrive\Desktop\Portfolio_Website\public\certs")
thumbs = pub / "thumbs"
pub.mkdir(parents=True, exist_ok=True)
thumbs.mkdir(parents=True, exist_ok=True)

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

for cert in certs:
    src_pdf = src / cert["file"]
    if not src_pdf.exists():
        print("MISSING", cert["file"])
        continue

    dest_pdf = pub / f"{cert['slug']}.pdf"
    shutil.copy2(src_pdf, dest_pdf)

    doc = fitz.open(dest_pdf)
    page = doc[0]
    pix = page.get_pixmap(matrix=fitz.Matrix(2.0, 2.0), alpha=False)
    png_path = thumbs / f"{cert['slug']}.png"
    pix.save(str(png_path))
    doc.close()
    print("OK", cert["slug"], pix.width, "x", pix.height)

print(
    "DONE",
    len(list(pub.glob("*.pdf"))),
    "pdfs,",
    len(list(thumbs.glob("*.png"))),
    "thumbs",
)
