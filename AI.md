# AI-First Development

This project is set up for AI-assisted development using [Claude Code](https://claude.ai/code). The `.claude/` directory contains project-level configuration that any contributor can use to get the same AI tooling experience out of the box.

## Prerequisites

Install the following before opening the project in Claude Code:

### 1. uv (Python package manager)
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### 2. Serena (code-intelligence MCP server)
```bash
uv tool install -p 3.13 serena-agent
serena init
serena setup claude-code
```

Serena gives Claude real code intelligence — find symbol definitions, rename across files, list references — backed by the TypeScript language server. Without it, Claude relies on text search alone.

### 3. headroom (context management MCP server)
```bash
npm install -g headroom-mcp
```

headroom manages Claude's context window by compressing and retrieving conversation history, keeping sessions productive on large codebases.

## How it works

Once installed, Claude Code automatically starts both MCP servers at the beginning of every session — no manual steps needed. The `.claude/settings.json` in this repo configures:

- **MCP servers**: `serena` and `headroom` are declared as project-scoped servers
- **Hooks**: Serena hooks activate the right project context on session start, auto-approve Serena tool calls, and clean up on session end

## Working with Claude Code

A few practices that work well on this codebase:

- **Start with intent**: describe what you want to achieve, not just what file to edit. Claude will find the right places.
- **Review diffs before accepting**: Claude makes targeted edits but always check what changed, especially across multiple files.
- **Use `/mcp` to check server health**: if Serena or headroom shows as disconnected, restart the session.
- **Commit often**: AI-assisted sessions can touch many files quickly. Small, frequent commits make it easy to roll back if needed.

## Project context for AI

The following is useful context for any AI session on this codebase:

- **Runtime**: Node.js, Express
- **Language**: JavaScript (no TypeScript)
- **Key entry point**: `src/app.js`
- **Data**: seed data lives in `src/seedData/`
- **Domain**: hyperlocal food and grocery delivery — orders, carts, inventory, vendors, delivery partners
