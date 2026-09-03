# My Site — Complete ZIP Content Export for Claude

> Generated from `My site (2).zip`. This document is intended as a Claude-readable representation of the ZIP.
>
> **Important:** Source/text files are included verbatim. Binary files (images, PDF, Git index/object files) are represented by metadata and hashes rather than embedded as binary data, so this Markdown remains practical to upload.

## 1. ZIP Summary

- Archive entries: **588**
- Directories: **210**
- Files: **378**
- Project files outside `.git`: **29**
- Git metadata/files under `.git`: **349**

## 2. Project Purpose / Structure

This ZIP contains a static personal portfolio website named **My site**. The main site is composed of HTML pages, CSS stylesheets, JavaScript files, image assets, a resume PDF, a CNAME file, and a sitemap. The archive also contains the project's `.git` directory and Cursor-related Git metadata.

### Main pages
- `index.html` — home/landing page
- `about.html` — about/profile page
- `skills.html` — technical skills page
- `experience.html` — experience page
- `projects.html` — projects page
- `certificates.html` — certificates page
- `contact.html` — contact page
- `resume.html` — resume page

### Shared/frontend assets
- `assets/components/navbar.html` — reusable navigation component
- `assets/css/style.css` — component/page styling
- `style.css` — root stylesheet
- `assets/js/main.js` — main site JavaScript
- `assets/js/navbar.js` — navigation JavaScript
- `assets/js/ai-bg.js` — animated/AI background JavaScript

### Other deployment/SEO files
- `CNAME` — custom domain configuration
- `sitemap.xml` — sitemap
- `googlec8d8e01c9cc9f6eb.html` — Google site verification file

## 3. Complete Project Tree (excluding Git internals)

- My site/
- about.html
  - assets
    - assets/components
    - assets/components/navbar.html
    - assets/css
    - assets/css/style.css
    - assets/images
    - assets/images/cert1.webp
    - assets/images/cert2.webp
    - assets/images/cert3.webp
    - assets/images/cert4.webp
    - assets/images/cert5.webp
    - assets/images/cyber.webp
    - assets/images/profile.webp
    - assets/images/project1.webp
    - assets/images/project2.webp
    - assets/images/project3.webp
    - assets/images/project4.webp
    - assets/js
    - assets/js/ai-bg.js
    - assets/js/main.js
    - assets/js/navbar.js
    - assets/resume
    - assets/resume/Pratyush_Biswas_Resume.pdf
- certificates.html
- CNAME
- contact.html
- experience.html
- googlec8d8e01c9cc9f6eb.html
- index.html
- projects.html
- resume.html
- sitemap.xml
- skills.html
- style.css

## 4. Source Files — Verbatim

### `about.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>About — Pratyush Biswas</title>
  <link rel="stylesheet" href="style.css">
  <style>
    .mobile-only {
      display: none
    }

    @media(max-width:900px) {
      .mobile-only {
        display: list-item;
        list-style: none
      }
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 72px;
      align-items: start
    }

    .about-photo-wrap {
      position: sticky;
      top: calc(var(--nav-h) + 24px)
    }

    .about-img-frame {
      border-radius: 24px;
      overflow: hidden;
      border: 1px solid var(--border);
      background: var(--bg2);
      aspect-ratio: 4/5;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative
    }

    .about-img-frame::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(79, 142, 247, .06), rgba(167, 139, 250, .06))
    }

    .about-img-frame img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      border-radius: 24px;
      position: relative;
      z-index: 1
    }

    .about-img-initials {
      font-family: 'Syne', sans-serif;
      font-size: 5rem;
      font-weight: 800;
      background: linear-gradient(135deg, var(--accent), var(--accent2));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      position: relative;
      z-index: 1
    }

    .about-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 20px
    }

    .abadge {
      flex: 1;
      min-width: 110px;
      padding: 14px 16px;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: var(--card);
      backdrop-filter: blur(12px);
      text-align: center
    }

    .abadge .ab-val {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: .95rem;
      color: var(--text)
    }

    .abadge .ab-lbl {
      font-size: .68rem;
      color: var(--muted);
      margin-top: 2px
    }

    .about-content h2 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1.6rem, 3.5vw, 2.4rem);
      font-weight: 800;
      letter-spacing: -1px;
      margin-bottom: 24px;
      line-height: 1.15
    }

    .about-content p {
      color: var(--muted);
      line-height: 1.85;
      margin-bottom: 20px;
      font-size: 1.02rem
    }

    .about-content p strong {
      color: var(--text)
    }

    .info-list {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin: 36px 0
    }

    .info-row {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 14px 20px;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: var(--card);
      backdrop-filter: blur(12px);
      text-decoration: none;
      color: var(--text);
      transition: border-color .3s, transform .25s
    }

    .info-row:hover {
      border-color: rgba(79, 142, 247, .35);
      transform: translateX(6px)
    }

    .ir-icon {
      font-size: 1.1rem;
      flex-shrink: 0;
      width: 28px;
      text-align: center
    }

    .ir-label {
      font-size: .7rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--muted);
      min-width: 90px
    }

    .ir-value {
      font-weight: 500;
      font-size: .9rem
    }

    .ir-value a {
      color: var(--accent);
      text-decoration: none
    }

    .edu-card {
      padding: 24px 28px;
      border-radius: 16px;
      border: 1px solid var(--border);
      background: var(--card);
      backdrop-filter: blur(12px);
      margin-top: 36px;
      border-left: 3px solid var(--accent)
    }

    .edu-card h4 {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 6px
    }

    .edu-card .edu-sub {
      color: var(--muted);
      font-size: .875rem
    }

    .edu-year {
      display: inline-block;
      margin-top: 10px;
      padding: 3px 12px;
      border-radius: 100px;
      background: rgba(79, 142, 247, .1);
      color: var(--accent);
      font-size: .75rem;
      font-weight: 600
    }

    @media(max-width:900px) {
      .about-grid {
        grid-template-columns: 1fr;
        gap: 40px
      }

      .about-photo-wrap {
        position: static
      }

      .about-img-frame {
        aspect-ratio: 1/1
      }
    }
  </style>
</head>

<body data-page="about">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">PB<span>.</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" class="nav-link" data-page="home" onclick="closeNav()">Home</a></li>
        <li><a href="about.html" class="nav-link" data-page="about" onclick="closeNav()">About</a></li>
        <li><a href="skills.html" class="nav-link" data-page="skills" onclick="closeNav()">Skills</a></li>
        <li><a href="projects.html" class="nav-link" data-page="projects" onclick="closeNav()">Projects</a></li>
        <li><a href="certificates.html" class="nav-link" data-page="certificates" onclick="closeNav()">Certificates</a>
        </li>
        <li><a href="experience.html" class="nav-link" data-page="experience" onclick="closeNav()">Experience</a></li>
        <li><a href="contact.html" class="nav-link" data-page="contact" onclick="closeNav()">Contact</a></li>
        <li class="mobile-only"><a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank"
            onclick="closeNav()">Resume ↗</a></li>
      </ul>
      <div class="nav-socials" id="navSocials">
        <a href="https://github.com/SteveX103" target="_blank" class="nav-icon" data-tip="GitHub"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg></a>
        <a href="https://www.linkedin.com/in/pratyush-biswas-32179a232/" target="_blank" class="nav-icon"
          data-tip="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg></a>
        <a href="https://www.instagram.com/jake_lockley_here" target="_blank" class="nav-icon" data-tip="Instagram"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg></a>
        <a href="https://wa.me/918918664551" target="_blank" class="nav-icon" data-tip="WhatsApp"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg></a>
        <a href="tel:+918918664551" class="nav-icon" data-tip="Call Me"><svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg></a>
        <a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank">Resume ↗</a>
      </div>
      <div class="hamburger" id="hamburger" onclick="toggleNav()"><span></span><span></span><span></span></div>
    </div>
  </nav>
  <div class="page">
    <div class="page-hero">
      <span class="section-label">Know Me Better</span>
      <h1 class="section-title">About <span class="dim">Me</span></h1>
      <p>MCA graduate | Python Developer | Networking & Cybersecurity Enthusiast | Data Science Learner. Passionate about building secure, efficient, and data-driven solutions while continuously learning emerging technologies.</p>
    </div>
    <div class="section">
      <div class="about-grid">
        <div class="about-photo-wrap reveal">
          <div class="about-img-frame">
            <img src="assets/images/profile.webp" alt="Pratyush Biswas"
              onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
            <div class="about-img-initials" style="display:none">PB</div>
          </div>
          <div class="about-badges">
            <div class="abadge">
              <div class="ab-val">5+</div>
              <div class="ab-lbl">Projects</div>
            </div>
            <div class="abadge">
              <div class="ab-val">Python</div>
              <div class="ab-lbl">Primary Lang</div>
            </div>
            <div class="abadge">
              <div class="ab-val" style="color:var(--accent3)">🟢</div>
              <div class="ab-lbl">Open to Work</div>
            </div>
          </div>
        </div>
        <div class="about-content">
          <h2>Hi, I'm <span class="grad">Pratyush Biswas</span> 👋</h2>

          <p>
            I'm an <strong>MCA graduate</strong> with a passion for building practical technology solutions and
            continuously exploring new domains in computer science. My journey began with <strong>Python
            programming</strong> and has expanded into <strong>Data Science, Networking, Cybersecurity</strong>, and
            software development.
          </p>

          <p>
            I enjoy solving real-world problems through code—whether it's developing applications with
            <strong>Python</strong>, building APIs using <strong>FastAPI</strong>, analyzing data to extract meaningful
            insights, or exploring <strong>network infrastructure</strong> and <strong>cybersecurity</strong>. I'm
            proficient in <strong>Python, SQL, Machine Learning, Networking, and Cybersecurity fundamentals</strong>.
          </p>

          <p>
            I'm always eager to learn emerging technologies, strengthen my technical skills, and contribute to
            impactful projects. Currently, I'm seeking <strong>full-time opportunities</strong> in
            <strong>Python Development, Networking, Cybersecurity, or Data Science</strong>, where I can grow
            professionally while delivering meaningful solutions.
          </p>
          <div class="info-list">
            <div class="info-row reveal reveal-d1"><span class="ir-icon">🎓</span><span
                class="ir-label">Degree</span><span class="ir-value">MCA </span></div>
            <div class="info-row reveal reveal-d2"><span class="ir-icon">🎯</span><span
                class="ir-label">Focus</span><span class="ir-value">Data Science &amp; AI-ML</span></div>
            <div class="info-row reveal reveal-d2"><span class="ir-icon">💻</span><span
                class="ir-label">Languages</span><span class="ir-value">Python · SQL · Java</span></div>
            <div class="info-row reveal reveal-d3"><span class="ir-icon">⚡</span><span
                class="ir-label">Status</span><span class="ir-value" style="color:var(--accent3)">🟢 Actively Seeking
                Opportunities</span></div>
            <div class="info-row reveal reveal-d3"><span class="ir-icon">📍</span><span
                class="ir-label">Location</span><span class="ir-value">India</span></div>
            <div class="info-row reveal reveal-d4"><span class="ir-icon">⬡</span><span
                class="ir-label">GitHub</span><span class="ir-value"><a href="https://github.com/SteveX103"
                  target="_blank">github.com/SteveX103 ↗</a></span></div>
          </div>
          <div class="edu-card reveal">
            <h4>Master of Computer Applications (MCA)</h4>
            <div class="edu-sub">Techno India University </div>
            <span class="edu-year">2024 – 2026 . CGPA : 7.35</span>
          </div>
          <div class="edu-card reveal">
            <h4>Bachelor of Computer Applications (BCA)</h4>
            <div class="edu-sub">Techno Main Saltlake </div>
            <span class="edu-year">2021 – 2024 . CGPA : 8.21 </span>
          </div>
          <div class="edu-card reveal">
            <h4>Higher Secondary (12th )</h4>
            <div class="edu-sub">Krishnanagar High School</div>
            <span class="edu-year">2021 [71%]</span>
          </div>
          <div class="edu-card reveal">
            <h4>Secondary Exam ( 10th )</h4>
            <div class="edu-sub">Krishnanagar High School</div>
            <span class="edu-year">2019 [72%]</span>
          </div>
          <div style="margin-top:32px;display:flex;gap:14px;flex-wrap:wrap">
            <a href="projects.html" class="btn btn-primary"><svg width="14" height="14" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>See My Work</a>
            <a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="btn btn-ghost" target="_blank"><svg width="14"
                height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>Download Resume</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <p>Designed &amp; built by <a href="index.html">Pratyush Biswas</a> &nbsp;·&nbsp; © 2026 &nbsp;·&nbsp; <a
        href="https://github.com/SteveX103" target="_blank">GitHub</a></p>
  </footer>
  <script src="assets/js/main.js"></script>
</body>

</html>
```

### `assets/components/navbar.html`

```html
<nav class="navbar">

    <div class="nav-left">
        <div class="logo">
            <a href="index.html">Pratyush Biswas</a>
        </div>
    </div>

    <div class="nav-center">
        <ul class="nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="skills.html">Skills</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="certificates.html">Certificates</a></li>
            <li><a href="experience.html">Experience</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </div>

    <div class="nav-right">
        <div class="social-icons recruiter-links">
            <a href="https://github.com/SteveX103" aria-label="GitHub profile">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/pratyush-biswas-32179a232/" aria-label="LinkedIn profile">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="mailto:ppratyushbbiswas2003@gmail.com" aria-label="Send email">
                <i class="fas fa-envelope"></i>
            </a>
            <a href="https://www.instagram.com/jake_lockley_here" aria-label="Instagram profile">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="tel:+918918664551" aria-label="Call phone number">
                <i class="fas fa-phone"></i>
            </a>
            <a href="https://wa.me/918918664551" target="_blank" aria-label="Chat on WhatsApp">
                <i class="fab fa-whatsapp"></i>
            </a>
            <a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="resume-btn">Resume</a>
        </div>
    </div>

</nav>
```

### `assets/css/style.css`

```css
/* =========================
   GLOBAL RESET
   ========================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: #0b0f19;
  color: #ffffff;
}

a {
  -webkit-tap-highlight-color: transparent;
}

button,
a {
  min-height: 44px;
}

/* =========================
   NAVBAR
   ========================= */
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 40px;
  background: #0b0f19;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  border-bottom: 1px solid #1f2937;
}

.logo a {
  text-decoration: none;
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
}

.logo a:hover {
  color: #38bdf8;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li a {
  margin: 0 15px;
  text-decoration: none;
  color: #cbd5e1;
}

.nav-links li a:hover,
.nav-links li a.active {
  color: #38bdf8;
}

.social-icons a {
  color: #cbd5e1;
  margin-left: 15px;
  font-size: 18px;
  transition: transform 0.2s, color 0.2s;
}

.social-icons a:hover {
  color: #38bdf8;
  transform: translateY(-3px);
}

.resume-btn {
  margin-left: 20px;
  padding: 8px 14px;
  border: 1px solid #38bdf8;
  border-radius: 6px;
  text-decoration: none;
  color: #38bdf8;
}

/* =========================
   HERO SECTION (DESKTOP)
   ========================= */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 120px 80px 40px;
}

.hero-text {
  max-width: 600px;
}

.hero-text h1 {
  font-size: 42px;
}

.hero-text h1 span {
  color: #38bdf8;
}

.hero-text h2 {
  margin: 15px 0;
  color: #a5f3fc;
}

.hero-text p {
  color: #cbd5e1;
  margin-bottom: 30px;
}

.buttons .btn {
  padding: 12px 22px;
  border-radius: 8px;
  text-decoration: none;
  margin-right: 15px;
}

.primary {
  background: #38bdf8;
  color: #000;
}

.secondary {
  border: 1px solid #38bdf8;
  color: #38bdf8;
}

/* PHOTO */
.hero-image img {
  width: 220px;
  border-radius: 50%;
  border: 4px solid #38bdf8;
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }
}

/* =========================
   PAGE COMMON
   ========================= */
.page {
  padding: 120px 80px 60px;
}

.page h1 {
  font-size: 36px;
  margin-bottom: 30px;
  color: #38bdf8;
}

/* =========================
   ABOUT
   ========================= */
.about-text {
  max-width: 900px;
  margin-bottom: 20px;
  color: #cbd5e1;
  line-height: 1.7;
}

.about-text span {
  color: #a5f3fc;
}

.about-cards {
  display: flex;
  gap: 25px;
  margin-top: 40px;
}

.card {
  background: #111827;
  padding: 25px;
  border-radius: 12px;
  text-align: center;
  flex: 1;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-8px);
}

.card i {
  font-size: 30px;
  color: #38bdf8;
  margin-bottom: 15px;
}

/* =========================
   SKILLS
   ========================= */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.skill-box {
  background: #111827;
  padding: 25px;
  border-radius: 12px;
  transition: transform 0.3s;
}

.skill-box:hover {
  transform: translateY(-6px);
}

.skill-box h3 {
  color: #38bdf8;
  margin-bottom: 15px;
}

.skill-box p {
  color: #cbd5e1;
  margin-bottom: 8px;
}

/* =========================
   PROJECTS
   ========================= */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.project-card {
  background: #111827;
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.3s;
}

.project-card:hover {
  transform: translateY(-8px);
}

.project-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.project-content {
  padding: 20px;
}

.project-content h3 {
  color: #38bdf8;
  margin-bottom: 10px;
}

.project-content p {
  color: #cbd5e1;
  font-size: 14px;
  margin-bottom: 15px;
}

.tech span {
  display: inline-block;
  background: #0b1220;
  color: #38bdf8;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  margin-right: 8px;
  margin-bottom: 8px;
}

.project-links a {
  margin-right: 15px;
  text-decoration: none;
  color: #a5f3fc;
}

/* =========================
   CERTIFICATES
   ========================= */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.cert-card {
  background: #111827;
  padding: 20px;
  border-radius: 14px;
  text-align: center;
  transition: transform 0.3s;
}

.cert-card:hover {
  transform: translateY(-8px);
}

.cert-card img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
}

.cert-card h3 {
  font-size: 16px;
  margin-bottom: 10px;
  color: #38bdf8;
}

.cert-card a {
  color: #a5f3fc;
  text-decoration: none;
}

/* =========================
   CONTACT
   ========================= */
.contact-intro {
  max-width: 700px;
  margin-bottom: 40px;
  color: #cbd5e1;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 25px;
}

.contact-card {
  background: #111827;
  padding: 30px 20px;
  border-radius: 14px;
  text-align: center;
  color: #e5e7eb;
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 20px rgba(56, 189, 248, 0.15);
}

.contact-card i {
  font-size: 32px;
  color: #38bdf8;
  margin-bottom: 15px;
}

.contact-card h3 {
  margin-bottom: 8px;
  color: #38bdf8;
}

.contact-card p {
  font-size: 14px;
  color: #cbd5e1;
}

.contact-cta {
  margin-top: 50px;
  padding: 30px;
  background: linear-gradient(135deg, #020617, #0b1220);
  border-radius: 14px;
  text-align: center;
}

.contact-cta p {
  color: #cbd5e1;
  margin-bottom: 15px;
}

/* =========================
   MOBILE ONLY (PHONES)
   ========================= */
@media (max-width: 600px) {

  .page {
    padding: 90px 16px 40px;
  }

  .navbar {
    padding: 10px 16px;
    flex-wrap: wrap;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
    margin-top: 8px;
    flex-wrap: wrap;
  }

  .nav-links li {
    margin: 4px 8px;
  }

  .social-icons {
    width: 100%;
    justify-content: center;
    margin-top: 8px;
  }

  .hero {
    flex-direction: column-reverse;
    text-align: center;
    padding: 110px 16px 40px;
  }

  .hero-text {
    max-width: 100%;
  }

  .hero-text h1 {
    font-size: 26px;
  }

  .hero-text h2 {
    font-size: 18px;
  }

  .hero-image img {
    width: 150px;
    margin-bottom: 20px;
  }

  .about-cards,
  .skills-grid,
  .projects-grid,
  .cert-grid,
  .contact-grid {
    grid-template-columns: 1fr;
    flex-direction: column;
  }

  .buttons .btn {
    padding: 12px 18px;
    margin: 8px 4px;
  }
}

/* =========================
   AI BACKGROUND (GLOBAL)
   ========================= */
#ai-bg {
  position: fixed;
  /* 🔑 THIS IS THE FIX */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

/* Dark overlay for readability */
#ai-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at top left,
      rgba(56, 189, 248, 0.12),
      rgba(11, 15, 25, 0.92) 65%);
}

.hero,
.page,
.navbar {
  position: relative;
  z-index: 2;
}

html,
body {
  min-height: 100%;
}

/* =========================
   EXPERIENCE TIMELINE
   ========================= */
.timeline {
  position: relative;
  margin-top: 40px;
  padding-left: 20px;
}

/* vertical line */
.timeline::before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  width: 2px;
  height: 100%;
  background: #38bdf8;
  opacity: 0.3;
}

/* item */
.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding-left: 30px;
}

/* dot */
.timeline-dot {
  position: absolute;
  left: -2px;
  top: 5px;
  width: 12px;
  height: 12px;
  background: #38bdf8;
  border-radius: 50%;
}

/* content */
.timeline-content {
  background: #111827;
  padding: 20px;
  border-radius: 12px;
  transition: transform 0.3s;
}

.timeline-content:hover {
  transform: translateY(-5px);
}

.timeline-content h3 {
  color: #38bdf8;
  margin-bottom: 5px;
}

.company {
  font-size: 14px;
  color: #94a3b8;
  display: block;
  margin-bottom: 10px;
}

.timeline-content p {
  color: #cbd5e1;
  font-size: 14px;
}

/* tech tags */
.exp-tech span {
  display: inline-block;
  margin-top: 10px;
  margin-right: 8px;
  background: #0b1220;
  color: #38bdf8;
  padding: 5px 10px;
  border-radius: 6px;
  font-size: 12px;
}
```

### `assets/images/cert1.webp`

- Binary asset — 251,698 bytes; SHA-256 `e4463562f472d3b4c9e12820a133719ee171f3e97a0c7ec1bc97aaf444ef67cd`

### `assets/images/cert2.webp`

- Binary asset — 249,340 bytes; SHA-256 `f7cf65982572d2abf162aeff4e8f688bc5fd5b9e8a12d0fea1593066d02b1090`

### `assets/images/cert3.webp`

- Binary asset — 91,230 bytes; SHA-256 `edb7911ad9de6c12463a56f9f33ee2cf68a6c6ef6218b971a0b0215cb101a5d1`

### `assets/images/cert4.webp`

- Binary asset — 227,650 bytes; SHA-256 `4a4bc5a05236483b8f8f42bfa1b9d52ae8be39206129c78367981f5d6add9259`

### `assets/images/cert5.webp`

- Binary asset — 253,718 bytes; SHA-256 `0d694009c2e1fb03571eef327937910d6498333d4c044ab63ed5a320cba10fab`

### `assets/images/cyber.webp`

- Binary asset — 106,062 bytes; SHA-256 `36b51be8d3893d918738891442892e6e41470ecd247693b1fa57ee55c75e0ca6`

### `assets/images/profile.webp`

- Binary asset — 80,034 bytes; SHA-256 `32b924aed776d25103e1bdd3247873533c719067d801624f858c58b76ab17979`

### `assets/images/project1.webp`

- Binary asset — 144,514 bytes; SHA-256 `c92bfd58884471ab1b045012a511f23256549c3cd2f42e8943e5e52b738463a2`

### `assets/images/project2.webp`

- Binary asset — 13,770 bytes; SHA-256 `ee3217aa83e3bd90b2d0f8b2b9cd28d37492160ea88b80334030ac349b539bfa`

### `assets/images/project3.webp`

- Binary asset — 144,514 bytes; SHA-256 `c92bfd58884471ab1b045012a511f23256549c3cd2f42e8943e5e52b738463a2`

### `assets/images/project4.webp`

- Binary asset — 12,414 bytes; SHA-256 `205dab6e4f582af27a5e721b4328f52d235a3f0c5691cf2f6bd9ba110272e22e`

### `assets/js/ai-bg.js`

```javascript
document.addEventListener("DOMContentLoaded", function () {

    if (!document.getElementById("ai-bg")) {
        console.error("ai-bg div not found");
        return;
    }

    if (typeof particlesJS === "undefined") {
        console.error("particles.js not loaded");
        return;
    }

    particlesJS("ai-bg", {
        particles: {
            number: {
                value: 70,
                density: {
                    enable: true,
                    value_area: 900
                }
            },
            color: { value: "#38bdf8" },
            shape: { type: "circle" },
            opacity: {
                value: 0.35,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#38bdf8",
                opacity: 0.25,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.9,
                out_mode: "out"
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                }
            },
            modes: {
                grab: {
                    distance: 160,
                    line_linked: {
                        opacity: 0.6
                    }
                }
            }
        },
        retina_detect: true
    });

    // Mobile optimization
    if (window.innerWidth < 768 && window.pJSDom && pJSDom[0]) {
        pJSDom[0].pJS.particles.number.value = 35;
        pJSDom[0].pJS.fn.particlesRefresh();
    }

});
```

### `assets/js/main.js`

```javascript
// Navbar scroll
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// Hamburger toggle - also shows/hides socials on mobile
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
  const s = document.getElementById('navSocials');
  if (s) s.classList.toggle('open');
}
function closeNav() {
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
  const s = document.getElementById('navSocials');
  if (s) s.classList.remove('open');
}
document.addEventListener('click', (e) => {
  const nl = document.getElementById('navLinks');
  const hm = document.getElementById('hamburger');
  if (nl && nl.classList.contains('open') && !nl.contains(e.target) && !hm.contains(e.target)) { closeNav(); }
});

// Active nav link
(function () {
  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });
})();

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: .1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
```

### `assets/js/navbar.js`

```javascript
document.addEventListener("DOMContentLoaded", function () {
    fetch("/assets/components/navbar.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Navbar fetch failed");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => {
            console.error(error);
        });
});
```

### `assets/resume/Pratyush_Biswas_Resume.pdf`

- Type: PDF
- Size: 121,177 bytes
- SHA-256: `a575e9e8d81081e4c5806786b6115e0e44567bf2629fb005507c79bb97fe308b`

#### Extracted PDF text

```text
PRATYUSH BISWAS 
Kolkata
+91 8918664551 
ppratyushbbiswas2003@gmail.com
About Me 
MCA graduate with interests in software development, data science, cybersecurity, and computer networking. Skilled in Python, SQL, machine
learning, and data visualization through academic projects. Quick learner with strong problem-solving skills and a passion for building efficient
software solutions.
Programming: Python, Java, SQL 
Data Science: Numpy , Pandas
AI-ML : Pytorch , TensorFlow , OpenCV
Backend Framework : Flask , FastAPI , Django
Web Technologies: HTML, CSS, JavaScript
Database: MongoDB, MySQL, ChromaDB
OS: Linux, WIndows
LLM: RAG, Ollama, Langchain, FAISS
Concepts: OOPS, Shell Scripting 
Others: AWS, Docker, Vs Code, Git, GitHub, Jupyter
LANGUAGES
ENGLISH
HINDI
BENGALI
Full Professional Proﬁciency
Full Professional Proﬁciency
Native or Bilingual Proﬁciency
Certifications
OCI Data Science Certified  – Oracle
OCI AI Foundation Certified  – Oracle
Technical Skills
Technical Projects
AI Surveillance System
Youtube Music Converter
Online Music Library
https://pratyushbiswas.site
Experience
Intern at CDAC-Kolkata                                         
         ⟶ March 2026 - Ongoing    Onsite
Google for Developers – AI-ML Virtual Intern.
    ⟶ Completed a 10-week program focused on deploying machine learning models using Python, NumPy, and Scikit-learn.
AWS Academy | Data Engineering Virtual Intern
        ⟶ Managed cloud-based datasets and optimized data retrieval using SQL during a 10-week specialized track.
Acmegrade | Cyber Security Virtual Intern 
        ⟶ Underwent 1 month of intensive training in vulnerability identification and security protocols.
FOVEON, Techno Main Salt Lake | Technical Team Head
        ⟶ Led the technical department and managed cross-functional teams (2023–2024)
EDUCATIONAL QUALIFICATION
Master's in Computer Applications ( MCA)
Techno India University , Kolkata, West Bengal
2024-2026
Higher Secondary Education
Krishnagar High School
2019 - 2021
PERCENTAGE – 71
Secondary Education
Krishnagar High School
2019
PERCENTAGE – 72
Bachelor’s of Computer Applications( BCA)
Techno Main Salt Lake , Kolkata, West Bengal
2021 - 2024
CGPA – 8.21
Network Security Fundamentals  – Palo Alto
CGPA – 7.34
 PrivateGPT Pro – Offline Local LLM RAG
Built an AI surveillance application that performs real-time face detection, recognizes authorized users, and captures images of unknown
individuals using Python and OpenCV.
Built an offline multi-user RAG system that enables semantic document search and AI-powered question answering using Python, FastAPI,
MongoDB, and local LLMs.
Built a Python-based YouTube Music Converter that enables users to download and convert YouTube videos into high-quality MP3 files
using FastAPI and FFmpeg.
Built a database-driven Online Music Library application using Java and Oracle SQL for efficient music storage, retrieval, and playlist
management.
Wedding Event Management
Designed and implemented a Wedding Event Management System enabling users to manage events, bookings, vendors, and customer
information through an intuitive web interface.
```

### `certificates.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Certificates — Pratyush Biswas</title>
  <link rel="stylesheet" href="style.css">
  <style>
    .mobile-only {
      display: none
    }

    @media(max-width:900px) {
      .mobile-only {
        display: list-item;
        list-style: none
      }
    }

    .cert-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px
    }

    .cert-card {
      padding: 28px;
      border-radius: 18px;
      border: 1px solid var(--border);
      background: var(--card);
      backdrop-filter: blur(18px);
      transition: all .35s;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      gap: 16px
    }

    .cert-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--accent), var(--accent2));
      transform: scaleX(0);
      transform-origin: left;
      transition: transform .4s
    }

    .cert-card:hover {
      border-color: rgba(79, 142, 247, .35);
      transform: translateY(-5px);
      box-shadow: 0 22px 55px rgba(0, 0, 0, .35)
    }

    .cert-card:hover::before {
      transform: scaleX(1)
    }

    .cert-logo {
      width: 52px;
      height: 52px;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: var(--bg2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      flex-shrink: 0
    }

    .cert-top {
      display: flex;
      align-items: flex-start;
      gap: 14px
    }

    .cert-info {
      flex: 1;
      min-width: 0
    }

    .cert-issuer {
      font-size: .72rem;
      font-weight: 600;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      color: var(--accent);
      margin-bottom: 5px
    }

    .cert-name {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.3;
      color: var(--text)
    }

    .cert-meta {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap
    }

    .cert-date {
      font-size: .78rem;
      color: var(--muted);
      display: flex;
      align-items: center;
      gap: 5px
    }

    .cert-id {
      font-size: .72rem;
      color: var(--muted);
      font-family: monospace;
      background: rgba(255, 255, 255, .04);
      padding: 2px 8px;
      border-radius: 4px;
      border: 1px solid var(--border)
    }

    .cert-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 6px
    }

    .cert-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: .78rem;
      font-weight: 600;
      color: var(--accent3);
      text-decoration: none;
      padding: 6px 14px;
      border-radius: 7px;
      border: 1px solid rgba(52, 211, 153, .28);
      transition: all .2s;
      margin-top: auto;
      align-self: flex-start
    }

    .cert-link:hover {
      background: rgba(52, 211, 153, .1);
      transform: translateY(-1px)
    }

    /* placeholder card style */
    .cert-placeholder {
      border-style: dashed;
      opacity: .5
    }

    .cert-placeholder:hover {
      opacity: .75
    }

    .add-cert {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 10px;
      min-height: 160px;
      cursor: default
    }

    .add-icon {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 2px dashed var(--border);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--muted);
      font-size: 1.3rem
    }

    .add-text {
      font-size: .85rem;
      color: var(--muted);
      text-align: center;
      line-height: 1.5
    }

    /* section dividers */
    .cert-section-label {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: .8rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--muted);
      margin: 48px 0 20px;
      display: flex;
      align-items: center;
      gap: 12px
    }

    .cert-section-label::after {
      content: '';
      flex: 1;
      height: 1px;
      background: var(--border)
    }

    @media(max-width:640px) {
      .cert-grid {
        grid-template-columns: 1fr
      }
    }
  </style>
</head>

<body data-page="certificates">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">PB<span>.</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" class="nav-link" data-page="home" onclick="closeNav()">Home</a></li>
        <li><a href="about.html" class="nav-link" data-page="about" onclick="closeNav()">About</a></li>
        <li><a href="skills.html" class="nav-link" data-page="skills" onclick="closeNav()">Skills</a></li>
        <li><a href="projects.html" class="nav-link" data-page="projects" onclick="closeNav()">Projects</a></li>
        <li><a href="certificates.html" class="nav-link" data-page="certificates" onclick="closeNav()">Certificates</a>
        </li>
        <li><a href="experience.html" class="nav-link" data-page="experience" onclick="closeNav()">Experience</a></li>
        <li><a href="contact.html" class="nav-link" data-page="contact" onclick="closeNav()">Contact</a></li>
        <li class="mobile-only"><a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank"
            onclick="closeNav()">Resume ↗</a></li>
      </ul>
      <div class="nav-socials" id="navSocials">
        <a href="https://github.com/SteveX103" target="_blank" class="nav-icon" data-tip="GitHub"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg></a>
        <a href="https://www.linkedin.com/in/pratyush-biswas-32179a232/" target="_blank" class="nav-icon"
          data-tip="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg></a>
        <a href="https://www.instagram.com/jake_lockley_here" target="_blank" class="nav-icon" data-tip="Instagram"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg></a>
        <a href="https://wa.me/918918664551" target="_blank" class="nav-icon" data-tip="WhatsApp"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg></a>
        <a href="tel:+918918664551" class="nav-icon" data-tip="Call Me"><svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg></a>
        <a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank">Resume ↗</a>
      </div>
      <div class="hamburger" id="hamburger" onclick="toggleNav()"><span></span><span></span><span></span></div>
    </div>
  </nav>
  <div class="page">
    <div class="page-hero">
      <span class="section-label">Credentials</span>
      <h1 class="section-title">My <span class="dim">Certificates</span></h1>
      <p>Professional certifications and course completions that validate my skills in Data Science, AI-ML, and
        development.</p>
    </div>

    <div class="section" style="padding-top:0">

      <!-- Data Science & AI -->
      <div class="cert-section-label">Data Science &amp; AI-ML</div>
      <div class="cert-grid">

        <div class="cert-card reveal">
          <div class="cert-top">
            <div class="cert-logo">🤖</div>
            <div class="cert-info">
              <div class="cert-issuer">Oracle · Data Science </div>
              <div class="cert-name">OCI Data Science Professional</div>
            </div>
          </div>
          <div class="cert-meta">
            <span class="cert-date">📅 2025</span>
            <span class="cert-id">CERT-ID: 323455034OCI25DSOCP</span>
          </div>
          <div class="cert-skills"><span class="tag tag-purple">Data Science</span><span
              class="tag tag-purple">Structured Data</span><span class="tag tag-purple">Unstructured Data</span></div>
          <a href="https://drive.google.com/file/d/1AUHNKT3u_3cSZOPokWWXtReIN9hx5Kzp/view" class="cert-link">🔗 View
            Credential ↗</a>
        </div>

        <div class="cert-card reveal reveal-d1">
          <div class="cert-top">
            <div class="cert-logo">📊</div>
            <div class="cert-info">
              <div class="cert-issuer">Oracle · AI-ML</div>
              <div class="cert-name">OCI AI Foundation Associate</div>
            </div>
          </div>
          <div class="cert-meta">
            <span class="cert-date">📅 2025</span>
            <span class="cert-id">CERT-ID: 32345534OCI25AICFA</span>
          </div>
          <div class="cert-skills"><span class="tag tag-green">Artificial Intelligence</span><span
              class="tag tag-green">MAchine Learning</span></div>
          <a href="https://drive.google.com/drive/u/0/folders/119z-Hg3dOF32IvrTdalxJw6v8kFytmZp" class="cert-link">🔗
            View Credential ↗</a>
        </div>

        <div class="cert-card reveal reveal-d2">
          <div class="cert-top">
            <div class="cert-logo">📊</div>
            <div class="cert-info">
              <div class="cert-issuer">Google For Developers</div>
              <div class="cert-name">AI-ML Internship</div>
            </div>
          </div>
          <div class="cert-meta">
            <span class="cert-date">📅 2025</span>
            <span class="cert-id">CERT-ID:ebf41177a906a67916c685e21573a120</span>
          </div>
          <div class="cert-skills"><span class="tag tag-blue">Python</span><span class="tag tag-blue">Pandas</span><span
              class="tag tag-blue">NumPy</span></div>
          <a href="https://drive.google.com/drive/u/0/folders/119z-Hg3dOF32IvrTdalxJw6v8kFytmZp" class="cert-link">🔗
            View Credential ↗</a>
        </div>

      </div>

      <!-- Python & Development -->
      <div class="cert-section-label">Cyber Security &amp; Networking</div>
      <div class="cert-grid">

        <div class="cert-card reveal">
          <div class="cert-top">
            <div class="cert-logo">⚡</div>
            <div class="cert-info">
              <div class="cert-issuer">Ackmegrade</div>
              <div class="cert-name">Cyber Security Training</div>
            </div>
          </div>
          <div class="cert-meta">
            <span class="cert-date">📅 10 Oct - 10 Nov 2023 </span>
            <span class="cert-id">CERT-ID:AGC2023100730</span>
          </div>
          <a href="https://drive.google.com/drive/u/0/folders/119z-Hg3dOF32IvrTdalxJw6v8kFytmZp" class="cert-link">🔗
            View Credential ↗</a>
        </div>

        <div class="cert-card reveal reveal-d1">
          <div class="cert-top">
            <div class="cert-logo">🗄️</div>
            <div class="cert-info">
              <div class="cert-issuer">Palo Alto</div>
              <div class="cert-name">Network Security Fundamentals</div>
            </div>
          </div>
          <div class="cert-meta">
            <span class="cert-date">📅 2026</span>
          </div>
          <a href="https://drive.google.com/drive/u/0/folders/119z-Hg3dOF32IvrTdalxJw6v8kFytmZp" class="cert-link">🔗
            View Credential ↗</a>
        </div>


      </div>
    </div>
    <footer>
      <p>Designed &amp; built by <a href="index.html">Pratyush Biswas</a> &nbsp;·&nbsp; © 2026 &nbsp;·&nbsp; <a
          href="https://github.com/SteveX103" target="_blank">GitHub</a></p>
    </footer>
    <script src="assets/js/main.js"></script>
</body>

</html>
```

### `CNAME`

```text
pratyushbiswas.site
```

### `contact.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Contact — Pratyush Biswas</title>
  <link rel="stylesheet" href="style.css">
  <style>
    .mobile-only {
      display: none
    }

    @media(max-width:900px) {
      .mobile-only {
        display: list-item;
        list-style: none
      }
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.1fr;
      gap: 64px;
      align-items: start
    }

    .contact-left h2 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 800;
      letter-spacing: -.8px;
      margin-bottom: 14px;
      line-height: 1.2
    }

    .contact-left p {
      color: var(--muted);
      line-height: 1.85;
      margin-bottom: 32px;
      font-size: .97rem
    }

    .c-items {
      display: flex;
      flex-direction: column;
      gap: 14px
    }

    .c-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 16px 20px;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: var(--card);
      backdrop-filter: blur(14px);
      text-decoration: none;
      color: var(--text);
      transition: all .3s
    }

    .c-item:hover {
      border-color: var(--accent);
      transform: translateX(8px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, .2)
    }

    .c-icon {
      font-size: 1.3rem;
      flex-shrink: 0;
      width: 32px;
      text-align: center
    }

    .c-label {
      font-size: .68rem;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      color: var(--muted)
    }

    .c-value {
      font-weight: 500;
      font-size: .9rem;
      margin-top: 2px
    }

    .c-item:hover .c-value {
      color: var(--accent)
    }

    .hire-card {
      padding: 44px 40px;
      border-radius: 22px;
      text-align: center;
      background: linear-gradient(135deg, rgba(79, 142, 247, .08), rgba(167, 139, 250, .08));
      border: 1px solid rgba(79, 142, 247, .18);
      backdrop-filter: blur(14px);
      position: relative;
      overflow: hidden
    }

    .hire-card::before {
      content: '';
      position: absolute;
      top: -60px;
      right: -60px;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(79, 142, 247, .15), transparent 70%)
    }

    .hire-card::after {
      content: '';
      position: absolute;
      bottom: -40px;
      left: -40px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(167, 139, 250, .12), transparent 70%)
    }

    .hire-emoji {
      font-size: 3.5rem;
      margin-bottom: 16px;
      display: block;
      position: relative;
      z-index: 1
    }

    .hire-card h3 {
      font-family: 'Syne', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      letter-spacing: -.8px;
      margin-bottom: 12px;
      position: relative;
      z-index: 1
    }

    .hire-card p {
      color: var(--muted);
      font-size: .95rem;
      line-height: 1.75;
      margin-bottom: 32px;
      position: relative;
      z-index: 1
    }

    .status-pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 7px 18px;
      border-radius: 100px;
      margin-bottom: 28px;
      border: 1px solid rgba(52, 211, 153, .3);
      background: rgba(52, 211, 153, .08);
      font-size: .78rem;
      font-weight: 600;
      color: var(--accent3);
      position: relative;
      z-index: 1
    }

    .status-pill::before {
      content: '';
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--accent3);
      animation: pulse 2s ease infinite
    }

    @keyframes pulse {

      0%,
      100% {
        opacity: 1;
        transform: scale(1)
      }

      50% {
        opacity: .4;
        transform: scale(.65)
      }
    }

    @media(max-width:900px) {
      .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px
      }
    }

    @media(max-width:768px) {
      .hire-card {
        padding: 32px 24px
      }
    }
  </style>
</head>

<body data-page="contact">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">PB<span>.</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" class="nav-link" data-page="home" onclick="closeNav()">Home</a></li>
        <li><a href="about.html" class="nav-link" data-page="about" onclick="closeNav()">About</a></li>
        <li><a href="skills.html" class="nav-link" data-page="skills" onclick="closeNav()">Skills</a></li>
        <li><a href="projects.html" class="nav-link" data-page="projects" onclick="closeNav()">Projects</a></li>
        <li><a href="certificates.html" class="nav-link" data-page="certificates" onclick="closeNav()">Certificates</a>
        </li>
        <li><a href="experience.html" class="nav-link" data-page="experience" onclick="closeNav()">Experience</a></li>
        <li><a href="contact.html" class="nav-link" data-page="contact" onclick="closeNav()">Contact</a></li>
        <li class="mobile-only"><a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank"
            onclick="closeNav()">Resume ↗</a></li>
      </ul>
      <div class="nav-socials" id="navSocials">
        <a href="https://github.com/SteveX103" target="_blank" class="nav-icon" data-tip="GitHub"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg></a>
        <a href="https://www.linkedin.com/in/pratyush-biswas-32179a232/" target="_blank" class="nav-icon"
          data-tip="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg></a>
        <a href="https://www.instagram.com/jake_lockley_here" target="_blank" class="nav-icon" data-tip="Instagram"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg></a>
        <a href="https://wa.me/918918664551" target="_blank" class="nav-icon" data-tip="WhatsApp"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg></a>
        <a href="tel:+918918664551" class="nav-icon" data-tip="Call Me"><svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg></a>
        <a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank">Resume ↗</a>
      </div>
      <div class="hamburger" id="hamburger" onclick="toggleNav()"><span></span><span></span><span></span></div>
    </div>
  </nav>
  <div class="page">
    <div class="page-hero">
      <span class="section-label">Get In Touch</span>
      <h1 class="section-title">Let's <span class="dim">Connect</span></h1>
      <p>Open to opportunities, collaborations, and conversations. Don't hesitate to reach out!</p>
    </div>
    <div class="section" style="padding-top:0">
      <div class="contact-grid">
        <div class="contact-left">
          <h2>Open to <span class="grad">exciting opportunities</span> 🚀</h2>
          <p>Whether you're a recruiter with a Data Science / AI-ML role, a developer looking to collaborate, or just
            want to say hi — my inbox is always open.</p>
          <div class="c-items">
            <a href="https://github.com/SteveX103" target="_blank" class="c-item reveal"><span class="c-icon"><svg
                  width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg></span>
              <div>
                <div class="c-label">GitHub</div>
                <div class="c-value">SteveX103</div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/pratyush-biswas-32179a232/" target="_blank"
              class="c-item reveal reveal-d1"><span class="c-icon"><svg width="20" height="20" viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg></span>
              <div>
                <div class="c-label">LinkedIn</div>
                <div class="c-value">Pratyush Biswas</div>
              </div>
            </a>
            <a href="https://www.instagram.com/jake_lockley_here" target="_blank" class="c-item reveal reveal-d1"><span
                class="c-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg></span>
              <div>
                <div class="c-label">Instagram</div>
                <div class="c-value">jake_lockley_here</div>
              </div>
            </a>
            <a href="https://wa.me/918918664551" target="_blank" class="c-item reveal reveal-d2"><span
                class="c-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg></span>
              <div>
                <div class="c-label">WhatsApp</div>
                <div class="c-value">+91 8918664551</div>
              </div>
            </a>
            <a href="tel:+918918664551" class="c-item reveal reveal-d2"><span class="c-icon"><svg width="20" height="20"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg></span>
              <div>
                <div class="c-label">Phone</div>
                <div class="c-value">+91 8918664551</div>
              </div>
            </a>
            <a href="mailto:ppratyushbbiswas2003@gmail.com?subject=Hiring Discussion"
              class="c-item reveal reveal-d3"><span class="c-icon">✉️</span>
              <div>
                <div class="c-label">Email</div>
                <div class="c-value">ppratyushbbiswas2003@gmail.com</div>
              </div>
            </a>
          </div>
        </div>
        <div class="hire-card reveal">
          <span class="hire-emoji">👋</span>
          <div class="status-pill">🟢 Actively Seeking Opportunities</div>
          <h3><span class="grad">Hire Me!</span></h3>
          <p>I'm a final-year MCA student actively looking for full-time roles in <strong style="color:var(--text)">Data
              Science</strong>, <strong style="color:var(--text)">AI-ML Engineering</strong>, or <strong
              style="color:var(--text)">Python Development</strong>. Let's build something amazing together!</p>
          <a href="mailto:ppratyushbbiswas2003@gmail.com?subject=Hiring%20Discussion" class="btn btn-primary"
            style="width:100%;justify-content:center"><svg width="15" height="15" fill="none" stroke="currentColor"
              stroke-width="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>Contact Me for Opportunities</a>
          <div style="margin-top:12px"><a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="btn btn-ghost"
              target="_blank" style="width:100%;justify-content:center"><svg width="15" height="15" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>Download Resume</a></div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <p>Designed &amp; built by <a href="index.html">Pratyush Biswas</a> &nbsp;·&nbsp; © 2026 &nbsp;·&nbsp; <a
        href="https://github.com/SteveX103" target="_blank">GitHub</a></p>
  </footer>
  <script src="assets/js/main.js"></script>
</body>

</html>
```

### `experience.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Experience — Pratyush Biswas</title>
  <link rel="stylesheet" href="style.css">
  <style>
    .mobile-only {
      display: none
    }

    @media(max-width:900px) {
      .mobile-only {
        display: list-item;
        list-style: none
      }
    }

    /* ── TIMELINE LAYOUT ── */
    .exp-layout {
      display: grid;
      grid-template-columns: 1fr 3fr;
      gap: 60px;
      align-items: start
    }

    /* Left: sticky filter/summary panel */
    .exp-sidebar {
      position: sticky;
      top: calc(var(--nav-h) + 28px)
    }

    .exp-summary-card {
      padding: 24px;
      border-radius: 16px;
      border: 1px solid var(--border);
      background: var(--card);
      backdrop-filter: blur(16px);
      margin-bottom: 20px
    }

    .exp-summary-card h3 {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: .95rem;
      margin-bottom: 18px;
      color: var(--muted);
      letter-spacing: .5px;
      text-transform: uppercase;
      font-size: .72rem
    }

    .exp-stat {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid var(--border)
    }

    .exp-stat:last-child {
      border-bottom: none
    }

    .exp-stat .es-label {
      font-size: .8rem;
      color: var(--muted)
    }

    .exp-stat .es-val {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: .95rem;
      color: var(--text)
    }

    .filter-btns {
      display: flex;
      flex-direction: column;
      gap: 8px
    }

    .filter-btn {
      padding: 9px 16px;
      border-radius: 8px;
      border: 1px solid var(--border);
      background: transparent;
      color: var(--muted);
      font-size: .82rem;
      font-weight: 500;
      cursor: pointer;
      transition: all .2s;
      text-align: left;
      font-family: 'DM Sans', sans-serif
    }

    .filter-btn:hover,
    .filter-btn.active {
      border-color: var(--accent);
      color: var(--accent);
      background: rgba(79, 142, 247, .08)
    }

    .filter-btn.active {
      font-weight: 600
    }

    /* Right: timeline */
    .timeline {
      position: relative;
      padding-left: 28px
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      bottom: 8px;
      width: 1px;
      background: linear-gradient(to bottom, var(--accent), var(--accent2), transparent)
    }

    .tl-item {
      position: relative;
      margin-bottom: 40px
    }

    .tl-item:last-child {
      margin-bottom: 0
    }

    /* dot on timeline */
    .tl-dot {
      position: absolute;
      left: -36px;
      top: 8px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 2px solid var(--accent);
      background: var(--bg);
      transition: all .3s;
      display: flex;
      align-items: center;
      justify-content: center
    }

    .tl-dot::after {
      content: '';
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--accent);
      transition: all .3s
    }

    .tl-item:hover .tl-dot {
      border-color: var(--accent2);
      box-shadow: 0 0 0 4px rgba(79, 142, 247, .15)
    }

    .tl-item:hover .tl-dot::after {
      background: var(--accent2)
    }

    /* experience card */
    .exp-card {
      padding: 28px 32px;
      border-radius: 18px;
      border: 1px solid var(--border);
      background: var(--card);
      backdrop-filter: blur(18px);
      transition: all .35s;
      position: relative;
      overflow: hidden
    }

    .exp-card::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(to bottom, var(--accent), var(--accent2));
      transform: scaleY(0);
      transform-origin: top;
      transition: transform .4s
    }

    .exp-card:hover {
      border-color: rgba(79, 142, 247, .35);
      transform: translateX(6px);
      box-shadow: 0 16px 50px rgba(0, 0, 0, .3)
    }

    .exp-card:hover::before {
      transform: scaleY(1)
    }

    .exp-header {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 16px
    }

    .exp-logo {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      border: 1px solid var(--border);
      background: var(--bg2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      flex-shrink: 0
    }

    .exp-title-block {
      flex: 1;
      min-width: 0
    }

    .exp-role {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 1.05rem;
      color: var(--text);
      margin-bottom: 4px;
      line-height: 1.3
    }

    .exp-company {
      font-size: .875rem;
      color: var(--accent);
      font-weight: 500
    }

    .exp-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 16px;
      align-items: center
    }

    .exp-date {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: .78rem;
      color: var(--muted);
      background: rgba(255, 255, 255, .04);
      padding: 4px 12px;
      border-radius: 100px;
      border: 1px solid var(--border)
    }

    .exp-location {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: .78rem;
      color: var(--muted)
    }

    .exp-type {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      font-size: .72rem;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 100px
    }

    .type-full {
      background: rgba(52, 211, 153, .1);
      border: 1px solid rgba(52, 211, 153, .25);
      color: var(--accent3)
    }

    .type-intern {
      background: rgba(79, 142, 247, .1);
      border: 1px solid rgba(79, 142, 247, .25);
      color: var(--accent)
    }

    .type-freelance {
      background: rgba(167, 139, 250, .1);
      border: 1px solid rgba(167, 139, 250, .25);
      color: var(--accent2)
    }

    .type-training {
      background: rgba(244, 114, 182, .1);
      border: 1px solid rgba(244, 114, 182, .25);
      color: var(--pink)
    }

    .exp-desc {
      color: var(--muted);
      font-size: .9rem;
      line-height: 1.8;
      margin-bottom: 18px
    }

    .exp-desc strong {
      color: var(--text)
    }

    /* bullet points */
    .exp-bullets {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 18px
    }

    .exp-bullet {
      display: flex;
      gap: 10px;
      font-size: .875rem;
      color: var(--muted);
      line-height: 1.6
    }

    .exp-bullet::before {
      content: '▸';
      color: var(--accent);
      flex-shrink: 0;
      margin-top: 1px
    }

    .exp-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 7px
    }

    /* current badge */
    .current-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 3px 10px;
      border-radius: 100px;
      background: rgba(52, 211, 153, .1);
      border: 1px solid rgba(52, 211, 153, .25);
      font-size: .7rem;
      font-weight: 600;
      color: var(--accent3);
      position: absolute;
      top: 20px;
      right: 20px
    }

    .current-badge::before {
      content: '';
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: var(--accent3);
      animation: pulse 2s ease infinite
    }

    @keyframes pulse {

      0%,
      100% {
        opacity: 1;
        transform: scale(1)
      }

      50% {
        opacity: .4;
        transform: scale(.65)
      }
    }

    /* Section year label */
    .tl-year {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: .8rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 20px;
      padding: 6px 14px;
      border-radius: 6px;
      background: var(--bg2);
      border: 1px solid var(--border);
      display: inline-block
    }

    /* education timeline (reuse same styles) */
    .edu-tl-item .tl-dot {
      border-color: var(--accent2)
    }

    .edu-tl-item .tl-dot::after {
      background: var(--accent2)
    }

    .edu-tl-item:hover .tl-dot {
      border-color: var(--pink)
    }

    /* No experience placeholder */
    .no-exp {
      text-align: center;
      padding: 60px 40px;
      color: var(--muted)
    }

    .no-exp .ne-icon {
      font-size: 3rem;
      margin-bottom: 16px;
      display: block
    }

    .no-exp p {
      font-size: .95rem;
      line-height: 1.7
    }

    @media(max-width:900px) {
      .exp-layout {
        grid-template-columns: 1fr;
        gap: 32px
      }

      .exp-sidebar {
        position: static
      }

      .filter-btns {
        flex-direction: row;
        flex-wrap: wrap
      }

      .filter-btn {
        padding: 7px 14px
      }
    }

    @media(max-width:600px) {
      .timeline {
        padding-left: 20px
      }

      .tl-dot {
        left: -28px;
        width: 14px;
        height: 14px
      }

      .exp-card {
        padding: 22px 20px
      }

      .exp-header {
        flex-direction: column;
        gap: 10px
      }
    }
  </style>
</head>

<body data-page="experience">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>

  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">PB<span>.</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" class="nav-link" data-page="home" onclick="closeNav()">Home</a></li>
        <li><a href="about.html" class="nav-link" data-page="about" onclick="closeNav()">About</a></li>
        <li><a href="skills.html" class="nav-link" data-page="skills" onclick="closeNav()">Skills</a></li>
        <li><a href="projects.html" class="nav-link" data-page="projects" onclick="closeNav()">Projects</a></li>
        <li><a href="certificates.html" class="nav-link" data-page="certificates" onclick="closeNav()">Certificates</a>
        </li>
        <li><a href="experience.html" class="nav-link" data-page="experience" onclick="closeNav()">Experience</a></li>
        <li><a href="contact.html" class="nav-link" data-page="contact" onclick="closeNav()">Contact</a></li>
        <li class="mobile-only"><a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank"
            onclick="closeNav()">Resume ↗</a></li>
      </ul>
      <div class="nav-socials" id="navSocials">
        <a href="https://github.com/SteveX103" target="_blank" class="nav-icon" data-tip="GitHub"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg></a>
        <a href="https://www.linkedin.com/in/pratyush-biswas-32179a232/" target="_blank" class="nav-icon"
          data-tip="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg></a>
        <a href="https://www.instagram.com/jake_lockley_here" target="_blank" class="nav-icon" data-tip="Instagram"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg></a>
        <a href="https://wa.me/918918664551" target="_blank" class="nav-icon" data-tip="WhatsApp"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg></a>
        <a href="tel:+918918664551" class="nav-icon" data-tip="Call Me"><svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg></a>
        <a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank">Resume ↗</a>
      </div>
      <div class="hamburger" id="hamburger" onclick="toggleNav()"><span></span><span></span><span></span></div>
    </div>
  </nav>

  <div class="page">
    <div class="page-hero">
      <span class="section-label">My Journey</span>
      <h1 class="section-title">Experience </h1>
      <p>My professional journey, internships and training programs.</p>
    </div>

    <div class="section" style="padding-top:0">
      <div class="exp-layout">

        <!-- SIDEBAR -->
        <div class="exp-sidebar">
          <div class="exp-summary-card reveal">
            <h3>Quick Summary</h3>
            <div class="exp-stat"><span class="es-label">Total Experience</span><span class="es-val">Fresher</span>
            </div>
            <div class="exp-stat"><span class="es-label">Internships</span><span class="es-val">1</span></div>
            <div class="exp-stat"><span class="es-label">Degree</span><span class="es-val">MCA</span></div>
            <div class="exp-stat"><span class="es-label">Status</span><span class="es-val"
                style="color:var(--accent3)">🟢 Open</span></div>
          </div>

          <div
            style="margin-bottom:12px;font-size:.72rem;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--muted)">
            Filter by Type</div>
          <div class="filter-btns">
            <button class="filter-btn" onclick="filterExp('internship',this)">💼 Internship</button>
          </div>
        </div>

        <!-- TIMELINE -->
        <div id="expTimeline">

          <!-- ══ WORK EXPERIENCE ══ -->
          <div class="tl-year">March 2026 - Present</div>

          <!-- Internship 1 -->
          <div class="tl-item exp-type-internship reveal">
            <div class="tl-dot"></div>
            <div class="exp-card">
              <div class="current-badge">Current</div>
              <div class="exp-header">
                <div class="exp-logo">💼</div>
                <div class="exp-title-block">
                  <div class="exp-role">AI-ML & Cyber Security Intern</div>
                  <div class="exp-company">CDAC-Kolkata</div>
                </div>
              </div>
              <div class="exp-meta">
                <span class="exp-date">📅 Mar 2026 – Present</span>
                <span class="exp-location">📍 Onsite / Kolkata</span>
                <span class="exp-type type-intern">Internship</span>
              </div>
              <div class="exp-bullets">
                <div class="exp-bullet">Developed and maintained Python scripts for <strong>data processing and
                    automation</strong>.</div>
                <div class="exp-bullet">Built REST APIs using <strong>FastAPI</strong> for backend data services.</div>
                <div class="exp-bullet">Collaborated with the team on <strong>data analysis tasks</strong> using Pandas
                  and NumPy.</div>
                <div class="exp-bullet">Assisted in <strong>database management</strong> and query optimisation with
                  MySQL.</div>
              </div>
              <div class="exp-skills">
                <span class="tag tag-blue">Python</span>
                <span class="tag tag-blue">FastAPI</span>
                <span class="tag tag-green">MySQL</span>
                <span class="tag tag-purple">Data Analysis</span>
                <span class="tag tag-green">Pandas</span>
              </div>
            </div>
          </div>

          <!-- ══ TRAINING ══ -->
          <div class="tl-year">2025</div>

          <!-- Training 1 -->
          <div class="tl-item exp-type-training reveal reveal-d1">
            <div class="tl-dot"></div>
            <div class="exp-card">
              <div class="exp-header">
                <div class="exp-logo">🤖</div>
                <div class="exp-title-block">
                  <div class="exp-role">Data Engineering Internship</div>
                  <div class="exp-company">AWS Academy</div>
                </div>
              </div>
              <div class="exp-meta">
                <span class="exp-date">📅 Oct 2025 — Dec 2025</span>
                <span class="exp-location">📍 Online</span>
                <span class="exp-type type-training">Internship</span>
              </div>
              <div class="exp-bullets">
                <div class="exp-bullets">
                  <div class="exp-bullet">Learned end-to-end <strong>data science pipeline</strong> from data collection
                    to model deployment.</div>
                  <div class="exp-bullet">Performed <strong>EDA (Exploratory Data Analysis)</strong> and feature
                    engineering on real datasets.</div>
                  <div class="exp-bullet">Built dashboards and visualisations using <strong>Matplotlib and
                      Seaborn</strong>.</div>
                </div>
              </div>
              <div class="exp-skills">
                <span class="tag tag-purple">Machine Learning</span>
                <span class="tag tag-blue">Python</span>
                <span class="tag tag-purple">Scikit-learn</span>
                <span class="tag tag-green">NumPy</span>
                <span class="tag tag-green">Pandas</span>
              </div>
            </div>
          </div>

          <!-- Training 2 -->
          <div class="tl-item exp-type-training reveal reveal-d2">
            <div class="tl-dot"></div>
            <div class="exp-card">
              <div class="exp-header">
                <div class="exp-logo">📊</div>
                <div class="exp-title-block">
                  <div class="exp-role">AI &amp; ML Internship</div>
                  <div class="exp-company">Google For Developers</div>
                </div>
              </div>
              <div class="exp-meta">
                <span class="exp-date">📅 Jul 2025 – Sep 2025</span>
                <span class="exp-location">📍 Online</span>
                <span class="exp-type type-training">Internship</span>
              </div>
              <div class="exp-bullets">
                <div class="exp-bullet">Completed intensive training on <strong>supervised and unsupervised ML
                    algorithms</strong>.</div>
                <div class="exp-bullet">Worked on hands-on projects including <strong>classification, regression, and
                    clustering</strong>.</div>
                <div class="exp-bullet">Learned <strong>model evaluation, cross-validation</strong>, and hyperparameter
                  tuning techniques.</div>
                <div class="exp-bullets">
                  <div class="exp-bullet">Learned end-to-end <strong>data science pipeline</strong> from data collection
                    to model deployment.</div>
                  <div class="exp-bullet">Performed <strong>EDA (Exploratory Data Analysis)</strong> and feature
                    engineering on real datasets.</div>
                  <div class="exp-bullet">Built dashboards and visualisations using <strong>Matplotlib and
                      Seaborn</strong>.</div>
                </div>
                <div class="exp-skills">
                  <span class="tag tag-purple">Data Science</span>
                  <span class="tag tag-blue">Python</span>
                  <span class="tag tag-green">SQL</span>
                  <span class="tag tag-amber">Matplotlib</span>
                  <span class="tag tag-amber">Seaborn</span>
                </div>
              </div>
            </div>

          </div><!-- end timeline -->
        </div><!-- end layout -->

        <!-- CTA -->
        <div
          style="text-align:center;margin-top:72px;padding:48px 24px;border-radius:20px;border:1px solid var(--border);background:var(--card);backdrop-filter:blur(14px)"
          class="reveal">
          <p style="font-family:'Syne',sans-serif;font-size:1.2rem;font-weight:700;margin-bottom:10px">Looking to add
            your
            next experience here? 🚀</p>
          <p style="color:var(--muted);margin-bottom:28px;font-size:.95rem">I'm actively seeking internships and
            full-time
            roles in Data Science, AI-ML &amp; Python Development.</p>
          <div style="display:flex;gap:14px;justify-content:center;flex-wrap:wrap">
            <a href="mailto:ppratyushbbiswas2003@gmail.com?subject=Hiring%20Discussion" class="btn btn-primary"><svg
                width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>Contact Me</a>
            <a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="btn btn-ghost" target="_blank"><svg width="15"
                height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>Download Resume</a>
          </div>
        </div>
      </div>
    </div>

    <footer>
      <p>Designed &amp; built by <a href="index.html">Pratyush Biswas</a> &nbsp;·&nbsp; © 2026 &nbsp;·&nbsp; <a
          href="https://github.com/SteveX103" target="_blank">GitHub</a></p>
    </footer>

    <script src="assets/js/main.js"></script>
    <script>
      function filterExp(type, btn) {
        // update active button
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        // show/hide items
        document.querySelectorAll('.tl-item').forEach(item => {
          if (type === 'all' || item.classList.contains('exp-type-' + type)) {
            item.style.display = '';
            item.style.opacity = '1';
          } else {
            item.style.opacity = '0';
            item.style.display = 'none';
          }
        });
        // hide/show year labels based on visible items
        document.querySelectorAll('.tl-year').forEach(yr => {
          let next = yr.nextElementSibling;
          let hasVisible = false;
          while (next && !next.classList.contains('tl-year')) {
            if (next.style.display !== 'none') hasVisible = true;
            next = next.nextElementSibling;
          }
          yr.style.display = hasVisible ? '' : 'none';
        });
      }
    </script>
</body>

</html>
```

### `googlec8d8e01c9cc9f6eb.html`

```html
google-site-verification: googlec8d8e01c9cc9f6eb.html
```

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Pratyush Biswas — Data Science & AI-ML</title>
  <link rel="stylesheet" href="style.css">
  <style>
    .mobile-only {
      display: none
    }

    @media(max-width:900px) {
      .mobile-only {
        display: list-item;
        list-style: none
      }
    }

    /* HERO */
    .hero {
      min-height: calc(100vh - var(--nav-h));
      display: flex;
      align-items: center;
      gap: 64px;
      padding: 80px 40px 60px;
      max-width: 1200px;
      margin: 0 auto
    }

    .hero-left {
      flex: 1
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px;
      border-radius: 100px;
      border: 1px solid rgba(52, 211, 153, .3);
      background: rgba(52, 211, 153, .08);
      font-size: .76rem;
      font-weight: 600;
      color: var(--accent3);
      margin-bottom: 28px;
      letter-spacing: .5px;
      animation: fadeUp .7s ease both
    }

    .hero-badge::before {
      content: '';
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--accent3);
      animation: pulse 2s ease infinite
    }

    @keyframes pulse {

      0%,
      100% {
        opacity: 1;
        transform: scale(1)
      }

      50% {
        opacity: .4;
        transform: scale(.65)
      }
    }

    .hero-name {
      font-family: 'Syne', sans-serif;
      font-size: clamp(3.2rem, 8vw, 6.5rem);
      font-weight: 800;
      line-height: .98;
      letter-spacing: -3px;
      margin-bottom: 20px;
      animation: fadeUp .7s ease .1s both
    }

    .hero-title {
      font-size: clamp(1rem, 2.2vw, 1.2rem);
      color: var(--muted);
      font-weight: 300;
      line-height: 1.75;
      margin-bottom: 44px;
      max-width: 500px;
      animation: fadeUp .7s ease .2s both
    }

    .hero-title strong {
      color: var(--text);
      font-weight: 500
    }

    .hero-btns {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      animation: fadeUp .7s ease .3s both
    }

    .hero-stats {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 52px;
      animation: fadeUp .7s ease .45s both
    }

    .stat-pill {
      padding: 10px 18px;
      border-radius: 10px;
      border: 1px solid var(--border);
      background: var(--card);
      backdrop-filter: blur(12px);
      text-align: center
    }

    .stat-pill strong {
      display: block;
      font-family: 'Syne', sans-serif;
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--text)
    }

    .stat-pill span {
      font-size: .75rem;
      color: var(--muted)
    }

    .hero-right {
      flex-shrink: 0;
      animation: fadeUp .7s ease .35s both
    }

    .photo-ring {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--accent), var(--accent2), var(--pink));
      padding: 3px;
      position: relative
    }

    .photo-ring::before {
      content: '';
      position: absolute;
      inset: -16px;
      border-radius: 50%;
      border: 1px dashed rgba(79, 142, 247, .28);
      animation: spin 22s linear infinite
    }

    .photo-ring::after {
      content: '';
      position: absolute;
      inset: -32px;
      border-radius: 50%;
      border: 1px dashed rgba(167, 139, 250, .15);
      animation: spin 30s linear infinite reverse
    }

    @keyframes spin {
      to {
        transform: rotate(360deg)
      }
    }

    .photo-ring img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      display: block;
      background: var(--bg2)
    }

    .scroll-cue {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      color: var(--muted);
      font-size: .68rem;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      margin: 0 auto 40px;
      width: fit-content;
      position: relative;
      z-index: 1;
      animation: fadeUp .7s ease .6s both
    }

    .scroll-line {
      width: 1px;
      height: 44px;
      background: linear-gradient(to bottom, var(--accent), transparent);
      animation: scrl 2s ease-in-out infinite
    }

    @keyframes scrl {
      0% {
        transform: scaleY(0);
        transform-origin: top
      }

      49% {
        transform: scaleY(1);
        transform-origin: top
      }

      50% {
        transform: scaleY(1);
        transform-origin: bottom
      }

      100% {
        transform: scaleY(0);
        transform-origin: bottom
      }
    }

    .strip {
      position: relative;
      z-index: 1;
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
      padding: 20px 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 28px;
      flex-wrap: wrap;
      background: rgba(255, 255, 255, .015)
    }

    .strip-item {
      color: var(--muted);
      font-size: .82rem;
      font-weight: 500
    }

    .strip-dot {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: var(--border)
    }

    .cta-box {
      text-align: center;
      padding: 80px 40px;
      max-width: 700px;
      margin: 0 auto;
      position: relative;
      z-index: 1
    }

    .cta-box h2 {
      font-family: 'Syne', sans-serif;
      font-size: clamp(1.8rem, 4vw, 2.8rem);
      font-weight: 800;
      letter-spacing: -1px;
      margin-bottom: 16px
    }

    .cta-box p {
      color: var(--muted);
      margin-bottom: 36px
    }

    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(22px)
      }

      to {
        opacity: 1;
        transform: none
      }
    }

    @media(max-width:768px) {
      .hero {
        flex-direction: column-reverse;
        gap: 36px;
        padding: 50px 20px 40px;
        text-align: center
      }

      .hero-btns,
      .hero-stats {
        justify-content: center
      }

      .photo-ring {
        width: 200px;
        height: 200px
      }

      .strip {
        padding: 18px 20px;
        gap: 16px
      }

      .cta-box {
        padding: 60px 20px
      }
    }

    @media(max-width:480px) {
      .hero-name {
        letter-spacing: -1.5px
      }

      .strip-dot {
        display: none
      }
    }
  </style>
</head>

<body data-page="home">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>

  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">PB<span>.</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" class="nav-link" data-page="home" onclick="closeNav()">Home</a></li>
        <li><a href="about.html" class="nav-link" data-page="about" onclick="closeNav()">About</a></li>
        <li><a href="skills.html" class="nav-link" data-page="skills" onclick="closeNav()">Skills</a></li>
        <li><a href="projects.html" class="nav-link" data-page="projects" onclick="closeNav()">Projects</a></li>
        <li><a href="certificates.html" class="nav-link" data-page="certificates" onclick="closeNav()">Certificates</a>
        </li>
        <li><a href="experience.html" class="nav-link" data-page="experience" onclick="closeNav()">Experience</a></li>
        <li><a href="contact.html" class="nav-link" data-page="contact" onclick="closeNav()">Contact</a></li>

        <li class="mobile-only"><a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank"
            onclick="closeNav()">Resume ↗</a></li>
      </ul>
      <div class="nav-socials" id="navSocials">
        <a href="https://github.com/SteveX103" target="_blank" class="nav-icon" data-tip="GitHub"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg></a>
        <a href="https://www.linkedin.com/in/pratyush-biswas-32179a232/" target="_blank" class="nav-icon"
          data-tip="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg></a>
        <a href="https://www.instagram.com/jake_lockley_here" target="_blank" class="nav-icon" data-tip="Instagram"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg></a>
        <a href="https://wa.me/918918664551" target="_blank" class="nav-icon" data-tip="WhatsApp"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg></a>
        <a href="tel:+918918664551" class="nav-icon" data-tip="Call Me"><svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg></a>
        <a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank">Resume ↗</a>
      </div>
      <div class="hamburger" id="hamburger" onclick="toggleNav()"><span></span><span></span><span></span></div>
    </div>
  </nav>

  <div class="page">
    <div class="hero">
      <div class="hero-left">
        <div class="hero-badge">🟢 Actively Seeking Opportunities</div>
        <h1 class="hero-name">Pratyush<br><span class="grad">Biswas</span></h1>
        <p class="hero-title">MCA graduate | Python Developer | Networking &amp; Cybersecurity Enthusiast | Data
          Science Learner. Passionate about building secure, efficient, and data-driven solutions while continuously
          learning emerging technologies.
        </p>
        <div class="hero-btns">
          <a href="projects.html" class="btn btn-primary"><svg width="15" height="15" fill="none" stroke="currentColor"
              stroke-width="2" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>View Projects</a>
          <a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="btn btn-ghost" target="_blank"><svg width="15"
              height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>Download Resume</a>
        </div>
        <div class="hero-stats">
          <div class="stat-pill"><strong>5+</strong><span>Projects</span></div>
          <div class="stat-pill"><strong>Python</strong><span>Primary Stack</span></div>
          <div class="stat-pill"><strong>Data Science,AI-ML,Cyber Security </strong><span>Focus Area</span></div>
        </div>
      </div>
      <div class="hero-right">
        <div class="photo-ring"><img src="assets/images/profile.webp" alt="Pratyush Biswas"></div>
      </div>
    </div>
    <div class="scroll-cue">
      <div class="scroll-line"></div><span>scroll</span>
    </div>
    <div class="strip">
      <span class="strip-item">Python</span>
      <div class="strip-dot"></div>
      <span class="strip-item">Machine Learning</span>
      <div class="strip-dot"></div>
      <span class="strip-item">Data Science</span>
      <div class="strip-dot"></div>
      <span class="strip-item">SQL</span>
      <div class="strip-dot"></div>
      <span class="strip-item">Cyber Security</span>
      <div class="strip-dot"></div>
      <span class="strip-item">Networking</span>
      <div class="strip-dot"></div>
      <span class="strip-item">Java</span>
      <div class="strip-dot"></div>
      <span class="strip-item">MySQL</span>
    </div>
    <div class="cta-box">
      <h2>Let's build something <span class="grad">amazing</span> together.</h2>
      <p>I'm actively seeking opportunities in Data Science, AI-ML and Python Development.</p>
      <a href="mailto:ppratyushbbiswas2003@gmail.com?subject=Hiring%20Discussion" class="btn btn-primary"><svg
          width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>Contact Me for Opportunities</a>
    </div>
  </div>
  <footer>
    <p>Designed &amp; built by <a href="index.html">Pratyush Biswas</a> &nbsp;·&nbsp; © 2026 &nbsp;·&nbsp; <a
        href="https://github.com/SteveX103" target="_blank">GitHub</a></p>
  </footer>
  <script src="assets/js/main.js"></script>
</body>

</html>
```

### `projects.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Projects — Pratyush Biswas</title>
  <link rel="stylesheet" href="style.css">
  <style>
    .mobile-only {
      display: none
    }

    @media(max-width:900px) {
      .mobile-only {
        display: list-item;
        list-style: none
      }
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 26px
    }

    .proj-card {
      border-radius: 18px;
      border: 1px solid var(--border);
      background: var(--card);
      backdrop-filter: blur(18px);
      overflow: hidden;
      transition: all .4s;
      display: flex;
      flex-direction: column
    }

    .proj-card:hover {
      border-color: rgba(79, 142, 247, .4);
      transform: translateY(-7px);
      box-shadow: 0 28px 65px rgba(0, 0, 0, .4)
    }

    .proj-thumb {
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3.5rem;
      position: relative;
      overflow: hidden
    }

    .proj-thumb img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform .5s
    }

    .proj-card:hover .proj-thumb img {
      transform: scale(1.05)
    }

    .proj-thumb-fb {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      inset: 0
    }

    .bg-1 {
      background: linear-gradient(135deg, #0a1628, #0d2a50, #1a3a6e)
    }

    .bg-2 {
      background: linear-gradient(135deg, #0a0a28, #1a0a40, #2a1060)
    }

    .bg-3 {
      background: linear-gradient(135deg, #081a10, #0f2d18, #1a4228)
    }

    .bg-4 {
      background: linear-gradient(135deg, #1a0a04, #2d1408, #401e10)
    }

    .proj-thumb::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, transparent 60%, rgba(5, 8, 16, .6))
    }

    .proj-body {
      padding: 24px;
      flex: 1;
      display: flex;
      flex-direction: column
    }

    .proj-langs {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 14px
    }

    .ltag {
      padding: 3px 11px;
      border-radius: 5px;
      font-size: .7rem;
      font-weight: 700;
      letter-spacing: .6px;
      text-transform: uppercase
    }

    .lpy {
      background: rgba(59, 130, 246, .15);
      color: #60a5fa
    }

    .ljv {
      background: rgba(239, 68, 68, .15);
      color: #f87171
    }

    .lwb {
      background: rgba(245, 158, 11, .15);
      color: #fbbf24
    }

    .ldb {
      background: rgba(52, 211, 153, .15);
      color: #34d399
    }

    .proj-title {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 1.1rem;
      margin-bottom: 10px;
      line-height: 1.3
    }

    .proj-desc {
      font-size: .875rem;
      color: var(--muted);
      line-height: 1.75;
      margin-bottom: 22px;
      flex: 1
    }

    .proj-links {
      display: flex;
      gap: 10px
    }

    .proj-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: .8rem;
      font-weight: 600;
      color: var(--accent);
      text-decoration: none;
      padding: 7px 15px;
      border-radius: 8px;
      border: 1px solid rgba(79, 142, 247, .28);
      transition: all .2s
    }

    .proj-link:hover {
      background: rgba(79, 142, 247, .1);
      transform: translateY(-2px)
    }

    @media(max-width:680px) {
      .projects-grid {
        grid-template-columns: 1fr
      }
    }
  </style>
</head>

<body data-page="projects">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">PB<span>.</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" class="nav-link" data-page="home" onclick="closeNav()">Home</a></li>
        <li><a href="about.html" class="nav-link" data-page="about" onclick="closeNav()">About</a></li>
        <li><a href="skills.html" class="nav-link" data-page="skills" onclick="closeNav()">Skills</a></li>
        <li><a href="projects.html" class="nav-link" data-page="projects" onclick="closeNav()">Projects</a></li>
        <li><a href="certificates.html" class="nav-link" data-page="certificates" onclick="closeNav()">Certificates</a>
        </li>
        <li><a href="experience.html" class="nav-link" data-page="experience" onclick="closeNav()">Experience</a></li>
        <li><a href="contact.html" class="nav-link" data-page="contact" onclick="closeNav()">Contact</a></li>
        <li class="mobile-only"><a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank"
            onclick="closeNav()">Resume ↗</a></li>
      </ul>
      <div class="nav-socials" id="navSocials">
        <a href="https://github.com/SteveX103" target="_blank" class="nav-icon" data-tip="GitHub"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg></a>
        <a href="https://www.linkedin.com/in/pratyush-biswas-32179a232/" target="_blank" class="nav-icon"
          data-tip="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg></a>
        <a href="https://www.instagram.com/jake_lockley_here" target="_blank" class="nav-icon" data-tip="Instagram"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg></a>
        <a href="https://wa.me/918918664551" target="_blank" class="nav-icon" data-tip="WhatsApp"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg></a>
        <a href="tel:+918918664551" class="nav-icon" data-tip="Call Me"><svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg></a>
        <a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank">Resume ↗</a>
      </div>
      <div class="hamburger" id="hamburger" onclick="toggleNav()"><span></span><span></span><span></span></div>
    </div>
  </nav>
  <div class="page">
    <div class="page-hero">
      <span class="section-label">My Work</span>
      <h1 class="section-title">Featured <span class="dim">Projects</span></h1>
      <p>A selection of projects I've built — from Python tools and APIs to full-stack web applications.</p>
    </div>
    <div class="section" style="padding-top:0">
      <div class="projects-grid">
        <div class="proj-card reveal">
          <div class="proj-thumb">
            <div class="proj-thumb-fb bg-1"><img src="assets/images/project1.webp" alt="Youtube Music Converter"
                onerror="this.style.display='none'"><span style="font-size:3rem;position:absolute;z-index:1">🎵</span>
            </div>
          </div>
          <div class="proj-body">
            <div class="proj-langs"><span class="ltag lpy">Python</span><span class="ltag lpy">Flask</span><span
                class="ltag lpy">OpenCV</span><span class="ltag lpy">Face Recognition</span><span
                class="ltag lpy">MongoDB</span></div>
            <h3 class="proj-title">AI Security Surveillance</h3>
            <p class="proj-desc">An AI powered Security Surveillance system. Detects unknown faces , saves them and
              track a record of them
            <div class=""></div>
            </p>
            <div class="proj-links"><a href="https://github.com/SteveX103/ai-surveillance-system" target="_blank"
                class="proj-link"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>GitHub</a></div>
          </div>
        </div>
        <div class="proj-card reveal">
          <div class="proj-thumb">
            <div class="proj-thumb-fb bg-1"><img src="assets/images/project1.webp" alt="Youtube Music Converter"
                onerror="this.style.display='none'"><span style="font-size:3rem;position:absolute;z-index:1">🎵</span>
            </div>
          </div>
          <div class="proj-body">
            <div class="proj-langs"><span class="ltag lpy">Python</span><span class="ltag lpy">FastAPI</span><span
                class="ltag lpy">Uvicorn</span><span class="ltag lpy">yt-dlp</span></div>
            <h3 class="proj-title">Youtube Music Converter</h3>
            <p class="proj-desc">Download music from any YouTube video. Simply copy-paste the link and instantly receive
              your audio file — powered by FastAPI and yt-dlp for blazing-fast conversion.</p>
            <div class="proj-links"><a href="https://github.com/SteveX103/YoutubeMusicConverter" target="_blank"
                class="proj-link"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>GitHub</a></div>
          </div>
        </div>
        <div class="proj-card reveal reveal-d1">
          <div class="proj-thumb">
            <div class="proj-thumb-fb bg-2"><img src="assets/images/project2.webp" alt="Online Music Library"
                onerror="this.style.display='none'"><span style="font-size:3rem;position:absolute;z-index:1">🎼</span>
            </div>
          </div>
          <div class="proj-body">
            <div class="proj-langs"><span class="ltag ljv">Java</span><span class="ltag ljv">Swing</span><span
                class="ltag ldb">MySQL</span></div>
            <h3 class="proj-title">Online Music Library</h3>
            <p class="proj-desc">A music library application where you can browse, search, and listen to music online.
              Built with Java Swing for the UI and MySQL for data persistence.</p>
            <div class="proj-links"><a href="https://github.com/SteveX103/OnlineMusicLibrary" target="_blank"
                class="proj-link"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>GitHub</a></div>
          </div>
        </div>
        <div class="proj-card reveal reveal-d2">
          <div class="proj-thumb">
            <div class="proj-thumb-fb bg-3"><img src="assets/images/project3.webp" alt="Number Guessing Game"
                onerror="this.style.display='none'"><span style="font-size:3rem;position:absolute;z-index:1">🎮</span>
            </div>
          </div>
          <div class="proj-body">
            <div class="proj-langs"><span class="ltag lpy">Python</span><span class="ltag lpy">Pygame</span></div>
            <h3 class="proj-title">Number Guessing Game</h3>
            <p class="proj-desc">An interactive graphical number guessing game with score tracking and difficulty
              levels. Built with Python and Pygame for a smooth gameplay experience.</p>
            <div class="proj-links"><a href="https://github.com/SteveX103/NumberGuessingGame" target="_blank"
                class="proj-link"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>GitHub</a></div>
          </div>
        </div>
        <div class="proj-card reveal reveal-d3">
          <div class="proj-thumb">
            <div class="proj-thumb-fb bg-4"><img src="assets/images/project4.webp" alt="Wedding Event Management"
                onerror="this.style.display='none'"><span style="font-size:3rem;position:absolute;z-index:1">💍</span>
            </div>
          </div>
          <div class="proj-body">
            <div class="proj-langs"><span class="ltag lwb">HTML</span><span class="ltag lwb">CSS</span><span
                class="ltag lwb">JavaScript</span><span class="ltag ldb">MySQL</span></div>
            <h3 class="proj-title">Wedding Event Management</h3>
            <p class="proj-desc">A comprehensive web application for managing wedding events — including guest lists,
              vendor coordination, event schedules, and budget tracking.</p>
            <div class="proj-links"><a href="https://github.com/SteveX103/Wedding-Management" target="_blank"
                class="proj-link"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>GitHub</a></div>
          </div>
        </div>
      </div>
      <div style="text-align:center;margin-top:64px" class="reveal">
        <p style="color:var(--muted);margin-bottom:20px;font-size:.95rem">Want to see more? Check out all my
          repositories on GitHub.</p>
        <a href="https://github.com/SteveX103" target="_blank" class="btn btn-ghost"><svg width="16" height="16"
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>View All on GitHub ↗</a>
      </div>
    </div>
  </div>
  <footer>
    <p>Designed &amp; built by <a href="index.html">Pratyush Biswas</a> &nbsp;·&nbsp; © 2026 &nbsp;·&nbsp; <a
        href="https://github.com/SteveX103" target="_blank">GitHub</a></p>
  </footer>
  <script src="assets/js/main.js"></script>
</body>

</html>
```

### `resume.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Resume | Pratyush Biswas</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

  <div id="navbar-placeholder"></div>
  <!-- AI Background -->
  <div id="ai-bg"></div>

  <section class="page">
    <h1>Resume</h1>

    <iframe src="assets/resume/Pratyush_Biswas_Resume.pdf" width="100%" height="600px"
      style="border-radius:12px; border:none;">
    </iframe>
  </section>
  <script src="assets/js/navbar.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
  <script src="assets/js/ai-bg.js"></script>

</body>

</html>
```

### `sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://pratyushbiswas.site/</loc>
  </url>
</urlset>
```

### `skills.html`

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>Skills — Pratyush Biswas</title>
  <link rel="stylesheet" href="style.css">
  <style>
    .mobile-only {
      display: none
    }

    @media(max-width:900px) {
      .mobile-only {
        display: list-item;
        list-style: none
      }
    }

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      gap: 22px
    }

    .skill-card {
      padding: 30px;
      border-radius: 18px;
      border: 1px solid var(--border);
      background: var(--card);
      backdrop-filter: blur(18px);
      transition: all .35s;
      position: relative;
      overflow: hidden
    }

    .skill-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform .4s
    }

    .skill-card.c-blue::before {
      background: linear-gradient(90deg, var(--accent), #60a5fa)
    }

    .skill-card.c-purple::before {
      background: linear-gradient(90deg, var(--accent2), #c4b5fd)
    }

    .skill-card.c-green::before {
      background: linear-gradient(90deg, var(--accent3), #6ee7b7)
    }

    .skill-card.c-pink::before {
      background: linear-gradient(90deg, var(--pink), #f9a8d4)
    }

    .skill-card:hover {
      border-color: rgba(79, 142, 247, .3);
      transform: translateY(-6px);
      box-shadow: 0 20px 55px rgba(0, 0, 0, .3)
    }

    .skill-card:hover::before {
      transform: scaleX(1)
    }

    .sk-icon {
      font-size: 2rem;
      margin-bottom: 14px
    }

    .sk-title {
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 6px
    }

    .sk-desc {
      font-size: .82rem;
      color: var(--muted);
      line-height: 1.6;
      margin-bottom: 20px
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px
    }

    .prof-section {
      margin-top: 80px
    }

    .prof-section h3 {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 1.5rem;
      letter-spacing: -.5px;
      margin-bottom: 36px
    }

    .prof-list {
      display: flex;
      flex-direction: column;
      gap: 22px;
      max-width: 700px
    }

    .prof-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px
    }

    .prof-name {
      font-weight: 600;
      font-size: .9rem
    }

    .prof-pct {
      font-size: .8rem;
      color: var(--muted);
      font-family: 'Syne', sans-serif
    }

    .prof-bar {
      height: 6px;
      border-radius: 100px;
      background: var(--border);
      overflow: hidden
    }

    .prof-fill {
      height: 100%;
      border-radius: 100px;
      background: linear-gradient(90deg, var(--accent), var(--accent2));
      width: 0;
      transition: width .9s cubic-bezier(.4, 0, .2, 1)
    }

    @media(max-width:600px) {
      .skills-grid {
        grid-template-columns: 1fr
      }
    }
  </style>
</head>

<body data-page="skills">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>
  <nav class="navbar" id="navbar">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">PB<span>.</span></a>
      <ul class="nav-links" id="navLinks">
        <li><a href="index.html" class="nav-link" data-page="home" onclick="closeNav()">Home</a></li>
        <li><a href="about.html" class="nav-link" data-page="about" onclick="closeNav()">About</a></li>
        <li><a href="skills.html" class="nav-link" data-page="skills" onclick="closeNav()">Skills</a></li>
        <li><a href="projects.html" class="nav-link" data-page="projects" onclick="closeNav()">Projects</a></li>
        <li><a href="certificates.html" class="nav-link" data-page="certificates" onclick="closeNav()">Certificates</a>
        </li>
        <li><a href="experience.html" class="nav-link" data-page="experience" onclick="closeNav()">Experience</a></li>
        <li><a href="contact.html" class="nav-link" data-page="contact" onclick="closeNav()">Contact</a></li>
        <li class="mobile-only"><a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank"
            onclick="closeNav()">Resume ↗</a></li>
      </ul>
      <div class="nav-socials" id="navSocials">
        <a href="https://github.com/SteveX103" target="_blank" class="nav-icon" data-tip="GitHub"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg></a>
        <a href="https://www.linkedin.com/in/pratyush-biswas-32179a232/" target="_blank" class="nav-icon"
          data-tip="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg></a>
        <a href="https://www.instagram.com/jake_lockley_here" target="_blank" class="nav-icon" data-tip="Instagram"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
          </svg></a>
        <a href="https://wa.me/918918664551" target="_blank" class="nav-icon" data-tip="WhatsApp"><svg
            viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
          </svg></a>
        <a href="tel:+918918664551" class="nav-icon" data-tip="Call Me"><svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg></a>
        <a href="assets/resume/Pratyush_Biswas_Resume.pdf" class="nav-resume" target="_blank">Resume ↗</a>
      </div>
      <div class="hamburger" id="hamburger" onclick="toggleNav()"><span></span><span></span><span></span></div>
    </div>
  </nav>
  <div class="page">
    <div class="page-hero">
      <span class="section-label">My Toolkit</span>
      <h1 class="section-title">Technical <span class="dim">Skills</span></h1>
      <p>Technologies and tools I work with — focused on Data Science, AI-ML, and Python development.</p>
    </div>
    <div class="section">
      <div class="skills-grid">
        <div class="skill-card c-blue reveal reveal-d1">
          <div class="sk-icon">🐍</div>
          <div class="sk-title">Python Ecosystem</div>
          <div class="sk-desc">My primary language for scripting, APIs, data manipulation and ML pipelines.</div>
          <div class="tags"><span class="tag tag-blue">Python</span><span class="tag tag-blue">FastAPI</span><span
              class="tag tag-blue">Uvicorn</span><span class="tag tag-blue">Flask</span><span
              class="tag tag-blue">yt-dlp</span></div>
        </div>
        <div class="skill-card c-purple reveal reveal-d2">
          <div class="sk-icon">🤖</div>
          <div class="sk-title">AI / Machine Learning</div>
          <div class="sk-desc">Building predictive models and data-driven solutions with ML fundamentals.</div>
          <div class="tags"><span class="tag tag-purple">Machine Learning</span><span class="tag tag-purple">Data
              Science</span><span class="tag tag-purple">Data Analysis</span><span class="tag tag-purple">AI-ML</span>
          </div>
        </div>
        <div class="skill-card c-green reveal reveal-d3">
          <div class="sk-icon">🗄️</div>
          <div class="sk-title">Database & Backend</div>
          <div class="sk-desc">Structuring and querying data efficiently for real-world applications.</div>
          <div class="tags"><span class="tag tag-green">SQL</span><span class="tag tag-green">MySQL</span><span
              class="tag tag-green">MongoDB</span><span class="tag tag-green">PostgreSQL</span></div>
        </div>
        <div class="skill-card c-pink reveal reveal-d4">
          <div class="sk-icon">🌐</div>
          <div class="sk-title">Web Technologies</div>
          <div class="sk-desc">Creating responsive, clean interfaces and web applications from scratch.</div>
          <div class="tags"><span class="tag tag-pink">HTML5</span><span class="tag tag-pink">CSS3</span><span
              class="tag tag-pink">JavaScript</span><span class="tag tag-pink">Flask</span><span
              class="tag tag-pink">Django</span><span class="tag tag-pink">FastAPI</span></div>
        </div>
        <div class="skill-card c-green reveal reveal-d3">
          <div class="sk-icon">☁️</div>
          <div class="sk-title">Cloud Technologies</div>
          <div class="sk-desc"></div>
          <div class="tags"><span class="tag tag-green">AWS</span></div>
        </div>
        <div class="skill-card c-green reveal reveal-d3">
          <div class="sk-icon">⚒️</div>
          <div class="sk-title">Tools</div>
          <div class="sk-desc"></div>
          <div class="tags"><span class="tag tag-green">VS Code</span><span class="tag tag-green">Docker</span><span
              class="tag tag-green">Jupyter</span></div>
        </div>
        <div class="skill-card c-green reveal reveal-d3">
          <div class="sk-icon">🖥️</div>
          <div class="sk-title">OS</div>
          <div class="sk-desc">Structuring and querying data efficiently for real-world applications.</div>
          <div class="tags"><span class="tag tag-green">Windows</span><span class="tag tag-green">Linux</span></div>
        </div>
      </div>
      <div class="prof-section">
        <h3>Proficiency <span class="grad">Overview</span></h3>
        <div class="prof-list" id="profList">
          <div class="prof-item reveal">
            <div class="prof-top"><span class="prof-name">Python</span><span class="prof-pct">88%</span></div>
            <div class="prof-bar">
              <div class="prof-fill" data-w="88"></div>
            </div>
          </div>
          <div class="prof-item reveal">
            <div class="prof-top"><span class="prof-name">SQL / MySQL</span><span class="prof-pct">80%</span></div>
            <div class="prof-bar">
              <div class="prof-fill" data-w="80"></div>
            </div>
          </div>
          <div class="prof-item reveal">
            <div class="prof-top"><span class="prof-name">Machine Learning</span><span class="prof-pct">74%</span></div>
            <div class="prof-bar">
              <div class="prof-fill" data-w="74"></div>
            </div>
          </div>
          <div class="prof-item reveal">
            <div class="prof-top"><span class="prof-name">Data Analysis</span><span class="prof-pct">76%</span></div>
            <div class="prof-bar">
              <div class="prof-fill" data-w="76"></div>
            </div>
          </div>
          <div class="prof-item reveal">
            <div class="prof-top"><span class="prof-name">FastAPI / Backend</span><span class="prof-pct">72%</span>
            </div>
            <div class="prof-bar">
              <div class="prof-fill" data-w="72"></div>
            </div>
          </div>
          <div class="prof-item reveal">
            <div class="prof-top"><span class="prof-name">Java</span><span class="prof-pct">65%</span></div>
            <div class="prof-bar">
              <div class="prof-fill" data-w="65"></div>
            </div>
          </div>
          <div class="prof-item reveal">
            <div class="prof-top"><span class="prof-name">HTML / CSS / JS</span><span class="prof-pct">70%</span></div>
            <div class="prof-bar">
              <div class="prof-fill" data-w="70"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer>
    <p>Designed &amp; built by <a href="index.html">Pratyush Biswas</a> &nbsp;·&nbsp; © 2026 &nbsp;·&nbsp; <a
        href="https://github.com/SteveX103" target="_blank">GitHub</a></p>
  </footer>
  <script src="assets/js/main.js"></script>
  <script>
    const bo = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.prof-fill').forEach(b => { b.style.width = b.dataset.w + '%' }); } }); }, { threshold: .2 });
    document.querySelectorAll('#profList').forEach(el => bo.observe(el));
  </script>
</body>

</html>
```

### `style.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#050810;--bg2:#0a0f1e;--card:rgba(255,255,255,0.04);--border:rgba(255,255,255,0.08);
  --accent:#4f8ef7;--accent2:#a78bfa;--accent3:#34d399;--pink:#f472b6;
  --text:#e8eaf6;--muted:#6b7280;--nav-h:72px;
}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);overflow-x:hidden;line-height:1.6;min-height:100vh}
body::after{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");pointer-events:none;z-index:9999;opacity:.5}
.blob{position:fixed;border-radius:50%;filter:blur(110px);pointer-events:none;z-index:0}
.blob-1{width:550px;height:550px;background:var(--accent);top:-180px;left:-120px;opacity:.09;animation:bf 13s ease-in-out infinite}
.blob-2{width:380px;height:380px;background:var(--accent2);bottom:5%;right:-80px;opacity:.09;animation:bf 16s ease-in-out infinite reverse}
.blob-3{width:280px;height:280px;background:var(--accent3);top:42%;left:42%;opacity:.06;animation:bf 20s ease-in-out infinite 4s}
@keyframes bf{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(28px,-18px) scale(1.04)}66%{transform:translate(-18px,14px) scale(.96)}}

/* ══ NAVBAR ══ */
.navbar{
  position:fixed;top:0;left:0;right:0;z-index:1000;
  height:var(--nav-h);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);
  background:rgba(5,8,16,.72);border-bottom:1px solid var(--border);transition:background .3s;
}
.navbar.scrolled{background:rgba(5,8,16,.96)}

/* Three-column layout: logo | centre links | social icons */
.nav-inner{
  max-width:1400px;margin:0 auto;height:100%;padding:0 32px;
  display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;
}

/* Logo */
.nav-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.4rem;text-decoration:none;color:var(--text);letter-spacing:-1px}
.nav-logo span{color:var(--accent)}

/* Centre nav links */
.nav-links{
  display:flex;gap:4px;list-style:none;align-items:center;
  justify-content:center;  /* ← centred */
}
.nav-link{
  text-decoration:none;color:var(--muted);font-size:.855rem;font-weight:500;letter-spacing:.3px;
  padding:7px 13px;border-radius:8px;transition:color .2s,background .2s;white-space:nowrap;
}
.nav-link:hover,.nav-link.active{color:var(--text);background:rgba(255,255,255,.06)}
.nav-link.active{color:var(--accent)}

/* Social icons cluster (right) */
.nav-socials{display:flex;align-items:center;gap:4px;flex-shrink:0}
.nav-icon{
  display:flex;align-items:center;justify-content:center;
  width:36px;height:36px;border-radius:9px;border:1px solid var(--border);
  background:var(--card);color:var(--muted);text-decoration:none;
  transition:all .22s;position:relative;flex-shrink:0;
}
.nav-icon svg{width:16px;height:16px;display:block}
.nav-icon:hover{border-color:var(--accent);color:var(--accent);background:rgba(79,142,247,.1);transform:translateY(-2px)}
/* tooltip */
.nav-icon::after{
  content:attr(data-tip);position:absolute;bottom:-30px;left:50%;transform:translateX(-50%);
  background:var(--bg2);color:var(--muted);font-size:.68rem;padding:3px 8px;
  border-radius:5px;border:1px solid var(--border);white-space:nowrap;
  opacity:0;pointer-events:none;transition:opacity .2s;
}
.nav-icon:hover::after{opacity:1}

/* Resume btn */
.nav-resume{
  display:flex;align-items:center;gap:6px;
  padding:7px 16px;border-radius:8px;
  background:linear-gradient(135deg,var(--accent),var(--accent2));
  color:#fff;font-size:.82rem;font-weight:600;text-decoration:none;
  transition:opacity .2s,transform .2s;white-space:nowrap;margin-left:4px;
}
.nav-resume:hover{opacity:.88;transform:translateY(-1px)}

/* Hamburger */
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:6px;z-index:1002}
.hamburger span{display:block;width:22px;height:2px;background:var(--text);border-radius:2px;transition:all .3s}
.hamburger.open span:nth-child(1){transform:translateY(7px) rotate(45deg)}
.hamburger.open span:nth-child(2){opacity:0}
.hamburger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}

/* Mobile overlay */
@media(max-width:900px){
  .nav-inner{grid-template-columns:auto auto;padding:0 20px}
  .nav-links{
    display:none;position:fixed;inset:0;
    background:rgba(5,8,16,.97);backdrop-filter:blur(30px);
    flex-direction:column;justify-content:center;align-items:center;
    gap:22px;z-index:1001;
  }
  .nav-links.open{display:flex}
  .nav-link{font-size:1.35rem;padding:10px 24px}
  .nav-socials{
    display:none;position:fixed;bottom:50px;left:50%;transform:translateX(-50%);
    z-index:1002;gap:12px;
  }
  .nav-socials.open{display:flex}
  .nav-resume{font-size:.95rem;padding:10px 22px;margin-left:0}
  .hamburger{display:flex}
}
@media(max-width:480px){.nav-link{font-size:1.15rem}}

/* ══ PAGE ══ */
.page{position:relative;z-index:1;padding-top:var(--nav-h)}

/* ══ SECTIONS ══ */
.section{max-width:1200px;margin:0 auto;padding:90px 40px}
@media(max-width:768px){.section{padding:64px 20px}}
.section-label{font-size:.7rem;font-weight:700;letter-spacing:3.5px;text-transform:uppercase;color:var(--accent);margin-bottom:10px;display:block}
.section-title{font-family:'Syne',sans-serif;font-size:clamp(2rem,5vw,3rem);font-weight:800;line-height:1.08;letter-spacing:-1.5px;margin-bottom:56px}
.section-title .dim{color:var(--muted)}
.divider{max-width:1200px;margin:0 auto;padding:0 40px}
.divider hr{border:none;border-top:1px solid var(--border)}
@media(max-width:768px){.divider{padding:0 20px}}

/* ══ BUTTONS ══ */
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:8px;font-weight:600;font-size:.9rem;letter-spacing:.3px;text-decoration:none;border:none;cursor:pointer;transition:all .3s;position:relative;overflow:hidden}
.btn-primary{background:linear-gradient(135deg,var(--accent),var(--accent2));color:#fff}
.btn-primary::before{content:'';position:absolute;inset:0;background:rgba(255,255,255,.12);transform:translateX(-100%);transition:transform .3s}
.btn-primary:hover::before{transform:translateX(0)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 14px 40px rgba(79,142,247,.32)}
.btn-ghost{border:1px solid var(--border);color:var(--text);background:var(--card);backdrop-filter:blur(10px)}
.btn-ghost:hover{border-color:var(--accent);color:var(--accent);transform:translateY(-2px)}

/* ══ CARDS ══ */
.glass-card{border-radius:16px;border:1px solid var(--border);background:var(--card);backdrop-filter:blur(18px);transition:border-color .3s,transform .3s,box-shadow .3s}
.glass-card:hover{border-color:rgba(79,142,247,.35);transform:translateY(-5px);box-shadow:0 20px 60px rgba(0,0,0,.35)}

/* ══ TAGS ══ */
.tag{display:inline-block;padding:3px 12px;border-radius:100px;font-size:.75rem;font-weight:600}
.tag-blue{background:rgba(79,142,247,.12);border:1px solid rgba(79,142,247,.25);color:var(--accent)}
.tag-purple{background:rgba(167,139,250,.12);border:1px solid rgba(167,139,250,.25);color:var(--accent2)}
.tag-green{background:rgba(52,211,153,.12);border:1px solid rgba(52,211,153,.25);color:var(--accent3)}
.tag-pink{background:rgba(244,114,182,.12);border:1px solid rgba(244,114,182,.25);color:var(--pink)}
.tag-red{background:rgba(239,68,68,.12);border:1px solid rgba(239,68,68,.25);color:#f87171}
.tag-amber{background:rgba(245,158,11,.12);border:1px solid rgba(245,158,11,.25);color:#fbbf24}

/* ══ REVEAL ══ */
.reveal{opacity:0;transform:translateY(28px);transition:opacity .65s ease,transform .65s ease}
.reveal.visible{opacity:1;transform:none}
.reveal-d1{transition-delay:.08s}.reveal-d2{transition-delay:.16s}.reveal-d3{transition-delay:.24s}.reveal-d4{transition-delay:.32s}

/* ══ FOOTER ══ */
footer{position:relative;z-index:1;text-align:center;padding:36px 40px;border-top:1px solid var(--border);color:var(--muted);font-size:.84rem}
footer a{color:var(--accent);text-decoration:none}
footer a:hover{text-decoration:underline}

/* ══ GRADIENT TEXT ══ */
.grad{background:linear-gradient(135deg,var(--accent),var(--accent2),var(--pink));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}

/* ══ PAGE HERO (inner pages) ══ */
.page-hero{text-align:center;padding:80px 40px 60px;max-width:1200px;margin:0 auto}
.page-hero .section-title{margin-bottom:16px}
.page-hero p{color:var(--muted);font-size:1.05rem;max-width:560px;margin:0 auto}
@media(max-width:768px){.page-hero{padding:50px 20px 40px}}
```

## 5. Binary Asset Inventory

The following assets are present in the ZIP but are not embedded into this Markdown. Their exact filenames, sizes, hashes, and image dimensions are preserved below.

- `assets/images/cert1.webp` — 251,698 bytes — SHA-256 `e4463562f472d3b4c9e12820a133719ee171f3e97a0c7ec1bc97aaf444ef67cd`
- `assets/images/cert2.webp` — 249,340 bytes — SHA-256 `f7cf65982572d2abf162aeff4e8f688bc5fd5b9e8a12d0fea1593066d02b1090`
- `assets/images/cert3.webp` — 91,230 bytes — SHA-256 `edb7911ad9de6c12463a56f9f33ee2cf68a6c6ef6218b971a0b0215cb101a5d1`
- `assets/images/cert4.webp` — 227,650 bytes — SHA-256 `4a4bc5a05236483b8f8f42bfa1b9d52ae8be39206129c78367981f5d6add9259`
- `assets/images/cert5.webp` — 253,718 bytes — SHA-256 `0d694009c2e1fb03571eef327937910d6498333d4c044ab63ed5a320cba10fab`
- `assets/images/cyber.webp` — 106,062 bytes — SHA-256 `36b51be8d3893d918738891442892e6e41470ecd247693b1fa57ee55c75e0ca6`
- `assets/images/profile.webp` — 80,034 bytes — SHA-256 `32b924aed776d25103e1bdd3247873533c719067d801624f858c58b76ab17979`
- `assets/images/project1.webp` — 144,514 bytes — SHA-256 `c92bfd58884471ab1b045012a511f23256549c3cd2f42e8943e5e52b738463a2`
- `assets/images/project2.webp` — 13,770 bytes — SHA-256 `ee3217aa83e3bd90b2d0f8b2b9cd28d37492160ea88b80334030ac349b539bfa`
- `assets/images/project3.webp` — 144,514 bytes — SHA-256 `c92bfd58884471ab1b045012a511f23256549c3cd2f42e8943e5e52b738463a2`
- `assets/images/project4.webp` — 12,414 bytes — SHA-256 `205dab6e4f582af27a5e721b4328f52d235a3f0c5691cf2f6bd9ba110272e22e`

## 6. Git Repository Contents

The ZIP includes `.git/`. Git internals are mostly binary/index/object data and are not useful to Claude as source code. They are therefore inventoried here instead of being dumped into the main source section.

- Git files total: **349**
- Git text/config/sample files included below: **30**
- Git binary/object/index files represented by manifest only: **319**

### Git text/config files

#### `.git/COMMIT_EDITMSG`

```text
CV Update
```

#### `.git/config`

```text
[core]
	repositoryformatversion = 0
	filemode = false
	bare = false
	logallrefupdates = true
	symlinks = false
	ignorecase = true
[remote "origin"]
	url = https://github.com/SteveX103/My-site.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
	remote = origin
	merge = refs/heads/main
	vscode-merge-base = origin/main
```

#### `.git/cursor/crepe/df6fd3e5176abf548b1866341381408be3c69612/metadata.json`

```text
{"version":4,"git_revision":16}
```

#### `.git/description`

```text
Unnamed repository; edit this file 'description' to name the repository.
```

#### `.git/FETCH_HEAD`

```text
5d77ea552d0ce58284f6ee4d50e9d55e4dc1162c		branch 'main' of https://github.com/SteveX103/My-site
```

#### `.git/HEAD`

```text
ref: refs/heads/main
```

#### `.git/hooks/applypatch-msg.sample`

```text
#!/bin/sh
#
# An example hook script to check the commit log message taken by
# applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.  The hook is
# allowed to edit the commit message file.
#
# To enable this hook, rename this file to "applypatch-msg".

. git-sh-setup
commitmsg="$(git rev-parse --git-path hooks/commit-msg)"
test -x "$commitmsg" && exec "$commitmsg" ${1+"$@"}
:
```

#### `.git/hooks/commit-msg.sample`

```text
#!/bin/sh
#
# An example hook script to check the commit log message.
# Called by "git commit" with one argument, the name of the file
# that has the commit message.  The hook should exit with non-zero
# status after issuing an appropriate message if it wants to stop the
# commit.  The hook is allowed to edit the commit message file.
#
# To enable this hook, rename this file to "commit-msg".

# Uncomment the below to add a Signed-off-by line to the message.
# Doing this in a hook is a bad idea in general, but the prepare-commit-msg
# hook is more suited to it.
#
# SOB=$(git var GIT_AUTHOR_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# grep -qs "^$SOB" "$1" || echo "$SOB" >> "$1"

# This example catches duplicate Signed-off-by lines.

test "" = "$(grep '^Signed-off-by: ' "$1" |
	 sort | uniq -c | sed -e '/^[ 	]*1[ 	]/d')" || {
	echo >&2 Duplicate Signed-off-by lines.
	exit 1
}
```

#### `.git/hooks/fsmonitor-watchman.sample`

```text
#!/usr/bin/perl

use strict;
use warnings;
use IPC::Open2;

# An example hook script to integrate Watchman
# (https://facebook.github.io/watchman/) with git to speed up detecting
# new and modified files.
#
# The hook is passed a version (currently 2) and last update token
# formatted as a string and outputs to stdout a new update token and
# all files that have been modified since the update token. Paths must
# be relative to the root of the working tree and separated by a single NUL.
#
# To enable this hook, rename this file to "query-watchman" and set
# 'git config core.fsmonitor .git/hooks/query-watchman'
#
my ($version, $last_update_token) = @ARGV;

# Uncomment for debugging
# print STDERR "$0 $version $last_update_token\n";

# Check the hook interface version
if ($version ne 2) {
	die "Unsupported query-fsmonitor hook version '$version'.\n" .
	    "Falling back to scanning...\n";
}

my $git_work_tree = get_working_dir();

my $retry = 1;

my $json_pkg;
eval {
	require JSON::XS;
	$json_pkg = "JSON::XS";
	1;
} or do {
	require JSON::PP;
	$json_pkg = "JSON::PP";
};

launch_watchman();

sub launch_watchman {
	my $o = watchman_query();
	if (is_work_tree_watched($o)) {
		output_result($o->{clock}, @{$o->{files}});
	}
}

sub output_result {
	my ($clockid, @files) = @_;

	# Uncomment for debugging watchman output
	# open (my $fh, ">", ".git/watchman-output.out");
	# binmode $fh, ":utf8";
	# print $fh "$clockid\n@files\n";
	# close $fh;

	binmode STDOUT, ":utf8";
	print $clockid;
	print "\0";
	local $, = "\0";
	print @files;
}

sub watchman_clock {
	my $response = qx/watchman clock "$git_work_tree"/;
	die "Failed to get clock id on '$git_work_tree'.\n" .
		"Falling back to scanning...\n" if $? != 0;

	return $json_pkg->new->utf8->decode($response);
}

sub watchman_query {
	my $pid = open2(\*CHLD_OUT, \*CHLD_IN, 'watchman -j --no-pretty')
	or die "open2() failed: $!\n" .
	"Falling back to scanning...\n";

	# In the query expression below we're asking for names of files that
	# changed since $last_update_token but not from the .git folder.
	#
	# To accomplish this, we're using the "since" generator to use the
	# recency index to select candidate nodes and "fields" to limit the
	# output to file names only. Then we're using the "expression" term to
	# further constrain the results.
	my $last_update_line = "";
	if (substr($last_update_token, 0, 1) eq "c") {
		$last_update_token = "\"$last_update_token\"";
		$last_update_line = qq[\n"since": $last_update_token,];
	}
	my $query = <<"	END";
		["query", "$git_work_tree", {$last_update_line
			"fields": ["name"],
			"expression": ["not", ["dirname", ".git"]]
		}]
	END

	# Uncomment for debugging the watchman query
	# open (my $fh, ">", ".git/watchman-query.json");
	# print $fh $query;
	# close $fh;

	print CHLD_IN $query;
	close CHLD_IN;
	my $response = do {local $/; <CHLD_OUT>};

	# Uncomment for debugging the watch response
	# open ($fh, ">", ".git/watchman-response.json");
	# print $fh $response;
	# close $fh;

	die "Watchman: command returned no output.\n" .
	"Falling back to scanning...\n" if $response eq "";
	die "Watchman: command returned invalid output: $response\n" .
	"Falling back to scanning...\n" unless $response =~ /^\{/;

	return $json_pkg->new->utf8->decode($response);
}

sub is_work_tree_watched {
	my ($output) = @_;
	my $error = $output->{error};
	if ($retry > 0 and $error and $error =~ m/unable to resolve root .* directory (.*) is not watched/) {
		$retry--;
		my $response = qx/watchman watch "$git_work_tree"/;
		die "Failed to make watchman watch '$git_work_tree'.\n" .
		    "Falling back to scanning...\n" if $? != 0;
		$output = $json_pkg->new->utf8->decode($response);
		$error = $output->{error};
		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		# Uncomment for debugging watchman output
		# open (my $fh, ">", ".git/watchman-output.out");
		# close $fh;

		# Watchman will always return all files on the first query so
		# return the fast "everything is dirty" flag to git and do the
		# Watchman query just to get it over with now so we won't pay
		# the cost in git to look up each individual file.
		my $o = watchman_clock();
		$error = $output->{error};

		die "Watchman: $error.\n" .
		"Falling back to scanning...\n" if $error;

		output_result($o->{clock}, ("/"));
		$last_update_token = $o->{clock};

		eval { launch_watchman() };
		return 0;
	}

	die "Watchman: $error.\n" .
	"Falling back to scanning...\n" if $error;

	return 1;
}

sub get_working_dir {
	my $working_dir;
	if ($^O =~ 'msys' || $^O =~ 'cygwin') {
		$working_dir = Win32::GetCwd();
		$working_dir =~ tr/\\/\//;
	} else {
		require Cwd;
		$working_dir = Cwd::cwd();
	}

	return $working_dir;
}
```

#### `.git/hooks/post-update.sample`

```text
#!/bin/sh
#
# An example hook script to prepare a packed repository for use over
# dumb transports.
#
# To enable this hook, rename this file to "post-update".

exec git update-server-info
```

#### `.git/hooks/pre-applypatch.sample`

```text
#!/bin/sh
#
# An example hook script to verify what is about to be committed
# by applypatch from an e-mail message.
#
# The hook should exit with non-zero status after issuing an
# appropriate message if it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-applypatch".

. git-sh-setup
precommit="$(git rev-parse --git-path hooks/pre-commit)"
test -x "$precommit" && exec "$precommit" ${1+"$@"}
:
```

#### `.git/hooks/pre-commit.sample`

```text
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git commit" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message if
# it wants to stop the commit.
#
# To enable this hook, rename this file to "pre-commit".

if git rev-parse --verify HEAD >/dev/null 2>&1
then
	against=HEAD
else
	# Initial commit: diff against an empty tree object
	against=$(git hash-object -t tree /dev/null)
fi

# If you want to allow non-ASCII filenames set this variable to true.
allownonascii=$(git config --type=bool hooks.allownonascii)

# Redirect output to stderr.
exec 1>&2

# Cross platform projects tend to avoid non-ASCII filenames; prevent
# them from being added to the repository. We exploit the fact that the
# printable range starts at the space character and ends with tilde.
if [ "$allownonascii" != "true" ] &&
	# Note that the use of brackets around a tr range is ok here, (it's
	# even required, for portability to Solaris 10's /usr/bin/tr), since
	# the square bracket bytes happen to fall in the designated range.
	test $(git diff-index --cached --name-only --diff-filter=A -z $against |
	  LC_ALL=C tr -d '[ -~]\0' | wc -c) != 0
then
	cat <<\EOF
Error: Attempt to add a non-ASCII file name.

This can cause problems if you want to work with people on other platforms.

To be portable it is advisable to rename the file.

If you know what you are doing you can disable this check using:

  git config hooks.allownonascii true
EOF
	exit 1
fi

# If there are whitespace errors, print the offending file names and fail.
exec git diff-index --check --cached $against --
```

#### `.git/hooks/pre-merge-commit.sample`

```text
#!/bin/sh
#
# An example hook script to verify what is about to be committed.
# Called by "git merge" with no arguments.  The hook should
# exit with non-zero status after issuing an appropriate message to
# stderr if it wants to stop the merge commit.
#
# To enable this hook, rename this file to "pre-merge-commit".

. git-sh-setup
test -x "$GIT_DIR/hooks/pre-commit" &&
        exec "$GIT_DIR/hooks/pre-commit"
:
```

#### `.git/hooks/pre-push.sample`

```text
#!/bin/sh

# An example hook script to verify what is about to be pushed.  Called by "git
# push" after it has checked the remote status, but before anything has been
# pushed.  If this script exits with a non-zero status nothing will be pushed.
#
# This hook is called with the following parameters:
#
# $1 -- Name of the remote to which the push is being done
# $2 -- URL to which the push is being done
#
# If pushing without using a named remote those arguments will be equal.
#
# Information about the commits which are being pushed is supplied as lines to
# the standard input in the form:
#
#   <local ref> <local oid> <remote ref> <remote oid>
#
# This sample shows how to prevent push of commits where the log message starts
# with "WIP" (work in progress).

remote="$1"
url="$2"

zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')

while read local_ref local_oid remote_ref remote_oid
do
	if test "$local_oid" = "$zero"
	then
		# Handle delete
		:
	else
		if test "$remote_oid" = "$zero"
		then
			# New branch, examine all commits
			range="$local_oid"
		else
			# Update to existing branch, examine new commits
			range="$remote_oid..$local_oid"
		fi

		# Check for WIP commit
		commit=$(git rev-list -n 1 --grep '^WIP' "$range")
		if test -n "$commit"
		then
			echo >&2 "Found WIP commit in $local_ref, not pushing"
			exit 1
		fi
	fi
done

exit 0
```

#### `.git/hooks/pre-rebase.sample`

```text
#!/bin/sh
#
# Copyright (c) 2006, 2008 Junio C Hamano
#
# The "pre-rebase" hook is run just before "git rebase" starts doing
# its job, and can prevent the command from running by exiting with
# non-zero status.
#
# The hook is called with the following parameters:
#
# $1 -- the upstream the series was forked from.
# $2 -- the branch being rebased (or empty when rebasing the current branch).
#
# This sample shows how to prevent topic branches that are already
# merged to 'next' branch from getting rebased, because allowing it
# would result in rebasing already published history.

publish=next
basebranch="$1"
if test "$#" = 2
then
	topic="refs/heads/$2"
else
	topic=`git symbolic-ref HEAD` ||
	exit 0 ;# we do not interrupt rebasing detached HEAD
fi

case "$topic" in
refs/heads/??/*)
	;;
*)
	exit 0 ;# we do not interrupt others.
	;;
esac

# Now we are dealing with a topic branch being rebased
# on top of master.  Is it OK to rebase it?

# Does the topic really exist?
git show-ref -q "$topic" || {
	echo >&2 "No such branch $topic"
	exit 1
}

# Is topic fully merged to master?
not_in_master=`git rev-list --pretty=oneline ^master "$topic"`
if test -z "$not_in_master"
then
	echo >&2 "$topic is fully merged to master; better remove it."
	exit 1 ;# we could allow it, but there is no point.
fi

# Is topic ever merged to next?  If so you should not be rebasing it.
only_next_1=`git rev-list ^master "^$topic" ${publish} | sort`
only_next_2=`git rev-list ^master           ${publish} | sort`
if test "$only_next_1" = "$only_next_2"
then
	not_in_topic=`git rev-list "^$topic" master`
	if test -z "$not_in_topic"
	then
		echo >&2 "$topic is already up to date with master"
		exit 1 ;# we could allow it, but there is no point.
	else
		exit 0
	fi
else
	not_in_next=`git rev-list --pretty=oneline ^${publish} "$topic"`
	/usr/bin/perl -e '
		my $topic = $ARGV[0];
		my $msg = "* $topic has commits already merged to public branch:\n";
		my (%not_in_next) = map {
			/^([0-9a-f]+) /;
			($1 => 1);
		} split(/\n/, $ARGV[1]);
		for my $elem (map {
				/^([0-9a-f]+) (.*)$/;
				[$1 => $2];
			} split(/\n/, $ARGV[2])) {
			if (!exists $not_in_next{$elem->[0]}) {
				if ($msg) {
					print STDERR $msg;
					undef $msg;
				}
				print STDERR " $elem->[1]\n";
			}
		}
	' "$topic" "$not_in_next" "$not_in_master"
	exit 1
fi

<<\DOC_END

This sample hook safeguards topic branches that have been
published from being rewound.

The workflow assumed here is:

 * Once a topic branch forks from "master", "master" is never
   merged into it again (either directly or indirectly).

 * Once a topic branch is fully cooked and merged into "master",
   it is deleted.  If you need to build on top of it to correct
   earlier mistakes, a new topic branch is created by forking at
   the tip of the "master".  This is not strictly necessary, but
   it makes it easier to keep your history simple.

 * Whenever you need to test or publish your changes to topic
   branches, merge them into "next" branch.

The script, being an example, hardcodes the publish branch name
to be "next", but it is trivial to make it configurable via
$GIT_DIR/config mechanism.

With this workflow, you would want to know:

(1) ... if a topic branch has ever been merged to "next".  Young
    topic branches can have stupid mistakes you would rather
    clean up before publishing, and things that have not been
    merged into other branches can be easily rebased without
    affecting other people.  But once it is published, you would
    not want to rewind it.

(2) ... if a topic branch has been fully merged to "master".
    Then you can delete it.  More importantly, you should not
    build on top of it -- other people may already want to
    change things related to the topic as patches against your
    "master", so if you need further changes, it is better to
    fork the topic (perhaps with the same name) afresh from the
    tip of "master".

Let's look at this example:

		   o---o---o---o---o---o---o---o---o---o "next"
		  /       /           /           /
		 /   a---a---b A     /           /
		/   /               /           /
	       /   /   c---c---c---c B         /
	      /   /   /             \         /
	     /   /   /   b---b C     \       /
	    /   /   /   /             \     /
    ---o---o---o---o---o---o---o---o---o---o---o "master"


A, B and C are topic branches.

 * A has one fix since it was merged up to "next".

 * B has finished.  It has been fully merged up to "master" and "next",
   and is ready to be deleted.

 * C has not merged to "next" at all.

We would want to allow C to be rebased, refuse A, and encourage
B to be deleted.

To compute (1):

	git rev-list ^master ^topic next
	git rev-list ^master        next

	if these match, topic has not merged in next at all.

To compute (2):

	git rev-list master..topic

	if this is empty, it is fully merged to "master".

DOC_END
```

#### `.git/hooks/pre-receive.sample`

```text
#!/bin/sh
#
# An example hook script to make use of push options.
# The example simply echoes all push options that start with 'echoback='
# and rejects all pushes when the "reject" push option is used.
#
# To enable this hook, rename this file to "pre-receive".

if test -n "$GIT_PUSH_OPTION_COUNT"
then
	i=0
	while test "$i" -lt "$GIT_PUSH_OPTION_COUNT"
	do
		eval "value=\$GIT_PUSH_OPTION_$i"
		case "$value" in
		echoback=*)
			echo "echo from the pre-receive-hook: ${value#*=}" >&2
			;;
		reject)
			exit 1
		esac
		i=$((i + 1))
	done
fi
```

#### `.git/hooks/prepare-commit-msg.sample`

```text
#!/bin/sh
#
# An example hook script to prepare the commit log message.
# Called by "git commit" with the name of the file that has the
# commit message, followed by the description of the commit
# message's source.  The hook's purpose is to edit the commit
# message file.  If the hook fails with a non-zero status,
# the commit is aborted.
#
# To enable this hook, rename this file to "prepare-commit-msg".

# This hook includes three examples. The first one removes the
# "# Please enter the commit message..." help message.
#
# The second includes the output of "git diff --name-status -r"
# into the message, just before the "git status" output.  It is
# commented because it doesn't cope with --amend or with squashed
# commits.
#
# The third example adds a Signed-off-by line to the message, that can
# still be edited.  This is rarely a good idea.

COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2
SHA1=$3

/usr/bin/perl -i.bak -ne 'print unless(m/^. Please enter the commit message/..m/^#$/)' "$COMMIT_MSG_FILE"

# case "$COMMIT_SOURCE,$SHA1" in
#  ,|template,)
#    /usr/bin/perl -i.bak -pe '
#       print "\n" . `git diff --cached --name-status -r`
# 	 if /^#/ && $first++ == 0' "$COMMIT_MSG_FILE" ;;
#  *) ;;
# esac

# SOB=$(git var GIT_COMMITTER_IDENT | sed -n 's/^\(.*>\).*$/Signed-off-by: \1/p')
# git interpret-trailers --in-place --trailer "$SOB" "$COMMIT_MSG_FILE"
# if test -z "$COMMIT_SOURCE"
# then
#   /usr/bin/perl -i.bak -pe 'print "\n" if !$first_line++' "$COMMIT_MSG_FILE"
# fi
```

#### `.git/hooks/push-to-checkout.sample`

```text
#!/bin/sh

# An example hook script to update a checked-out tree on a git push.
#
# This hook is invoked by git-receive-pack(1) when it reacts to git
# push and updates reference(s) in its repository, and when the push
# tries to update the branch that is currently checked out and the
# receive.denyCurrentBranch configuration variable is set to
# updateInstead.
#
# By default, such a push is refused if the working tree and the index
# of the remote repository has any difference from the currently
# checked out commit; when both the working tree and the index match
# the current commit, they are updated to match the newly pushed tip
# of the branch. This hook is to be used to override the default
# behaviour; however the code below reimplements the default behaviour
# as a starting point for convenient modification.
#
# The hook receives the commit with which the tip of the current
# branch is going to be updated:
commit=$1

# It can exit with a non-zero status to refuse the push (when it does
# so, it must not modify the index or the working tree).
die () {
	echo >&2 "$*"
	exit 1
}

# Or it can make any necessary changes to the working tree and to the
# index to bring them to the desired state when the tip of the current
# branch is updated to the new commit, and exit with a zero status.
#
# For example, the hook can simply run git read-tree -u -m HEAD "$1"
# in order to emulate git fetch that is run in the reverse direction
# with git push, as the two-tree form of git read-tree -u -m is
# essentially the same as git switch or git checkout that switches
# branches while keeping the local changes in the working tree that do
# not interfere with the difference between the branches.

# The below is a more-or-less exact translation to shell of the C code
# for the default behaviour for git's push-to-checkout hook defined in
# the push_to_deploy() function in builtin/receive-pack.c.
#
# Note that the hook will be executed from the repository directory,
# not from the working tree, so if you want to perform operations on
# the working tree, you will have to adapt your code accordingly, e.g.
# by adding "cd .." or using relative paths.

if ! git update-index -q --ignore-submodules --refresh
then
	die "Up-to-date check failed"
fi

if ! git diff-files --quiet --ignore-submodules --
then
	die "Working directory has unstaged changes"
fi

# This is a rough translation of:
#
#   head_has_history() ? "HEAD" : EMPTY_TREE_SHA1_HEX
if git cat-file -e HEAD 2>/dev/null
then
	head=HEAD
else
	head=$(git hash-object -t tree --stdin </dev/null)
fi

if ! git diff-index --quiet --cached --ignore-submodules $head --
then
	die "Working directory has staged changes"
fi

if ! git read-tree -u -m "$commit"
then
	die "Could not update working tree to new HEAD"
fi
```

#### `.git/hooks/sendemail-validate.sample`

```text
#!/bin/sh

# An example hook script to validate a patch (and/or patch series) before
# sending it via email.
#
# The hook should exit with non-zero status after issuing an appropriate
# message if it wants to prevent the email(s) from being sent.
#
# To enable this hook, rename this file to "sendemail-validate".
#
# By default, it will only check that the patch(es) can be applied on top of
# the default upstream branch without conflicts in a secondary worktree. After
# validation (successful or not) of the last patch of a series, the worktree
# will be deleted.
#
# The following config variables can be set to change the default remote and
# remote ref that are used to apply the patches against:
#
#   sendemail.validateRemote (default: origin)
#   sendemail.validateRemoteRef (default: HEAD)
#
# Replace the TODO placeholders with appropriate checks according to your
# needs.

validate_cover_letter () {
	file="$1"
	# TODO: Replace with appropriate checks (e.g. spell checking).
	true
}

validate_patch () {
	file="$1"
	# Ensure that the patch applies without conflicts.
	git am -3 "$file" || return
	# TODO: Replace with appropriate checks for this patch
	# (e.g. checkpatch.pl).
	true
}

validate_series () {
	# TODO: Replace with appropriate checks for the whole series
	# (e.g. quick build, coding style checks, etc.).
	true
}

# main -------------------------------------------------------------------------

if test "$GIT_SENDEMAIL_FILE_COUNTER" = 1
then
	remote=$(git config --default origin --get sendemail.validateRemote) &&
	ref=$(git config --default HEAD --get sendemail.validateRemoteRef) &&
	worktree=$(mktemp --tmpdir -d sendemail-validate.XXXXXXX) &&
	git worktree add -fd --checkout "$worktree" "refs/remotes/$remote/$ref" &&
	git config --replace-all sendemail.validateWorktree "$worktree"
else
	worktree=$(git config --get sendemail.validateWorktree)
fi || {
	echo "sendemail-validate: error: failed to prepare worktree" >&2
	exit 1
}

unset GIT_DIR GIT_WORK_TREE
cd "$worktree" &&

if grep -q "^diff --git " "$1"
then
	validate_patch "$1"
else
	validate_cover_letter "$1"
fi &&

if test "$GIT_SENDEMAIL_FILE_COUNTER" = "$GIT_SENDEMAIL_FILE_TOTAL"
then
	git config --unset-all sendemail.validateWorktree &&
	trap 'git worktree remove -ff "$worktree"' EXIT &&
	validate_series
fi
```

#### `.git/hooks/update.sample`

```text
#!/bin/sh
#
# An example hook script to block unannotated tags from entering.
# Called by "git receive-pack" with arguments: refname sha1-old sha1-new
#
# To enable this hook, rename this file to "update".
#
# Config
# ------
# hooks.allowunannotated
#   This boolean sets whether unannotated tags will be allowed into the
#   repository.  By default they won't be.
# hooks.allowdeletetag
#   This boolean sets whether deleting tags will be allowed in the
#   repository.  By default they won't be.
# hooks.allowmodifytag
#   This boolean sets whether a tag may be modified after creation. By default
#   it won't be.
# hooks.allowdeletebranch
#   This boolean sets whether deleting branches will be allowed in the
#   repository.  By default they won't be.
# hooks.denycreatebranch
#   This boolean sets whether remotely creating branches will be denied
#   in the repository.  By default this is allowed.
#

# --- Command line
refname="$1"
oldrev="$2"
newrev="$3"

# --- Safety check
if [ -z "$GIT_DIR" ]; then
	echo "Don't run this script from the command line." >&2
	echo " (if you want, you could supply GIT_DIR then run" >&2
	echo "  $0 <ref> <oldrev> <newrev>)" >&2
	exit 1
fi

if [ -z "$refname" -o -z "$oldrev" -o -z "$newrev" ]; then
	echo "usage: $0 <ref> <oldrev> <newrev>" >&2
	exit 1
fi

# --- Config
allowunannotated=$(git config --type=bool hooks.allowunannotated)
allowdeletebranch=$(git config --type=bool hooks.allowdeletebranch)
denycreatebranch=$(git config --type=bool hooks.denycreatebranch)
allowdeletetag=$(git config --type=bool hooks.allowdeletetag)
allowmodifytag=$(git config --type=bool hooks.allowmodifytag)

# check for no description
projectdesc=$(sed -e '1q' "$GIT_DIR/description")
case "$projectdesc" in
"Unnamed repository"* | "")
	echo "*** Project description file hasn't been set" >&2
	exit 1
	;;
esac

# --- Check types
# if $newrev is 0000...0000, it's a commit to delete a ref.
zero=$(git hash-object --stdin </dev/null | tr '[0-9a-f]' '0')
if [ "$newrev" = "$zero" ]; then
	newrev_type=delete
else
	newrev_type=$(git cat-file -t $newrev)
fi

case "$refname","$newrev_type" in
	refs/tags/*,commit)
		# un-annotated tag
		short_refname=${refname##refs/tags/}
		if [ "$allowunannotated" != "true" ]; then
			echo "*** The un-annotated tag, $short_refname, is not allowed in this repository" >&2
			echo "*** Use 'git tag [ -a | -s ]' for tags you want to propagate." >&2
			exit 1
		fi
		;;
	refs/tags/*,delete)
		# delete tag
		if [ "$allowdeletetag" != "true" ]; then
			echo "*** Deleting a tag is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/tags/*,tag)
		# annotated tag
		if [ "$allowmodifytag" != "true" ] && git rev-parse $refname > /dev/null 2>&1
		then
			echo "*** Tag '$refname' already exists." >&2
			echo "*** Modifying a tag is not allowed in this repository." >&2
			exit 1
		fi
		;;
	refs/heads/*,commit)
		# branch
		if [ "$oldrev" = "$zero" -a "$denycreatebranch" = "true" ]; then
			echo "*** Creating a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/heads/*,delete)
		# delete branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	refs/remotes/*,commit)
		# tracking branch
		;;
	refs/remotes/*,delete)
		# delete tracking branch
		if [ "$allowdeletebranch" != "true" ]; then
			echo "*** Deleting a tracking branch is not allowed in this repository" >&2
			exit 1
		fi
		;;
	*)
		# Anything else (is there anything else?)
		echo "*** Update hook: unknown type of update to ref $refname of type $newrev_type" >&2
		exit 1
		;;
esac

# --- Finished
exit 0
```

#### `.git/info/exclude`

```text
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~
```

#### `.git/logs/HEAD`

```text
0000000000000000000000000000000000000000 0ea98722d9c157c9ffca3da482b2e372009b298d Pratyush Biswas <pratyushbiswas103@gmail.com> 1767932531 +0530	commit (initial): V2
0ea98722d9c157c9ffca3da482b2e372009b298d 371c0576d99e99c8ab2ef168dd06785e5891bf8a Pratyush Biswas <pratyushbiswas103@gmail.com> 1767973591 +0530	commit: V2.1
371c0576d99e99c8ab2ef168dd06785e5891bf8a 0000000000000000000000000000000000000000 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767973611 +0530	Branch: renamed refs/heads/master to refs/heads/main
0000000000000000000000000000000000000000 371c0576d99e99c8ab2ef168dd06785e5891bf8a Pratyush Biswas <pratyushbiswas103@gmail.com> 1767973611 +0530	Branch: renamed refs/heads/master to refs/heads/main
371c0576d99e99c8ab2ef168dd06785e5891bf8a 6503b1d872ff136f0eb4d71a5a932a6c820e6dd4 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767973858 +0530	pull origin main --rebase (start): checkout 6503b1d872ff136f0eb4d71a5a932a6c820e6dd4
6503b1d872ff136f0eb4d71a5a932a6c820e6dd4 0e632825d2edcc89fed7cbd9ff0a7be27613f4e4 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767975211 +0530	rebase (continue): V2
0e632825d2edcc89fed7cbd9ff0a7be27613f4e4 0fc3b4710a35bbb67dab6a684b6023e7ccd06ae5 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767975493 +0530	rebase (continue): V2.1
0fc3b4710a35bbb67dab6a684b6023e7ccd06ae5 0fc3b4710a35bbb67dab6a684b6023e7ccd06ae5 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767975507 +0530	rebase (finish): returning to refs/heads/main
0fc3b4710a35bbb67dab6a684b6023e7ccd06ae5 02ea9a9bada9eb2e49ab9f6ff4edf3c859592cee Pratyush Biswas <pratyushbiswas103@gmail.com> 1767975957 +0530	commit: V3
02ea9a9bada9eb2e49ab9f6ff4edf3c859592cee 9978b5e16b4ed0d5b192e7a407e0fe5105e9bbf8 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767976348 +0530	commit: V3.1
9978b5e16b4ed0d5b192e7a407e0fe5105e9bbf8 4878ade346b7369e8bf25dcfb64552a4597814f0 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767987963 +0530	commit: V4
4878ade346b7369e8bf25dcfb64552a4597814f0 0000000000000000000000000000000000000000 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767988000 +0530	Branch: renamed refs/heads/main to refs/heads/main
4878ade346b7369e8bf25dcfb64552a4597814f0 4878ade346b7369e8bf25dcfb64552a4597814f0 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767988000 +0530	Branch: renamed refs/heads/main to refs/heads/main
4878ade346b7369e8bf25dcfb64552a4597814f0 0000000000000000000000000000000000000000 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767988113 +0530	Branch: renamed refs/heads/main to refs/heads/main
4878ade346b7369e8bf25dcfb64552a4597814f0 4878ade346b7369e8bf25dcfb64552a4597814f0 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767988113 +0530	Branch: renamed refs/heads/main to refs/heads/main
4878ade346b7369e8bf25dcfb64552a4597814f0 83095ca4f07177844043d3b3b655b9e78fbbcc48 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767988292 +0530	commit (merge): Resolve merge conflicts and keep local portfolio files
83095ca4f07177844043d3b3b655b9e78fbbcc48 66e8c16e0cd1067d9284d523f9c49609df8fb361 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767988507 +0530	commit: V4.1
66e8c16e0cd1067d9284d523f9c49609df8fb361 df6fd3e5176abf548b1866341381408be3c69612 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767989311 +0530	commit: V4.2
df6fd3e5176abf548b1866341381408be3c69612 f2d6e76de812b6b2e4a503091cb8a21fe23e9c4d Pratyush Biswas <pratyushbiswas103@gmail.com> 1768250038 +0530	commit: V 4.3
f2d6e76de812b6b2e4a503091cb8a21fe23e9c4d e126a0d6b8e70ebf405c3720544ffa47af04074e Pratyush Biswas <pratyushbiswas103@gmail.com> 1768251843 +0530	commit: V 4.4
e126a0d6b8e70ebf405c3720544ffa47af04074e dd9f23aa96fc2735e18a929d9cc21ff118cd1692 Pratyush Biswas <pratyushbiswas103@gmail.com> 1769170462 +0530	commit: V 4.5
dd9f23aa96fc2735e18a929d9cc21ff118cd1692 f7334ba3a935a17dabb53c20157ea253b3ac6ee6 Pratyush Biswas <pratyushbiswas103@gmail.com> 1769861962 +0530	commit: V 4.6
f7334ba3a935a17dabb53c20157ea253b3ac6ee6 d7a6be9717523b0c60fb24edd0fdad9cfd541270 Pratyush Biswas <pratyushbiswas103@gmail.com> 1769862383 +0530	commit: V 4.6a
d7a6be9717523b0c60fb24edd0fdad9cfd541270 aae69d3920d1755d908d1492eb250c160f1e354e Pratyush Biswas <pratyushbiswas103@gmail.com> 1770932232 +0530	commit: CV
aae69d3920d1755d908d1492eb250c160f1e354e 40ba7f59c2e5febf800ee0fb37f04a1493d9e89b Pratyush Biswas <pratyushbiswas103@gmail.com> 1774200442 +0530	commit: F1
40ba7f59c2e5febf800ee0fb37f04a1493d9e89b 5f216a316cb0ab7283af6c2fe1c0d19f00cb99ee Pratyush Biswas <pratyushbiswas103@gmail.com> 1774200471 +0530	pull: Merge made by the 'ort' strategy.
5f216a316cb0ab7283af6c2fe1c0d19f00cb99ee 2e4147e9c2579164050695654628e7a32f231830 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774424815 +0530	commit: project addition
2e4147e9c2579164050695654628e7a32f231830 71cfec5516eb04698c71623a0659efdb4691ff33 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774425407 +0530	commit: project additionn
71cfec5516eb04698c71623a0659efdb4691ff33 f892f5aaa22ef6208a855aef34f2b54a9a014271 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774527679 +0530	commit: pfp update
f892f5aaa22ef6208a855aef34f2b54a9a014271 0803dc8ae759aa19fc1f9e8a578de02cb1ab1cae Pratyush Biswas <pratyushbiswas103@gmail.com> 1774591660 +0530	commit: pfp updatee
0803dc8ae759aa19fc1f9e8a578de02cb1ab1cae 328f257ee8872c6bd98c415a04b9d963b125ca40 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774591919 +0530	commit: pfp updateee
328f257ee8872c6bd98c415a04b9d963b125ca40 5ca43124cd344aa384921ae7d391ffe5b8cada77 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774600281 +0530	commit: speed enhancement
5ca43124cd344aa384921ae7d391ffe5b8cada77 e42bf91c98a2aa8cff96585fff065b58bf7b2434 Pratyush Biswas <pratyushbiswas103@gmail.com> 1775715071 +0530	commit: experience
e42bf91c98a2aa8cff96585fff065b58bf7b2434 0acd027195c1d03e0d90b6ed8744ecdecfdfab2a Pratyush Biswas <pratyushbiswas103@gmail.com> 1775727651 +0530	commit: experience updated
0acd027195c1d03e0d90b6ed8744ecdecfdfab2a 3bacfcbfe27260da16c4824ee32496ab70e0147e Pratyush Biswas <pratyushbiswas103@gmail.com> 1775728150 +0530	commit: optimisation1
3bacfcbfe27260da16c4824ee32496ab70e0147e e287248276a8980f129eb0679b579c172e1bcf9e Pratyush Biswas <pratyushbiswas103@gmail.com> 1775729047 +0530	commit: optimisation2
e287248276a8980f129eb0679b579c172e1bcf9e fd7c54ff15f350c10c11d2b8137cae28efca62d3 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776059279 +0530	commit: 2.0
fd7c54ff15f350c10c11d2b8137cae28efca62d3 9f40780cfce361812e026d0aeec8b55815b44123 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776068651 +0530	commit: 2.0a
9f40780cfce361812e026d0aeec8b55815b44123 9ab178fb41673e34c91f83fe72684a0a41577064 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776080248 +0530	commit: 2.0b
9ab178fb41673e34c91f83fe72684a0a41577064 8b6a25ae14f435e2bb5135b096619ab040d73495 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776080671 +0530	commit: 2.0c
8b6a25ae14f435e2bb5135b096619ab040d73495 f430c15bcfb7524fb7a13deec370aad344bd4fb7 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776231169 +0530	commit: projectupdate
f430c15bcfb7524fb7a13deec370aad344bd4fb7 e100c7f6a4b12ddc1b2afd63d06c8069a67a23be Pratyush Biswas <pratyushbiswas103@gmail.com> 1776235758 +0530	commit: certificate update
e100c7f6a4b12ddc1b2afd63d06c8069a67a23be 86fcba1ec71da91b17760823b8178e8a28d6bc55 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776338887 +0530	commit: cv update
86fcba1ec71da91b17760823b8178e8a28d6bc55 6ad4787fed78bce66b0f74a6d3a4e6f0229cb2d2 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776427487 +0530	commit: update experience
6ad4787fed78bce66b0f74a6d3a4e6f0229cb2d2 038186d7b0672b545b3cbc880c2abe201a679a11 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776427636 +0530	commit: update experiencee
038186d7b0672b545b3cbc880c2abe201a679a11 c1fc4c044b6b4e52a60d15fc26985ac82e433fa7 Pratyush Biswas <pratyushbiswas103@gmail.com> 1778228424 +0530	commit: Upadte
c1fc4c044b6b4e52a60d15fc26985ac82e433fa7 55a8db0ac01d5d90dfac3f905d2d8d830bf6f2a6 Pratyush Biswas <pratyushbiswas103@gmail.com> 1780421047 +0530	commit: year
55a8db0ac01d5d90dfac3f905d2d8d830bf6f2a6 db369aa2928bb545a1ae512bad146f83f6832acc Pratyush Biswas <pratyushbiswas103@gmail.com> 1784797835 +0530	commit: pg update
db369aa2928bb545a1ae512bad146f83f6832acc 5d77ea552d0ce58284f6ee4d50e9d55e4dc1162c Pratyush Biswas <pratyushbiswas103@gmail.com> 1785930390 +0530	commit: CV Update
```

#### `.git/logs/refs/heads/main`

```text
0000000000000000000000000000000000000000 0ea98722d9c157c9ffca3da482b2e372009b298d Pratyush Biswas <pratyushbiswas103@gmail.com> 1767932531 +0530	commit (initial): V2
0ea98722d9c157c9ffca3da482b2e372009b298d 371c0576d99e99c8ab2ef168dd06785e5891bf8a Pratyush Biswas <pratyushbiswas103@gmail.com> 1767973591 +0530	commit: V2.1
371c0576d99e99c8ab2ef168dd06785e5891bf8a 371c0576d99e99c8ab2ef168dd06785e5891bf8a Pratyush Biswas <pratyushbiswas103@gmail.com> 1767973611 +0530	Branch: renamed refs/heads/master to refs/heads/main
371c0576d99e99c8ab2ef168dd06785e5891bf8a 0fc3b4710a35bbb67dab6a684b6023e7ccd06ae5 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767975507 +0530	rebase (finish): refs/heads/main onto 6503b1d872ff136f0eb4d71a5a932a6c820e6dd4
0fc3b4710a35bbb67dab6a684b6023e7ccd06ae5 02ea9a9bada9eb2e49ab9f6ff4edf3c859592cee Pratyush Biswas <pratyushbiswas103@gmail.com> 1767975957 +0530	commit: V3
02ea9a9bada9eb2e49ab9f6ff4edf3c859592cee 9978b5e16b4ed0d5b192e7a407e0fe5105e9bbf8 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767976348 +0530	commit: V3.1
9978b5e16b4ed0d5b192e7a407e0fe5105e9bbf8 4878ade346b7369e8bf25dcfb64552a4597814f0 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767987963 +0530	commit: V4
4878ade346b7369e8bf25dcfb64552a4597814f0 4878ade346b7369e8bf25dcfb64552a4597814f0 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767988000 +0530	Branch: renamed refs/heads/main to refs/heads/main
4878ade346b7369e8bf25dcfb64552a4597814f0 4878ade346b7369e8bf25dcfb64552a4597814f0 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767988113 +0530	Branch: renamed refs/heads/main to refs/heads/main
4878ade346b7369e8bf25dcfb64552a4597814f0 83095ca4f07177844043d3b3b655b9e78fbbcc48 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767988292 +0530	commit (merge): Resolve merge conflicts and keep local portfolio files
83095ca4f07177844043d3b3b655b9e78fbbcc48 66e8c16e0cd1067d9284d523f9c49609df8fb361 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767988507 +0530	commit: V4.1
66e8c16e0cd1067d9284d523f9c49609df8fb361 df6fd3e5176abf548b1866341381408be3c69612 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767989311 +0530	commit: V4.2
df6fd3e5176abf548b1866341381408be3c69612 f2d6e76de812b6b2e4a503091cb8a21fe23e9c4d Pratyush Biswas <pratyushbiswas103@gmail.com> 1768250038 +0530	commit: V 4.3
f2d6e76de812b6b2e4a503091cb8a21fe23e9c4d e126a0d6b8e70ebf405c3720544ffa47af04074e Pratyush Biswas <pratyushbiswas103@gmail.com> 1768251843 +0530	commit: V 4.4
e126a0d6b8e70ebf405c3720544ffa47af04074e dd9f23aa96fc2735e18a929d9cc21ff118cd1692 Pratyush Biswas <pratyushbiswas103@gmail.com> 1769170462 +0530	commit: V 4.5
dd9f23aa96fc2735e18a929d9cc21ff118cd1692 f7334ba3a935a17dabb53c20157ea253b3ac6ee6 Pratyush Biswas <pratyushbiswas103@gmail.com> 1769861962 +0530	commit: V 4.6
f7334ba3a935a17dabb53c20157ea253b3ac6ee6 d7a6be9717523b0c60fb24edd0fdad9cfd541270 Pratyush Biswas <pratyushbiswas103@gmail.com> 1769862383 +0530	commit: V 4.6a
d7a6be9717523b0c60fb24edd0fdad9cfd541270 aae69d3920d1755d908d1492eb250c160f1e354e Pratyush Biswas <pratyushbiswas103@gmail.com> 1770932232 +0530	commit: CV
aae69d3920d1755d908d1492eb250c160f1e354e 40ba7f59c2e5febf800ee0fb37f04a1493d9e89b Pratyush Biswas <pratyushbiswas103@gmail.com> 1774200442 +0530	commit: F1
40ba7f59c2e5febf800ee0fb37f04a1493d9e89b 5f216a316cb0ab7283af6c2fe1c0d19f00cb99ee Pratyush Biswas <pratyushbiswas103@gmail.com> 1774200471 +0530	pull: Merge made by the 'ort' strategy.
5f216a316cb0ab7283af6c2fe1c0d19f00cb99ee 2e4147e9c2579164050695654628e7a32f231830 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774424815 +0530	commit: project addition
2e4147e9c2579164050695654628e7a32f231830 71cfec5516eb04698c71623a0659efdb4691ff33 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774425407 +0530	commit: project additionn
71cfec5516eb04698c71623a0659efdb4691ff33 f892f5aaa22ef6208a855aef34f2b54a9a014271 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774527679 +0530	commit: pfp update
f892f5aaa22ef6208a855aef34f2b54a9a014271 0803dc8ae759aa19fc1f9e8a578de02cb1ab1cae Pratyush Biswas <pratyushbiswas103@gmail.com> 1774591660 +0530	commit: pfp updatee
0803dc8ae759aa19fc1f9e8a578de02cb1ab1cae 328f257ee8872c6bd98c415a04b9d963b125ca40 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774591919 +0530	commit: pfp updateee
328f257ee8872c6bd98c415a04b9d963b125ca40 5ca43124cd344aa384921ae7d391ffe5b8cada77 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774600281 +0530	commit: speed enhancement
5ca43124cd344aa384921ae7d391ffe5b8cada77 e42bf91c98a2aa8cff96585fff065b58bf7b2434 Pratyush Biswas <pratyushbiswas103@gmail.com> 1775715071 +0530	commit: experience
e42bf91c98a2aa8cff96585fff065b58bf7b2434 0acd027195c1d03e0d90b6ed8744ecdecfdfab2a Pratyush Biswas <pratyushbiswas103@gmail.com> 1775727651 +0530	commit: experience updated
0acd027195c1d03e0d90b6ed8744ecdecfdfab2a 3bacfcbfe27260da16c4824ee32496ab70e0147e Pratyush Biswas <pratyushbiswas103@gmail.com> 1775728150 +0530	commit: optimisation1
3bacfcbfe27260da16c4824ee32496ab70e0147e e287248276a8980f129eb0679b579c172e1bcf9e Pratyush Biswas <pratyushbiswas103@gmail.com> 1775729047 +0530	commit: optimisation2
e287248276a8980f129eb0679b579c172e1bcf9e fd7c54ff15f350c10c11d2b8137cae28efca62d3 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776059279 +0530	commit: 2.0
fd7c54ff15f350c10c11d2b8137cae28efca62d3 9f40780cfce361812e026d0aeec8b55815b44123 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776068651 +0530	commit: 2.0a
9f40780cfce361812e026d0aeec8b55815b44123 9ab178fb41673e34c91f83fe72684a0a41577064 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776080248 +0530	commit: 2.0b
9ab178fb41673e34c91f83fe72684a0a41577064 8b6a25ae14f435e2bb5135b096619ab040d73495 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776080671 +0530	commit: 2.0c
8b6a25ae14f435e2bb5135b096619ab040d73495 f430c15bcfb7524fb7a13deec370aad344bd4fb7 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776231169 +0530	commit: projectupdate
f430c15bcfb7524fb7a13deec370aad344bd4fb7 e100c7f6a4b12ddc1b2afd63d06c8069a67a23be Pratyush Biswas <pratyushbiswas103@gmail.com> 1776235758 +0530	commit: certificate update
e100c7f6a4b12ddc1b2afd63d06c8069a67a23be 86fcba1ec71da91b17760823b8178e8a28d6bc55 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776338887 +0530	commit: cv update
86fcba1ec71da91b17760823b8178e8a28d6bc55 6ad4787fed78bce66b0f74a6d3a4e6f0229cb2d2 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776427487 +0530	commit: update experience
6ad4787fed78bce66b0f74a6d3a4e6f0229cb2d2 038186d7b0672b545b3cbc880c2abe201a679a11 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776427636 +0530	commit: update experiencee
038186d7b0672b545b3cbc880c2abe201a679a11 c1fc4c044b6b4e52a60d15fc26985ac82e433fa7 Pratyush Biswas <pratyushbiswas103@gmail.com> 1778228424 +0530	commit: Upadte
c1fc4c044b6b4e52a60d15fc26985ac82e433fa7 55a8db0ac01d5d90dfac3f905d2d8d830bf6f2a6 Pratyush Biswas <pratyushbiswas103@gmail.com> 1780421047 +0530	commit: year
55a8db0ac01d5d90dfac3f905d2d8d830bf6f2a6 db369aa2928bb545a1ae512bad146f83f6832acc Pratyush Biswas <pratyushbiswas103@gmail.com> 1784797835 +0530	commit: pg update
db369aa2928bb545a1ae512bad146f83f6832acc 5d77ea552d0ce58284f6ee4d50e9d55e4dc1162c Pratyush Biswas <pratyushbiswas103@gmail.com> 1785930390 +0530	commit: CV Update
```

#### `.git/logs/refs/remotes/origin/HEAD`

```text
0000000000000000000000000000000000000000 1033f1be7bd6d11e380c2e379749f4e81a0130ab Pratyush Biswas <pratyushbiswas103@gmail.com> 1774200471 +0530	fetch
```

#### `.git/logs/refs/remotes/origin/main`

```text
0000000000000000000000000000000000000000 6503b1d872ff136f0eb4d71a5a932a6c820e6dd4 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767973858 +0530	pull origin main --rebase: storing head
6503b1d872ff136f0eb4d71a5a932a6c820e6dd4 0fc3b4710a35bbb67dab6a684b6023e7ccd06ae5 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767975531 +0530	update by push
0fc3b4710a35bbb67dab6a684b6023e7ccd06ae5 02ea9a9bada9eb2e49ab9f6ff4edf3c859592cee Pratyush Biswas <pratyushbiswas103@gmail.com> 1767975971 +0530	update by push
02ea9a9bada9eb2e49ab9f6ff4edf3c859592cee 9978b5e16b4ed0d5b192e7a407e0fe5105e9bbf8 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767976362 +0530	update by push
9978b5e16b4ed0d5b192e7a407e0fe5105e9bbf8 6eee7e8611c972165d85a1eed298617adfd41b83 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767988175 +0530	pull origin main --allow-unrelated-histories: fast-forward
6eee7e8611c972165d85a1eed298617adfd41b83 83095ca4f07177844043d3b3b655b9e78fbbcc48 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767988306 +0530	update by push
83095ca4f07177844043d3b3b655b9e78fbbcc48 66e8c16e0cd1067d9284d523f9c49609df8fb361 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767988517 +0530	update by push
66e8c16e0cd1067d9284d523f9c49609df8fb361 df6fd3e5176abf548b1866341381408be3c69612 Pratyush Biswas <pratyushbiswas103@gmail.com> 1767989321 +0530	update by push
df6fd3e5176abf548b1866341381408be3c69612 f2d6e76de812b6b2e4a503091cb8a21fe23e9c4d Pratyush Biswas <pratyushbiswas103@gmail.com> 1768250055 +0530	update by push
f2d6e76de812b6b2e4a503091cb8a21fe23e9c4d e126a0d6b8e70ebf405c3720544ffa47af04074e Pratyush Biswas <pratyushbiswas103@gmail.com> 1768251852 +0530	update by push
e126a0d6b8e70ebf405c3720544ffa47af04074e dd9f23aa96fc2735e18a929d9cc21ff118cd1692 Pratyush Biswas <pratyushbiswas103@gmail.com> 1769170474 +0530	update by push
dd9f23aa96fc2735e18a929d9cc21ff118cd1692 f7334ba3a935a17dabb53c20157ea253b3ac6ee6 Pratyush Biswas <pratyushbiswas103@gmail.com> 1769861982 +0530	update by push
f7334ba3a935a17dabb53c20157ea253b3ac6ee6 d7a6be9717523b0c60fb24edd0fdad9cfd541270 Pratyush Biswas <pratyushbiswas103@gmail.com> 1769862392 +0530	update by push
d7a6be9717523b0c60fb24edd0fdad9cfd541270 aae69d3920d1755d908d1492eb250c160f1e354e Pratyush Biswas <pratyushbiswas103@gmail.com> 1770932309 +0530	update by push
aae69d3920d1755d908d1492eb250c160f1e354e 1033f1be7bd6d11e380c2e379749f4e81a0130ab Pratyush Biswas <pratyushbiswas103@gmail.com> 1774200471 +0530	pull: fast-forward
1033f1be7bd6d11e380c2e379749f4e81a0130ab 5f216a316cb0ab7283af6c2fe1c0d19f00cb99ee Pratyush Biswas <pratyushbiswas103@gmail.com> 1774200517 +0530	update by push
5f216a316cb0ab7283af6c2fe1c0d19f00cb99ee 2e4147e9c2579164050695654628e7a32f231830 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774424842 +0530	update by push
2e4147e9c2579164050695654628e7a32f231830 71cfec5516eb04698c71623a0659efdb4691ff33 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774425435 +0530	update by push
71cfec5516eb04698c71623a0659efdb4691ff33 f892f5aaa22ef6208a855aef34f2b54a9a014271 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774527710 +0530	update by push
f892f5aaa22ef6208a855aef34f2b54a9a014271 0803dc8ae759aa19fc1f9e8a578de02cb1ab1cae Pratyush Biswas <pratyushbiswas103@gmail.com> 1774591670 +0530	update by push
0803dc8ae759aa19fc1f9e8a578de02cb1ab1cae 328f257ee8872c6bd98c415a04b9d963b125ca40 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774591936 +0530	update by push
328f257ee8872c6bd98c415a04b9d963b125ca40 5ca43124cd344aa384921ae7d391ffe5b8cada77 Pratyush Biswas <pratyushbiswas103@gmail.com> 1774600305 +0530	update by push
5ca43124cd344aa384921ae7d391ffe5b8cada77 e42bf91c98a2aa8cff96585fff065b58bf7b2434 Pratyush Biswas <pratyushbiswas103@gmail.com> 1775715123 +0530	update by push
e42bf91c98a2aa8cff96585fff065b58bf7b2434 0acd027195c1d03e0d90b6ed8744ecdecfdfab2a Pratyush Biswas <pratyushbiswas103@gmail.com> 1775727656 +0530	update by push
0acd027195c1d03e0d90b6ed8744ecdecfdfab2a 3bacfcbfe27260da16c4824ee32496ab70e0147e Pratyush Biswas <pratyushbiswas103@gmail.com> 1775728160 +0530	update by push
3bacfcbfe27260da16c4824ee32496ab70e0147e e287248276a8980f129eb0679b579c172e1bcf9e Pratyush Biswas <pratyushbiswas103@gmail.com> 1775729053 +0530	update by push
e287248276a8980f129eb0679b579c172e1bcf9e fd7c54ff15f350c10c11d2b8137cae28efca62d3 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776059290 +0530	update by push
fd7c54ff15f350c10c11d2b8137cae28efca62d3 9f40780cfce361812e026d0aeec8b55815b44123 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776068660 +0530	update by push
9f40780cfce361812e026d0aeec8b55815b44123 9ab178fb41673e34c91f83fe72684a0a41577064 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776080256 +0530	update by push
9ab178fb41673e34c91f83fe72684a0a41577064 8b6a25ae14f435e2bb5135b096619ab040d73495 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776080676 +0530	update by push
8b6a25ae14f435e2bb5135b096619ab040d73495 f430c15bcfb7524fb7a13deec370aad344bd4fb7 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776231176 +0530	update by push
f430c15bcfb7524fb7a13deec370aad344bd4fb7 e100c7f6a4b12ddc1b2afd63d06c8069a67a23be Pratyush Biswas <pratyushbiswas103@gmail.com> 1776235764 +0530	update by push
e100c7f6a4b12ddc1b2afd63d06c8069a67a23be 86fcba1ec71da91b17760823b8178e8a28d6bc55 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776338892 +0530	update by push
86fcba1ec71da91b17760823b8178e8a28d6bc55 6ad4787fed78bce66b0f74a6d3a4e6f0229cb2d2 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776427499 +0530	update by push
6ad4787fed78bce66b0f74a6d3a4e6f0229cb2d2 038186d7b0672b545b3cbc880c2abe201a679a11 Pratyush Biswas <pratyushbiswas103@gmail.com> 1776427640 +0530	update by push
038186d7b0672b545b3cbc880c2abe201a679a11 c1fc4c044b6b4e52a60d15fc26985ac82e433fa7 Pratyush Biswas <pratyushbiswas103@gmail.com> 1778228437 +0530	update by push
c1fc4c044b6b4e52a60d15fc26985ac82e433fa7 55a8db0ac01d5d90dfac3f905d2d8d830bf6f2a6 Pratyush Biswas <pratyushbiswas103@gmail.com> 1780421062 +0530	update by push
55a8db0ac01d5d90dfac3f905d2d8d830bf6f2a6 db369aa2928bb545a1ae512bad146f83f6832acc Pratyush Biswas <pratyushbiswas103@gmail.com> 1784797852 +0530	update by push
db369aa2928bb545a1ae512bad146f83f6832acc 5d77ea552d0ce58284f6ee4d50e9d55e4dc1162c Pratyush Biswas <pratyushbiswas103@gmail.com> 1785930411 +0530	update by push
```

#### `.git/ORIG_HEAD`

```text
db369aa2928bb545a1ae512bad146f83f6832acc
```

#### `.git/REBASE_HEAD`

```text
371c0576d99e99c8ab2ef168dd06785e5891bf8a
```

#### `.git/refs/heads/main`

```text
5d77ea552d0ce58284f6ee4d50e9d55e4dc1162c
```

#### `.git/refs/remotes/origin/HEAD`

```text
ref: refs/remotes/origin/main
```

#### `.git/refs/remotes/origin/main`

```text
5d77ea552d0ce58284f6ee4d50e9d55e4dc1162c
```

### Complete `.git` binary/non-text manifest

- `.git/cursor/crepe/df6fd3e5176abf548b1866341381408be3c69612/index.bin` — 57,092 bytes — SHA-256 `b89b96dcd670e582d3955cc1e5ea06ca480e97d1a92a960c48d8360445a575e5`
- `.git/cursor/crepe/df6fd3e5176abf548b1866341381408be3c69612/postings.bin` — 23,621 bytes — SHA-256 `b78d2ca3b3c8c357fb654c2fa30506a42d275241ae162002e3a68b22fc3a5662`
- `.git/index` — 2,763 bytes — SHA-256 `c6e17ca46a1c7f1e841743b7e21eb865f64f628be4ecdc53615bc5d2e051619c`
- `.git/objects/02/d1c84143591424b73f1df866f049214c340eed` — 8,715 bytes — SHA-256 `26b4daf27a39e836b0933a4aba3d71bf22c1f7f8139ecdb9a7c45fd4391308c0`
- `.git/objects/02/ea9a9bada9eb2e49ab9f6ff4edf3c859592cee` — 162 bytes — SHA-256 `46115634ac84bf831ef03c4d78e66fe5c6ba3d2ac3b7d20402a0150c177e6545`
- `.git/objects/03/468f2bb1b2bed099c0e621feb9c49d4afc8d35` — 184 bytes — SHA-256 `b028408909e2799dfce3ac0b0ed60e147bbb7bf6f3032ca9b7ba122bc5591b3e`
- `.git/objects/03/8186d7b0672b545b3cbc880c2abe201a679a11` — 175 bytes — SHA-256 `05114f6204a8d72a54436baefd7fdd2db80e566f1a7be1587fc916a653d97777`
- `.git/objects/04/69f0b12397aadaa3c7e4b1eca0e0b566baa136` — 858 bytes — SHA-256 `4c15f889b308cfd26915e2caaa485c52f4221c99ae607fe65a42c1fc4db346f3`
- `.git/objects/05/29db17caf108777c51b1cd12ab9d14daf724d9` — 5,450 bytes — SHA-256 `56c1d463f808028e6c974d24bcdc6156254c1fa932c0a1d25aea6784c17e1a6f`
- `.git/objects/05/af20720e304c520633546259e8941c58853923` — 277 bytes — SHA-256 `15a53dd456c39b6bef0f01b128d6fd090a3bd650cc1427bb098479fce7ba4ff1`
- `.git/objects/05/fb18174617191f7779aae0b7f2a16c3fcfb948` — 5,649 bytes — SHA-256 `18a32b7ad18631f1fe5cfc19632834cfdb8748ac7dbce977e401ffb153ec0190`
- `.git/objects/06/17c7cffa42e5962d0c4cd1dd95cac251ad2ba3` — 614 bytes — SHA-256 `63ff1853f03181517b04e601460e42f15c8a6c05d68fdc396563386345934899`
- `.git/objects/06/1d469695c753f5012c3b948895a305f43c8fe0` — 5,600 bytes — SHA-256 `d07fb7402e7a3212967fc415fdacbf133642c3bf47b105590b2775ac5cbca521`
- `.git/objects/07/00be69e89dc7840f744d7156dedeffce33dec8` — 829 bytes — SHA-256 `5e2ead156d8821f152b1557be0bdd5562992c2a560b42372f3b564852a3c1662`
- `.git/objects/08/03dc8ae759aa19fc1f9e8a578de02cb1ab1cae` — 169 bytes — SHA-256 `93d4385b9b215560036b1448b9756263855366e374f5b557973f511bbcf6a47d`
- `.git/objects/08/d68f9d0a3712152e9eea8ef961566892409ddf` — 686 bytes — SHA-256 `2fa9b59b2fa677ab658bccdb5b4d01784bf3f6e46d71da2cb23b4e9017e8628e`
- `.git/objects/09/106d973bf366d63a9c705c665b5496557ff839` — 113 bytes — SHA-256 `da5ab9f5948428f58e6933afc1c9e3d6f23dd982e656abb2177f5af65e36f0fd`
- `.git/objects/0a/cd027195c1d03e0d90b6ed8744ecdecfdfab2a` — 175 bytes — SHA-256 `55447ccd0849dd6b41b2ebe12246be3b55b92236f12f0d9c4c31a2d19dd4f2a8`
- `.git/objects/0b/57345860c8a5b3b940538919940d7f72798acd` — 225 bytes — SHA-256 `0d0f24aabace77c4286ef89ef70ad90c02913102265beb18e33e87a5d7bc3f88`
- `.git/objects/0b/f401977703d3fb28dfde50ca495e6f6d0cb714` — 832 bytes — SHA-256 `3aa0cf77e285db8e468e83107203fb672b0a56264c820850039b9d1feb45e092`
- `.git/objects/0e/632825d2edcc89fed7cbd9ff0a7be27613f4e4` — 166 bytes — SHA-256 `59868591d4998550c27a58ffb58e7fa2ff0a2ffd3e1be837cc274afa13243d5a`
- `.git/objects/0e/a98722d9c157c9ffca3da482b2e372009b298d` — 131 bytes — SHA-256 `5acbb5c2d65dc3b8e90bc26f05ebc2bb2fa79d37f5aec9b99c4eda62b8618d80`
- `.git/objects/0f/a30c6c512ef61ded0b10e7e840c3988956a0e0` — 166 bytes — SHA-256 `3e93b5d4bf03868ab3eec96b2b07153b38ea3d98cbbe85dccc314e5fdce2a0c1`
- `.git/objects/0f/c3b4710a35bbb67dab6a684b6023e7ccd06ae5` — 168 bytes — SHA-256 `80ec67474d3760f870db460952fd6dc55b7dcbd80bf579306a5a46939371534a`
- `.git/objects/10/2714214ac847b4272b2015e3029d644ca0dd82` — 1,392 bytes — SHA-256 `23c57b98ab075a4db4769818f0eb683f394a3aa12566f3f72a6ce62a69e5943c`
- `.git/objects/10/33f1be7bd6d11e380c2e379749f4e81a0130ab` — 829 bytes — SHA-256 `87a7159599f562d38fcacf2f609dfcfa155d0b7776b9e1b6d998ce8085e654b2`
- `.git/objects/11/28ecbe140d466316b064dfb5cb68b67adc893d` — 1,174 bytes — SHA-256 `f6112559537996c201b42ef3d57823604b0725c824f9619597a7daf5b7423115`
- `.git/objects/13/9c411b0af2b39d73adeb9b0869350823c7b73f` — 1,185 bytes — SHA-256 `7eb96b6589a7ed1141a54d1e1d43679598368a058ce05d08aaf9c57acb109c1f`
- `.git/objects/14/1c82bebb8a7b730adcb301fe3779d4aee5f233` — 3,450,295 bytes — SHA-256 `675db7a1e0ac7d763b39395320b32e6e2ae3d2ccf896e46eca3b04cfe1d89ba0`
- `.git/objects/18/7750bf32bc9f2c1886e1abfe2ae3825b132034` — 1,055 bytes — SHA-256 `aab9e0bdfcc6501f5efd098f7876267915257a7f0964affe180e98630e182f27`
- `.git/objects/19/05e8613b73a849e5f4a2d4cb47e0818e273b1d` — 5,532 bytes — SHA-256 `11a7517f752dbc55f2ed403ea9fda91a1b74aeaf167cc27c63d97ca2683ddf5d`
- `.git/objects/19/06f858cbe8c99d5b5c7c99567abd753b0ba68a` — 83 bytes — SHA-256 `acb21b94ee76e592b09ca821e62eca35b25ba6dd1cd486e84e064901275ebb1c`
- `.git/objects/19/53ecab58d04156254cf801e0a8d3f5c0ece4ea` — 122 bytes — SHA-256 `60d17980fccb407940f5f9f6399bd941ecc09667c47b75774b0793670e6f901a`
- `.git/objects/19/fa45efb4be2182a48fb05c2f4714898016b63d` — 1,112 bytes — SHA-256 `cdcec3f70d9309a18e3f7493744db80f759d4e49a9d043367691423d1f36a48e`
- `.git/objects/1a/22c426906ccc74319d09405b9d9e5d92c1e7e5` — 8,028 bytes — SHA-256 `462146dcc172369f050ebed9701699cfe35dc5f4bdca2a3224c29c25a4308c66`
- `.git/objects/1a/3af1c633860f4c4202d163334f3fe902f8fef7` — 830 bytes — SHA-256 `f997c6220ffc98e9f1b79fe1ae32f21b8e06adde47122390d71e90d594d15d8f`
- `.git/objects/1d/1a06947d6e5ac85394681bb406b39b8ea70384` — 5,445 bytes — SHA-256 `53ce18ee0af1ff8509d456d535220c1de99239b8e71f98ec9ec8f2a8723831bb`
- `.git/objects/1e/21f27e23350c79cf998401412f32c2237f44e6` — 937 bytes — SHA-256 `e88f0943f2e0a2c0633d806c791fb8e8bf1ddb2c46feef547e269118b89bc224`
- `.git/objects/1e/94b1b7ae381fd60b427cf918035e945ee22cb9` — 184 bytes — SHA-256 `1e33a544c06e60f9288e73ecffb1c9ccefe001760a270f068a2f04fe909a6dfc`
- `.git/objects/1f/4af8cbf4c52187199840beec45700297a3d745` — 56 bytes — SHA-256 `72b981db5635936fdf1e42e9a658dd3f7b44a51135e45fe16112faeb2f426f26`
- `.git/objects/21/8952378f197d8eff887b09c2b517fa502a56c5` — 1,168 bytes — SHA-256 `0220ef7252651e254384af3501b3646639827b3e494deba3535158004bdd5953`
- `.git/objects/26/39c91ab5147c3017dadac6f2390ad9d8443062` — 389 bytes — SHA-256 `dc87923f48101420ce389e2bb2e4c5396d7e6e825980f63b38e6d345f2b6c83a`
- `.git/objects/26/75e0b845782fc38b599fbceb7ef9e08b8d216a` — 5,172 bytes — SHA-256 `dd9c79365df4c0a214566f27ee8c2827034f000c27c09c251b4e6ecbdacd9a17`
- `.git/objects/27/8692921556abdd1a226e7446fb712f68a65840` — 1,188 bytes — SHA-256 `245e6b1e89431247b47330ad664fa1737a5cb7aaf354d05f57bc08ec762c8362`
- `.git/objects/28/7ba75e6d573f93e286ef07c50e5f3549ac4e32` — 2,008 bytes — SHA-256 `92370b229ab5e3a6394c50dcc89b41d7183b5f0012a09cb2208b55c34e8f39a6`
- `.git/objects/28/f01b1e5bd18d6776e105165ef722316a5a01e8` — 165 bytes — SHA-256 `1e4c4c7a01d72e8712efff3f2d48d65f39742c1f5f920067cedf65f8723c8e33`
- `.git/objects/29/034a71296227b36f2ac776072fd44d4c029c42` — 5,419 bytes — SHA-256 `bd66d1d3b07d56399f7bc9f280cb0a763743928231c9a3e9f4c28959e63c61c2`
- `.git/objects/29/9504c511fbf4cde6569f07a758bee9f2ffcf1e` — 554 bytes — SHA-256 `e55fe845be1155667fbe6491607d6e3c4846ceccc5424146c1f4d761c4807552`
- `.git/objects/2a/79b36a562044bbd7e651a353a84b54e80081e7` — 53 bytes — SHA-256 `2ae11750d5ff4e7598735e142f0a659f0dcb3ba3001658aba057b23a791ba2f2`
- `.git/objects/2a/c5b11103cae3be38fe6809ef3715a4042872e3` — 165 bytes — SHA-256 `835e3c45bfcdbf940be380fb0c3d0f5c15152277e9e4e7b376994f3394781717`
- `.git/objects/2a/f9c975e4295d677a07533c549604e25cde4eb6` — 53 bytes — SHA-256 `2ff2aaf649ea02f0e284962aa1eb9b216d8352811b77b419e654b5d0cd67667b`
- `.git/objects/2b/cac505b2b6a4db50475e286ef1caea83725f7e` — 165 bytes — SHA-256 `1ad5baa98d11564444a89d5ab583ca13d92ce1cf3bcab33e75108df5df69ac24`
- `.git/objects/2c/ac39a66f0ce3c9783f2e29a8a70faf8535c793` — 1,358 bytes — SHA-256 `3e558ac652ce7293433691d37cf1f3257d148580ca3361f38d07fd594143a1e1`
- `.git/objects/2d/a43c73f2f753cf4dfbdc2ba40204e421e25b18` — 308 bytes — SHA-256 `a9d08b6f2c472315ac6611c7024d95db6e56d7f3cdfb07479613e79e70d2ce9c`
- `.git/objects/2e/4147e9c2579164050695654628e7a32f231830` — 174 bytes — SHA-256 `f49d0501d13ae02eeba7a06e3707f9ae867ec831e407836707d552afaa3e7eb5`
- `.git/objects/2e/b5f309415f061c5378c47867efe73b215876b4` — 165 bytes — SHA-256 `6a50fac071361a27f25211de9615babd1c7e349cd38fc0ab610e008e604e89e7`
- `.git/objects/30/394aeff2f76dca9e9560aecbb8c68baa9f2efb` — 65 bytes — SHA-256 `da3357d8275a163813785a886103e07c0e1338944eb562a66aad10c5a67f5070`
- `.git/objects/30/6c3e25eb8fb1f6c547e71ef6bfa2a02b79fd52` — 244,243 bytes — SHA-256 `9617fdaa8f11686b24ec85057b58ef463778d53a41f6514749e52a33ddd53687`
- `.git/objects/31/5e2e9fb33d06599eabcf9ed08ba9c796f84dcc` — 792 bytes — SHA-256 `17d42a2a8e37e29c454558a12f43b090aef83625847cda6acaa6002108b1920c`
- `.git/objects/31/a2af2b18fc5138996b1d462e4fca363b25efbc` — 1,182 bytes — SHA-256 `8146bd765779668c6209c623935b1a82cdac6a19cfa7703e47ab8293da43c4cd`
- `.git/objects/31/dd6eba1dad3e8b10ee5144e9178bf59ce3134c` — 423 bytes — SHA-256 `54472a5166cef9795729dda489a339cb3ec4614fca8accfe365add3cba935fd2`
- `.git/objects/32/8f257ee8872c6bd98c415a04b9d963b125ca40` — 170 bytes — SHA-256 `40d3061b9184d7f9222be2cf1a97705b21ff827f3ce337f681cd325cad68c179`
- `.git/objects/33/fe52bcfeb5709358af93d5795f65579cae61e8` — 471 bytes — SHA-256 `0d72b012bc0e3150c745370e141430ad70fa250c023f35e5d38f7704ab0a2a52`
- `.git/objects/34/40033cd7136332e6ff75aae5dccb655488cef8` — 832 bytes — SHA-256 `69d4896b09391134f04ea910f6313f092849131f40e47e685caa6dac999cd195`
- `.git/objects/37/1c0576d99e99c8ab2ef168dd06785e5891bf8a` — 165 bytes — SHA-256 `72cbc07a8ed5576b2f552ccc0dbb2e77a90b274cf3d58f3663359d3439444312`
- `.git/objects/37/2612d898d4e0651bfad12030aba50ac4a6ade6` — 5,660 bytes — SHA-256 `940a05ade96dc53ab8df34293f14063eb0791f0fdc41e5c63f1e4fac33665dda`
- `.git/objects/37/27dd44e56a73b0410fbaf98ec375357bbf50d4` — 875 bytes — SHA-256 `9a7dd8be7d7e31078ee4e5ed14b9d84845b5092bd90c09ea7cf37d3335b74923`
- `.git/objects/38/71e4d2b236306a20413eba9b2b1ef91f03bae0` — 55 bytes — SHA-256 `ab6cfab47ea0cf05c3798a3354712fb521a6ec4d976fb49ef6185ea4d1afa7a2`
- `.git/objects/38/ee59f2af3302c7579dcc070e606e8b37da82ae` — 583 bytes — SHA-256 `ed79f57c575452a2ad52184a08683c30f69d49833e964b5fc9930792b74dfa49`
- `.git/objects/39/0f065f1b27a814452598e99a2a72ef48856fb6` — 852 bytes — SHA-256 `8be204921c999f91fc81643af141aef8d2e0913b2fc45ea4dc6e4407066ceced`
- `.git/objects/39/6a59e1947e2a150bcc46bd3e326299727c1367` — 250,231 bytes — SHA-256 `8c9b4cdeaf6b85be7388dd449443ed1abd30670f89bd60ddc820f99851597109`
- `.git/objects/3a/1792127054f6720c7b506591d04be97d79b35c` — 80,076 bytes — SHA-256 `2fd6a88eff736545ca3145c5bcb6d4d52fff6ef6b2a5828f73e22ef36f7b34e0`
- `.git/objects/3b/76a14acb18ca178109dcde5f2b44947ac1d3f2` — 198,863 bytes — SHA-256 `5a72e541de2395b74d00c1e6f74415050cef3faf3a6a3f8d5de623b0f4ed9639`
- `.git/objects/3b/acfcbfe27260da16c4824ee32496ab70e0147e` — 168 bytes — SHA-256 `b329ee99d4769bb36ac653dc7952ecbe52ab1ded1ee3e83ca6af27e2ac9e24c0`
- `.git/objects/3b/f99a80caab6a1c59b822a3187e05703e2b943c` — 5,169 bytes — SHA-256 `b9ca55d830be7af69a78a6081518a08530055ea2a3265595162762d78c27ebbc`
- `.git/objects/3b/ff2b8cd6a7952b2fdfbf3a31f99e394c538356` — 2,315,161 bytes — SHA-256 `f2cf1b7cfdfa393ee641134da5e6463d108a26bf563e2fee0864ab2bdba1b8b0`
- `.git/objects/3c/797ed305f9b14a93a62607d5e6d5acb59d9ade` — 661 bytes — SHA-256 `2dfe6a3623f10981d67d3b728589ebd0ed365ccbe157697df5b3566b63a542ab`
- `.git/objects/3d/5871305cfbd767f406b0cff614dc92b587904f` — 165 bytes — SHA-256 `d3ab4ef08f054f24a380969ba121b68715706b61a69107e996d1b9b860e6a564`
- `.git/objects/3e/b4dd9905f799d32a97d6e9d24a1a493d5ceaa5` — 12,436 bytes — SHA-256 `093e1d18b03d2e0b5ed0458838927919aec79c4888fd9a2daf044e3b55223626`
- `.git/objects/3f/9a9ccdb1ef05d900a5aa4fc4bfa8db11a9d0ad` — 388 bytes — SHA-256 `8cdb539321fe58f2e322ba6587d4accf19ceec2a0a149ce9b662750a2fea30ac`
- `.git/objects/3f/da9b6659a4b977802c0e7334b09d28ccdf4644` — 563 bytes — SHA-256 `8ab4b7693a5c11bb8c278bcccc0940eb73e7c6e2dd998907353675611a57ef89`
- `.git/objects/40/b2e24c25b75c9a4917dbefb9b46b335da6bdb3` — 876 bytes — SHA-256 `b925613a21148da547c22b4c091d6f374561b466010d244cc1c61fc25c285977`
- `.git/objects/40/ba7f59c2e5febf800ee0fb37f04a1493d9e89b` — 162 bytes — SHA-256 `f3472dabd9b8e39a26c4c58d12aaaa4453b543e38f334d46a365475dbc1aceea`
- `.git/objects/41/74c5e7fa9fd5a5aeca0520b71bbae8af3a00da` — 341 bytes — SHA-256 `d8dd35cd1d886639d737c826661021063d0f77363167fbd869a90e704c3419dc`
- `.git/objects/41/eaf26cb62b76c5a14e7e6b7652d483c8408466` — 5,446 bytes — SHA-256 `42397290ebdddb57a2aa5072963deaff085bc63d915e54c3cf68d0bce6413e0a`
- `.git/objects/43/c3abc658ad361367e9500fea26ecffd992741c` — 193 bytes — SHA-256 `355a49ec8166f615b7c4169cf43e41907fb3e0aa83e69da7a55cdee7897223da`
- `.git/objects/44/954f268c451d649e5b43e7b0206c57a958786e` — 166 bytes — SHA-256 `ae07cecf95c5c319ef35d9c066ca0e500e4abf308ff01b150dee8b0c7ec72580`
- `.git/objects/47/1be3b84eb5508008820ed8a993cbfedd21421f` — 554 bytes — SHA-256 `b5db5b3d351f2b22cda5457634d337cb77e73d02456580618b8043d1ffce229f`
- `.git/objects/47/8eb699bdf96b7221da0bf3ec06d5fc8df1d7e5` — 83 bytes — SHA-256 `324822b9ebf5d8b6caca554cace2d29a7aa56287772ff2cac0e0e5ae2520ca30`
- `.git/objects/48/78ade346b7369e8bf25dcfb64552a4597814f0` — 162 bytes — SHA-256 `0fea66ec45348834ebaf789e05e70ec7ff9e8400dfcc69215719188c835d9ff6`
- `.git/objects/49/ed127e2b51afc1c8093f84b25a4d116f265e00` — 5,165 bytes — SHA-256 `991e8cb01e3ecc778ac51e06e8ada8b0086ec56e9f7adad8fa5e73d7343da052`
- `.git/objects/4a/ae9354bf3fa4b748f9dfe42a1883d720f03ed3` — 7,836 bytes — SHA-256 `94a33c0d67961375c760b132e6123a04133838e80f97a6e7db4727c919d81610`
- `.git/objects/4d/c217459faf27c593bbe6663df0d61977614a16` — 423 bytes — SHA-256 `cec8fbff7cdfbc7bea78e6266af4d24d1bcf37f195a455466efe328e632bacb2`
- `.git/objects/4f/a11b02fc754a7c7c6d3a7c7dda3aa1ad39a43f` — 139 bytes — SHA-256 `e6c2968aecdf92136ce0ae292c1fc1858e455e06cb17930855a3afca3ff72c85`
- `.git/objects/4f/e413357257f3b297a53cd1fd857680f5f5c2b6` — 55 bytes — SHA-256 `a808ffe69435a4066e9718371ed1d84b81bd247ee7f0e3b4db4afce27da8e577`
- `.git/objects/50/6dc40b7f68858ac059c61df15cd6a318dcb7ac` — 4,984 bytes — SHA-256 `d1aa006c77b1213eee278a05dfc7a81690d713d52d1056ef061053051247854e`
- `.git/objects/50/c440b886a3f0d3943c30cc57569d2b9b0352d9` — 165 bytes — SHA-256 `5ab90cb3a0b9d0c8674cccd3bea89bbd9ed79cc55da7674a1c1fbdccf96dc708`
- `.git/objects/51/1f072107e4ead6e666797f58abb2d67f832d4c` — 5,616 bytes — SHA-256 `7732d2a968d66eed10295b572939bb3c72c9ad324bf8e84d73d938b52ae94440`
- `.git/objects/51/d142d72cfdcc8be203abba53568fcbd5d0407c` — 5,458 bytes — SHA-256 `f836f3724a74a292a52281d1ad5ac829d680ccbb056817419942143aac059917`
- `.git/objects/55/66dd4ff5af3fcfd61a90c8b88ac29f0da1f396` — 818 bytes — SHA-256 `eb1ec98282b8e9fe759d2ff8f8c53e16952efa89e716e8b3f275d065b5b44913`
- `.git/objects/55/881c63ffc9c67d9954e7990140080ea76224ed` — 49 bytes — SHA-256 `620b939bba85dc6834db2830423108059ec9ac08ece4c34f557f37d86e7d26b2`
- `.git/objects/55/a8db0ac01d5d90dfac3f905d2d8d830bf6f2a6` — 162 bytes — SHA-256 `1fd9d073b7576d18f83b0cf9a79eb44cd04b50dbba3da0407b4fd7682405544f`
- `.git/objects/57/f8681b624f213e2fbcc530b5de3c07dc076734` — 522 bytes — SHA-256 `9232d086866ce8674e45bc478db5037bcff2df755c269d65927aaddcb57d042a`
- `.git/objects/58/6f6b581fb0997421d6c16ccb8cfcdd4639a878` — 69,519 bytes — SHA-256 `4a04110460273fd87513a1a28259d1b4efd0c6b33ca25db993a1352e7ad93532`
- `.git/objects/58/f763734ca21fd39a42b7a3d8a8636694a749e0` — 835 bytes — SHA-256 `dcb7a9bff2bd0e4bc0a92501eb4d88fdd4021d4887e8d28284abd9d5696e8d1a`
- `.git/objects/59/86586886e2df0a03417c7f98c599a18f8233e7` — 56 bytes — SHA-256 `f5393b62f6ac36cdd05f63e5979f29bdb04e011de3e5c59beae47015310ee3e3`
- `.git/objects/59/c812c87105249cb07b546571bc25e99d7faab5` — 5,615 bytes — SHA-256 `2b0a9f82528112a4dbf0d8efb5b31bcc15c1231a33c1f655e64954583acc3589`
- `.git/objects/5c/3d5624e9dc26e5b47e01b3eb9d6d8acb87438b` — 183 bytes — SHA-256 `cf32fbaf2a32c59a6ed9c7752e21f2cebdc3549d4b931ee8264ba580fb15a97b`
- `.git/objects/5c/9d025d37ce5b27fcec314e93b1648b0d7d4f14` — 157 bytes — SHA-256 `a45cd4ac83d785a3fad3ee525ba35dfb77be027cb6d01094b728cdfac8ed35a3`
- `.git/objects/5c/a43124cd344aa384921ae7d391ffe5b8cada77` — 174 bytes — SHA-256 `539307dafaaf183c35163e23eb8d7df87bf97fc07705c8590a96ed2ac5f6fa20`
- `.git/objects/5d/5571e8d7b9ad2952b155ec34731074367a95ce` — 2,552 bytes — SHA-256 `206fc6024627db200de92e9d81cea94b045f2390af8ba5d24230123b8ad6b82b`
- `.git/objects/5d/77ea552d0ce58284f6ee4d50e9d55e4dc1162c` — 171 bytes — SHA-256 `0d622ae08089a892d6261978f3d1ab06cf7501a8d57ef33025af0abcb21777c7`
- `.git/objects/5d/db34f3097578257f388aca97947c04234286d1` — 35 bytes — SHA-256 `310ad34d7551e3a1885222ca58b2db3ffd64ded0ed023c319dff651ac11b5f47`
- `.git/objects/5f/216a316cb0ab7283af6c2fe1c0d19f00cb99ee` — 234 bytes — SHA-256 `f99cf17052cd063630752d33f75611a7f1bab33e755012f8595d7a4cc02186a8`
- `.git/objects/5f/89f934225ad07cf4d9e4999b210a939e3f3aae` — 165 bytes — SHA-256 `9b299a4d5d08af010e841f35539468fb57854b385ac5a518143289589e26871f`
- `.git/objects/60/04e014d55f93fa9e1a6bb99260bbf678eb3103` — 803 bytes — SHA-256 `36599231fa24d7dfa119e35dfe7d336bdadd667c1698b14f4fcd9a56d09f27e9`
- `.git/objects/61/4ef22ce6598aca8ea6fea1d8d164f8be13396b` — 5,761 bytes — SHA-256 `cf3f5a724b5721e40a05e2eabdbb8fe9d81f7ea6eba5d3a90118b8adbf168e66`
- `.git/objects/61/ab92ee5df83ad29899fb0c6df0c9931cad971c` — 5,760 bytes — SHA-256 `32dee8ffb5049f8458a298562fdab249e0c6d3ac798e3d9c94a592fafac75848`
- `.git/objects/62/3557778f6dcd33fa5f157f124edc05c60cf25c` — 456 bytes — SHA-256 `b25bb9e84a342d5e08780bac4f3d45e0b593d42e76119c9f08acd644842d2eb3`
- `.git/objects/62/941d084ebf61bbf065665229be386f9dad8d52` — 389 bytes — SHA-256 `a08be0b21af9731667187f67dc2124752a20a265880fe0b9c2b8bec083e47971`
- `.git/objects/63/c479109dac817af339af1243ae6fe349fd48ce` — 1,187 bytes — SHA-256 `148b95ee8998e8d0a53095315e55c329570eb14dd624a7440c9bf9882c50a8a2`
- `.git/objects/65/03b1d872ff136f0eb4d71a5a932a6c820e6dd4` — 830 bytes — SHA-256 `8443814165a8fe94108c3059be86817c0e09162c204ca9bbd57fc69cef216123`
- `.git/objects/66/733c9879d1f9a8754f62fcffcc4778a7f15175` — 1,065 bytes — SHA-256 `b363a58240565afc45b875b780c13a84d588e215022b85ae213efd3efb302349`
- `.git/objects/66/e8c16e0cd1067d9284d523f9c49609df8fb361` — 164 bytes — SHA-256 `a67b87c9cf71cca37f9294c2ccb6c61f790c1e42289bb731f55bbb6605344854`
- `.git/objects/67/24fbf2404b3ed2130c37696be5a0ebd999b5a5` — 317 bytes — SHA-256 `c1b800d2279296cfbab88d42f8be4c1440f6c908c6b69636cb71d7e2f4f53b5a`
- `.git/objects/67/81283e15223de15664e6b64ed434e3f693404d` — 165 bytes — SHA-256 `900d4951c8421c673d6968b9330dee61ddd271b1497ee19100040996c545e11d`
- `.git/objects/68/b0d54a903ced06131dfe80241d5990c21d7a55` — 225 bytes — SHA-256 `e77532d2d63dcc0704ba6e8c2c5d356e3b669a9772a9cd991b9bacc0e8723827`
- `.git/objects/6a/d4787fed78bce66b0f74a6d3a4e6f0229cb2d2` — 173 bytes — SHA-256 `aca6c463960dda6712faff480644926480ff5c41388ec6dcd79c5fdbffa523c7`
- `.git/objects/6b/5f31277635fa1a539d450a5df751be27bb232f` — 225 bytes — SHA-256 `b5e97fb0c15b43d61556aa5df68e4954bed200349659e2f0c117bba376912a49`
- `.git/objects/6b/a3e5626faa50e2e127d979fea1f2645073f344` — 55 bytes — SHA-256 `e7d5bd8e657c1c35d26375940c6bab7f04ac18771584e3ee44722595b9825ced`
- `.git/objects/6b/c99b3fed3ef44d327d6f2617069cd424459c66` — 390 bytes — SHA-256 `f625a620d327c6eefe4ab46c779c7b0d3f528a183d40a99756cc062d67527fd9`
- `.git/objects/6c/e74d4ad8e69a080a19a5f50f80dd08476e42e5` — 54 bytes — SHA-256 `e1ecf470a38c79f44721d3d15ddc46f42573cbdc8b9235bf68a8d8b2a2ca92b8`
- `.git/objects/6d/6e8a3aaeeb571809c071a092ee13e3bdf2454c` — 8,701 bytes — SHA-256 `c21573ff52a3e656ec172443c4fa01d04ae9fc114fcccd82b6a14e84cd9f05d2`
- `.git/objects/6d/6e985becbdae9b204349b9761231458aabf422` — 388 bytes — SHA-256 `910e24ae0490958d804d01008fee27ee5b66cbea454255b27d4b7c7d3a07a8ae`
- `.git/objects/6e/4ac4fc8b84bae1c62bdde7059c61142623a48f` — 246 bytes — SHA-256 `5db49397549ac401f8b540a53908bc871cfa65a65e8d2a0ee3b304f00596f86d`
- `.git/objects/6e/a52bd36c43b1d9921bd13e1da47f16e1317fe5` — 1,300 bytes — SHA-256 `d9639bc1ce6eabcbf71f2c8a0759aeee862ccbcb02bb34a0fefa180784232334`
- `.git/objects/6e/ee7e8611c972165d85a1eed298617adfd41b83` — 830 bytes — SHA-256 `40bf245d01188f7458c23819e1af95743123a2e35e18dcc54df1fc9a41bd52ed`
- `.git/objects/70/e4899c6b6fe933617b1bdc2c4a5fb98e498e47` — 455 bytes — SHA-256 `c1ea4dfe6f8bbb083175aae9be06bff7a2445bb542902f79fbde00ae677aac14`
- `.git/objects/71/94ad0bd6c1e23e058918e4fa3c6cac86a2c34b` — 63 bytes — SHA-256 `4c04258163684c93bfb503a98cdd759fd2450dfe6f4a6fa4abd20a2c7a41cb6b`
- `.git/objects/71/cfec5516eb04698c71623a0659efdb4691ff33` — 172 bytes — SHA-256 `80163b184145a271fa88734539d347e84b6ae152af44664a527f8003a23ef7c3`
- `.git/objects/72/0b322fbc0ae11bfeae152e21cb90e3bb6e4e41` — 5,607 bytes — SHA-256 `6dfc6fcc0ee4ff45600cf798b0523879244cedad80d17f1fa286e2f38ffe1f52`
- `.git/objects/72/0d6e76b53f7e4e27ab0a76e50cfee19a9538ea` — 5,172 bytes — SHA-256 `a61a81545c2ce292939515649bba591034429de71845da063cfa69a892bfd97d`
- `.git/objects/72/87222f82b17d4db6252a2ea54bc8d59e36c08f` — 455 bytes — SHA-256 `284b179278de2c70f5386ec204b9a7caa198469e761a309a11527608dff7c207`
- `.git/objects/73/6cddecf7f0b2502cda7897f7fcbdee3853be7e` — 977 bytes — SHA-256 `309b6a06725c7e25e904e1f9594e094a2d3f3c1ae39881850215649713a8ac0a`
- `.git/objects/73/8122d8d0f90757b9a73342e78b928f149add52` — 306 bytes — SHA-256 `3b55f63b2176a0cc45513a0dae87a8780041397fe9f3d7fa88cddbf42da143b5`
- `.git/objects/73/d3af1d750568a978d4cfc6ecaa9bb5c31959cc` — 998 bytes — SHA-256 `83e5526fe12f3a7fd14d1338fb2eadd7e833acf885ef31d83ff8d32b08df10e1`
- `.git/objects/74/d33bdb08748d90e414a506344d3d8a08811a6f` — 992 bytes — SHA-256 `9502742d2c34427daaedd1d217156a13fae6746a50fefa75da04ffdf26720869`
- `.git/objects/74/d8408a8a84c8fa457d694a00597bd85a17d13e` — 2,175,959 bytes — SHA-256 `2840199b9e93c0861d939a3415808f5a521db62853cf04aa3136f2ff9185759e`
- `.git/objects/75/6571c381d4efc1c426e2c2b1597703dbae93e2` — 308 bytes — SHA-256 `4d2523f8c2a586746546a624f6acae0e9cf942fe8b3b3006d6cb825743000775`
- `.git/objects/76/49ff2757190e33452e3dbfe86b1285065c0277` — 234 bytes — SHA-256 `e9e6f60cc81c76315e58d0430c368e2c9f55be7f02a9093d5086a2d19d6b0c84`
- `.git/objects/77/fe8a4faa5940e58bea41b4ec26dc45a6755c5b` — 547 bytes — SHA-256 `9ac9bab228128c57c0f1d3e614d5c8bb93b88b5dcf2e0125fa8a39d6c685dafc`
- `.git/objects/79/2f8413e058a7c2170707104e6799f63b0f8587` — 914 bytes — SHA-256 `31f02b6c1174b87f0ea961a5a2fc68300d2ff8d2a0cbd9c745c26296af7d0a4b`
- `.git/objects/7a/2d7d832987bf8a87a2ecd1c185171a2169a6f8` — 794 bytes — SHA-256 `6fbca7f4cd8fcc8637920e02e175098069efc4684eed36e1bc0aa4c1518dab2f`
- `.git/objects/7a/d5145dec8129d54074a22d1d459058a7352309` — 5,601 bytes — SHA-256 `c22e38f29f7beabe2c669ead7867fcbe2e5f081090db99fb26ae164ee514ae70`
- `.git/objects/7b/9770dbd675984f1aaef3b53c9a2f8a1d65368d` — 371 bytes — SHA-256 `48d8352e88cd00299bee4c2baf90819466b2f5ee5991742c0bf9e6dea01d4719`
- `.git/objects/7c/150979b9168fd34cbfbbc06d49b900f8799e0d` — 118 bytes — SHA-256 `2a868543403172c9bde5764981e25030ffc27b087a750378315fac1720920996`
- `.git/objects/7c/2cc4618482cc0cb57f31b2ce305dd41a1a5ab5` — 184 bytes — SHA-256 `de6545185553b6330b5e658b481140aea37ee23301e3022572c239a805a7293e`
- `.git/objects/7c/56174c791ad83979789f8be956a1ddf35e16bf` — 456 bytes — SHA-256 `61f9cd658478aca5e1554233fcf911a1ab062deabb5f3b8277d7a62dd8b2ad47`
- `.git/objects/7c/93c1630bb0ac6dad1fa1e08bec4d7e01dbb4a7` — 839 bytes — SHA-256 `79d36c93e2dbde11f766e2c3d30f4c6e94b7490d2bc027192be36d682691aa16`
- `.git/objects/7d/7aaf1e939a7d097ed74b74d9a366845f1f22b7` — 668 bytes — SHA-256 `1ca7a12947443fb727c547a34dbad60bebfb963dd87602ceac9c1d78cee290f8`
- `.git/objects/7e/171a31448d8ac6dfc7e5970757b8458c0fe804` — 5,394 bytes — SHA-256 `3abbc7adad5ab44c31ef151b116c65bfb398eb649406be5f7245c23666433eda`
- `.git/objects/7f/485b99bf868d4e6ad3e7ac635d3f94b2e09558` — 1,178 bytes — SHA-256 `269baf012239587e1998eb088e1179161352526a2ce0142e9b451e61024b1cfa`
- `.git/objects/80/3af6129b5b3860c1078b6d4724434051883ac1` — 389 bytes — SHA-256 `861a21a4732938d1f7fe857d8cb2b2a27d60a782cbe32474fcfb10f877206a06`
- `.git/objects/80/63a0f0b1c748e24e0cf57f28f98004ff919e51` — 247 bytes — SHA-256 `77dec91c643cc67e71a5a3493816d0cb2d585473f295ec3152c3888ad93c3de3`
- `.git/objects/80/f8d662eaf6a86b4b828d297c909431f95a17ac` — 8,685 bytes — SHA-256 `27e53deb806725444c127a18bf644a0b3e5c01fb1571457d07f0794b83447b5e`
- `.git/objects/82/03855d366ef4b640d818c3b928598b512cbf8b` — 183 bytes — SHA-256 `ffbfa031bfe559c82be6d3cd37ffba4f7cee0182ec9b4e2cd4194779dead1946`
- `.git/objects/82/6295a648c7de4de4a2a206c7087ae6bc71fa4a` — 296 bytes — SHA-256 `3f612f38f81c1294e89ad2450817759bc955c242fa813fad815c54b369f41ca0`
- `.git/objects/82/a71c2389bd69deef625ee82f3f76ccbda61e44` — 5,398 bytes — SHA-256 `dee49a8318c688fda4e2f5d7978e879d801673646d3b94ed2ac458428ab77eb3`
- `.git/objects/82/d60279ed4d3339c0e4278d69d88d25b9a9df6e` — 308 bytes — SHA-256 `6a545667ef910e4d80f0aa95b3f910d0f4a7e13e059e650ecf52fc562801013f`
- `.git/objects/83/095ca4f07177844043d3b3b655b9e78fbbcc48` — 224 bytes — SHA-256 `d7f349dd614582c83da513cd325207fcc7427eedae9ef275ee66895eb828969c`
- `.git/objects/84/6be5033934cd118ac3845d53571325a6437062` — 947 bytes — SHA-256 `04a97a0abcb4d135695ebddd5c8afe7880ccbca55c6e22ca2555adea0f8a0509`
- `.git/objects/85/339e6e93e74e9ea862ec36d43cd45570850f43` — 53 bytes — SHA-256 `62a445ee8498c3b06e9f5c83754d876cb889a419687ff7646ed059b386dca70c`
- `.git/objects/86/c8df7f586375993253a04be2c630b7eef067b0` — 458 bytes — SHA-256 `a86e8fed61a9730d2f14e334959195fc951174024c55bcd33a7563de6bb36014`
- `.git/objects/86/dc2ccb6e892cab4621ee92d2b31e8edf82193b` — 707 bytes — SHA-256 `ebcc892caccfced86db3f3196a5d5573672f13d5d176266b3277c9bdaa703c5f`
- `.git/objects/86/fcba1ec71da91b17760823b8178e8a28d6bc55` — 165 bytes — SHA-256 `8925c13e46527ba1cd2012f51da8befbd6c69b1acca1769ba7626a786bb6468c`
- `.git/objects/88/69f5575fd1dd42107b219772530e3c507747c6` — 113 bytes — SHA-256 `d6e3993e3f48c7e6dcdf176c5a1cfc74df30cd3cfb1c338b478b2130391a486b`
- `.git/objects/8a/f778ce61321e48b5d42843bf8d51b04267802c` — 1,304 bytes — SHA-256 `3fd311bfac16fedc149c0729503983d68aabfa0e329bbeb352bdc85d570e5093`
- `.git/objects/8b/6a25ae14f435e2bb5135b096619ab040d73495` — 163 bytes — SHA-256 `63266204dedb16d7c3fb03532f0130523d0abb3190fc398bb405e3a3d86b7eb9`
- `.git/objects/8b/a616383dea625c51b5a0cc4e43e8b73d0f54b1` — 184 bytes — SHA-256 `d6cc2b9ce3455f9c9d7ca875cd0f7f1831dd4fdefa4eaf3703e81c1e82cf0b10`
- `.git/objects/8b/ba4048201102d5811f4217dff01606685bed54` — 821 bytes — SHA-256 `2725f320609a796a838ac67668c996c07f583795aaf8cc76ed97db31376a6855`
- `.git/objects/8d/29bd3658a930bbd6d3e6c64accfe60e2d97d2e` — 75,592 bytes — SHA-256 `d8acaa2cb565e7ed2c8c6baae23d3008227a28e65067bb7c5ebce4472a68a607`
- `.git/objects/8d/564b787fc7aa7399b6e95ccfd1771e05f0974c` — 20,913 bytes — SHA-256 `8455873ca68b69da7f04939ed3fc8c6e324924f2e4e9b59f8d192919019c7032`
- `.git/objects/8d/bd83ef42a5aba2ba07e2ac2b4a01d51e9f2ded` — 185 bytes — SHA-256 `7bd613be15633e35a85d435270d593e3aa9b858dba7b352973ecc2c4db0ed53f`
- `.git/objects/8f/d4f4103a4ea5a4bb8ce67bf4ffea289366789c` — 165 bytes — SHA-256 `a27e2f8cae913d4e87435e4fa93b67aaaf38743bbc736bb9cb0278761b2f6858`
- `.git/objects/90/907e315d0a8a9429c478921e7808862e18b535` — 423 bytes — SHA-256 `51359b444dabf0145b08b434441b08061d3b43ee5fbcf74c41ac17ac0de68bfd`
- `.git/objects/92/148169a85675c67e74e9df38fdb79f0ef69af5` — 825 bytes — SHA-256 `9ff0cd510edbcf5bcfe09560518d2596c0d6ebdbc2eaddcd50e1dd96d9b97fae`
- `.git/objects/92/3737192938f842a3b07d791c94ef6b4bfbf078` — 90,827 bytes — SHA-256 `296c334b04d67a50b34b7287e7078f05f6a488ec83e9caebe6c32ae7ff192d81`
- `.git/objects/92/ddc00d3a14406f4a1cab61ae9f23cf423c7e89` — 990 bytes — SHA-256 `574c434c11f17fb246e9dfad9ee2f24fb66aa6de4f70d38056d10449131fb2bf`
- `.git/objects/93/bbd7921ca9b3fe1e5b47e9c99968ff6ef4c313` — 5,591 bytes — SHA-256 `7e00ab0a293348356b37eac9ae80536ca810ba2a13243dddbabfd41c86af563c`
- `.git/objects/95/096e8c30571f8f72fa56da066612267bb9fe58` — 80,301 bytes — SHA-256 `be26421a851da91fcfef2544407cea07b97c39d3ec549ebb23ad8a10a1320774`
- `.git/objects/95/cefe865ef9a2c9aff3ab57a04dfc483de64c39` — 8,699 bytes — SHA-256 `1f2fd3a67d853bedb58e5ec22972b9ea38364936f8ad61b6ad0834678e0ae36a`
- `.git/objects/96/1b96c1bc9719fe1ba5bc9454a5b105f59ae9a2` — 220,213 bytes — SHA-256 `cae7a98bdc5f9afd65c30d7f0815e5259747b40cb8e086025b52e3a670184c36`
- `.git/objects/96/297484039231bf9d42d95203062adf03beaea7` — 1,177 bytes — SHA-256 `0ab1360de1f940ec71e03870f4b15cef214ab0527da3882c4e6570772aee9ac9`
- `.git/objects/97/2700ca646f6b5f93420819281e5b52a7aec7e5` — 450 bytes — SHA-256 `dc32bc073778ea8b9135573e53c59182e046979b5246e92609a3c2501571cfcf`
- `.git/objects/98/8e97358ecf8620bc87d0f531270066022256f2` — 13,792 bytes — SHA-256 `76977e283693c866ff6db3a7f75434129b89fe16fbcf29635a1ded5afd62d3da`
- `.git/objects/99/50944cf32479c9719b77d09e23fea83eb697dd` — 388 bytes — SHA-256 `3226bf1f85dc316afd70c9b56b332d6de612f38e53a6b630aa55a5948774d4a9`
- `.git/objects/99/78b5e16b4ed0d5b192e7a407e0fe5105e9bbf8` — 164 bytes — SHA-256 `8ba09e4517c5800364f7871f39c8079c100cbd0c41538273c42b5060c7680f06`
- `.git/objects/99/8a30468eb255dfe38c9cd15a88cb3fdd4970c5` — 308 bytes — SHA-256 `3769b19ac94620875fd0fd0b1ae094adfcea10a2cb24077c6b8d9ed2ebfb1615`
- `.git/objects/9a/b178fb41673e34c91f83fe72684a0a41577064` — 163 bytes — SHA-256 `f3dd207cbdcd82bccbd2b32d62124eb706e55bd0689ca2582a389e23645cfece`
- `.git/objects/9c/b151fe252892c2a730ba4f1eda4d29e0dc5932` — 132 bytes — SHA-256 `70a8b40244f660ca9c0dfa76e548e677345ffeffc2475b54ae3aa2c812c44740`
- `.git/objects/9d/892946d91f2a80fdf2fab63e51f2862760e309` — 389 bytes — SHA-256 `455a55c4a3f37968674c91004f1ccad51f90153674ea65fdfdeb7408bf010e05`
- `.git/objects/9e/5dd3adb84050841d5e30262b542fd30bed64a0` — 71 bytes — SHA-256 `a58cca7a5fa9cde42a04e9f1052a5a788a794b8edd8ec3ecff2276ad5b419414`
- `.git/objects/9f/40780cfce361812e026d0aeec8b55815b44123` — 163 bytes — SHA-256 `6cf77d63be1c24cfbbff4f992365ebf8dc0c53107951baac69b48024ddd63e6a`
- `.git/objects/a0/d14cd9a893c32a2d69d9341142248c5476a875` — 35,933 bytes — SHA-256 `d8453bbbe1fa149a9a0ddf0ca15bc6dec0547ff42f8425297b247c8bbe55cd3c`
- `.git/objects/a2/51f546a33c4a06d9548e8dc10af1795125ee79` — 389 bytes — SHA-256 `91e1aee62d35ed753dd6e7096aa6790558b1e4171bf7add10df93126187d7bdf`
- `.git/objects/a2/86b6d1c382421321769d94ec60a4029bae330a` — 165 bytes — SHA-256 `62b9737d92279928c612ad44592328cb86d7c3b653eb31bdb405ef9da27ebac2`
- `.git/objects/a2/871b680363942d89bb015fdcf1a38d8e918058` — 118 bytes — SHA-256 `6b7a69d1dc4d78a48dff63f68385ef0180feb4600cc53f7dbe552aeb35aee4f9`
- `.git/objects/a3/b334bbde0fb3ad3832b97f2edcd58285f32c69` — 307 bytes — SHA-256 `f76dd1b5d1a258b7d22e8f4a2f1a9f59b920c56ac792ffd0cf29a1fa0135d44e`
- `.git/objects/a8/61b8ae9a638a7527adc49e291aa825323a647f` — 797 bytes — SHA-256 `165a2eab1fc52ce6784f69effe7a2b3c7b5681243fc13db88a555b741df245d1`
- `.git/objects/a9/f65ccaa322707733d2a8d4e7630236417971da` — 132 bytes — SHA-256 `9ff7e06f9f97fb73dc78e369c525636089983d1cc24e77fd362d0086cf36c3c1`
- `.git/objects/aa/e69d3920d1755d908d1492eb250c160f1e354e` — 164 bytes — SHA-256 `1eb810b569d2c7afe5cf54d331d25b439bf423bf632ece9e3309f9096228246a`
- `.git/objects/ab/10b7c2855c812c082e645352177a88a67ca057` — 627 bytes — SHA-256 `de586c9c84a57e1696b91904e2266818ad587a0a8d12933a63c7c39a5ba809f4`
- `.git/objects/ab/f5195bf19edd191071419836a025d3ecb07853` — 73,001 bytes — SHA-256 `e2ffbfbddcc11c37679dd91f411668723f49df3b47d0c59d4b9bde685ea7b534`
- `.git/objects/ac/1b9d30262af1d3457df198fda4a48966e0c518` — 830 bytes — SHA-256 `0f1f18004e773aa0a8d9f4b98162cffd034016f6a8f9b38f2c3560a81c7652b4`
- `.git/objects/ac/f785193d9d617e41f4f21422b74e25cdbc2386` — 354 bytes — SHA-256 `c1f1a7c925448b4cc277258ec13659a511e6795a54f94e164000b8e4149d8799`
- `.git/objects/ad/2a726e3c9df8a5a206c5184b334caea7accd10` — 309 bytes — SHA-256 `c8f546b3c1225a4d8092f383204c0c51427331afae0bdf379c00b2b4c81c5672`
- `.git/objects/ae/34371406dcb00e8d511316a121793a65c665f5` — 389 bytes — SHA-256 `29e79ed92143e0590d101d14b4fd5adf293600c58c5441e7ba9afd8bc2d41fde`
- `.git/objects/ae/a000bdb839f8be8866a15cc6edc824e31ea881` — 590 bytes — SHA-256 `b80996d7f62a2fdee9b5194e769dc47df34a4f6945b7dca5ccd5494a2ace0e40`
- `.git/objects/af/184abe63f5aad05b61c23440bda39a72bf35f1` — 165 bytes — SHA-256 `ddc994e875e2015c6bc2d7526d30f338c4645af6d4a3508ea8517de5ab3838c3`
- `.git/objects/b0/2bbee0ca43af4d97fd580f843e6428ea083fa0` — 455 bytes — SHA-256 `8c6ea7de92e9f1f0219db43b260757d7918310960b0b59fac17eef7a73a5549a`
- `.git/objects/b0/72d05024236b477406b15ece648c32c3cb44ee` — 1,034 bytes — SHA-256 `3ac86bfac69b99e4fdb6016f324556b0996f13c593764684e47b4892e4a3e7be`
- `.git/objects/b0/afec8108b4c790beec5714db3dc57b1250d41e` — 229 bytes — SHA-256 `e6ff7e3c837e15779d7bdd96e9efb82a6c1599ef4fffcc6b5abfd2b23d034cb9`
- `.git/objects/b0/b6ce65daa09d9a03d4624c6ee37baf52f0f1ed` — 1,000 bytes — SHA-256 `5e3bb0418ef3603d063528d99d2ec4ca589d1005c6c4362f16f3c1b5e5859676`
- `.git/objects/b1/3b972c70d1211653099ddaf6c618335ce0832a` — 455 bytes — SHA-256 `227a88253ea4cd0f61aa2b9dc3b3cf4799cc609958de71e62b52e96c1475f7e5`
- `.git/objects/b2/9d90704671ac1b52d263a01084debb8ffadbd3` — 79,031 bytes — SHA-256 `11a2cb17ebb8d6952006016b9b5920bd97db2553ae09999a6c12976ff72b77b5`
- `.git/objects/b3/5859a9bbe15482267d1b3827e4db8d981d4687` — 83 bytes — SHA-256 `405515c9339af62fb0d277f0fe45fa791cfa8d883152f76a22a4679cf664f5f9`
- `.git/objects/b5/06c41aaa055b63fbb1bcda3f1776c9c34b3a76` — 628 bytes — SHA-256 `0736512e8bf39f5a3986dc4a8f333db9d06338c0dbef8915f655b2c7d1bcc37d`
- `.git/objects/b5/4aaf0c49a0905de67f957e8caedddaafd90696` — 48 bytes — SHA-256 `51de48f2d4a8cbb53ceff6faabb130c7d31bee76c7aae3def08fe1280d83a085`
- `.git/objects/b5/561fac4a3c6cb9390d21522c2bba446f542d6d` — 105,732 bytes — SHA-256 `d2c2f6f2162fccec5e7dcb685347cda584c475428d8cc2c5d7b966de9c29f43b`
- `.git/objects/b6/c8c5d822354a79bcc205150eb5a8b76734ccd5` — 456 bytes — SHA-256 `edac61e9b9835f2f3a9f13983127b69fa946bcde07d98a7272fa30f404ae49a0`
- `.git/objects/b7/2a6ff4f85343ec208dc34201029862e3f74f53` — 456 bytes — SHA-256 `e9da05f5426a4b4ba04759dd4e52549a21572db4cfeac60ad2ea1d0a9b6d92cb`
- `.git/objects/b7/87ad7722e1690f2ceb17b3797dc2c155e62f04` — 7,464 bytes — SHA-256 `bdbcbe0ce255a2ec81ec47cd262a3ec0e2a159807418e73a400fb8d01932c326`
- `.git/objects/b7/d8b9659f388508640f68140b3649a0ae0fc461` — 817 bytes — SHA-256 `c4035b2d6f4783553ef5e44a2b7f2f2fa1f40c9952692c27f333270e4fa30901`
- `.git/objects/b8/7ddb687dca547a395002e537ab84ff5a08db24` — 684 bytes — SHA-256 `abd14afa0be9b60d216db850eb79b01d8ecba4a9752fa10875aed2d809a0bc23`
- `.git/objects/b8/dbb630bafbc286b74780c61a6e34bba275a1f1` — 831 bytes — SHA-256 `1b2fc76e77a50064235abf70a17b8db1d6550b9d019c19fa163538197ba48aac`
- `.git/objects/b9/9a2509a7248a760e38cf97ac8240fff4a84c07` — 131 bytes — SHA-256 `f2fc50c185a7b9ea526629af2e3d230cb9143bf3cc446c8da19e18b56699a8fc`
- `.git/objects/b9/a8f3475ce1fa7f1ad407e309e2f0b71d5b3c10` — 54 bytes — SHA-256 `69a7a98e3aec255a2a00a19464ac42b36c1ffd003167564900bfb2d4c8ad4515`
- `.git/objects/b9/fe546a9abb062df2a7adb07dad5d389776a39b` — 1,622 bytes — SHA-256 `3bfc34d405f22b34235f89dea8b3866f1212b77b4c5dd08e474902d9dc818401`
- `.git/objects/bd/a1536ce30ad5a71c429def59479eb9ffe27599` — 84 bytes — SHA-256 `ce3c10201569f55157862d1b63b624b64cad9f3055a2b6b1f0bdefb6959fff39`
- `.git/objects/be/15a0d3fec67139678c472c9f688a53754d1f0d` — 5,970 bytes — SHA-256 `f1fd92a56299cd84cef306b2a988bbd52de82e8c957e9513c155ba456e97064a`
- `.git/objects/c0/c3013c5bb4e7812955eb144da144b512e73f36` — 122 bytes — SHA-256 `88d7c00ae98f76e4e5e9d71e840991760ab8a7af7ddd55783ef080f311b88d0a`
- `.git/objects/c1/34ac8ba2f76e321f77ebda2018d841bb2f0d30` — 184 bytes — SHA-256 `9ae30cb78f391d453f2d40a3c51a13b56c36f729cb2e813fc5e21e85cb93af11`
- `.git/objects/c1/fc4c044b6b4e52a60d15fc26985ac82e433fa7` — 166 bytes — SHA-256 `eb95b3ad3eae7e3a28e533916ae0c54afdc3ba7c3a4c227d92a4638631c1e160`
- `.git/objects/c2/8d44d9eb7cf46b05413bb8c2e999c4b5b38132` — 308 bytes — SHA-256 `ec77ffb1ce639012695bd575c9ed7ab788caecbbeebedc812a1c8689eca3a221`
- `.git/objects/c3/510b33f5dc222997fbff697f3b3107daca2da9` — 245,898 bytes — SHA-256 `de8ef4fb855f82678fde2bc2da170867bd2026ebaead362a9f6e3ccc2c89b4a8`
- `.git/objects/c6/2186dec6566c2d514c1fe50a4ad04b3d0fd55c` — 982,660 bytes — SHA-256 `e4561810eeeaa6df3c625bc7550864e102064c80a05d8003dad33fbec57c7399`
- `.git/objects/c8/748acc66b3fc6ac34237eae13bd34b23853d4a` — 8,029 bytes — SHA-256 `eec448e4cb919aa3c0ac957ff1191fff96fb510e7f9cad19bbc15dd0fe12972e`
- `.git/objects/c9/28f5b8e41191577eb23738cae90ebee52b9a1d` — 71 bytes — SHA-256 `f442106ed26e25d769877e4bf6f248ea3918c4a3e2e500cfe8c8df16d82a138f`
- `.git/objects/c9/64ddfa9606e9d6bd9031d25c001ce24b5ec861` — 3,471,281 bytes — SHA-256 `3158e884173c5413cac47c9c9485907fcb052829c4d2a2a2866199352bbd2160`
- `.git/objects/c9/a58721fcba6d3921f2925ab208b73ee377f309` — 56 bytes — SHA-256 `56a00337643b314e8f4606c6948a71fa187f98d694c9ed109edc666a89203e25`
- `.git/objects/c9/c755d5c9400bd9cd279f551f8543e968df33f4` — 877 bytes — SHA-256 `af06dfce13a8da72845d2516d909583f984cc83af95aa9c7819a72f09db8423e`
- `.git/objects/ca/14d25fd413ad057db36f21e169af3f5016eaec` — 149 bytes — SHA-256 `3b5b9f5792f9d6ad0de7e1acb44ad383e04b9bb6a17a27698dea4218f6c1ae28`
- `.git/objects/ce/4348db7530b7c62177a57ed6a2521a2a0925e5` — 165 bytes — SHA-256 `9fb7001187c8074b1c7e071a23f78b1e2938e9c3c631ac3f6fbee2fed4cfe97f`
- `.git/objects/ce/f9f53f8b5e18365567ee359eea4151558cfc61` — 147 bytes — SHA-256 `700ba8c0d586f0ee3c5d3651a953258a0954661c90c14666ded672cb5206c0ee`
- `.git/objects/d0/c74e858231c150c8fb7d11e3df0c774a617398` — 943 bytes — SHA-256 `fff3b9138b7e38f0334938b53b37c61b6a27609b3a109b5cb710854a8ef09ced`
- `.git/objects/d1/125f2c67a90eea925e0be443b4c172caaa66bf` — 1,062 bytes — SHA-256 `daa2bd436e43863c13ace53411789779a46bba04c19d1035efb65241de78f5a0`
- `.git/objects/d1/71abb2c3329ffabdecdf629d6f81f65fb33782` — 830 bytes — SHA-256 `ffe2a1f9629d98d6d89d2671762ead0b70e178f3dc2063747972ffbf5473400f`
- `.git/objects/d2/9ddffec6c122861318500f755fc20c6ab24c0d` — 602 bytes — SHA-256 `918d8ade07dc036615f71b13df2361d427e54f72f6a379d462d69048bba3af0a`
- `.git/objects/d3/48978d9c44d0d54847e9d70f69af728e37db0f` — 104,832 bytes — SHA-256 `3bb00f5d684331a1f97dad128cf1f18350f95fb4426757b9fc672089b9a69e0a`
- `.git/objects/d3/7cb0d6be623835c7589ed5efb3d0e2e6e2ef3d` — 507 bytes — SHA-256 `8976255131997daf366f6f95e7e24f685252c6f059ccaaad8ef9d8c0587dd3db`
- `.git/objects/d5/b93a1e52966e7b812b9c6a7ddd58341668f4e8` — 1,012 bytes — SHA-256 `60a1870c73f52337990181907fac9f879f399fa0280779573ce9c78d4ea93ef8`
- `.git/objects/d7/a6be9717523b0c60fb24edd0fdad9cfd541270` — 165 bytes — SHA-256 `cbe3319a01bd78871495680e9d49498bec4130fec1ec7af0d843bed161976ae0`
- `.git/objects/d9/0ac49ca96b029b452f001099b6b5c3235448bf` — 71 bytes — SHA-256 `d5a32b4862d67f17a30b1431b2909517fcfac413985a19d84beacb018b369569`
- `.git/objects/da/5e227c3dd859411e5ae0fc8f7c257d31fd9258` — 456 bytes — SHA-256 `331a7513300f0eddad6fb82261a6c105e63b4456b2598018c750047548e6f36a`
- `.git/objects/db/369aa2928bb545a1ae512bad146f83f6832acc` — 166 bytes — SHA-256 `32f75c8ec9b3b6efdc2b31a5be26d81cfecd5c306a998ff64fff1d17e6cd8d46`
- `.git/objects/db/e8f5fc0be58cb88457077b452f54a498388eaf` — 355 bytes — SHA-256 `da8790595b3d27ea14a3eacd200234caa189b8bba9d71d39c218d9504d877c54`
- `.git/objects/dc/35b2015d6daa28a4e8839d33df442146e8a4c8` — 310 bytes — SHA-256 `4b521604ad80e50fcf8a729fc2c7a71cfc2fe30a66751d47ddc095dc21545e78`
- `.git/objects/dc/d3d607a38166ab8e19968af45730cce2385c7e` — 1,012 bytes — SHA-256 `238d8be46fab5a5fe53db63ad6c1b9f00bcce6020cf8c501ba0565d81c3926b9`
- `.git/objects/dd/9f23aa96fc2735e18a929d9cc21ff118cd1692` — 164 bytes — SHA-256 `747c1eb4b34daa051b1796b5b39fbe1899613daf004bfde0fdf6a6cf6b8ac70e`
- `.git/objects/df/6fd3e5176abf548b1866341381408be3c69612` — 164 bytes — SHA-256 `a3ed178624ac2ee6e43dd34d008f5d865664fb7b0a6d10b6f1cd8fe69dd13523`
- `.git/objects/e0/1a640233baa8b618c40f36972ee49988efebfe` — 389 bytes — SHA-256 `58d755bf03a5400886ade592015495aef96a8f35584e023bf002d16e2e8a96c0`
- `.git/objects/e0/4bcb771f186e81be693ff22c36458817e014f6` — 2,263 bytes — SHA-256 `1441287efe139c0d0c9757e581f0aa05726d24976d2abf6e23eabba742c0c5a2`
- `.git/objects/e1/00c7f6a4b12ddc1b2afd63d06c8069a67a23be` — 173 bytes — SHA-256 `e36aec953bd53772bde1baa649782f8d6ce0e3b9ec4e43d03e1df002adab9160`
- `.git/objects/e1/247117ae55ef234e0f96998327b9ff84fdd043` — 71 bytes — SHA-256 `751b43f48f7e9743f07260470ca0db15e30c3e0acef87ec687ee10b882d3af60`
- `.git/objects/e1/26a0d6b8e70ebf405c3720544ffa47af04074e` — 165 bytes — SHA-256 `a0c4dd56ee6182b360879a902b1982fbec3a10bad7bcb9dcf4bde922dd7c3a84`
- `.git/objects/e2/64d194c3badd1eef2692372bc7efbe0d38cff5` — 318,548 bytes — SHA-256 `75020f433741e26827cc74bb8c5e4cba21f8f8cdf890283d3697fa130e3a96bb`
- `.git/objects/e2/87248276a8980f129eb0679b579c172e1bcf9e` — 168 bytes — SHA-256 `cb30244bede560ad6cdc87f01927a654c4538c34e96f22a5ad0b95db8564494a`
- `.git/objects/e4/233f26b62bb359a7119413d271b5e517b1cb8e` — 52 bytes — SHA-256 `0048fc9289daa6bd6d800d21f236b58306ce3b8719f53d39505af50447c8fb64`
- `.git/objects/e4/2bf91c98a2aa8cff96585fff065b58bf7b2434` — 167 bytes — SHA-256 `535f8ccd44b75f936cf7faf17c7c04fcd4419485de576b8a413ef3722cc13002`
- `.git/objects/e4/e8d4d02626a0d6f4143e57a55d33b74b460e6a` — 1,805 bytes — SHA-256 `c257a1c516c5467d48f32cef1ee566f4dfeef34b1c20c52896f0ad9f12d70a31`
- `.git/objects/e5/14c8ce249a84f851f1757921012aa472d8cc3a` — 1,145 bytes — SHA-256 `20d69095332ba82695f1e809fafaf1ff9a0614882d4c96847180b8fff6a2f194`
- `.git/objects/e6/614a2a0c8725aa59f2c9f8e92c66e5ca513f16` — 454 bytes — SHA-256 `c0804f3b4fd8a530a92548122113859e5375d2275088d1632f7c05695541d8d9`
- `.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391` — 15 bytes — SHA-256 `164c5fa8067facf1a43f09ce3d0e35ebf53a7f5723ecbf15a8667cfc53c26f6c`
- `.git/objects/e6/e3b75321014973383fe844ccb5170d4fa3bfff` — 1,054 bytes — SHA-256 `90779b34daa99ae4a1ed3b9707deb43583ccbf658efe7682b1ef47a6a8759a7a`
- `.git/objects/e7/e7b1be680757ece6e4ae3e8cdaf88df0256625` — 456 bytes — SHA-256 `5b26970a0e430576cd17426c3efa3625a2b4771791982f02b636e5414eec9574`
- `.git/objects/e8/8846818b14b81ca74b4adf72a70ba8bc85ba2d` — 165 bytes — SHA-256 `95fd9d916fe8311020759b670cce61f7b4f9552d2657c8d0b8b29e9e65942552`
- `.git/objects/e8/b9a5158539cf5bc64e84b49636a8a40f6e3e2c` — 5,754 bytes — SHA-256 `88296d26e673a075c17955f3b48ab1104f80ebb8de1a414d9c69cdec8f84aab8`
- `.git/objects/e9/ebc3012f4c4e18e2d962a43490a9d72775ac9b` — 456 bytes — SHA-256 `3bf909f703e45c2bb94e8f1311b1630179bb102f7e8b07ba32fe486986918aa8`
- `.git/objects/ea/60fb2bf4b865155293c3bc407b665183db8157` — 51 bytes — SHA-256 `080aceb60cd479841912eaf658474e7e59d4006a975ee1f61d0c3d4b00d0d7b0`
- `.git/objects/eb/56cf6cb36b9054e12602f7be19a4377fff8338` — 54 bytes — SHA-256 `b3ca317f2c212eb8f023deac2a32d594bdddd315aa20a4aa6019836f98618fe3`
- `.git/objects/eb/ca071aec662a71b2f0550e841a223a7b05604b` — 455 bytes — SHA-256 `50ca9c5189524b34195160adc1f74ce0a64eb65c124ad13329c44a648210a294`
- `.git/objects/ec/183ed99061461636906c8e2fe0797d7d9654ec` — 3,240 bytes — SHA-256 `0f3e0f029e7a0cdaa8f1ef9ba42e9c53b8f531533f678692379636bda0cd246b`
- `.git/objects/ed/57f50694862fcd2c85e2c2b75a4178113c64c9` — 683 bytes — SHA-256 `884df9b77ad844f82c0f36614865368556e91e4b43a4442327c3664ac3f7ca21`
- `.git/objects/f2/2c3f739a1b7a44a962ccdf33d9b841ff3d9d63` — 684 bytes — SHA-256 `1120a04e10677361cd8f43c2f66f1fd3fded2c87ff62cf5e373cac7c9c1c16ea`
- `.git/objects/f2/d6e76de812b6b2e4a503091cb8a21fe23e9c4d` — 165 bytes — SHA-256 `08fdc8a33a06d306541d975e7d68b039427e29a3536a7e9198fb29c9535c9304`
- `.git/objects/f2/f1b92241ba904f5b75a6be340afd42cb2068ed` — 1,138 bytes — SHA-256 `886c47ab153dc7f84f4891e59021fae5bb8b8b6f7ff8c52d9943ac57fa3aa088`
- `.git/objects/f4/3000d197751decb604a5e920ef0892a2ca97eb` — 1,581,109 bytes — SHA-256 `8337ba9f6db767cd79635d77cd79c5a6db07001938af4ec83fda065d785e403c`
- `.git/objects/f4/30c15bcfb7524fb7a13deec370aad344bd4fb7` — 169 bytes — SHA-256 `d9c1e469a1c744f450d204ac339b224893e7ae5a677e9d487067f4b01f240ed3`
- `.git/objects/f4/f5818c4171eb391096181b1f68aea3d78ac303` — 4,196 bytes — SHA-256 `dc12030530c692b632f246538454a9ad5967ae5dd509cdd6515686dc4a6275a9`
- `.git/objects/f6/5c01189d69145699f8015ce4b0733b6ef85950` — 880 bytes — SHA-256 `72a424809cb91a966baabdeddbe2364aaff6288b5dcfe4e2781e5dc2a28924dd`
- `.git/objects/f7/1df6abe4283f4581c2a42dec035d0faf5b9c61` — 5,450 bytes — SHA-256 `99b935cff766f6b7609cd4c8a3d8049e95310689ba1d07a8dc7390e5e3fa04e2`
- `.git/objects/f7/334ba3a935a17dabb53c20157ea253b3ac6ee6` — 165 bytes — SHA-256 `dfa2d1f0639fad1cbd8efef822b755eeac4190dcac2be41986b4260490c613b4`
- `.git/objects/f7/9eea7e8d40bb731408cbaa5000127198fd2982` — 166 bytes — SHA-256 `c900275ea239e490f0d57a691a71a85774b62ef86549320df403737739f6f0f9`
- `.git/objects/f7/dd0ed05ba0f9e0c8f0efba60b48e524a6d9fda` — 150 bytes — SHA-256 `478f2bdd9bd094a02c8baced32c2d3eae2396453e89acfc0de761e9eae9ca5c9`
- `.git/objects/f8/92f5aaa22ef6208a855aef34f2b54a9a014271` — 167 bytes — SHA-256 `c32cbbc9020c5483b1f30cce4f8bd3f1575242afa680b19e341681f5bed394b4`
- `.git/objects/f8/9c70fc62eadfa0afe1e207c8bf2cdfbe31ca53` — 422 bytes — SHA-256 `88b1de2f869b7454dd02ec3ef4981edda9d6952a8838a6aa961ca37181d85302`
- `.git/objects/f9/a9b1234891ad45008f0da36d988de413c71730` — 831 bytes — SHA-256 `fbf058c5e01e5615b60ea12b915ba57744bcb2ba9ba5d9f2f8669e7c176a45a0`
- `.git/objects/fa/3142b4f9a932111f29b62b2eea4bccfb0f8fdd` — 5,170 bytes — SHA-256 `a87217322b67103bab669c11f88a373702a9397642b758dece011a53b7adcc8f`
- `.git/objects/fa/5de616d9c9616515bfaab41c0b857b1dcb0df2` — 269 bytes — SHA-256 `ea5233443ff66d717019dcff9b34f06b59196b3684546b23fcf4eaf1c855ea91`
- `.git/objects/fa/6ea01267ac6a4de4d72de9728317a6390bf77a` — 56 bytes — SHA-256 `083d072218f9a1c27eeb50984b0c2353b5c7168975e3b2a7dfa2e0ec02a251c6`
- `.git/objects/fa/8fe559ec62edde2f82985f63743d3fcfab3c11` — 77,017 bytes — SHA-256 `0a51973b2583fbe35df5639d55275e0f25e296d3c5a236f07034ad5fa267303f`
- `.git/objects/fb/ecac5a9ecfc86dbdfefda81842ffe49b358a85` — 609 bytes — SHA-256 `4873e723a4b55bd56c136b17c4bbe01dd9f683fd738e97a042b2a42ad5a7ac5c`
- `.git/objects/fc/1a90085d93d98fa60affa774eef9195564d4f6` — 70 bytes — SHA-256 `0047537560b0949aa53457cf5627d7d984337f8a1d490adc92d5e738dc4b9aeb`
- `.git/objects/fd/147edc5ce65f2127e2c831272245110ba27b7e` — 388 bytes — SHA-256 `cea95205b1589c05422b95f385e84fbfbd72ba8eb9c6841c9516c6d059c2091a`
- `.git/objects/fd/7c54ff15f350c10c11d2b8137cae28efca62d3` — 162 bytes — SHA-256 `c32e90929e29e77afbc95da5715194d7c4977eeac068b74a3f6ddab67f1f4705`
- `.git/objects/fd/a79fe4f0b3e9e9a9153c7d244a7dbe3f78c5e0` — 122 bytes — SHA-256 `ff95684aa5660bc2455cea1aa4ae80a9f7a6ab02a582282b844328a46f147d80`
- `.git/objects/ff/3146989ede405f3a4b9458f485c1970991fecb` — 829 bytes — SHA-256 `7f8d148ca6279f1ba877120f925b903e96bd85c0acce9740bea4b11f0cbac7b6`
- `.git/objects/ff/38797380e86c466badcfbbf814c7d4772257fa` — 83 bytes — SHA-256 `65713db6b4c3c021a5d028923b114ee6718be47fa360ae2ff30249f8e5d08768`
- `.git/objects/ff/64c9295c5f5f3e0812b6b34725887e0b0eb4b1` — 71 bytes — SHA-256 `24c83375299e58563a83d3f4d6fccb26382e1acde84dc656e1bc0946b0fd2095`

## 7. Full ZIP Manifest

Every archive entry is listed below. This section ensures the Markdown accounts for the complete ZIP contents.

- **DIR** `My site/` — 0 bytes
- **DIR** `My site/.git/` — 0 bytes
- **TEXT** `My site/.git/COMMIT_EDITMSG` — 10 bytes — `2ad47a2e3712a9547ba8ac3156f0cb10ea317f009157ce626cc617c4a74f8ea1`
- **TEXT** `My site/.git/config` — 332 bytes — `cc2a4b63126c50d41c97437eb4053a813ea1816074368cadc6ae1bfb9e8b9233`
- **DIR** `My site/.git/cursor/` — 0 bytes
- **DIR** `My site/.git/cursor/crepe/` — 0 bytes
- **DIR** `My site/.git/cursor/crepe/df6fd3e5176abf548b1866341381408be3c69612/` — 0 bytes
- **BINARY** `My site/.git/cursor/crepe/df6fd3e5176abf548b1866341381408be3c69612/index.bin` — 57,092 bytes — `b89b96dcd670e582d3955cc1e5ea06ca480e97d1a92a960c48d8360445a575e5`
- **TEXT** `My site/.git/cursor/crepe/df6fd3e5176abf548b1866341381408be3c69612/metadata.json` — 31 bytes — `2333eb633804b441dd54fa525e4727df411f1c1b29e62f528f416fb61946d8c4`
- **BINARY** `My site/.git/cursor/crepe/df6fd3e5176abf548b1866341381408be3c69612/postings.bin` — 23,621 bytes — `b78d2ca3b3c8c357fb654c2fa30506a42d275241ae162002e3a68b22fc3a5662`
- **TEXT** `My site/.git/description` — 73 bytes — `85ab6c163d43a17ea9cf7788308bca1466f1b0a8d1cc92e26e9bf63da4062aee`
- **TEXT** `My site/.git/FETCH_HEAD` — 96 bytes — `c1bd54c66d609ffbffbb5b6e62eec066d3dd9196f80a78ca295549ed849fec37`
- **TEXT** `My site/.git/HEAD` — 21 bytes — `28d25bf82af4c0e2b72f50959b2beb859e3e60b9630a5e8c603dad4ddb2b6e80`
- **DIR** `My site/.git/hooks/` — 0 bytes
- **TEXT** `My site/.git/hooks/applypatch-msg.sample` — 478 bytes — `0223497a0b8b033aa58a3a521b8629869386cf7ab0e2f101963d328aa62193f7`
- **TEXT** `My site/.git/hooks/commit-msg.sample` — 896 bytes — `1f74d5e9292979b573ebd59741d46cb93ff391acdd083d340b94370753d92437`
- **TEXT** `My site/.git/hooks/fsmonitor-watchman.sample` — 4,726 bytes — `e0549964e93897b519bd8e333c037e51fff0f88ba13e086a331592bf801fa1d0`
- **TEXT** `My site/.git/hooks/post-update.sample` — 189 bytes — `81765af2daef323061dcbc5e61fc16481cb74b3bac9ad8a174b186523586f6c5`
- **TEXT** `My site/.git/hooks/pre-applypatch.sample` — 424 bytes — `e15c5b469ea3e0a695bea6f2c82bcf8e62821074939ddd85b77e0007ff165475`
- **TEXT** `My site/.git/hooks/pre-commit.sample` — 1,649 bytes — `57185b7b9f05239d7ab52db045f5b89eb31348d7b2177eab214f5eb872e1971b`
- **TEXT** `My site/.git/hooks/pre-merge-commit.sample` — 416 bytes — `d3825a70337940ebbd0a5c072984e13245920cdf8898bd225c8d27a6dfc9cb53`
- **TEXT** `My site/.git/hooks/pre-push.sample` — 1,374 bytes — `ecce9c7e04d3f5dd9d8ada81753dd1d549a9634b26770042b58dda00217d086a`
- **TEXT** `My site/.git/hooks/pre-rebase.sample` — 4,898 bytes — `4febce867790052338076f4e66cc47efb14879d18097d1d61c8261859eaaa7b3`
- **TEXT** `My site/.git/hooks/pre-receive.sample` — 544 bytes — `a4c3d2b9c7bb3fd8d1441c31bd4ee71a595d66b44fcf49ddb310252320169989`
- **TEXT** `My site/.git/hooks/prepare-commit-msg.sample` — 1,492 bytes — `e9ddcaa4189fddd25ed97fc8c789eca7b6ca16390b2392ae3276f0c8e1aa4619`
- **TEXT** `My site/.git/hooks/push-to-checkout.sample` — 2,783 bytes — `a53d0741798b287c6dd7afa64aee473f305e65d3f49463bb9d7408ec3b12bf5f`
- **TEXT** `My site/.git/hooks/sendemail-validate.sample` — 2,308 bytes — `44ebfc923dc5466bc009602f0ecf067b9c65459abfe8868ddc49b78e6ced7a92`
- **TEXT** `My site/.git/hooks/update.sample` — 3,650 bytes — `8d5f2fa83e103cf08b57eaa67521df9194f45cbdbcb37da52ad586097a14d106`
- **BINARY** `My site/.git/index` — 2,763 bytes — `c6e17ca46a1c7f1e841743b7e21eb865f64f628be4ecdc53615bc5d2e051619c`
- **DIR** `My site/.git/info/` — 0 bytes
- **TEXT** `My site/.git/info/exclude` — 240 bytes — `6671fe83b7a07c8932ee89164d1f2793b2318058eb8b98dc5c06ee0a5a3b0ec1`
- **DIR** `My site/.git/logs/` — 0 bytes
- **TEXT** `My site/.git/logs/HEAD` — 8,353 bytes — `1e8f475e0ffaa51db804ddaa4f323d4279ebe4dece4d2d2546bacd7caa4901c4`
- **DIR** `My site/.git/logs/refs/` — 0 bytes
- **DIR** `My site/.git/logs/refs/heads/` — 0 bytes
- **TEXT** `My site/.git/logs/refs/heads/main` — 7,230 bytes — `bf88878a250cdae0b4259764213cb31f5e92bb241e4a21edab3f48d6ca75f5eb`
- **DIR** `My site/.git/logs/refs/remotes/` — 0 bytes
- **DIR** `My site/.git/logs/refs/remotes/origin/` — 0 bytes
- **TEXT** `My site/.git/logs/refs/remotes/origin/HEAD` — 151 bytes — `71790ddeba4f69d6f42d1d748b8b64fc90fba6abf701f5fd629aab6bcaa8a93e`
- **TEXT** `My site/.git/logs/refs/remotes/origin/main` — 6,313 bytes — `33f8982d97094ab8b79683388fb2b316d623e7c1459dc121d111a5c6e0dea8c5`
- **DIR** `My site/.git/objects/` — 0 bytes
- **DIR** `My site/.git/objects/02/` — 0 bytes
- **BINARY** `My site/.git/objects/02/d1c84143591424b73f1df866f049214c340eed` — 8,715 bytes — `26b4daf27a39e836b0933a4aba3d71bf22c1f7f8139ecdb9a7c45fd4391308c0`
- **BINARY** `My site/.git/objects/02/ea9a9bada9eb2e49ab9f6ff4edf3c859592cee` — 162 bytes — `46115634ac84bf831ef03c4d78e66fe5c6ba3d2ac3b7d20402a0150c177e6545`
- **DIR** `My site/.git/objects/03/` — 0 bytes
- **BINARY** `My site/.git/objects/03/468f2bb1b2bed099c0e621feb9c49d4afc8d35` — 184 bytes — `b028408909e2799dfce3ac0b0ed60e147bbb7bf6f3032ca9b7ba122bc5591b3e`
- **BINARY** `My site/.git/objects/03/8186d7b0672b545b3cbc880c2abe201a679a11` — 175 bytes — `05114f6204a8d72a54436baefd7fdd2db80e566f1a7be1587fc916a653d97777`
- **DIR** `My site/.git/objects/04/` — 0 bytes
- **BINARY** `My site/.git/objects/04/69f0b12397aadaa3c7e4b1eca0e0b566baa136` — 858 bytes — `4c15f889b308cfd26915e2caaa485c52f4221c99ae607fe65a42c1fc4db346f3`
- **DIR** `My site/.git/objects/05/` — 0 bytes
- **BINARY** `My site/.git/objects/05/29db17caf108777c51b1cd12ab9d14daf724d9` — 5,450 bytes — `56c1d463f808028e6c974d24bcdc6156254c1fa932c0a1d25aea6784c17e1a6f`
- **BINARY** `My site/.git/objects/05/af20720e304c520633546259e8941c58853923` — 277 bytes — `15a53dd456c39b6bef0f01b128d6fd090a3bd650cc1427bb098479fce7ba4ff1`
- **BINARY** `My site/.git/objects/05/fb18174617191f7779aae0b7f2a16c3fcfb948` — 5,649 bytes — `18a32b7ad18631f1fe5cfc19632834cfdb8748ac7dbce977e401ffb153ec0190`
- **DIR** `My site/.git/objects/06/` — 0 bytes
- **BINARY** `My site/.git/objects/06/17c7cffa42e5962d0c4cd1dd95cac251ad2ba3` — 614 bytes — `63ff1853f03181517b04e601460e42f15c8a6c05d68fdc396563386345934899`
- **BINARY** `My site/.git/objects/06/1d469695c753f5012c3b948895a305f43c8fe0` — 5,600 bytes — `d07fb7402e7a3212967fc415fdacbf133642c3bf47b105590b2775ac5cbca521`
- **DIR** `My site/.git/objects/07/` — 0 bytes
- **BINARY** `My site/.git/objects/07/00be69e89dc7840f744d7156dedeffce33dec8` — 829 bytes — `5e2ead156d8821f152b1557be0bdd5562992c2a560b42372f3b564852a3c1662`
- **DIR** `My site/.git/objects/08/` — 0 bytes
- **BINARY** `My site/.git/objects/08/03dc8ae759aa19fc1f9e8a578de02cb1ab1cae` — 169 bytes — `93d4385b9b215560036b1448b9756263855366e374f5b557973f511bbcf6a47d`
- **BINARY** `My site/.git/objects/08/d68f9d0a3712152e9eea8ef961566892409ddf` — 686 bytes — `2fa9b59b2fa677ab658bccdb5b4d01784bf3f6e46d71da2cb23b4e9017e8628e`
- **DIR** `My site/.git/objects/09/` — 0 bytes
- **BINARY** `My site/.git/objects/09/106d973bf366d63a9c705c665b5496557ff839` — 113 bytes — `da5ab9f5948428f58e6933afc1c9e3d6f23dd982e656abb2177f5af65e36f0fd`
- **DIR** `My site/.git/objects/0a/` — 0 bytes
- **BINARY** `My site/.git/objects/0a/cd027195c1d03e0d90b6ed8744ecdecfdfab2a` — 175 bytes — `55447ccd0849dd6b41b2ebe12246be3b55b92236f12f0d9c4c31a2d19dd4f2a8`
- **DIR** `My site/.git/objects/0b/` — 0 bytes
- **BINARY** `My site/.git/objects/0b/57345860c8a5b3b940538919940d7f72798acd` — 225 bytes — `0d0f24aabace77c4286ef89ef70ad90c02913102265beb18e33e87a5d7bc3f88`
- **BINARY** `My site/.git/objects/0b/f401977703d3fb28dfde50ca495e6f6d0cb714` — 832 bytes — `3aa0cf77e285db8e468e83107203fb672b0a56264c820850039b9d1feb45e092`
- **DIR** `My site/.git/objects/0e/` — 0 bytes
- **BINARY** `My site/.git/objects/0e/632825d2edcc89fed7cbd9ff0a7be27613f4e4` — 166 bytes — `59868591d4998550c27a58ffb58e7fa2ff0a2ffd3e1be837cc274afa13243d5a`
- **BINARY** `My site/.git/objects/0e/a98722d9c157c9ffca3da482b2e372009b298d` — 131 bytes — `5acbb5c2d65dc3b8e90bc26f05ebc2bb2fa79d37f5aec9b99c4eda62b8618d80`
- **DIR** `My site/.git/objects/0f/` — 0 bytes
- **BINARY** `My site/.git/objects/0f/a30c6c512ef61ded0b10e7e840c3988956a0e0` — 166 bytes — `3e93b5d4bf03868ab3eec96b2b07153b38ea3d98cbbe85dccc314e5fdce2a0c1`
- **BINARY** `My site/.git/objects/0f/c3b4710a35bbb67dab6a684b6023e7ccd06ae5` — 168 bytes — `80ec67474d3760f870db460952fd6dc55b7dcbd80bf579306a5a46939371534a`
- **DIR** `My site/.git/objects/10/` — 0 bytes
- **BINARY** `My site/.git/objects/10/2714214ac847b4272b2015e3029d644ca0dd82` — 1,392 bytes — `23c57b98ab075a4db4769818f0eb683f394a3aa12566f3f72a6ce62a69e5943c`
- **BINARY** `My site/.git/objects/10/33f1be7bd6d11e380c2e379749f4e81a0130ab` — 829 bytes — `87a7159599f562d38fcacf2f609dfcfa155d0b7776b9e1b6d998ce8085e654b2`
- **DIR** `My site/.git/objects/11/` — 0 bytes
- **BINARY** `My site/.git/objects/11/28ecbe140d466316b064dfb5cb68b67adc893d` — 1,174 bytes — `f6112559537996c201b42ef3d57823604b0725c824f9619597a7daf5b7423115`
- **DIR** `My site/.git/objects/13/` — 0 bytes
- **BINARY** `My site/.git/objects/13/9c411b0af2b39d73adeb9b0869350823c7b73f` — 1,185 bytes — `7eb96b6589a7ed1141a54d1e1d43679598368a058ce05d08aaf9c57acb109c1f`
- **DIR** `My site/.git/objects/14/` — 0 bytes
- **BINARY** `My site/.git/objects/14/1c82bebb8a7b730adcb301fe3779d4aee5f233` — 3,450,295 bytes — `675db7a1e0ac7d763b39395320b32e6e2ae3d2ccf896e46eca3b04cfe1d89ba0`
- **DIR** `My site/.git/objects/18/` — 0 bytes
- **BINARY** `My site/.git/objects/18/7750bf32bc9f2c1886e1abfe2ae3825b132034` — 1,055 bytes — `aab9e0bdfcc6501f5efd098f7876267915257a7f0964affe180e98630e182f27`
- **DIR** `My site/.git/objects/19/` — 0 bytes
- **BINARY** `My site/.git/objects/19/05e8613b73a849e5f4a2d4cb47e0818e273b1d` — 5,532 bytes — `11a7517f752dbc55f2ed403ea9fda91a1b74aeaf167cc27c63d97ca2683ddf5d`
- **BINARY** `My site/.git/objects/19/06f858cbe8c99d5b5c7c99567abd753b0ba68a` — 83 bytes — `acb21b94ee76e592b09ca821e62eca35b25ba6dd1cd486e84e064901275ebb1c`
- **BINARY** `My site/.git/objects/19/53ecab58d04156254cf801e0a8d3f5c0ece4ea` — 122 bytes — `60d17980fccb407940f5f9f6399bd941ecc09667c47b75774b0793670e6f901a`
- **BINARY** `My site/.git/objects/19/fa45efb4be2182a48fb05c2f4714898016b63d` — 1,112 bytes — `cdcec3f70d9309a18e3f7493744db80f759d4e49a9d043367691423d1f36a48e`
- **DIR** `My site/.git/objects/1a/` — 0 bytes
- **BINARY** `My site/.git/objects/1a/22c426906ccc74319d09405b9d9e5d92c1e7e5` — 8,028 bytes — `462146dcc172369f050ebed9701699cfe35dc5f4bdca2a3224c29c25a4308c66`
- **BINARY** `My site/.git/objects/1a/3af1c633860f4c4202d163334f3fe902f8fef7` — 830 bytes — `f997c6220ffc98e9f1b79fe1ae32f21b8e06adde47122390d71e90d594d15d8f`
- **DIR** `My site/.git/objects/1d/` — 0 bytes
- **BINARY** `My site/.git/objects/1d/1a06947d6e5ac85394681bb406b39b8ea70384` — 5,445 bytes — `53ce18ee0af1ff8509d456d535220c1de99239b8e71f98ec9ec8f2a8723831bb`
- **DIR** `My site/.git/objects/1e/` — 0 bytes
- **BINARY** `My site/.git/objects/1e/21f27e23350c79cf998401412f32c2237f44e6` — 937 bytes — `e88f0943f2e0a2c0633d806c791fb8e8bf1ddb2c46feef547e269118b89bc224`
- **BINARY** `My site/.git/objects/1e/94b1b7ae381fd60b427cf918035e945ee22cb9` — 184 bytes — `1e33a544c06e60f9288e73ecffb1c9ccefe001760a270f068a2f04fe909a6dfc`
- **DIR** `My site/.git/objects/1f/` — 0 bytes
- **BINARY** `My site/.git/objects/1f/4af8cbf4c52187199840beec45700297a3d745` — 56 bytes — `72b981db5635936fdf1e42e9a658dd3f7b44a51135e45fe16112faeb2f426f26`
- **DIR** `My site/.git/objects/21/` — 0 bytes
- **BINARY** `My site/.git/objects/21/8952378f197d8eff887b09c2b517fa502a56c5` — 1,168 bytes — `0220ef7252651e254384af3501b3646639827b3e494deba3535158004bdd5953`
- **DIR** `My site/.git/objects/26/` — 0 bytes
- **BINARY** `My site/.git/objects/26/39c91ab5147c3017dadac6f2390ad9d8443062` — 389 bytes — `dc87923f48101420ce389e2bb2e4c5396d7e6e825980f63b38e6d345f2b6c83a`
- **BINARY** `My site/.git/objects/26/75e0b845782fc38b599fbceb7ef9e08b8d216a` — 5,172 bytes — `dd9c79365df4c0a214566f27ee8c2827034f000c27c09c251b4e6ecbdacd9a17`
- **DIR** `My site/.git/objects/27/` — 0 bytes
- **BINARY** `My site/.git/objects/27/8692921556abdd1a226e7446fb712f68a65840` — 1,188 bytes — `245e6b1e89431247b47330ad664fa1737a5cb7aaf354d05f57bc08ec762c8362`
- **DIR** `My site/.git/objects/28/` — 0 bytes
- **BINARY** `My site/.git/objects/28/7ba75e6d573f93e286ef07c50e5f3549ac4e32` — 2,008 bytes — `92370b229ab5e3a6394c50dcc89b41d7183b5f0012a09cb2208b55c34e8f39a6`
- **BINARY** `My site/.git/objects/28/f01b1e5bd18d6776e105165ef722316a5a01e8` — 165 bytes — `1e4c4c7a01d72e8712efff3f2d48d65f39742c1f5f920067cedf65f8723c8e33`
- **DIR** `My site/.git/objects/29/` — 0 bytes
- **BINARY** `My site/.git/objects/29/034a71296227b36f2ac776072fd44d4c029c42` — 5,419 bytes — `bd66d1d3b07d56399f7bc9f280cb0a763743928231c9a3e9f4c28959e63c61c2`
- **BINARY** `My site/.git/objects/29/9504c511fbf4cde6569f07a758bee9f2ffcf1e` — 554 bytes — `e55fe845be1155667fbe6491607d6e3c4846ceccc5424146c1f4d761c4807552`
- **DIR** `My site/.git/objects/2a/` — 0 bytes
- **BINARY** `My site/.git/objects/2a/79b36a562044bbd7e651a353a84b54e80081e7` — 53 bytes — `2ae11750d5ff4e7598735e142f0a659f0dcb3ba3001658aba057b23a791ba2f2`
- **BINARY** `My site/.git/objects/2a/c5b11103cae3be38fe6809ef3715a4042872e3` — 165 bytes — `835e3c45bfcdbf940be380fb0c3d0f5c15152277e9e4e7b376994f3394781717`
- **BINARY** `My site/.git/objects/2a/f9c975e4295d677a07533c549604e25cde4eb6` — 53 bytes — `2ff2aaf649ea02f0e284962aa1eb9b216d8352811b77b419e654b5d0cd67667b`
- **DIR** `My site/.git/objects/2b/` — 0 bytes
- **BINARY** `My site/.git/objects/2b/cac505b2b6a4db50475e286ef1caea83725f7e` — 165 bytes — `1ad5baa98d11564444a89d5ab583ca13d92ce1cf3bcab33e75108df5df69ac24`
- **DIR** `My site/.git/objects/2c/` — 0 bytes
- **BINARY** `My site/.git/objects/2c/ac39a66f0ce3c9783f2e29a8a70faf8535c793` — 1,358 bytes — `3e558ac652ce7293433691d37cf1f3257d148580ca3361f38d07fd594143a1e1`
- **DIR** `My site/.git/objects/2d/` — 0 bytes
- **BINARY** `My site/.git/objects/2d/a43c73f2f753cf4dfbdc2ba40204e421e25b18` — 308 bytes — `a9d08b6f2c472315ac6611c7024d95db6e56d7f3cdfb07479613e79e70d2ce9c`
- **DIR** `My site/.git/objects/2e/` — 0 bytes
- **BINARY** `My site/.git/objects/2e/4147e9c2579164050695654628e7a32f231830` — 174 bytes — `f49d0501d13ae02eeba7a06e3707f9ae867ec831e407836707d552afaa3e7eb5`
- **BINARY** `My site/.git/objects/2e/b5f309415f061c5378c47867efe73b215876b4` — 165 bytes — `6a50fac071361a27f25211de9615babd1c7e349cd38fc0ab610e008e604e89e7`
- **DIR** `My site/.git/objects/30/` — 0 bytes
- **BINARY** `My site/.git/objects/30/394aeff2f76dca9e9560aecbb8c68baa9f2efb` — 65 bytes — `da3357d8275a163813785a886103e07c0e1338944eb562a66aad10c5a67f5070`
- **BINARY** `My site/.git/objects/30/6c3e25eb8fb1f6c547e71ef6bfa2a02b79fd52` — 244,243 bytes — `9617fdaa8f11686b24ec85057b58ef463778d53a41f6514749e52a33ddd53687`
- **DIR** `My site/.git/objects/31/` — 0 bytes
- **BINARY** `My site/.git/objects/31/5e2e9fb33d06599eabcf9ed08ba9c796f84dcc` — 792 bytes — `17d42a2a8e37e29c454558a12f43b090aef83625847cda6acaa6002108b1920c`
- **BINARY** `My site/.git/objects/31/a2af2b18fc5138996b1d462e4fca363b25efbc` — 1,182 bytes — `8146bd765779668c6209c623935b1a82cdac6a19cfa7703e47ab8293da43c4cd`
- **BINARY** `My site/.git/objects/31/dd6eba1dad3e8b10ee5144e9178bf59ce3134c` — 423 bytes — `54472a5166cef9795729dda489a339cb3ec4614fca8accfe365add3cba935fd2`
- **DIR** `My site/.git/objects/32/` — 0 bytes
- **BINARY** `My site/.git/objects/32/8f257ee8872c6bd98c415a04b9d963b125ca40` — 170 bytes — `40d3061b9184d7f9222be2cf1a97705b21ff827f3ce337f681cd325cad68c179`
- **DIR** `My site/.git/objects/33/` — 0 bytes
- **BINARY** `My site/.git/objects/33/fe52bcfeb5709358af93d5795f65579cae61e8` — 471 bytes — `0d72b012bc0e3150c745370e141430ad70fa250c023f35e5d38f7704ab0a2a52`
- **DIR** `My site/.git/objects/34/` — 0 bytes
- **BINARY** `My site/.git/objects/34/40033cd7136332e6ff75aae5dccb655488cef8` — 832 bytes — `69d4896b09391134f04ea910f6313f092849131f40e47e685caa6dac999cd195`
- **DIR** `My site/.git/objects/37/` — 0 bytes
- **BINARY** `My site/.git/objects/37/1c0576d99e99c8ab2ef168dd06785e5891bf8a` — 165 bytes — `72cbc07a8ed5576b2f552ccc0dbb2e77a90b274cf3d58f3663359d3439444312`
- **BINARY** `My site/.git/objects/37/2612d898d4e0651bfad12030aba50ac4a6ade6` — 5,660 bytes — `940a05ade96dc53ab8df34293f14063eb0791f0fdc41e5c63f1e4fac33665dda`
- **BINARY** `My site/.git/objects/37/27dd44e56a73b0410fbaf98ec375357bbf50d4` — 875 bytes — `9a7dd8be7d7e31078ee4e5ed14b9d84845b5092bd90c09ea7cf37d3335b74923`
- **DIR** `My site/.git/objects/38/` — 0 bytes
- **BINARY** `My site/.git/objects/38/71e4d2b236306a20413eba9b2b1ef91f03bae0` — 55 bytes — `ab6cfab47ea0cf05c3798a3354712fb521a6ec4d976fb49ef6185ea4d1afa7a2`
- **BINARY** `My site/.git/objects/38/ee59f2af3302c7579dcc070e606e8b37da82ae` — 583 bytes — `ed79f57c575452a2ad52184a08683c30f69d49833e964b5fc9930792b74dfa49`
- **DIR** `My site/.git/objects/39/` — 0 bytes
- **BINARY** `My site/.git/objects/39/0f065f1b27a814452598e99a2a72ef48856fb6` — 852 bytes — `8be204921c999f91fc81643af141aef8d2e0913b2fc45ea4dc6e4407066ceced`
- **BINARY** `My site/.git/objects/39/6a59e1947e2a150bcc46bd3e326299727c1367` — 250,231 bytes — `8c9b4cdeaf6b85be7388dd449443ed1abd30670f89bd60ddc820f99851597109`
- **DIR** `My site/.git/objects/3a/` — 0 bytes
- **BINARY** `My site/.git/objects/3a/1792127054f6720c7b506591d04be97d79b35c` — 80,076 bytes — `2fd6a88eff736545ca3145c5bcb6d4d52fff6ef6b2a5828f73e22ef36f7b34e0`
- **DIR** `My site/.git/objects/3b/` — 0 bytes
- **BINARY** `My site/.git/objects/3b/76a14acb18ca178109dcde5f2b44947ac1d3f2` — 198,863 bytes — `5a72e541de2395b74d00c1e6f74415050cef3faf3a6a3f8d5de623b0f4ed9639`
- **BINARY** `My site/.git/objects/3b/acfcbfe27260da16c4824ee32496ab70e0147e` — 168 bytes — `b329ee99d4769bb36ac653dc7952ecbe52ab1ded1ee3e83ca6af27e2ac9e24c0`
- **BINARY** `My site/.git/objects/3b/f99a80caab6a1c59b822a3187e05703e2b943c` — 5,169 bytes — `b9ca55d830be7af69a78a6081518a08530055ea2a3265595162762d78c27ebbc`
- **BINARY** `My site/.git/objects/3b/ff2b8cd6a7952b2fdfbf3a31f99e394c538356` — 2,315,161 bytes — `f2cf1b7cfdfa393ee641134da5e6463d108a26bf563e2fee0864ab2bdba1b8b0`
- **DIR** `My site/.git/objects/3c/` — 0 bytes
- **BINARY** `My site/.git/objects/3c/797ed305f9b14a93a62607d5e6d5acb59d9ade` — 661 bytes — `2dfe6a3623f10981d67d3b728589ebd0ed365ccbe157697df5b3566b63a542ab`
- **DIR** `My site/.git/objects/3d/` — 0 bytes
- **BINARY** `My site/.git/objects/3d/5871305cfbd767f406b0cff614dc92b587904f` — 165 bytes — `d3ab4ef08f054f24a380969ba121b68715706b61a69107e996d1b9b860e6a564`
- **DIR** `My site/.git/objects/3e/` — 0 bytes
- **BINARY** `My site/.git/objects/3e/b4dd9905f799d32a97d6e9d24a1a493d5ceaa5` — 12,436 bytes — `093e1d18b03d2e0b5ed0458838927919aec79c4888fd9a2daf044e3b55223626`
- **DIR** `My site/.git/objects/3f/` — 0 bytes
- **BINARY** `My site/.git/objects/3f/9a9ccdb1ef05d900a5aa4fc4bfa8db11a9d0ad` — 388 bytes — `8cdb539321fe58f2e322ba6587d4accf19ceec2a0a149ce9b662750a2fea30ac`
- **BINARY** `My site/.git/objects/3f/da9b6659a4b977802c0e7334b09d28ccdf4644` — 563 bytes — `8ab4b7693a5c11bb8c278bcccc0940eb73e7c6e2dd998907353675611a57ef89`
- **DIR** `My site/.git/objects/40/` — 0 bytes
- **BINARY** `My site/.git/objects/40/b2e24c25b75c9a4917dbefb9b46b335da6bdb3` — 876 bytes — `b925613a21148da547c22b4c091d6f374561b466010d244cc1c61fc25c285977`
- **BINARY** `My site/.git/objects/40/ba7f59c2e5febf800ee0fb37f04a1493d9e89b` — 162 bytes — `f3472dabd9b8e39a26c4c58d12aaaa4453b543e38f334d46a365475dbc1aceea`
- **DIR** `My site/.git/objects/41/` — 0 bytes
- **BINARY** `My site/.git/objects/41/74c5e7fa9fd5a5aeca0520b71bbae8af3a00da` — 341 bytes — `d8dd35cd1d886639d737c826661021063d0f77363167fbd869a90e704c3419dc`
- **BINARY** `My site/.git/objects/41/eaf26cb62b76c5a14e7e6b7652d483c8408466` — 5,446 bytes — `42397290ebdddb57a2aa5072963deaff085bc63d915e54c3cf68d0bce6413e0a`
- **DIR** `My site/.git/objects/43/` — 0 bytes
- **BINARY** `My site/.git/objects/43/c3abc658ad361367e9500fea26ecffd992741c` — 193 bytes — `355a49ec8166f615b7c4169cf43e41907fb3e0aa83e69da7a55cdee7897223da`
- **DIR** `My site/.git/objects/44/` — 0 bytes
- **BINARY** `My site/.git/objects/44/954f268c451d649e5b43e7b0206c57a958786e` — 166 bytes — `ae07cecf95c5c319ef35d9c066ca0e500e4abf308ff01b150dee8b0c7ec72580`
- **DIR** `My site/.git/objects/47/` — 0 bytes
- **BINARY** `My site/.git/objects/47/1be3b84eb5508008820ed8a993cbfedd21421f` — 554 bytes — `b5db5b3d351f2b22cda5457634d337cb77e73d02456580618b8043d1ffce229f`
- **BINARY** `My site/.git/objects/47/8eb699bdf96b7221da0bf3ec06d5fc8df1d7e5` — 83 bytes — `324822b9ebf5d8b6caca554cace2d29a7aa56287772ff2cac0e0e5ae2520ca30`
- **DIR** `My site/.git/objects/48/` — 0 bytes
- **BINARY** `My site/.git/objects/48/78ade346b7369e8bf25dcfb64552a4597814f0` — 162 bytes — `0fea66ec45348834ebaf789e05e70ec7ff9e8400dfcc69215719188c835d9ff6`
- **DIR** `My site/.git/objects/49/` — 0 bytes
- **BINARY** `My site/.git/objects/49/ed127e2b51afc1c8093f84b25a4d116f265e00` — 5,165 bytes — `991e8cb01e3ecc778ac51e06e8ada8b0086ec56e9f7adad8fa5e73d7343da052`
- **DIR** `My site/.git/objects/4a/` — 0 bytes
- **BINARY** `My site/.git/objects/4a/ae9354bf3fa4b748f9dfe42a1883d720f03ed3` — 7,836 bytes — `94a33c0d67961375c760b132e6123a04133838e80f97a6e7db4727c919d81610`
- **DIR** `My site/.git/objects/4d/` — 0 bytes
- **BINARY** `My site/.git/objects/4d/c217459faf27c593bbe6663df0d61977614a16` — 423 bytes — `cec8fbff7cdfbc7bea78e6266af4d24d1bcf37f195a455466efe328e632bacb2`
- **DIR** `My site/.git/objects/4f/` — 0 bytes
- **BINARY** `My site/.git/objects/4f/a11b02fc754a7c7c6d3a7c7dda3aa1ad39a43f` — 139 bytes — `e6c2968aecdf92136ce0ae292c1fc1858e455e06cb17930855a3afca3ff72c85`
- **BINARY** `My site/.git/objects/4f/e413357257f3b297a53cd1fd857680f5f5c2b6` — 55 bytes — `a808ffe69435a4066e9718371ed1d84b81bd247ee7f0e3b4db4afce27da8e577`
- **DIR** `My site/.git/objects/50/` — 0 bytes
- **BINARY** `My site/.git/objects/50/6dc40b7f68858ac059c61df15cd6a318dcb7ac` — 4,984 bytes — `d1aa006c77b1213eee278a05dfc7a81690d713d52d1056ef061053051247854e`
- **BINARY** `My site/.git/objects/50/c440b886a3f0d3943c30cc57569d2b9b0352d9` — 165 bytes — `5ab90cb3a0b9d0c8674cccd3bea89bbd9ed79cc55da7674a1c1fbdccf96dc708`
- **DIR** `My site/.git/objects/51/` — 0 bytes
- **BINARY** `My site/.git/objects/51/1f072107e4ead6e666797f58abb2d67f832d4c` — 5,616 bytes — `7732d2a968d66eed10295b572939bb3c72c9ad324bf8e84d73d938b52ae94440`
- **BINARY** `My site/.git/objects/51/d142d72cfdcc8be203abba53568fcbd5d0407c` — 5,458 bytes — `f836f3724a74a292a52281d1ad5ac829d680ccbb056817419942143aac059917`
- **DIR** `My site/.git/objects/55/` — 0 bytes
- **BINARY** `My site/.git/objects/55/66dd4ff5af3fcfd61a90c8b88ac29f0da1f396` — 818 bytes — `eb1ec98282b8e9fe759d2ff8f8c53e16952efa89e716e8b3f275d065b5b44913`
- **BINARY** `My site/.git/objects/55/881c63ffc9c67d9954e7990140080ea76224ed` — 49 bytes — `620b939bba85dc6834db2830423108059ec9ac08ece4c34f557f37d86e7d26b2`
- **BINARY** `My site/.git/objects/55/a8db0ac01d5d90dfac3f905d2d8d830bf6f2a6` — 162 bytes — `1fd9d073b7576d18f83b0cf9a79eb44cd04b50dbba3da0407b4fd7682405544f`
- **DIR** `My site/.git/objects/57/` — 0 bytes
- **BINARY** `My site/.git/objects/57/f8681b624f213e2fbcc530b5de3c07dc076734` — 522 bytes — `9232d086866ce8674e45bc478db5037bcff2df755c269d65927aaddcb57d042a`
- **DIR** `My site/.git/objects/58/` — 0 bytes
- **BINARY** `My site/.git/objects/58/6f6b581fb0997421d6c16ccb8cfcdd4639a878` — 69,519 bytes — `4a04110460273fd87513a1a28259d1b4efd0c6b33ca25db993a1352e7ad93532`
- **BINARY** `My site/.git/objects/58/f763734ca21fd39a42b7a3d8a8636694a749e0` — 835 bytes — `dcb7a9bff2bd0e4bc0a92501eb4d88fdd4021d4887e8d28284abd9d5696e8d1a`
- **DIR** `My site/.git/objects/59/` — 0 bytes
- **BINARY** `My site/.git/objects/59/86586886e2df0a03417c7f98c599a18f8233e7` — 56 bytes — `f5393b62f6ac36cdd05f63e5979f29bdb04e011de3e5c59beae47015310ee3e3`
- **BINARY** `My site/.git/objects/59/c812c87105249cb07b546571bc25e99d7faab5` — 5,615 bytes — `2b0a9f82528112a4dbf0d8efb5b31bcc15c1231a33c1f655e64954583acc3589`
- **DIR** `My site/.git/objects/5c/` — 0 bytes
- **BINARY** `My site/.git/objects/5c/3d5624e9dc26e5b47e01b3eb9d6d8acb87438b` — 183 bytes — `cf32fbaf2a32c59a6ed9c7752e21f2cebdc3549d4b931ee8264ba580fb15a97b`
- **BINARY** `My site/.git/objects/5c/9d025d37ce5b27fcec314e93b1648b0d7d4f14` — 157 bytes — `a45cd4ac83d785a3fad3ee525ba35dfb77be027cb6d01094b728cdfac8ed35a3`
- **BINARY** `My site/.git/objects/5c/a43124cd344aa384921ae7d391ffe5b8cada77` — 174 bytes — `539307dafaaf183c35163e23eb8d7df87bf97fc07705c8590a96ed2ac5f6fa20`
- **DIR** `My site/.git/objects/5d/` — 0 bytes
- **BINARY** `My site/.git/objects/5d/5571e8d7b9ad2952b155ec34731074367a95ce` — 2,552 bytes — `206fc6024627db200de92e9d81cea94b045f2390af8ba5d24230123b8ad6b82b`
- **BINARY** `My site/.git/objects/5d/77ea552d0ce58284f6ee4d50e9d55e4dc1162c` — 171 bytes — `0d622ae08089a892d6261978f3d1ab06cf7501a8d57ef33025af0abcb21777c7`
- **BINARY** `My site/.git/objects/5d/db34f3097578257f388aca97947c04234286d1` — 35 bytes — `310ad34d7551e3a1885222ca58b2db3ffd64ded0ed023c319dff651ac11b5f47`
- **DIR** `My site/.git/objects/5f/` — 0 bytes
- **BINARY** `My site/.git/objects/5f/216a316cb0ab7283af6c2fe1c0d19f00cb99ee` — 234 bytes — `f99cf17052cd063630752d33f75611a7f1bab33e755012f8595d7a4cc02186a8`
- **BINARY** `My site/.git/objects/5f/89f934225ad07cf4d9e4999b210a939e3f3aae` — 165 bytes — `9b299a4d5d08af010e841f35539468fb57854b385ac5a518143289589e26871f`
- **DIR** `My site/.git/objects/60/` — 0 bytes
- **BINARY** `My site/.git/objects/60/04e014d55f93fa9e1a6bb99260bbf678eb3103` — 803 bytes — `36599231fa24d7dfa119e35dfe7d336bdadd667c1698b14f4fcd9a56d09f27e9`
- **DIR** `My site/.git/objects/61/` — 0 bytes
- **BINARY** `My site/.git/objects/61/4ef22ce6598aca8ea6fea1d8d164f8be13396b` — 5,761 bytes — `cf3f5a724b5721e40a05e2eabdbb8fe9d81f7ea6eba5d3a90118b8adbf168e66`
- **BINARY** `My site/.git/objects/61/ab92ee5df83ad29899fb0c6df0c9931cad971c` — 5,760 bytes — `32dee8ffb5049f8458a298562fdab249e0c6d3ac798e3d9c94a592fafac75848`
- **DIR** `My site/.git/objects/62/` — 0 bytes
- **BINARY** `My site/.git/objects/62/3557778f6dcd33fa5f157f124edc05c60cf25c` — 456 bytes — `b25bb9e84a342d5e08780bac4f3d45e0b593d42e76119c9f08acd644842d2eb3`
- **BINARY** `My site/.git/objects/62/941d084ebf61bbf065665229be386f9dad8d52` — 389 bytes — `a08be0b21af9731667187f67dc2124752a20a265880fe0b9c2b8bec083e47971`
- **DIR** `My site/.git/objects/63/` — 0 bytes
- **BINARY** `My site/.git/objects/63/c479109dac817af339af1243ae6fe349fd48ce` — 1,187 bytes — `148b95ee8998e8d0a53095315e55c329570eb14dd624a7440c9bf9882c50a8a2`
- **DIR** `My site/.git/objects/65/` — 0 bytes
- **BINARY** `My site/.git/objects/65/03b1d872ff136f0eb4d71a5a932a6c820e6dd4` — 830 bytes — `8443814165a8fe94108c3059be86817c0e09162c204ca9bbd57fc69cef216123`
- **DIR** `My site/.git/objects/66/` — 0 bytes
- **BINARY** `My site/.git/objects/66/733c9879d1f9a8754f62fcffcc4778a7f15175` — 1,065 bytes — `b363a58240565afc45b875b780c13a84d588e215022b85ae213efd3efb302349`
- **BINARY** `My site/.git/objects/66/e8c16e0cd1067d9284d523f9c49609df8fb361` — 164 bytes — `a67b87c9cf71cca37f9294c2ccb6c61f790c1e42289bb731f55bbb6605344854`
- **DIR** `My site/.git/objects/67/` — 0 bytes
- **BINARY** `My site/.git/objects/67/24fbf2404b3ed2130c37696be5a0ebd999b5a5` — 317 bytes — `c1b800d2279296cfbab88d42f8be4c1440f6c908c6b69636cb71d7e2f4f53b5a`
- **BINARY** `My site/.git/objects/67/81283e15223de15664e6b64ed434e3f693404d` — 165 bytes — `900d4951c8421c673d6968b9330dee61ddd271b1497ee19100040996c545e11d`
- **DIR** `My site/.git/objects/68/` — 0 bytes
- **BINARY** `My site/.git/objects/68/b0d54a903ced06131dfe80241d5990c21d7a55` — 225 bytes — `e77532d2d63dcc0704ba6e8c2c5d356e3b669a9772a9cd991b9bacc0e8723827`
- **DIR** `My site/.git/objects/6a/` — 0 bytes
- **BINARY** `My site/.git/objects/6a/d4787fed78bce66b0f74a6d3a4e6f0229cb2d2` — 173 bytes — `aca6c463960dda6712faff480644926480ff5c41388ec6dcd79c5fdbffa523c7`
- **DIR** `My site/.git/objects/6b/` — 0 bytes
- **BINARY** `My site/.git/objects/6b/5f31277635fa1a539d450a5df751be27bb232f` — 225 bytes — `b5e97fb0c15b43d61556aa5df68e4954bed200349659e2f0c117bba376912a49`
- **BINARY** `My site/.git/objects/6b/a3e5626faa50e2e127d979fea1f2645073f344` — 55 bytes — `e7d5bd8e657c1c35d26375940c6bab7f04ac18771584e3ee44722595b9825ced`
- **BINARY** `My site/.git/objects/6b/c99b3fed3ef44d327d6f2617069cd424459c66` — 390 bytes — `f625a620d327c6eefe4ab46c779c7b0d3f528a183d40a99756cc062d67527fd9`
- **DIR** `My site/.git/objects/6c/` — 0 bytes
- **BINARY** `My site/.git/objects/6c/e74d4ad8e69a080a19a5f50f80dd08476e42e5` — 54 bytes — `e1ecf470a38c79f44721d3d15ddc46f42573cbdc8b9235bf68a8d8b2a2ca92b8`
- **DIR** `My site/.git/objects/6d/` — 0 bytes
- **BINARY** `My site/.git/objects/6d/6e8a3aaeeb571809c071a092ee13e3bdf2454c` — 8,701 bytes — `c21573ff52a3e656ec172443c4fa01d04ae9fc114fcccd82b6a14e84cd9f05d2`
- **BINARY** `My site/.git/objects/6d/6e985becbdae9b204349b9761231458aabf422` — 388 bytes — `910e24ae0490958d804d01008fee27ee5b66cbea454255b27d4b7c7d3a07a8ae`
- **DIR** `My site/.git/objects/6e/` — 0 bytes
- **BINARY** `My site/.git/objects/6e/4ac4fc8b84bae1c62bdde7059c61142623a48f` — 246 bytes — `5db49397549ac401f8b540a53908bc871cfa65a65e8d2a0ee3b304f00596f86d`
- **BINARY** `My site/.git/objects/6e/a52bd36c43b1d9921bd13e1da47f16e1317fe5` — 1,300 bytes — `d9639bc1ce6eabcbf71f2c8a0759aeee862ccbcb02bb34a0fefa180784232334`
- **BINARY** `My site/.git/objects/6e/ee7e8611c972165d85a1eed298617adfd41b83` — 830 bytes — `40bf245d01188f7458c23819e1af95743123a2e35e18dcc54df1fc9a41bd52ed`
- **DIR** `My site/.git/objects/70/` — 0 bytes
- **BINARY** `My site/.git/objects/70/e4899c6b6fe933617b1bdc2c4a5fb98e498e47` — 455 bytes — `c1ea4dfe6f8bbb083175aae9be06bff7a2445bb542902f79fbde00ae677aac14`
- **DIR** `My site/.git/objects/71/` — 0 bytes
- **BINARY** `My site/.git/objects/71/94ad0bd6c1e23e058918e4fa3c6cac86a2c34b` — 63 bytes — `4c04258163684c93bfb503a98cdd759fd2450dfe6f4a6fa4abd20a2c7a41cb6b`
- **BINARY** `My site/.git/objects/71/cfec5516eb04698c71623a0659efdb4691ff33` — 172 bytes — `80163b184145a271fa88734539d347e84b6ae152af44664a527f8003a23ef7c3`
- **DIR** `My site/.git/objects/72/` — 0 bytes
- **BINARY** `My site/.git/objects/72/0b322fbc0ae11bfeae152e21cb90e3bb6e4e41` — 5,607 bytes — `6dfc6fcc0ee4ff45600cf798b0523879244cedad80d17f1fa286e2f38ffe1f52`
- **BINARY** `My site/.git/objects/72/0d6e76b53f7e4e27ab0a76e50cfee19a9538ea` — 5,172 bytes — `a61a81545c2ce292939515649bba591034429de71845da063cfa69a892bfd97d`
- **BINARY** `My site/.git/objects/72/87222f82b17d4db6252a2ea54bc8d59e36c08f` — 455 bytes — `284b179278de2c70f5386ec204b9a7caa198469e761a309a11527608dff7c207`
- **DIR** `My site/.git/objects/73/` — 0 bytes
- **BINARY** `My site/.git/objects/73/6cddecf7f0b2502cda7897f7fcbdee3853be7e` — 977 bytes — `309b6a06725c7e25e904e1f9594e094a2d3f3c1ae39881850215649713a8ac0a`
- **BINARY** `My site/.git/objects/73/8122d8d0f90757b9a73342e78b928f149add52` — 306 bytes — `3b55f63b2176a0cc45513a0dae87a8780041397fe9f3d7fa88cddbf42da143b5`
- **BINARY** `My site/.git/objects/73/d3af1d750568a978d4cfc6ecaa9bb5c31959cc` — 998 bytes — `83e5526fe12f3a7fd14d1338fb2eadd7e833acf885ef31d83ff8d32b08df10e1`
- **DIR** `My site/.git/objects/74/` — 0 bytes
- **BINARY** `My site/.git/objects/74/d33bdb08748d90e414a506344d3d8a08811a6f` — 992 bytes — `9502742d2c34427daaedd1d217156a13fae6746a50fefa75da04ffdf26720869`
- **BINARY** `My site/.git/objects/74/d8408a8a84c8fa457d694a00597bd85a17d13e` — 2,175,959 bytes — `2840199b9e93c0861d939a3415808f5a521db62853cf04aa3136f2ff9185759e`
- **DIR** `My site/.git/objects/75/` — 0 bytes
- **BINARY** `My site/.git/objects/75/6571c381d4efc1c426e2c2b1597703dbae93e2` — 308 bytes — `4d2523f8c2a586746546a624f6acae0e9cf942fe8b3b3006d6cb825743000775`
- **DIR** `My site/.git/objects/76/` — 0 bytes
- **BINARY** `My site/.git/objects/76/49ff2757190e33452e3dbfe86b1285065c0277` — 234 bytes — `e9e6f60cc81c76315e58d0430c368e2c9f55be7f02a9093d5086a2d19d6b0c84`
- **DIR** `My site/.git/objects/77/` — 0 bytes
- **BINARY** `My site/.git/objects/77/fe8a4faa5940e58bea41b4ec26dc45a6755c5b` — 547 bytes — `9ac9bab228128c57c0f1d3e614d5c8bb93b88b5dcf2e0125fa8a39d6c685dafc`
- **DIR** `My site/.git/objects/79/` — 0 bytes
- **BINARY** `My site/.git/objects/79/2f8413e058a7c2170707104e6799f63b0f8587` — 914 bytes — `31f02b6c1174b87f0ea961a5a2fc68300d2ff8d2a0cbd9c745c26296af7d0a4b`
- **DIR** `My site/.git/objects/7a/` — 0 bytes
- **BINARY** `My site/.git/objects/7a/2d7d832987bf8a87a2ecd1c185171a2169a6f8` — 794 bytes — `6fbca7f4cd8fcc8637920e02e175098069efc4684eed36e1bc0aa4c1518dab2f`
- **BINARY** `My site/.git/objects/7a/d5145dec8129d54074a22d1d459058a7352309` — 5,601 bytes — `c22e38f29f7beabe2c669ead7867fcbe2e5f081090db99fb26ae164ee514ae70`
- **DIR** `My site/.git/objects/7b/` — 0 bytes
- **BINARY** `My site/.git/objects/7b/9770dbd675984f1aaef3b53c9a2f8a1d65368d` — 371 bytes — `48d8352e88cd00299bee4c2baf90819466b2f5ee5991742c0bf9e6dea01d4719`
- **DIR** `My site/.git/objects/7c/` — 0 bytes
- **BINARY** `My site/.git/objects/7c/150979b9168fd34cbfbbc06d49b900f8799e0d` — 118 bytes — `2a868543403172c9bde5764981e25030ffc27b087a750378315fac1720920996`
- **BINARY** `My site/.git/objects/7c/2cc4618482cc0cb57f31b2ce305dd41a1a5ab5` — 184 bytes — `de6545185553b6330b5e658b481140aea37ee23301e3022572c239a805a7293e`
- **BINARY** `My site/.git/objects/7c/56174c791ad83979789f8be956a1ddf35e16bf` — 456 bytes — `61f9cd658478aca5e1554233fcf911a1ab062deabb5f3b8277d7a62dd8b2ad47`
- **BINARY** `My site/.git/objects/7c/93c1630bb0ac6dad1fa1e08bec4d7e01dbb4a7` — 839 bytes — `79d36c93e2dbde11f766e2c3d30f4c6e94b7490d2bc027192be36d682691aa16`
- **DIR** `My site/.git/objects/7d/` — 0 bytes
- **BINARY** `My site/.git/objects/7d/7aaf1e939a7d097ed74b74d9a366845f1f22b7` — 668 bytes — `1ca7a12947443fb727c547a34dbad60bebfb963dd87602ceac9c1d78cee290f8`
- **DIR** `My site/.git/objects/7e/` — 0 bytes
- **BINARY** `My site/.git/objects/7e/171a31448d8ac6dfc7e5970757b8458c0fe804` — 5,394 bytes — `3abbc7adad5ab44c31ef151b116c65bfb398eb649406be5f7245c23666433eda`
- **DIR** `My site/.git/objects/7f/` — 0 bytes
- **BINARY** `My site/.git/objects/7f/485b99bf868d4e6ad3e7ac635d3f94b2e09558` — 1,178 bytes — `269baf012239587e1998eb088e1179161352526a2ce0142e9b451e61024b1cfa`
- **DIR** `My site/.git/objects/80/` — 0 bytes
- **BINARY** `My site/.git/objects/80/3af6129b5b3860c1078b6d4724434051883ac1` — 389 bytes — `861a21a4732938d1f7fe857d8cb2b2a27d60a782cbe32474fcfb10f877206a06`
- **BINARY** `My site/.git/objects/80/63a0f0b1c748e24e0cf57f28f98004ff919e51` — 247 bytes — `77dec91c643cc67e71a5a3493816d0cb2d585473f295ec3152c3888ad93c3de3`
- **BINARY** `My site/.git/objects/80/f8d662eaf6a86b4b828d297c909431f95a17ac` — 8,685 bytes — `27e53deb806725444c127a18bf644a0b3e5c01fb1571457d07f0794b83447b5e`
- **DIR** `My site/.git/objects/82/` — 0 bytes
- **BINARY** `My site/.git/objects/82/03855d366ef4b640d818c3b928598b512cbf8b` — 183 bytes — `ffbfa031bfe559c82be6d3cd37ffba4f7cee0182ec9b4e2cd4194779dead1946`
- **BINARY** `My site/.git/objects/82/6295a648c7de4de4a2a206c7087ae6bc71fa4a` — 296 bytes — `3f612f38f81c1294e89ad2450817759bc955c242fa813fad815c54b369f41ca0`
- **BINARY** `My site/.git/objects/82/a71c2389bd69deef625ee82f3f76ccbda61e44` — 5,398 bytes — `dee49a8318c688fda4e2f5d7978e879d801673646d3b94ed2ac458428ab77eb3`
- **BINARY** `My site/.git/objects/82/d60279ed4d3339c0e4278d69d88d25b9a9df6e` — 308 bytes — `6a545667ef910e4d80f0aa95b3f910d0f4a7e13e059e650ecf52fc562801013f`
- **DIR** `My site/.git/objects/83/` — 0 bytes
- **BINARY** `My site/.git/objects/83/095ca4f07177844043d3b3b655b9e78fbbcc48` — 224 bytes — `d7f349dd614582c83da513cd325207fcc7427eedae9ef275ee66895eb828969c`
- **DIR** `My site/.git/objects/84/` — 0 bytes
- **BINARY** `My site/.git/objects/84/6be5033934cd118ac3845d53571325a6437062` — 947 bytes — `04a97a0abcb4d135695ebddd5c8afe7880ccbca55c6e22ca2555adea0f8a0509`
- **DIR** `My site/.git/objects/85/` — 0 bytes
- **BINARY** `My site/.git/objects/85/339e6e93e74e9ea862ec36d43cd45570850f43` — 53 bytes — `62a445ee8498c3b06e9f5c83754d876cb889a419687ff7646ed059b386dca70c`
- **DIR** `My site/.git/objects/86/` — 0 bytes
- **BINARY** `My site/.git/objects/86/c8df7f586375993253a04be2c630b7eef067b0` — 458 bytes — `a86e8fed61a9730d2f14e334959195fc951174024c55bcd33a7563de6bb36014`
- **BINARY** `My site/.git/objects/86/dc2ccb6e892cab4621ee92d2b31e8edf82193b` — 707 bytes — `ebcc892caccfced86db3f3196a5d5573672f13d5d176266b3277c9bdaa703c5f`
- **BINARY** `My site/.git/objects/86/fcba1ec71da91b17760823b8178e8a28d6bc55` — 165 bytes — `8925c13e46527ba1cd2012f51da8befbd6c69b1acca1769ba7626a786bb6468c`
- **DIR** `My site/.git/objects/88/` — 0 bytes
- **BINARY** `My site/.git/objects/88/69f5575fd1dd42107b219772530e3c507747c6` — 113 bytes — `d6e3993e3f48c7e6dcdf176c5a1cfc74df30cd3cfb1c338b478b2130391a486b`
- **DIR** `My site/.git/objects/8a/` — 0 bytes
- **BINARY** `My site/.git/objects/8a/f778ce61321e48b5d42843bf8d51b04267802c` — 1,304 bytes — `3fd311bfac16fedc149c0729503983d68aabfa0e329bbeb352bdc85d570e5093`
- **DIR** `My site/.git/objects/8b/` — 0 bytes
- **BINARY** `My site/.git/objects/8b/6a25ae14f435e2bb5135b096619ab040d73495` — 163 bytes — `63266204dedb16d7c3fb03532f0130523d0abb3190fc398bb405e3a3d86b7eb9`
- **BINARY** `My site/.git/objects/8b/a616383dea625c51b5a0cc4e43e8b73d0f54b1` — 184 bytes — `d6cc2b9ce3455f9c9d7ca875cd0f7f1831dd4fdefa4eaf3703e81c1e82cf0b10`
- **BINARY** `My site/.git/objects/8b/ba4048201102d5811f4217dff01606685bed54` — 821 bytes — `2725f320609a796a838ac67668c996c07f583795aaf8cc76ed97db31376a6855`
- **DIR** `My site/.git/objects/8d/` — 0 bytes
- **BINARY** `My site/.git/objects/8d/29bd3658a930bbd6d3e6c64accfe60e2d97d2e` — 75,592 bytes — `d8acaa2cb565e7ed2c8c6baae23d3008227a28e65067bb7c5ebce4472a68a607`
- **BINARY** `My site/.git/objects/8d/564b787fc7aa7399b6e95ccfd1771e05f0974c` — 20,913 bytes — `8455873ca68b69da7f04939ed3fc8c6e324924f2e4e9b59f8d192919019c7032`
- **BINARY** `My site/.git/objects/8d/bd83ef42a5aba2ba07e2ac2b4a01d51e9f2ded` — 185 bytes — `7bd613be15633e35a85d435270d593e3aa9b858dba7b352973ecc2c4db0ed53f`
- **DIR** `My site/.git/objects/8f/` — 0 bytes
- **BINARY** `My site/.git/objects/8f/d4f4103a4ea5a4bb8ce67bf4ffea289366789c` — 165 bytes — `a27e2f8cae913d4e87435e4fa93b67aaaf38743bbc736bb9cb0278761b2f6858`
- **DIR** `My site/.git/objects/90/` — 0 bytes
- **BINARY** `My site/.git/objects/90/907e315d0a8a9429c478921e7808862e18b535` — 423 bytes — `51359b444dabf0145b08b434441b08061d3b43ee5fbcf74c41ac17ac0de68bfd`
- **DIR** `My site/.git/objects/92/` — 0 bytes
- **BINARY** `My site/.git/objects/92/148169a85675c67e74e9df38fdb79f0ef69af5` — 825 bytes — `9ff0cd510edbcf5bcfe09560518d2596c0d6ebdbc2eaddcd50e1dd96d9b97fae`
- **BINARY** `My site/.git/objects/92/3737192938f842a3b07d791c94ef6b4bfbf078` — 90,827 bytes — `296c334b04d67a50b34b7287e7078f05f6a488ec83e9caebe6c32ae7ff192d81`
- **BINARY** `My site/.git/objects/92/ddc00d3a14406f4a1cab61ae9f23cf423c7e89` — 990 bytes — `574c434c11f17fb246e9dfad9ee2f24fb66aa6de4f70d38056d10449131fb2bf`
- **DIR** `My site/.git/objects/93/` — 0 bytes
- **BINARY** `My site/.git/objects/93/bbd7921ca9b3fe1e5b47e9c99968ff6ef4c313` — 5,591 bytes — `7e00ab0a293348356b37eac9ae80536ca810ba2a13243dddbabfd41c86af563c`
- **DIR** `My site/.git/objects/95/` — 0 bytes
- **BINARY** `My site/.git/objects/95/096e8c30571f8f72fa56da066612267bb9fe58` — 80,301 bytes — `be26421a851da91fcfef2544407cea07b97c39d3ec549ebb23ad8a10a1320774`
- **BINARY** `My site/.git/objects/95/cefe865ef9a2c9aff3ab57a04dfc483de64c39` — 8,699 bytes — `1f2fd3a67d853bedb58e5ec22972b9ea38364936f8ad61b6ad0834678e0ae36a`
- **DIR** `My site/.git/objects/96/` — 0 bytes
- **BINARY** `My site/.git/objects/96/1b96c1bc9719fe1ba5bc9454a5b105f59ae9a2` — 220,213 bytes — `cae7a98bdc5f9afd65c30d7f0815e5259747b40cb8e086025b52e3a670184c36`
- **BINARY** `My site/.git/objects/96/297484039231bf9d42d95203062adf03beaea7` — 1,177 bytes — `0ab1360de1f940ec71e03870f4b15cef214ab0527da3882c4e6570772aee9ac9`
- **DIR** `My site/.git/objects/97/` — 0 bytes
- **BINARY** `My site/.git/objects/97/2700ca646f6b5f93420819281e5b52a7aec7e5` — 450 bytes — `dc32bc073778ea8b9135573e53c59182e046979b5246e92609a3c2501571cfcf`
- **DIR** `My site/.git/objects/98/` — 0 bytes
- **BINARY** `My site/.git/objects/98/8e97358ecf8620bc87d0f531270066022256f2` — 13,792 bytes — `76977e283693c866ff6db3a7f75434129b89fe16fbcf29635a1ded5afd62d3da`
- **DIR** `My site/.git/objects/99/` — 0 bytes
- **BINARY** `My site/.git/objects/99/50944cf32479c9719b77d09e23fea83eb697dd` — 388 bytes — `3226bf1f85dc316afd70c9b56b332d6de612f38e53a6b630aa55a5948774d4a9`
- **BINARY** `My site/.git/objects/99/78b5e16b4ed0d5b192e7a407e0fe5105e9bbf8` — 164 bytes — `8ba09e4517c5800364f7871f39c8079c100cbd0c41538273c42b5060c7680f06`
- **BINARY** `My site/.git/objects/99/8a30468eb255dfe38c9cd15a88cb3fdd4970c5` — 308 bytes — `3769b19ac94620875fd0fd0b1ae094adfcea10a2cb24077c6b8d9ed2ebfb1615`
- **DIR** `My site/.git/objects/9a/` — 0 bytes
- **BINARY** `My site/.git/objects/9a/b178fb41673e34c91f83fe72684a0a41577064` — 163 bytes — `f3dd207cbdcd82bccbd2b32d62124eb706e55bd0689ca2582a389e23645cfece`
- **DIR** `My site/.git/objects/9c/` — 0 bytes
- **BINARY** `My site/.git/objects/9c/b151fe252892c2a730ba4f1eda4d29e0dc5932` — 132 bytes — `70a8b40244f660ca9c0dfa76e548e677345ffeffc2475b54ae3aa2c812c44740`
- **DIR** `My site/.git/objects/9d/` — 0 bytes
- **BINARY** `My site/.git/objects/9d/892946d91f2a80fdf2fab63e51f2862760e309` — 389 bytes — `455a55c4a3f37968674c91004f1ccad51f90153674ea65fdfdeb7408bf010e05`
- **DIR** `My site/.git/objects/9e/` — 0 bytes
- **BINARY** `My site/.git/objects/9e/5dd3adb84050841d5e30262b542fd30bed64a0` — 71 bytes — `a58cca7a5fa9cde42a04e9f1052a5a788a794b8edd8ec3ecff2276ad5b419414`
- **DIR** `My site/.git/objects/9f/` — 0 bytes
- **BINARY** `My site/.git/objects/9f/40780cfce361812e026d0aeec8b55815b44123` — 163 bytes — `6cf77d63be1c24cfbbff4f992365ebf8dc0c53107951baac69b48024ddd63e6a`
- **DIR** `My site/.git/objects/a0/` — 0 bytes
- **BINARY** `My site/.git/objects/a0/d14cd9a893c32a2d69d9341142248c5476a875` — 35,933 bytes — `d8453bbbe1fa149a9a0ddf0ca15bc6dec0547ff42f8425297b247c8bbe55cd3c`
- **DIR** `My site/.git/objects/a2/` — 0 bytes
- **BINARY** `My site/.git/objects/a2/51f546a33c4a06d9548e8dc10af1795125ee79` — 389 bytes — `91e1aee62d35ed753dd6e7096aa6790558b1e4171bf7add10df93126187d7bdf`
- **BINARY** `My site/.git/objects/a2/86b6d1c382421321769d94ec60a4029bae330a` — 165 bytes — `62b9737d92279928c612ad44592328cb86d7c3b653eb31bdb405ef9da27ebac2`
- **BINARY** `My site/.git/objects/a2/871b680363942d89bb015fdcf1a38d8e918058` — 118 bytes — `6b7a69d1dc4d78a48dff63f68385ef0180feb4600cc53f7dbe552aeb35aee4f9`
- **DIR** `My site/.git/objects/a3/` — 0 bytes
- **BINARY** `My site/.git/objects/a3/b334bbde0fb3ad3832b97f2edcd58285f32c69` — 307 bytes — `f76dd1b5d1a258b7d22e8f4a2f1a9f59b920c56ac792ffd0cf29a1fa0135d44e`
- **DIR** `My site/.git/objects/a8/` — 0 bytes
- **BINARY** `My site/.git/objects/a8/61b8ae9a638a7527adc49e291aa825323a647f` — 797 bytes — `165a2eab1fc52ce6784f69effe7a2b3c7b5681243fc13db88a555b741df245d1`
- **DIR** `My site/.git/objects/a9/` — 0 bytes
- **BINARY** `My site/.git/objects/a9/f65ccaa322707733d2a8d4e7630236417971da` — 132 bytes — `9ff7e06f9f97fb73dc78e369c525636089983d1cc24e77fd362d0086cf36c3c1`
- **DIR** `My site/.git/objects/aa/` — 0 bytes
- **BINARY** `My site/.git/objects/aa/e69d3920d1755d908d1492eb250c160f1e354e` — 164 bytes — `1eb810b569d2c7afe5cf54d331d25b439bf423bf632ece9e3309f9096228246a`
- **DIR** `My site/.git/objects/ab/` — 0 bytes
- **BINARY** `My site/.git/objects/ab/10b7c2855c812c082e645352177a88a67ca057` — 627 bytes — `de586c9c84a57e1696b91904e2266818ad587a0a8d12933a63c7c39a5ba809f4`
- **BINARY** `My site/.git/objects/ab/f5195bf19edd191071419836a025d3ecb07853` — 73,001 bytes — `e2ffbfbddcc11c37679dd91f411668723f49df3b47d0c59d4b9bde685ea7b534`
- **DIR** `My site/.git/objects/ac/` — 0 bytes
- **BINARY** `My site/.git/objects/ac/1b9d30262af1d3457df198fda4a48966e0c518` — 830 bytes — `0f1f18004e773aa0a8d9f4b98162cffd034016f6a8f9b38f2c3560a81c7652b4`
- **BINARY** `My site/.git/objects/ac/f785193d9d617e41f4f21422b74e25cdbc2386` — 354 bytes — `c1f1a7c925448b4cc277258ec13659a511e6795a54f94e164000b8e4149d8799`
- **DIR** `My site/.git/objects/ad/` — 0 bytes
- **BINARY** `My site/.git/objects/ad/2a726e3c9df8a5a206c5184b334caea7accd10` — 309 bytes — `c8f546b3c1225a4d8092f383204c0c51427331afae0bdf379c00b2b4c81c5672`
- **DIR** `My site/.git/objects/ae/` — 0 bytes
- **BINARY** `My site/.git/objects/ae/34371406dcb00e8d511316a121793a65c665f5` — 389 bytes — `29e79ed92143e0590d101d14b4fd5adf293600c58c5441e7ba9afd8bc2d41fde`
- **BINARY** `My site/.git/objects/ae/a000bdb839f8be8866a15cc6edc824e31ea881` — 590 bytes — `b80996d7f62a2fdee9b5194e769dc47df34a4f6945b7dca5ccd5494a2ace0e40`
- **DIR** `My site/.git/objects/af/` — 0 bytes
- **BINARY** `My site/.git/objects/af/184abe63f5aad05b61c23440bda39a72bf35f1` — 165 bytes — `ddc994e875e2015c6bc2d7526d30f338c4645af6d4a3508ea8517de5ab3838c3`
- **DIR** `My site/.git/objects/b0/` — 0 bytes
- **BINARY** `My site/.git/objects/b0/2bbee0ca43af4d97fd580f843e6428ea083fa0` — 455 bytes — `8c6ea7de92e9f1f0219db43b260757d7918310960b0b59fac17eef7a73a5549a`
- **BINARY** `My site/.git/objects/b0/72d05024236b477406b15ece648c32c3cb44ee` — 1,034 bytes — `3ac86bfac69b99e4fdb6016f324556b0996f13c593764684e47b4892e4a3e7be`
- **BINARY** `My site/.git/objects/b0/afec8108b4c790beec5714db3dc57b1250d41e` — 229 bytes — `e6ff7e3c837e15779d7bdd96e9efb82a6c1599ef4fffcc6b5abfd2b23d034cb9`
- **BINARY** `My site/.git/objects/b0/b6ce65daa09d9a03d4624c6ee37baf52f0f1ed` — 1,000 bytes — `5e3bb0418ef3603d063528d99d2ec4ca589d1005c6c4362f16f3c1b5e5859676`
- **DIR** `My site/.git/objects/b1/` — 0 bytes
- **BINARY** `My site/.git/objects/b1/3b972c70d1211653099ddaf6c618335ce0832a` — 455 bytes — `227a88253ea4cd0f61aa2b9dc3b3cf4799cc609958de71e62b52e96c1475f7e5`
- **DIR** `My site/.git/objects/b2/` — 0 bytes
- **BINARY** `My site/.git/objects/b2/9d90704671ac1b52d263a01084debb8ffadbd3` — 79,031 bytes — `11a2cb17ebb8d6952006016b9b5920bd97db2553ae09999a6c12976ff72b77b5`
- **DIR** `My site/.git/objects/b3/` — 0 bytes
- **BINARY** `My site/.git/objects/b3/5859a9bbe15482267d1b3827e4db8d981d4687` — 83 bytes — `405515c9339af62fb0d277f0fe45fa791cfa8d883152f76a22a4679cf664f5f9`
- **DIR** `My site/.git/objects/b5/` — 0 bytes
- **BINARY** `My site/.git/objects/b5/06c41aaa055b63fbb1bcda3f1776c9c34b3a76` — 628 bytes — `0736512e8bf39f5a3986dc4a8f333db9d06338c0dbef8915f655b2c7d1bcc37d`
- **BINARY** `My site/.git/objects/b5/4aaf0c49a0905de67f957e8caedddaafd90696` — 48 bytes — `51de48f2d4a8cbb53ceff6faabb130c7d31bee76c7aae3def08fe1280d83a085`
- **BINARY** `My site/.git/objects/b5/561fac4a3c6cb9390d21522c2bba446f542d6d` — 105,732 bytes — `d2c2f6f2162fccec5e7dcb685347cda584c475428d8cc2c5d7b966de9c29f43b`
- **DIR** `My site/.git/objects/b6/` — 0 bytes
- **BINARY** `My site/.git/objects/b6/c8c5d822354a79bcc205150eb5a8b76734ccd5` — 456 bytes — `edac61e9b9835f2f3a9f13983127b69fa946bcde07d98a7272fa30f404ae49a0`
- **DIR** `My site/.git/objects/b7/` — 0 bytes
- **BINARY** `My site/.git/objects/b7/2a6ff4f85343ec208dc34201029862e3f74f53` — 456 bytes — `e9da05f5426a4b4ba04759dd4e52549a21572db4cfeac60ad2ea1d0a9b6d92cb`
- **BINARY** `My site/.git/objects/b7/87ad7722e1690f2ceb17b3797dc2c155e62f04` — 7,464 bytes — `bdbcbe0ce255a2ec81ec47cd262a3ec0e2a159807418e73a400fb8d01932c326`
- **BINARY** `My site/.git/objects/b7/d8b9659f388508640f68140b3649a0ae0fc461` — 817 bytes — `c4035b2d6f4783553ef5e44a2b7f2f2fa1f40c9952692c27f333270e4fa30901`
- **DIR** `My site/.git/objects/b8/` — 0 bytes
- **BINARY** `My site/.git/objects/b8/7ddb687dca547a395002e537ab84ff5a08db24` — 684 bytes — `abd14afa0be9b60d216db850eb79b01d8ecba4a9752fa10875aed2d809a0bc23`
- **BINARY** `My site/.git/objects/b8/dbb630bafbc286b74780c61a6e34bba275a1f1` — 831 bytes — `1b2fc76e77a50064235abf70a17b8db1d6550b9d019c19fa163538197ba48aac`
- **DIR** `My site/.git/objects/b9/` — 0 bytes
- **BINARY** `My site/.git/objects/b9/9a2509a7248a760e38cf97ac8240fff4a84c07` — 131 bytes — `f2fc50c185a7b9ea526629af2e3d230cb9143bf3cc446c8da19e18b56699a8fc`
- **BINARY** `My site/.git/objects/b9/a8f3475ce1fa7f1ad407e309e2f0b71d5b3c10` — 54 bytes — `69a7a98e3aec255a2a00a19464ac42b36c1ffd003167564900bfb2d4c8ad4515`
- **BINARY** `My site/.git/objects/b9/fe546a9abb062df2a7adb07dad5d389776a39b` — 1,622 bytes — `3bfc34d405f22b34235f89dea8b3866f1212b77b4c5dd08e474902d9dc818401`
- **DIR** `My site/.git/objects/bd/` — 0 bytes
- **BINARY** `My site/.git/objects/bd/a1536ce30ad5a71c429def59479eb9ffe27599` — 84 bytes — `ce3c10201569f55157862d1b63b624b64cad9f3055a2b6b1f0bdefb6959fff39`
- **DIR** `My site/.git/objects/be/` — 0 bytes
- **BINARY** `My site/.git/objects/be/15a0d3fec67139678c472c9f688a53754d1f0d` — 5,970 bytes — `f1fd92a56299cd84cef306b2a988bbd52de82e8c957e9513c155ba456e97064a`
- **DIR** `My site/.git/objects/c0/` — 0 bytes
- **BINARY** `My site/.git/objects/c0/c3013c5bb4e7812955eb144da144b512e73f36` — 122 bytes — `88d7c00ae98f76e4e5e9d71e840991760ab8a7af7ddd55783ef080f311b88d0a`
- **DIR** `My site/.git/objects/c1/` — 0 bytes
- **BINARY** `My site/.git/objects/c1/34ac8ba2f76e321f77ebda2018d841bb2f0d30` — 184 bytes — `9ae30cb78f391d453f2d40a3c51a13b56c36f729cb2e813fc5e21e85cb93af11`
- **BINARY** `My site/.git/objects/c1/fc4c044b6b4e52a60d15fc26985ac82e433fa7` — 166 bytes — `eb95b3ad3eae7e3a28e533916ae0c54afdc3ba7c3a4c227d92a4638631c1e160`
- **DIR** `My site/.git/objects/c2/` — 0 bytes
- **BINARY** `My site/.git/objects/c2/8d44d9eb7cf46b05413bb8c2e999c4b5b38132` — 308 bytes — `ec77ffb1ce639012695bd575c9ed7ab788caecbbeebedc812a1c8689eca3a221`
- **DIR** `My site/.git/objects/c3/` — 0 bytes
- **BINARY** `My site/.git/objects/c3/510b33f5dc222997fbff697f3b3107daca2da9` — 245,898 bytes — `de8ef4fb855f82678fde2bc2da170867bd2026ebaead362a9f6e3ccc2c89b4a8`
- **DIR** `My site/.git/objects/c6/` — 0 bytes
- **BINARY** `My site/.git/objects/c6/2186dec6566c2d514c1fe50a4ad04b3d0fd55c` — 982,660 bytes — `e4561810eeeaa6df3c625bc7550864e102064c80a05d8003dad33fbec57c7399`
- **DIR** `My site/.git/objects/c8/` — 0 bytes
- **BINARY** `My site/.git/objects/c8/748acc66b3fc6ac34237eae13bd34b23853d4a` — 8,029 bytes — `eec448e4cb919aa3c0ac957ff1191fff96fb510e7f9cad19bbc15dd0fe12972e`
- **DIR** `My site/.git/objects/c9/` — 0 bytes
- **BINARY** `My site/.git/objects/c9/28f5b8e41191577eb23738cae90ebee52b9a1d` — 71 bytes — `f442106ed26e25d769877e4bf6f248ea3918c4a3e2e500cfe8c8df16d82a138f`
- **BINARY** `My site/.git/objects/c9/64ddfa9606e9d6bd9031d25c001ce24b5ec861` — 3,471,281 bytes — `3158e884173c5413cac47c9c9485907fcb052829c4d2a2a2866199352bbd2160`
- **BINARY** `My site/.git/objects/c9/a58721fcba6d3921f2925ab208b73ee377f309` — 56 bytes — `56a00337643b314e8f4606c6948a71fa187f98d694c9ed109edc666a89203e25`
- **BINARY** `My site/.git/objects/c9/c755d5c9400bd9cd279f551f8543e968df33f4` — 877 bytes — `af06dfce13a8da72845d2516d909583f984cc83af95aa9c7819a72f09db8423e`
- **DIR** `My site/.git/objects/ca/` — 0 bytes
- **BINARY** `My site/.git/objects/ca/14d25fd413ad057db36f21e169af3f5016eaec` — 149 bytes — `3b5b9f5792f9d6ad0de7e1acb44ad383e04b9bb6a17a27698dea4218f6c1ae28`
- **DIR** `My site/.git/objects/ce/` — 0 bytes
- **BINARY** `My site/.git/objects/ce/4348db7530b7c62177a57ed6a2521a2a0925e5` — 165 bytes — `9fb7001187c8074b1c7e071a23f78b1e2938e9c3c631ac3f6fbee2fed4cfe97f`
- **BINARY** `My site/.git/objects/ce/f9f53f8b5e18365567ee359eea4151558cfc61` — 147 bytes — `700ba8c0d586f0ee3c5d3651a953258a0954661c90c14666ded672cb5206c0ee`
- **DIR** `My site/.git/objects/d0/` — 0 bytes
- **BINARY** `My site/.git/objects/d0/c74e858231c150c8fb7d11e3df0c774a617398` — 943 bytes — `fff3b9138b7e38f0334938b53b37c61b6a27609b3a109b5cb710854a8ef09ced`
- **DIR** `My site/.git/objects/d1/` — 0 bytes
- **BINARY** `My site/.git/objects/d1/125f2c67a90eea925e0be443b4c172caaa66bf` — 1,062 bytes — `daa2bd436e43863c13ace53411789779a46bba04c19d1035efb65241de78f5a0`
- **BINARY** `My site/.git/objects/d1/71abb2c3329ffabdecdf629d6f81f65fb33782` — 830 bytes — `ffe2a1f9629d98d6d89d2671762ead0b70e178f3dc2063747972ffbf5473400f`
- **DIR** `My site/.git/objects/d2/` — 0 bytes
- **BINARY** `My site/.git/objects/d2/9ddffec6c122861318500f755fc20c6ab24c0d` — 602 bytes — `918d8ade07dc036615f71b13df2361d427e54f72f6a379d462d69048bba3af0a`
- **DIR** `My site/.git/objects/d3/` — 0 bytes
- **BINARY** `My site/.git/objects/d3/48978d9c44d0d54847e9d70f69af728e37db0f` — 104,832 bytes — `3bb00f5d684331a1f97dad128cf1f18350f95fb4426757b9fc672089b9a69e0a`
- **BINARY** `My site/.git/objects/d3/7cb0d6be623835c7589ed5efb3d0e2e6e2ef3d` — 507 bytes — `8976255131997daf366f6f95e7e24f685252c6f059ccaaad8ef9d8c0587dd3db`
- **DIR** `My site/.git/objects/d5/` — 0 bytes
- **BINARY** `My site/.git/objects/d5/b93a1e52966e7b812b9c6a7ddd58341668f4e8` — 1,012 bytes — `60a1870c73f52337990181907fac9f879f399fa0280779573ce9c78d4ea93ef8`
- **DIR** `My site/.git/objects/d7/` — 0 bytes
- **BINARY** `My site/.git/objects/d7/a6be9717523b0c60fb24edd0fdad9cfd541270` — 165 bytes — `cbe3319a01bd78871495680e9d49498bec4130fec1ec7af0d843bed161976ae0`
- **DIR** `My site/.git/objects/d9/` — 0 bytes
- **BINARY** `My site/.git/objects/d9/0ac49ca96b029b452f001099b6b5c3235448bf` — 71 bytes — `d5a32b4862d67f17a30b1431b2909517fcfac413985a19d84beacb018b369569`
- **DIR** `My site/.git/objects/da/` — 0 bytes
- **BINARY** `My site/.git/objects/da/5e227c3dd859411e5ae0fc8f7c257d31fd9258` — 456 bytes — `331a7513300f0eddad6fb82261a6c105e63b4456b2598018c750047548e6f36a`
- **DIR** `My site/.git/objects/db/` — 0 bytes
- **BINARY** `My site/.git/objects/db/369aa2928bb545a1ae512bad146f83f6832acc` — 166 bytes — `32f75c8ec9b3b6efdc2b31a5be26d81cfecd5c306a998ff64fff1d17e6cd8d46`
- **BINARY** `My site/.git/objects/db/e8f5fc0be58cb88457077b452f54a498388eaf` — 355 bytes — `da8790595b3d27ea14a3eacd200234caa189b8bba9d71d39c218d9504d877c54`
- **DIR** `My site/.git/objects/dc/` — 0 bytes
- **BINARY** `My site/.git/objects/dc/35b2015d6daa28a4e8839d33df442146e8a4c8` — 310 bytes — `4b521604ad80e50fcf8a729fc2c7a71cfc2fe30a66751d47ddc095dc21545e78`
- **BINARY** `My site/.git/objects/dc/d3d607a38166ab8e19968af45730cce2385c7e` — 1,012 bytes — `238d8be46fab5a5fe53db63ad6c1b9f00bcce6020cf8c501ba0565d81c3926b9`
- **DIR** `My site/.git/objects/dd/` — 0 bytes
- **BINARY** `My site/.git/objects/dd/9f23aa96fc2735e18a929d9cc21ff118cd1692` — 164 bytes — `747c1eb4b34daa051b1796b5b39fbe1899613daf004bfde0fdf6a6cf6b8ac70e`
- **DIR** `My site/.git/objects/df/` — 0 bytes
- **BINARY** `My site/.git/objects/df/6fd3e5176abf548b1866341381408be3c69612` — 164 bytes — `a3ed178624ac2ee6e43dd34d008f5d865664fb7b0a6d10b6f1cd8fe69dd13523`
- **DIR** `My site/.git/objects/e0/` — 0 bytes
- **BINARY** `My site/.git/objects/e0/1a640233baa8b618c40f36972ee49988efebfe` — 389 bytes — `58d755bf03a5400886ade592015495aef96a8f35584e023bf002d16e2e8a96c0`
- **BINARY** `My site/.git/objects/e0/4bcb771f186e81be693ff22c36458817e014f6` — 2,263 bytes — `1441287efe139c0d0c9757e581f0aa05726d24976d2abf6e23eabba742c0c5a2`
- **DIR** `My site/.git/objects/e1/` — 0 bytes
- **BINARY** `My site/.git/objects/e1/00c7f6a4b12ddc1b2afd63d06c8069a67a23be` — 173 bytes — `e36aec953bd53772bde1baa649782f8d6ce0e3b9ec4e43d03e1df002adab9160`
- **BINARY** `My site/.git/objects/e1/247117ae55ef234e0f96998327b9ff84fdd043` — 71 bytes — `751b43f48f7e9743f07260470ca0db15e30c3e0acef87ec687ee10b882d3af60`
- **BINARY** `My site/.git/objects/e1/26a0d6b8e70ebf405c3720544ffa47af04074e` — 165 bytes — `a0c4dd56ee6182b360879a902b1982fbec3a10bad7bcb9dcf4bde922dd7c3a84`
- **DIR** `My site/.git/objects/e2/` — 0 bytes
- **BINARY** `My site/.git/objects/e2/64d194c3badd1eef2692372bc7efbe0d38cff5` — 318,548 bytes — `75020f433741e26827cc74bb8c5e4cba21f8f8cdf890283d3697fa130e3a96bb`
- **BINARY** `My site/.git/objects/e2/87248276a8980f129eb0679b579c172e1bcf9e` — 168 bytes — `cb30244bede560ad6cdc87f01927a654c4538c34e96f22a5ad0b95db8564494a`
- **DIR** `My site/.git/objects/e4/` — 0 bytes
- **BINARY** `My site/.git/objects/e4/233f26b62bb359a7119413d271b5e517b1cb8e` — 52 bytes — `0048fc9289daa6bd6d800d21f236b58306ce3b8719f53d39505af50447c8fb64`
- **BINARY** `My site/.git/objects/e4/2bf91c98a2aa8cff96585fff065b58bf7b2434` — 167 bytes — `535f8ccd44b75f936cf7faf17c7c04fcd4419485de576b8a413ef3722cc13002`
- **BINARY** `My site/.git/objects/e4/e8d4d02626a0d6f4143e57a55d33b74b460e6a` — 1,805 bytes — `c257a1c516c5467d48f32cef1ee566f4dfeef34b1c20c52896f0ad9f12d70a31`
- **DIR** `My site/.git/objects/e5/` — 0 bytes
- **BINARY** `My site/.git/objects/e5/14c8ce249a84f851f1757921012aa472d8cc3a` — 1,145 bytes — `20d69095332ba82695f1e809fafaf1ff9a0614882d4c96847180b8fff6a2f194`
- **DIR** `My site/.git/objects/e6/` — 0 bytes
- **BINARY** `My site/.git/objects/e6/614a2a0c8725aa59f2c9f8e92c66e5ca513f16` — 454 bytes — `c0804f3b4fd8a530a92548122113859e5375d2275088d1632f7c05695541d8d9`
- **BINARY** `My site/.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391` — 15 bytes — `164c5fa8067facf1a43f09ce3d0e35ebf53a7f5723ecbf15a8667cfc53c26f6c`
- **BINARY** `My site/.git/objects/e6/e3b75321014973383fe844ccb5170d4fa3bfff` — 1,054 bytes — `90779b34daa99ae4a1ed3b9707deb43583ccbf658efe7682b1ef47a6a8759a7a`
- **DIR** `My site/.git/objects/e7/` — 0 bytes
- **BINARY** `My site/.git/objects/e7/e7b1be680757ece6e4ae3e8cdaf88df0256625` — 456 bytes — `5b26970a0e430576cd17426c3efa3625a2b4771791982f02b636e5414eec9574`
- **DIR** `My site/.git/objects/e8/` — 0 bytes
- **BINARY** `My site/.git/objects/e8/8846818b14b81ca74b4adf72a70ba8bc85ba2d` — 165 bytes — `95fd9d916fe8311020759b670cce61f7b4f9552d2657c8d0b8b29e9e65942552`
- **BINARY** `My site/.git/objects/e8/b9a5158539cf5bc64e84b49636a8a40f6e3e2c` — 5,754 bytes — `88296d26e673a075c17955f3b48ab1104f80ebb8de1a414d9c69cdec8f84aab8`
- **DIR** `My site/.git/objects/e9/` — 0 bytes
- **BINARY** `My site/.git/objects/e9/ebc3012f4c4e18e2d962a43490a9d72775ac9b` — 456 bytes — `3bf909f703e45c2bb94e8f1311b1630179bb102f7e8b07ba32fe486986918aa8`
- **DIR** `My site/.git/objects/ea/` — 0 bytes
- **BINARY** `My site/.git/objects/ea/60fb2bf4b865155293c3bc407b665183db8157` — 51 bytes — `080aceb60cd479841912eaf658474e7e59d4006a975ee1f61d0c3d4b00d0d7b0`
- **DIR** `My site/.git/objects/eb/` — 0 bytes
- **BINARY** `My site/.git/objects/eb/56cf6cb36b9054e12602f7be19a4377fff8338` — 54 bytes — `b3ca317f2c212eb8f023deac2a32d594bdddd315aa20a4aa6019836f98618fe3`
- **BINARY** `My site/.git/objects/eb/ca071aec662a71b2f0550e841a223a7b05604b` — 455 bytes — `50ca9c5189524b34195160adc1f74ce0a64eb65c124ad13329c44a648210a294`
- **DIR** `My site/.git/objects/ec/` — 0 bytes
- **BINARY** `My site/.git/objects/ec/183ed99061461636906c8e2fe0797d7d9654ec` — 3,240 bytes — `0f3e0f029e7a0cdaa8f1ef9ba42e9c53b8f531533f678692379636bda0cd246b`
- **DIR** `My site/.git/objects/ed/` — 0 bytes
- **BINARY** `My site/.git/objects/ed/57f50694862fcd2c85e2c2b75a4178113c64c9` — 683 bytes — `884df9b77ad844f82c0f36614865368556e91e4b43a4442327c3664ac3f7ca21`
- **DIR** `My site/.git/objects/f2/` — 0 bytes
- **BINARY** `My site/.git/objects/f2/2c3f739a1b7a44a962ccdf33d9b841ff3d9d63` — 684 bytes — `1120a04e10677361cd8f43c2f66f1fd3fded2c87ff62cf5e373cac7c9c1c16ea`
- **BINARY** `My site/.git/objects/f2/d6e76de812b6b2e4a503091cb8a21fe23e9c4d` — 165 bytes — `08fdc8a33a06d306541d975e7d68b039427e29a3536a7e9198fb29c9535c9304`
- **BINARY** `My site/.git/objects/f2/f1b92241ba904f5b75a6be340afd42cb2068ed` — 1,138 bytes — `886c47ab153dc7f84f4891e59021fae5bb8b8b6f7ff8c52d9943ac57fa3aa088`
- **DIR** `My site/.git/objects/f4/` — 0 bytes
- **BINARY** `My site/.git/objects/f4/3000d197751decb604a5e920ef0892a2ca97eb` — 1,581,109 bytes — `8337ba9f6db767cd79635d77cd79c5a6db07001938af4ec83fda065d785e403c`
- **BINARY** `My site/.git/objects/f4/30c15bcfb7524fb7a13deec370aad344bd4fb7` — 169 bytes — `d9c1e469a1c744f450d204ac339b224893e7ae5a677e9d487067f4b01f240ed3`
- **BINARY** `My site/.git/objects/f4/f5818c4171eb391096181b1f68aea3d78ac303` — 4,196 bytes — `dc12030530c692b632f246538454a9ad5967ae5dd509cdd6515686dc4a6275a9`
- **DIR** `My site/.git/objects/f6/` — 0 bytes
- **BINARY** `My site/.git/objects/f6/5c01189d69145699f8015ce4b0733b6ef85950` — 880 bytes — `72a424809cb91a966baabdeddbe2364aaff6288b5dcfe4e2781e5dc2a28924dd`
- **DIR** `My site/.git/objects/f7/` — 0 bytes
- **BINARY** `My site/.git/objects/f7/1df6abe4283f4581c2a42dec035d0faf5b9c61` — 5,450 bytes — `99b935cff766f6b7609cd4c8a3d8049e95310689ba1d07a8dc7390e5e3fa04e2`
- **BINARY** `My site/.git/objects/f7/334ba3a935a17dabb53c20157ea253b3ac6ee6` — 165 bytes — `dfa2d1f0639fad1cbd8efef822b755eeac4190dcac2be41986b4260490c613b4`
- **BINARY** `My site/.git/objects/f7/9eea7e8d40bb731408cbaa5000127198fd2982` — 166 bytes — `c900275ea239e490f0d57a691a71a85774b62ef86549320df403737739f6f0f9`
- **BINARY** `My site/.git/objects/f7/dd0ed05ba0f9e0c8f0efba60b48e524a6d9fda` — 150 bytes — `478f2bdd9bd094a02c8baced32c2d3eae2396453e89acfc0de761e9eae9ca5c9`
- **DIR** `My site/.git/objects/f8/` — 0 bytes
- **BINARY** `My site/.git/objects/f8/92f5aaa22ef6208a855aef34f2b54a9a014271` — 167 bytes — `c32cbbc9020c5483b1f30cce4f8bd3f1575242afa680b19e341681f5bed394b4`
- **BINARY** `My site/.git/objects/f8/9c70fc62eadfa0afe1e207c8bf2cdfbe31ca53` — 422 bytes — `88b1de2f869b7454dd02ec3ef4981edda9d6952a8838a6aa961ca37181d85302`
- **DIR** `My site/.git/objects/f9/` — 0 bytes
- **BINARY** `My site/.git/objects/f9/a9b1234891ad45008f0da36d988de413c71730` — 831 bytes — `fbf058c5e01e5615b60ea12b915ba57744bcb2ba9ba5d9f2f8669e7c176a45a0`
- **DIR** `My site/.git/objects/fa/` — 0 bytes
- **BINARY** `My site/.git/objects/fa/3142b4f9a932111f29b62b2eea4bccfb0f8fdd` — 5,170 bytes — `a87217322b67103bab669c11f88a373702a9397642b758dece011a53b7adcc8f`
- **BINARY** `My site/.git/objects/fa/5de616d9c9616515bfaab41c0b857b1dcb0df2` — 269 bytes — `ea5233443ff66d717019dcff9b34f06b59196b3684546b23fcf4eaf1c855ea91`
- **BINARY** `My site/.git/objects/fa/6ea01267ac6a4de4d72de9728317a6390bf77a` — 56 bytes — `083d072218f9a1c27eeb50984b0c2353b5c7168975e3b2a7dfa2e0ec02a251c6`
- **BINARY** `My site/.git/objects/fa/8fe559ec62edde2f82985f63743d3fcfab3c11` — 77,017 bytes — `0a51973b2583fbe35df5639d55275e0f25e296d3c5a236f07034ad5fa267303f`
- **DIR** `My site/.git/objects/fb/` — 0 bytes
- **BINARY** `My site/.git/objects/fb/ecac5a9ecfc86dbdfefda81842ffe49b358a85` — 609 bytes — `4873e723a4b55bd56c136b17c4bbe01dd9f683fd738e97a042b2a42ad5a7ac5c`
- **DIR** `My site/.git/objects/fc/` — 0 bytes
- **BINARY** `My site/.git/objects/fc/1a90085d93d98fa60affa774eef9195564d4f6` — 70 bytes — `0047537560b0949aa53457cf5627d7d984337f8a1d490adc92d5e738dc4b9aeb`
- **DIR** `My site/.git/objects/fd/` — 0 bytes
- **BINARY** `My site/.git/objects/fd/147edc5ce65f2127e2c831272245110ba27b7e` — 388 bytes — `cea95205b1589c05422b95f385e84fbfbd72ba8eb9c6841c9516c6d059c2091a`
- **BINARY** `My site/.git/objects/fd/7c54ff15f350c10c11d2b8137cae28efca62d3` — 162 bytes — `c32e90929e29e77afbc95da5715194d7c4977eeac068b74a3f6ddab67f1f4705`
- **BINARY** `My site/.git/objects/fd/a79fe4f0b3e9e9a9153c7d244a7dbe3f78c5e0` — 122 bytes — `ff95684aa5660bc2455cea1aa4ae80a9f7a6ab02a582282b844328a46f147d80`
- **DIR** `My site/.git/objects/ff/` — 0 bytes
- **BINARY** `My site/.git/objects/ff/3146989ede405f3a4b9458f485c1970991fecb` — 829 bytes — `7f8d148ca6279f1ba877120f925b903e96bd85c0acce9740bea4b11f0cbac7b6`
- **BINARY** `My site/.git/objects/ff/38797380e86c466badcfbbf814c7d4772257fa` — 83 bytes — `65713db6b4c3c021a5d028923b114ee6718be47fa360ae2ff30249f8e5d08768`
- **BINARY** `My site/.git/objects/ff/64c9295c5f5f3e0812b6b34725887e0b0eb4b1` — 71 bytes — `24c83375299e58563a83d3f4d6fccb26382e1acde84dc656e1bc0946b0fd2095`
- **DIR** `My site/.git/objects/info/` — 0 bytes
- **DIR** `My site/.git/objects/pack/` — 0 bytes
- **TEXT** `My site/.git/ORIG_HEAD` — 41 bytes — `24a09df9369cf34d0d8e80cba5b28b6f035a7e84895621023e7e318485fcde12`
- **TEXT** `My site/.git/REBASE_HEAD` — 41 bytes — `c04ee1ae8fa26d6cfc0af8303a2b6a380459ca5309d9e743ade3bb0672796515`
- **DIR** `My site/.git/refs/` — 0 bytes
- **DIR** `My site/.git/refs/heads/` — 0 bytes
- **TEXT** `My site/.git/refs/heads/main` — 41 bytes — `0a2595683e6aa0ae99748569fd576ebfd98e525b6cfe5862b24570f6d3237dfd`
- **DIR** `My site/.git/refs/remotes/` — 0 bytes
- **DIR** `My site/.git/refs/remotes/origin/` — 0 bytes
- **TEXT** `My site/.git/refs/remotes/origin/HEAD` — 30 bytes — `2bb6a24aa0fc6c484100f5d51a29bbad841cd2c755f5d93faa204e5dbb4eb2b4`
- **TEXT** `My site/.git/refs/remotes/origin/main` — 41 bytes — `0a2595683e6aa0ae99748569fd576ebfd98e525b6cfe5862b24570f6d3237dfd`
- **DIR** `My site/.git/refs/tags/` — 0 bytes
- **TEXT** `My site/about.html` — 17,151 bytes — `75523ac4e8b5cd453edaa6961640414228ee8ca277392ca6c3a7e958c2c275c5`
- **DIR** `My site/assets/` — 0 bytes
- **DIR** `My site/assets/components/` — 0 bytes
- **TEXT** `My site/assets/components/navbar.html` — 1,815 bytes — `c425e3b3a3322befe0a8a777358f2dd7864f9445651f9c3285932e408102a7ed`
- **DIR** `My site/assets/css/` — 0 bytes
- **TEXT** `My site/assets/css/style.css` — 9,249 bytes — `40a5bbc0fccedc0d5a30b6a77b5c62c61b90a4c93657fd103ede85a716a7dc1a`
- **DIR** `My site/assets/images/` — 0 bytes
- **BINARY** `My site/assets/images/cert1.webp` — 251,698 bytes — `e4463562f472d3b4c9e12820a133719ee171f3e97a0c7ec1bc97aaf444ef67cd`
- **BINARY** `My site/assets/images/cert2.webp` — 249,340 bytes — `f7cf65982572d2abf162aeff4e8f688bc5fd5b9e8a12d0fea1593066d02b1090`
- **BINARY** `My site/assets/images/cert3.webp` — 91,230 bytes — `edb7911ad9de6c12463a56f9f33ee2cf68a6c6ef6218b971a0b0215cb101a5d1`
- **BINARY** `My site/assets/images/cert4.webp` — 227,650 bytes — `4a4bc5a05236483b8f8f42bfa1b9d52ae8be39206129c78367981f5d6add9259`
- **BINARY** `My site/assets/images/cert5.webp` — 253,718 bytes — `0d694009c2e1fb03571eef327937910d6498333d4c044ab63ed5a320cba10fab`
- **BINARY** `My site/assets/images/cyber.webp` — 106,062 bytes — `36b51be8d3893d918738891442892e6e41470ecd247693b1fa57ee55c75e0ca6`
- **BINARY** `My site/assets/images/profile.webp` — 80,034 bytes — `32b924aed776d25103e1bdd3247873533c719067d801624f858c58b76ab17979`
- **BINARY** `My site/assets/images/project1.webp` — 144,514 bytes — `c92bfd58884471ab1b045012a511f23256549c3cd2f42e8943e5e52b738463a2`
- **BINARY** `My site/assets/images/project2.webp` — 13,770 bytes — `ee3217aa83e3bd90b2d0f8b2b9cd28d37492160ea88b80334030ac349b539bfa`
- **BINARY** `My site/assets/images/project3.webp` — 144,514 bytes — `c92bfd58884471ab1b045012a511f23256549c3cd2f42e8943e5e52b738463a2`
- **BINARY** `My site/assets/images/project4.webp` — 12,414 bytes — `205dab6e4f582af27a5e721b4328f52d235a3f0c5691cf2f6bd9ba110272e22e`
- **DIR** `My site/assets/js/` — 0 bytes
- **TEXT** `My site/assets/js/ai-bg.js` — 1,846 bytes — `3b0a21ed66c1c4223f37bd7e0774075bf9715a76b310955c0e19af2e604704cc`
- **TEXT** `My site/assets/js/main.js` — 1,440 bytes — `bdb4ff445ecd3adcd75705bdedac04e465cc78eac69e3175ef1d9b823e2a676d`
- **TEXT** `My site/assets/js/navbar.js` — 483 bytes — `91a1ab249b8c80729b79bd1f8c0150e70c3c34bf76ccd8768e2b3021b735b912`
- **DIR** `My site/assets/resume/` — 0 bytes
- **BINARY** `My site/assets/resume/Pratyush_Biswas_Resume.pdf` — 121,177 bytes — `a575e9e8d81081e4c5806786b6115e0e44567bf2629fb005507c79bb97fe308b`
- **TEXT** `My site/certificates.html` — 15,550 bytes — `b90c7701d066b44405a0ca0b9934bae004e77d17eb9233a4443bda104e2f5768`
- **TEXT** `My site/CNAME` — 19 bytes — `29d47ddac1b038c2435d77448fea4161ccb9fc966e6b45e95d30d32263e017bb`
- **TEXT** `My site/contact.html` — 19,168 bytes — `59f87e20f0b33d2816a47d145387a4b85e0ad6bc092c3bd86af3efdf2a2d1406`
- **TEXT** `My site/experience.html` — 26,088 bytes — `42e8cafb41e1ba110c2e941795f2e467105bfc111d606b2a13b04a5328ca3128`
- **TEXT** `My site/googlec8d8e01c9cc9f6eb.html` — 53 bytes — `8a2e4c634df7802842690f3b4f02d7a961fac6e22c8293e23fcb3aac51e05be9`
- **TEXT** `My site/index.html` — 16,225 bytes — `ceade2f83fe453a136ea39d1025e00475d27230eb5699dfc4694c83a44a6e053`
- **TEXT** `My site/projects.html` — 20,950 bytes — `b7a977a4d6d7331b8f5f83491597fc583a636dc2805a035940aa64c9e0dab267`
- **TEXT** `My site/resume.html` — 779 bytes — `fc05145ac2532a2a7cf31ab5b5c294b930e7025720dbd3e8ff7a0b8b1db5c149`
- **TEXT** `My site/sitemap.xml` — 177 bytes — `d0b1dcfcca9112bda3277beaaa80d1b9c216f7d373d5eea3077d39a7608adb83`
- **TEXT** `My site/skills.html` — 15,728 bytes — `8c951134359f3f6b497c3d2fdbd33befdd657cd702ff2ed73eac2f803db3ced8`
- **TEXT** `My site/style.css` — 8,960 bytes — `ba0e552dc90a9782fa724f6b9e1c3bc0fa78b908e5b6cb0959c67ec063be1882`

## 8. Claude Usage Notes

For code analysis, the authoritative current source is the verbatim source-file section above. The original binary images are present in the ZIP but only their metadata is represented here. The resume PDF's text has been extracted so its contents are also searchable in this Markdown.

If Claude needs to modify the actual website assets (images/PDF), upload the original ZIP alongside this Markdown or provide the individual binary assets. For pure code review, debugging, redesign planning, and content changes, this Markdown contains the complete textual project source outside Git internals.
