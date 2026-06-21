# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

- Simple personal photo gallery website
- Static HTML/CSS/JS project, no build system needed

## Development

- Open `index.html` directly in a browser to view the site
- No build step required
- Add photos to the `photos/` directory

## Architecture

Simple static site structure:
- `index.html` - main page
- `css/style.css` - styling  
- `js/script.js` - gallery logic
- `photos/` - photo storage

## Principles

- KISS: prefer straightforward over clever
- YAGNI: avoid speculative abstractions
- Rule of Three: only extract when pattern appears 3+ times
- Each change must be independently revertible
- Do NOT mix refactoring with behavior changes

## Rules

- Follow the plan exactly — do not add extra improvements
- Each change must preserve existing behavior (refactor only)
- After each file edit, validate the change works
- If a change turns out harder than expected, skip it and move on
- Commit each logical change separately with a clear message

## Instructions

1. From assessment, select top 3-5 highest-impact, lowest-risk improvements
2. For each: write precise plan (which file, what to change, why)
3. Order so each change is independent
4. Estimate blast radius - how many other files affected