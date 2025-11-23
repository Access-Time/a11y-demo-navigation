# Navigation & A11y Test Suite

This repository contains a test suite for researching screen reader behavior across different navigation methods in modern web development.

**Live Demo:** [https://a11y-demo-navigation.vercel.app/](https://a11y-demo-navigation.vercel.app/)

## Structure

The project is divided into three sub-projects, each representing a different architectural approach:

1.  **`root-html`**: Control group using traditional Server-Side Navigation (Static HTML).
2.  **`react-nav`**: Client-Side Navigation (SPA) using Vite + React Router.
3.  **`next-nav`**: Hybrid Navigation using Next.js App Router.

## Test Matrix

Each sub-project implements 4 variations of a page to test accessibility announcements, named after Greek numerals:

| Variation | Original Intent | Description |
| :--- | :--- | :--- |
| **Alpha** | Perfect | `<main>`, `<h1>`, Unique Title |
| **Beta** | Slightly Broken | `<main>`, `<h2>` (No H1), Unique Title |
| **Gamma** | Broken Structure | `<div>` (No `<main>`), No Headings, Unique Title |
| **Delta** | Completely Broken | `<div>`, No Headings, **Stale Title** |

## Navigation Methods Tested

Within the frameworks (React/Next.js), we test:
1.  **Framework Link**: Standard `<Link>` component (Client-side routing).
2.  **Programmatic**: Button triggering router push (Simulates form submission redirects etc).

## How to Run

### Prerequisites
- Node.js installed on your machine.

### Installation & Startup

This project uses a monorepo-like structure. We have a helper script to install dependencies for all sub-projects at once.

1.  **Install dependencies**:
    ```bash
    npm run install:all
    ```
    *This command installs dependencies for the root, `react-nav`, and `next-nav` projects.*

2.  **Start all servers**:
    ```bash
    npm start
    ```
    *This uses `concurrently` to spin up the static server, Vite dev server, and Next.js dev server simultaneously.*

3.  **Access the application**:
    Open your browser to the entry point: **http://localhost:8080**

    From there, you can navigate to the cross-origin sub-projects:
    - React App: http://localhost:5173
    - Next.js App: http://localhost:3001

    > **Note:** The links to the React and Next.js apps in `root-html/index.html` are currently hardcoded to the production URLs (Vercel). To fully test the local environment, you must manually edit `root-html/index.html` and update the `href` attributes to point to your local ports (5173 and 3001).

## Contributing

Contributions are welcome! If you are interested in adding other frameworks (e.g., Vue, Angular, Svelte) or additional accessibility test cases:

1.  Fork the repository.
2.  Create a new directory for your framework implementation (if applicable).
3.  Implement the Alpha/Beta/Gamma/Delta test cases.
4.  Open a Pull Request.

We want this to be a comprehensive resource for testing navigation accessibility, so feel free to propose changes or improvements.
