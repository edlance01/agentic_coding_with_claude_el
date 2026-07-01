export type Category =
  | "Security & Guardrails"
  | "Git & Version Control"
  | "Testing & Quality Gates"
  | "Notifications"
  | "Logging & Observability"
  | "Formatting & Linting"
  | "Session Management";

export interface Hook {
  name: string;
  category: Category;
  description: string;
  repoUrl: string;
}

export const hooks: Hook[] = [
  {
    name: "claude-security-guardrails",
    category: "Security & Guardrails",
    description:
      "PreToolUse/PostToolUse hooks that scan and block dangerous operations — rm -rf, force pushes, leaked API keys, SQL injection, eval() — before they execute.",
    repoUrl: "https://github.com/mafiaguy/claude-security-guardrails",
  },
  {
    name: "claude-guardrails",
    category: "Security & Guardrails",
    description:
      "Hardened security configuration for Claude Code: permission deny rules, shell hooks, and prompt injection defense in full and lite variants.",
    repoUrl: "https://github.com/dwarvesf/claude-guardrails",
  },
  {
    name: "claude-git-guard",
    category: "Git & Version Control",
    description:
      "A git pre-commit hook that stops .claude/ and CLAUDE.md from ever being committed to a repository.",
    repoUrl: "https://github.com/nohzafk/claude-git-guard",
  },
  {
    name: "claude-code-showcase",
    category: "Testing & Quality Gates",
    description:
      "A full Claude Code project configuration example wiring hooks, skills, agents, and GitHub Actions together into automated quality gates.",
    repoUrl: "https://github.com/ChrisWiles/claude-code-showcase",
  },
  {
    name: "claude-code-notification",
    category: "Notifications",
    description:
      "A lightweight macOS desktop notification hook that surfaces native alerts with customizable sounds when Claude Code needs your attention.",
    repoUrl: "https://github.com/wyattjoh/claude-code-notification",
  },
  {
    name: "code-notify",
    category: "Notifications",
    description:
      "Cross-platform desktop notifications for Claude Code, Codex, and Gemini CLI, with optional Slack and Discord webhook delivery.",
    repoUrl: "https://github.com/mylee04/code-notify",
  },
  {
    name: "claude-code-hooks-multi-agent-observability",
    category: "Logging & Observability",
    description:
      "Real-time monitoring for Claude Code agents that streams every hook event to a live dashboard for tracking tool calls across sessions.",
    repoUrl: "https://github.com/disler/claude-code-hooks-multi-agent-observability",
  },
  {
    name: "claude-format-hook",
    category: "Formatting & Linting",
    description:
      "Auto-formats code on every edit — JavaScript/TypeScript, Python, Go, Kotlin, and Markdown — using formatters like Biome, Ruff, and Prettier.",
    repoUrl: "https://github.com/ryanlewis/claude-format-hook",
  },
  {
    name: "claude-code-session-start-hook",
    category: "Session Management",
    description:
      "Uses LaunchDarkly AI Agent Configs to dynamically inject fresh project context into a Claude Code session as it starts.",
    repoUrl: "https://github.com/launchdarkly-labs/claude-code-session-start-hook",
  },
  {
    name: "claude-code-hooks-mastery",
    category: "Session Management",
    description:
      "A reference implementation covering every Claude Code hook lifecycle event, from session start through pre-compact.",
    repoUrl: "https://github.com/disler/claude-code-hooks-mastery",
  },
];
