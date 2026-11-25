# Varun’s academic website

An academic website using [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes), pinned to version 4.28.1, and hosted on GitHub Pages.

## Update content

- `index.md`: biography and research interests
- `_pages/research.md`: publications, working papers, and policy writing
- `_pages/teaching.md`: courses and syllabi
- `_pages/cv.md`: CV page
- `_pages/conference.md`: conference archive
- `_pages/name.md` and `_pages/kannada.md`: personal name and Kannada pages
- `assets/documents/`: CV and syllabi
- `assets/papers/`: research PDFs
- `_data/navigation.yml`: navigation
- `_config.yml`: identity, links, theme, and site settings
- `assets/css/main.scss`: visual customization
- `_includes/author-profile.html`: profile sidebar, styled after Shiro Kuriwaki’s site

The original `academic_website/` folder is kept locally and excluded from both Git and the published site. Only selected website assets are copied into `assets/`. The private job resume and editable Word document are not published.

## Run locally

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

Open <http://localhost:4000>. GitHub Pages builds from the `main` branch, at the repository root. Theme files are fetched by `jekyll-remote-theme`.

## Domain

The initial site uses `https://varun-k-r.github.io`. No custom domain or DNS change is included. When ready to move the existing domain, configure it in GitHub Pages and update `url` in `_config.yml`.

## Content sources

Migrated from the existing public site at <https://www.varun-kr.com/> and the locally supplied `academic_website` folder. Page text is preserved from the existing website. Document links point to the corresponding supplied local files. Original paper filenames are preserved where possible.

Minimal Mistakes is © Michael Rose and contributors and distributed under the MIT license.
