# Architecture

## Data Model
Data lives in `src/data/topics.ts`.

### Topic
- `id`: unique identifier
- `title`: topic title
- `level`: basic | intermediate | advanced | framework
- `description`: short summary
- `prerequisites`: optional list of topic IDs
- `theory`: array of short explanations
- `examples`: code snippets with title and optional note
- `exercises`: 4 exercises with prompt, hint, solution, difficulty

### Exercise
- `id`: unique ID
- `title`: short label
- `prompt`: task description
- `hint`: tooltip content
- `solution`: sample solution
- `difficulty`: easy | medium | hard | challenge

## Progress Storage
LocalStorage key: `ts-course-progress`

Shape:
```
{
  [topicId]: {
    completedExerciseIds: string[]
  }
}
```

## Unlock Logic
- Topic 1 is always unlocked.
- For topic index N > 0, unlock only when topic N-1 has 100% completion.

## Client Hook
`src/lib/progress-client.ts` provides:
- `toggleExercise(topicId, exerciseId)`
- `getTopicCompletion(topicId)`
- `getOverallCompletion()`
- `isTopicUnlocked(topicId)`
- `isExerciseCompleted(topicId, exerciseId)`
