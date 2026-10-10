# Aiya Gabdulkyzy — Portfolio

Personal portfolio website built with plain HTML, CSS and JavaScript.

**Live site:** https://aiya5.github.io/iwamad-sis1-portfolio/

## What this is

A one-page portfolio with three sections — About, Projects and Contact.
It includes a dark/light theme toggle and a contact form with basic
validation. No frameworks or build tools; just HTML, CSS and vanilla JS.

## Design decisions

**Layout.** I went with a single centred column and a max width of 900px.
It keeps the text easy to read on wide screens and lets the whole page
flow naturally on a phone without any horizontal scrolling.

**Colours.** Everything is driven by CSS variables so the light and dark
themes stay consistent. I used one blue accent for links and buttons, and
kept the rest neutral. The same variables are reused in both themes, only
the values change.

**After testing on a phone.** The projects grid started as one column on
mobile, but three cards in a row was too tight at 1200px, so I set it to
become a two-column grid at 700px and three columns at 1000px. I also
increased the paragraph line-height a bit because the text was hard to
scan on a small screen.