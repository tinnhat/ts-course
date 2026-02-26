"use client";

import { useEffect, useState } from "react";
import {
  getProgressMap,
  saveProgressMap,
  toggleExercise as toggleExerciseInMap,
  setExerciseCompleted as setExerciseCompletedInMap,
  setQuizResult as setQuizResultInMap,
  hasPassedQuiz as hasPassedQuizInMap,
  getOverallCompletion,
  getTopicCompletion,
  isTopicUnlocked,
  isExerciseCompleted,
  type ProgressMap,
} from "@/lib/progress-store";

export const useProgress = () => {
  const [progressMap, setProgressMap] = useState<ProgressMap>({});
  const [isReady, setIsReady] = useState(false);

  const syncFromStorage = () => {
    const stored = getProgressMap();
    setProgressMap(stored);
  };

  useEffect(() => {
    syncFromStorage();
    setIsReady(true);

    const handleProgressUpdate = () => syncFromStorage();
    window.addEventListener("ts-course-progress", handleProgressUpdate);
    return () => window.removeEventListener("ts-course-progress", handleProgressUpdate);
  }, []);

  const emitProgressUpdate = () => {
    if (typeof window === "undefined") return;
    window.dispatchEvent(new Event("ts-course-progress"));
  };

  const toggleExercise = (topicId: string, exerciseId: string) => {
    setProgressMap((prev) => {
      const updated = toggleExerciseInMap(topicId, exerciseId, prev);
      saveProgressMap(updated);
      emitProgressUpdate();
      return updated;
    });
  };

  const setExerciseCompleted = (
    topicId: string,
    exerciseId: string,
    completed: boolean
  ) => {
    setProgressMap((prev) => {
      const updated = setExerciseCompletedInMap(topicId, exerciseId, completed, prev);
      saveProgressMap(updated);
      emitProgressUpdate();
      return updated;
    });
  };

  const setQuizResult = (topicId: string, score: number, passed: boolean) => {
    setProgressMap((prev) => {
      const updated = setQuizResultInMap(topicId, score, passed, prev);
      saveProgressMap(updated);
      emitProgressUpdate();
      return updated;
    });
  };

  return {
    isReady,
    progressMap,
    toggleExercise,
    setExerciseCompleted,
    setQuizResult,
    getOverallCompletion: () => getOverallCompletion(progressMap),
    getTopicCompletion: (topicId: string) => getTopicCompletion(topicId, progressMap),
    isTopicUnlocked: (topicId: string) => isTopicUnlocked(topicId, progressMap),
    isExerciseCompleted: (topicId: string, exerciseId: string) =>
      isExerciseCompleted(topicId, exerciseId, progressMap),
    hasPassedQuiz: (topicId: string) => hasPassedQuizInMap(topicId, progressMap),
  };
};
