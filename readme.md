# Sujal Khatiwada - Portfolio Website

## Overview

A single-page personal portfolio design built with plain HTML, CSS and vanilla JavaScript.

## Structure

```
.
├── css/
│   └── style.css
├── images/
│   ├── blog/
│   ├── hero/
│   ├── logo/
│   ├── testimonials/
│   └── work/
├── index.html
└── readme.md
└── robots.txt
```



## Design tokens


| Token                      | Value               | Use                               |
| -------------------------- | ------------------- | --------------------------------- |
| `--main-neutral-white`     | `#ffffff`           | Page background                   |
| `--main-neutral-dark-tone` | `#161616`           | Dark cards and footer             |
| `--accent-lime`            | `#ddf247`           | Badges, highlights, active states |
| `--brand-gradient`         | `#b91c1c → #fb7185` | Buttons and gradient text         |




## Responsiveness

Breakpoints are declared in descending order at the end of `css/style.css`:
`1080px`, `950px`, `850px`, `700px`, `560px` and `400px`. Multi-column grids
collapse progressively, the desktop navigation swaps for a hamburger menu at
`950px`, and headings scale fluidly with `clamp()`.

## Technologies Used ( webpage design part )

- HTML5, CSS3, JavaScript
- Font Awesome 6.4.0 for icons
- Google Fonts - Plus Jakarta Sans, Inter
- Inline SVG illustrations, so the page needs no image downloads

