import { topics } from "@/data/topics";

export type ProgressState = {
  completedExerciseIds: string[];
  quizScore?: number;
  quizPassed?: boolean;
};

export type ProgressMap = Record<string, ProgressState>;

const STORAGE_KEY = "ts-course-progress";

const emptyState: ProgressState = { completedExerciseIds: [] };

export const getProgressMap = (): ProgressMap => {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as ProgressMap;
    return parsed ?? {};
  } catch {
    return {};
  }
};

export const saveProgressMap = (map: ProgressMap) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
};

export const getTopicProgress = (topicId: string, map: ProgressMap) => {
  return map[topicId] ?? emptyState;
};

export const isExerciseCompleted = (
  topicId: string,
  exerciseId: string,
  map: ProgressMap
) => {
  const topic = getTopicProgress(topicId, map);
  return topic.completedExerciseIds.includes(exerciseId);
};

export const toggleExercise = (
  topicId: string,
  exerciseId: string,
  map: ProgressMap
): ProgressMap => {
  const topic = getTopicProgress(topicId, map);
  const exists = topic.completedExerciseIds.includes(exerciseId);
  const updated = exists
    ? topic.completedExerciseIds.filter((id) => id !== exerciseId)
    : [...topic.completedExerciseIds, exerciseId];

  return {
    ...map,
    [topicId]: {
      completedExerciseIds: updated,
    },
  };
};

export const setExerciseCompleted = (
  topicId: string,
  exerciseId: string,
  completed: boolean,
  map: ProgressMap
): ProgressMap => {
  const topic = getTopicProgress(topicId, map);
  const exists = topic.completedExerciseIds.includes(exerciseId);
  if (completed && exists) return map;
  if (!completed && !exists) return map;

  const updated = completed
    ? [...topic.completedExerciseIds, exerciseId]
    : topic.completedExerciseIds.filter((id) => id !== exerciseId);

  return {
    ...map,
    [topicId]: {
      completedExerciseIds: updated,
    },
  };
};

export const getTopicCompletion = (
  topicId: string,
  map: ProgressMap
): number => {
  const topic = topics.find((item) => item.id === topicId);
  if (!topic) return 0;
  const completed = getTopicProgress(topicId, map).completedExerciseIds.length;
  return Math.min(100, Math.round((completed / topic.exercises.length) * 100));
};

export const setQuizResult = (
  topicId: string,
  score: number,
  passed: boolean,
  map: ProgressMap
): ProgressMap => {
  return {
    ...map,
    [topicId]: {
      ...getTopicProgress(topicId, map),
      quizScore: score,
      quizPassed: passed,
    },
  };
};

export const hasPassedQuiz = (topicId: string, map: ProgressMap) => {
  return getTopicProgress(topicId, map).quizPassed === true;
};

export const isTopicCompleted = (topicId: string, map: ProgressMap) => {
  return getTopicCompletion(topicId, map) === 100 && hasPassedQuiz(topicId, map);
};

export const isTopicUnlocked = (topicId: string, map: ProgressMap) => {
  const index = topics.findIndex((item) => item.id === topicId);
  if (index <= 0) return true;
  const prevTopic = topics[index - 1];
  return isTopicCompleted(prevTopic.id, map);
};

export const getOverallCompletion = (map: ProgressMap) => {
  if (topics.length === 0) return 0;
  const total = topics.reduce((sum, topic) => sum + getTopicCompletion(topic.id, map), 0);
  return Math.round(total / topics.length);
};
