# Navigation & A11y Test Suite

This repository contains a test suite for researching screen reader behavior across different navigation methods in modern web development.

## Structure

The project is divided into three sub-projects, each representing a different architectural approach:

1.  **`root-html` (Port 8080)**: Control group using traditional Server-Side Navigation (Static HTML).
2.  **`react-nav` (Port 5173)**: Client-Side Navigation (SPA) using Vite + React Router.
3.  **`next-nav` (Port 3001)**: Hybrid Navigation using Next.js App Router.

## Test Matrix

Each sub-project implements 4 variations of a page to test accessibility announcements, named after Greek numerals:

| Variation | Original Intent | Description | Expectations |
| :--- | :--- | :--- | :--- |
| **Alpha** | Perfect | `<main>`, `<h1>`, Unique Title | Ideally announced perfectly. |
| **Beta** | Slightly Broken | `<main>`, `<h2>` (No H1), Unique Title | Should announce title, but heading hierarchy is skipped. |
| **Gamma** | Broken Structure | `<div>` (No `<main>`), No Headings, Unique Title | Should announce title, but user loses landmark/heading navigation context. |
| **Delta** | Completely Broken | `<div>`, No Headings, **Stale Title** | Worst case: User might not know page changed if title doesn't update. |

## Navigation Methods Tested

Within the frameworks (React/Next.js), we test:
1.  **Framework Link**: Standard `<Link>` component (Client-side routing).
2.  **Native Anchor**: `<a href>` tag (Forces full page reload).
3.  **Programmatic**: Button triggering router push (Simulates form submission redirects etc).

## How to Run

1.  Install dependencies:
    ```bash
    npm run install:all
    ```

2.  Start all servers:
    ```bash
    npm start
    ```

Access the entry point at: http://localhost:8080
