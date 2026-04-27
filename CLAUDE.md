# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kozo Tools is a static web application providing browser-based utility tools (QR code generation, bookmarklets for QR codes and cookie management). It is a Japanese-language site with no build step, no package manager, and no backend.

## Development

No build or install step is required. Open `index.html` directly in a browser or serve via any static file server.

All dependencies are loaded via CDN:
- Pure.css 3.0.0 (jsdelivr)
- jQuery 3.2.1 (code.jquery.com)
- QRCode.js 1.0.0 (cdnjs)

## Architecture

- `index.html` — Single-page app entry point containing all markup and tool UI
- `js/main.js` — All application logic in a single jQuery IIFE; handles QR generation, modal dialogs, and bookmarklet instructions
- `css/main.css` — Styling including Pure CSS spinner animation, responsive grid via Pure.css, and modal overlay system
- `img/` — Tutorial GIF images loaded dynamically into modals

The app has three tools: QR code generator (QR KOZO), bookmarklet QR generator (Dokodemo QR KOZO), and cookie bulk-delete bookmarklet (Cookie KOZO).
