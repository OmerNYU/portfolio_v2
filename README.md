# Omer Hayat — Portfolio Website

A personal engineering portfolio for showcasing projects, experience, technical writing, and interests across software engineering, machine learning, cloud systems, and robotics.

The website is designed to feel technical and personal without relying on a generic developer-portfolio template.

## Design

The site uses a clean, responsive layout built around:

* Reusable project and experience cards
* Custom-coded SVG visuals for featured projects
* A restrained technical aesthetic
* Responsive desktop and mobile layouts
* Accessible navigation and reduced-motion support
* Clear separation between projects, experience, writing, and personal information

Each project visual is implemented in code rather than stored as a static image, making it responsive and easy to adapt.

## Built With

* React
* TypeScript
* Vite
* Vinext
* Tailwind CSS
* Nitro
* Vercel

The repository also retains a Cloudflare-compatible local development path.

## Running Locally

This project requires Node.js 22.

```bash
git clone https://github.com/OmerNYU/omer-hayat-portfolio.git
cd omer-hayat-portfolio
npm install
npm run dev
```

Then open the local URL shown in the terminal.

To create a production build:

```bash
npm run build
```

To run the Vercel-targeted build:

```bash
npm run build:vercel
```

## Using This as Your Own Portfolio

You are welcome to fork or clone this repository and adapt the design for your own portfolio.

Before publishing your version, replace or remove all personal content belonging to Omer Hayat, including:

* Name and biography
* Profile images and personal branding
* Resume and certificates
* Project names, descriptions, links, and metrics
* Work experience and education
* GitHub, LinkedIn, email, and social links
* Articles and writing
* Metadata, page titles, and SEO descriptions
* Domain, analytics, and deployment configuration

The existing personal content is included as an example of how the design is used and should not be presented as your own work or identity.

Most portfolio content should be stored in centralized data files or reusable components. Update those sources rather than hardcoding replacement content separately across multiple pages.

## Forking

Using GitHub:

1. Select **Fork** at the top of this repository.
2. Clone your fork:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
```

3. Install the dependencies:

```bash
npm install
```

4. Replace the personal content with your own.
5. Run the site locally:

```bash
npm run dev
```

6. Deploy your version using Vercel or another compatible hosting provider.

## Project Visuals

The portfolio includes reusable SVG-based visuals for projects such as:

* PitchMirror
* RepoTriage
* Kaboom
* MatchLens
* Tiny Shell

These visuals can be edited, replaced, or extended for different projects. When adapting them, update the labels, colors, metrics, diagrams, and accessibility descriptions so they accurately represent your own work.

## License

The source code is available under the [MIT License](LICENSE).

You may use, modify, and distribute the code in accordance with that license. The original copyright and license notice must remain included in copies or substantial portions of the software.

Personal information, project claims, resumes, photographs, certificates, and identity-specific branding belong to their respective owner and should be replaced before publishing a derivative portfolio.
