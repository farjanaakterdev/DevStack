<p align="center">
  <img src="src/assets/logo-text.png" alt="Dev Stack" width="240" />
</p>

<h1 align="center">Dev Stack</h1>

<p align="center">
  Discover, explore, and combine the best technologies for your next project.
  Build your own curated development stack — one card at a time.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-blue?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-38bdf8?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8-646cff?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/react--toastify-notifications-6ec584" />
</p>

---

## About

Dev Stack is a single-page web app that showcases a catalog of modern web
technologies. Users can browse technology cards, pick the ones they love, and
build a personal "stack" in a side panel — with instant toast notifications for
every action.

## Tech Stack

Built with a modern toolchain:

- **React 19** + **TypeScript** — UI and type safety
- **Vite** — fast development and build tooling
- **Tailwind CSS v4** — utility-first styling with a shared gradient theme
- **react-toastify** — friendly toast notifications

## Features

- **Interactive Technology Catalog** — 18 technology cards in a responsive
  1/2/3-column grid, each with icon, badge, rating, difficulty, and description.
- **Your Stack Sidebar** — click "Add to Stack" to collect technologies; remove
  individual items or clear everything with one "Remove All" button.
- **Toast Notifications** — every add, duplicate attempt, and removal gives
  immediate visual feedback, plus a loading spinner while data loads.

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# production build
npm run build
```

> The technology catalog is loaded from a local JSON file (
> `src/data/technologies.json`) at runtime using `fetch`, which is why a loading
> spinner appears on first load.

## Project Structure

```
src/
├── components/
│   ├── navbar/      # Sticky responsive navbar
│   ├── hero/        # Hero banner section
│   ├── technology/  # Cards, "Your Stack" panel, section logic
│   └── footer/      # Footer with link groups
├── data/
│   └── technologies.json   # Technology data source
├── assets/                  # Images
└── App.tsx                  # App entry
```

---

## React Questions & Answers

### What is JSX, and why is it used in React?

JSX is a syntax that looks like HTML but is written inside JavaScript (usually
in `.jsx`/`.tsx` files). React uses it to describe what the UI should look like,
and it gets transformed into normal JavaScript `React.createElement` calls.
It makes code much easier to read and write — for example, in
`TechnologyCard.tsx` I write `<article className="...">...</article>` instead of
calling `createElement` by hand.

### What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are
read-only — the child cannot change them. **State** is data that lives *inside* a
component and can be changed over time with setter functions. In this project,
`TechnologyCard` receives the technology as a `prop`, while `selected` (the list
of technologies in your stack) is `state` stored in `TechnologiesSection`.

### What does the useState hook do, and where did you use it in this project?

`useState` lets a component remember values between renders — the value plus a
function to update it. Whenever the value changes, React re-renders the
component. I used it in a few places: `selected` for the stack list,
`technologies` for the fetched data, `isLoading` for the loading spinner, and
`menuOpen` in the navbar for the mobile hamburger menu.

### What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after rendering, like fetching data or timers.
Loading the JSON happens outside of React's normal rendering, so I used
`useEffect` in `TechnologiesSection` to `fetch` the data once (with an empty
dependency array), then store the result in `state`. That way the UI only
renders cards after the data exists.

### Why does every item in a .map() list need a unique key prop?

React uses `key` to tell list items apart so it can efficiently know which items
were added, removed, or changed. A stable, unique key (like `technology.id`)
lets React reuse existing DOM nodes instead of re-creating everything. In this
app, I pass `key={technology.id}` when rendering the cards, and key the stack
items with their `id` too.

### What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.
In `YourStack.tsx`, I render an empty "Your stack is empty" dashed box when
nothing is selected, otherwise I render the list of stacked technologies:

```jsx
{selected.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <ul>{/* list of technologies */}</ul>
)}
```

### How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data **down** to a child using props — for example,
`TechnologiesSection` passes the `technology` object and `isSelected` to each
`TechnologyCard`. To send data **up**, the parent passes a *function* as a prop,
and the child calls it: `TechnologyCard` calls `onAdd(technology)` (a prop
function) when the button is clicked, which updates the state in the parent,
and the change is reflected back down through props.

---

<p align="center">
  Made with ❤️ using React, TypeScript, Tailwind CSS, and Vite
</p>