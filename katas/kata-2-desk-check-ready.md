# Kata 2: From Code Complete to Desk-Check Ready

## Objective

Show that completing the code is not the same as completing the delivery workflow.

Use a reusable Claude Code skill and a specialist subagent to turn an implemented story into a consistent desk-check package for BA and QA.

## Starting Point

Begin from the completed Inventory Health implementation produced in Kata 1.

The code and tests should already be present and passing.

## Initial Prompt

Ask Claude:

```text
Prepare this story for desk check with the BA and QA.
```

Observe the output.

Claude may produce something useful, but the format, coverage, commands, and evidence may be inconsistent because the expected desk-check workflow has not been encoded.

## Expected Desk-Check Output

The desk-check package should contain:

- Story summary
- Acceptance criteria
- AC-to-code mapping
- AC-to-test mapping
- Required seed/test data
- Exact API commands
- Expected status codes and responses
- Positive and negative scenarios
- Assumptions and known gaps
- Reset or cleanup steps

## Introduce a Reusable Skill

Create:

```text
.claude/skills/hpb-desk-check/SKILL.md
```

Suggested content:

```markdown
# HPB Desk Check

Use this skill when a story implementation is ready for desk check.

## Inputs

- Story and acceptance criteria
- Current branch
- Git diff
- Relevant tests
- Seed or fixture data
- API endpoints

## Process

1. Read the story and enumerate the acceptance criteria.
2. Inspect the implementation diff.
3. Identify the code and tests that satisfy each acceptance criterion.
4. Identify any missing or ambiguous coverage.
5. Prepare the data required for each scenario.
6. Generate exact API commands.
7. Define expected status codes and response bodies.
8. Include positive, negative, and boundary scenarios.
9. Record assumptions, risks, and known gaps.

## Output

Produce a desk-check document with:

- Story summary
- AC coverage table
- Setup and seed data
- Commands to execute
- Expected results
- Evidence references
- Assumptions and gaps
- Cleanup/reset steps
```

Invoke it using:

```text
/hpb-desk-check
```

## Introduce a Specialist Subagent

Create:

```text
.claude/agents/desk-checker.md
```

Suggested content:

```markdown
---
name: desk-checker
description: Independently verifies story readiness and prepares BA/QA desk-check evidence.
tools: Read, Grep, Glob, Bash
---

You are an independent desk-check reviewer.

Do not modify production code.

For the current story:

1. Read the story and acceptance criteria.
2. Inspect the current diff and relevant tests.
3. Map every acceptance criterion to implementation and test evidence.
4. Identify missing, ambiguous, or weakly tested behaviour.
5. Prepare executable desk-check steps.
6. Include exact commands and expected outputs.
7. Report assumptions and unresolved gaps clearly.

Return:

- Readiness verdict
- AC coverage table
- Desk-check steps
- Evidence references
- Gaps and risks
```

Ask Claude:

```text
Use the desk-checker agent to independently verify this story and prepare the desk-check package.
```

## Compare the Outputs

Compare:

1. The initial free-form response
2. The skill-generated desk-check package
3. The subagent's independent verification

Look for differences in:

- Structure
- Repeatability
- AC coverage
- Evidence quality
- Missing scenarios
- Independence from the implementation conversation

## What This Kata Illustrates

- A skill packages a repeatable delivery workflow.
- A subagent provides a specialised and independent review perspective.
- Implementation and verification are separate responsibilities.
- Inferential sensors can assess quality beyond deterministic test execution.
- Team practices should be encoded once and reused, rather than reconstructed in every chat.
