# Features

## Core Learning Flow
- Home page lists all topics with lock state, completion, and quick access.
- Each topic includes Theory, Examples, and 4 Exercises (easy → hard).
- Exercises include a hint tooltip and a sample solution section.

## Progress Tracking
- Progress is stored in LocalStorage under key `ts-course-progress`.
- Each topic tracks completed exercise IDs.
- Overall completion is the average of per-topic completion.

## Unlock Rules
- Topic 1 is always unlocked.
- Topic N+1 unlocks only when Topic N reaches 100% (4/4 exercises).
- Locked topics show a disabled CTA and a guidance message.

## UX Details
- Sticky header for quick navigation back to home.
- Clear status badges (Locked, In progress, Completed).
- Consistent card layout for topics and exercises.
