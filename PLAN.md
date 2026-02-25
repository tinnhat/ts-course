# TypeScript Learning Website - Implementation Plan

## Goal
Build a modern, personal TypeScript learning website with beginner-to-advanced topics. Each topic includes theory, examples, and 4 exercises (easy → hard). Progress is tracked per topic, and the next topic unlocks only after completing all exercises in the current topic. UI uses Next.js + shadcn UI and includes hint tooltips for exercises.

## Scope
- Next.js App Router + TypeScript + Tailwind + shadcn UI
- LocalStorage progress tracking
- Topics: core TypeScript + framework integrations (React, Next.js, Express, NestJS, React Native)
- Documentation for features and components

## Curriculum Structure
Each topic contains:
- Theory: short, easy-to-read explanation (keep technical terms in English)
- Examples: 1–2 code snippets
- Exercises: 4 tasks with prompt, hint, and sample solution

Planned topics:
1. TS Basics & Setup
2. Types & Type Aliases
3. Functions & Function Types
4. Interfaces & Types
5. Union / Intersection & Type Narrowing
6. Generics
7. OOP in TS
8. Modules & ES Modules
9. Utility Types
10. Advanced Types (mapped/conditional/template literal)
11. React + TypeScript
12. Next.js + TypeScript
13. Express + TypeScript
14. NestJS + TypeScript
15. React Native + TypeScript

## UX/UI Plan
- Landing/overview page: list of topic cards with status (locked/in-progress/completed)
- Topic detail page: theory → examples → exercises
- Exercise hints via tooltip
- Progress bar (overall + per topic)
- Modern, clean layout with strong typography and clear hierarchy

## Data Model
Data lives in `src/data/topics.ts`:
- Topic: id, title, level, prerequisites, theory, examples, exercises
- Exercise: id, title, prompt, hint, solution, difficulty

Progress stored in LocalStorage:
- { [topicId]: { completedExerciseIds: string[] } }

Unlock rule:
- Topic N+1 is unlocked only when topic N has 4/4 completed exercises

## Component Architecture
Core UI components:
- AppShell, TopNav/SideNav
- TopicCard, TopicHeader
- LessonSection, ExampleBlock
- ExerciseList, ExerciseItem, HintTooltip
- ProgressBar, CompletionBadge, ProgressGate

State and utilities:
- ProgressStore (LocalStorage helpers)
- Topic utilities (completion percent, locked/unlocked)

## Documentation
Docs in `docs/`:
- FEATURES.md: progress gating, hint tooltips, topic flow
- COMPONENTS.md: component responsibilities + props
- ARCHITECTURE.md: data model + storage + unlock logic

## Implementation Steps
1. Initialize Next.js app and shadcn UI (done)
2. Build data model and topic content
3. Implement layout + navigation
4. Implement topic pages and exercise flow
5. Implement LocalStorage progress and gating
6. Polish UI and responsive behavior
7. Write documentation
8. Run lint and manual check
