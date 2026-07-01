# HookHub — MVP Spec

## Overview

HookHub is a browsable directory of cool, open-source Claude Code hooks. Each entry points back to the GitHub repository where the hook actually lives — HookHub itself doesn't host hook code, it curates and displays it in a visual, browsable format (as an alternative to flat README-style "awesome lists" like `hesreallyhim/awesome-claude-code` or `disler/claude-code-hooks-mastery`).

## MVP Scope

The MVP does exactly one thing: **display a list of hooks**. Everything else is explicitly out of scope for now.

**In scope:**
- A single main page rendering all known hooks in a grid.
- Static/hardcoded hook data (no backend, no database, no CMS).

**Out of scope (non-goals for MVP):**
- Search, filtering, or sorting.
- Submitting new hooks via a form/UI.
- User accounts or authentication.
- Any backend API or persistent storage.

## Data Model

Each hook is a plain object with exactly four fields:

| Field | Type | Description |
|---|---|---|
| `name` | `string` | The hook's display name. |
| `category` | `string` | One of the categories below. |
| `description` | `string` | Short, one-or-two sentence summary of what the hook does. |
| `repoUrl` | `string` | Link to the GitHub repository the hook is found in. |

```ts
interface Hook {
  name: string;
  category: string;
  description: string;
  repoUrl: string;
}
```

For the MVP, hooks are stored as static data in the app (e.g. a `hooks.ts`/`hooks.json` array) — no backend is needed to serve them.

## Category Taxonomy

A starter fixed list of categories, based on how the existing Claude Code hooks ecosystem organizes itself. Treat this as a starting point — new categories can be added as new kinds of hooks show up:

- Security & Guardrails
- Git & Version Control
- Testing & Quality Gates
- Notifications
- Logging & Observability
- Formatting & Linting
- Session Management

## Main Page / UI

- Single page (`app/page.tsx`), no routing needed for MVP.
- Hooks render as a responsive **grid** of cards.
- Each card displays:
  - Hook name
  - Category (as a badge/tag)
  - Description
  - A link to the repo (opens in a new tab)

## Tech Notes

Build on the existing scaffold — no new dependencies required for MVP:
- Next.js App Router
- TypeScript
- Tailwind CSS v4 for styling (grid layout, card styling, category badges)

## Future Considerations (non-MVP)

Deferred, not designed yet:
- Search and filter by category
- Community hook submissions
- Sorting (e.g. by popularity/stars)
- Backend/persistent storage
