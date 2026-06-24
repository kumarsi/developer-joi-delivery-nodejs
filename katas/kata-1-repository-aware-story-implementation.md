# Kata 1: Repository-Aware Story Implementation

## Objective

Show that strong coding agents can already produce good code, but repository-level guidance makes their workflow and outputs consistent with team expectations.

## Starting Point

The `main` branch contains:

- The unimplemented Inventory Health story
- No `CLAUDE.md`
- No `.claude/rules/`

## Baseline Prompt

Use the same minimal prompt in both runs:

```text
Implement the following story in this repository.

[Full Inventory Health story and acceptance criteria]

Inspect the existing codebase and implement the feature with appropriate tests.
```

## Baseline Observation

Claude may produce good code, but may not:

- Create a dedicated feature branch
- Update the API documentation
- Map tests explicitly to acceptance criteria

## Repository Guidance

Store these files in a separate branch.

### `CLAUDE.md`

```markdown
# Repository Working Agreement

## Story Workflow

- Before making changes, inspect the current Git branch.
- Never implement a story directly on `main` or `develop`.
- Create a branch named:
  `feature/<story-id>-<short-description>`

## Delivery Expectations

- Update README/API documentation whenever endpoint behaviour, parameters, or responses change.
- Tests must map explicitly to acceptance criteria.
```

### `.claude/rules/testing.md`

```markdown
---
paths:
  - "src/**/*.test.js"
---

# Testing Rules

- Every relevant test name must include the acceptance criterion number.
- Each acceptance criterion must have at least one focused test.
- Test names must describe observable behaviour.
```

## Guided Run

1. Switch back to `main`.
2. Bring in only `CLAUDE.md` and `.claude/rules/testing.md`.
3. Start a fresh Claude Code session.
4. Use the exact same baseline prompt.
5. Compare the output with the original run.

## Expected Differences

Claude should now:

- Create a dedicated feature branch
- Update the README/API documentation
- Name tests using acceptance-criterion identifiers
- Cover each acceptance criterion with focused tests

## What This Kata Illustrates

- `CLAUDE.md` captures repository-wide working agreements.
- `.claude/rules/` provides file-scoped guidance.
- The same prompt can produce different behaviour when the repository harness changes.
- Important team expectations should live in the repository, not be repeated manually in every prompt.
