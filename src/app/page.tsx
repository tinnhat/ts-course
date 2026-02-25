"use client";

import AppShell from "@/components/app-shell";
import Hero from "@/components/hero";
import SectionHeading from "@/components/section-heading";
import TopicCard from "@/components/topic-card";
import ProgressOverview from "@/components/progress-overview";
import { topics } from "@/data/topics";
import { useProgress } from "@/lib/progress-client";

const frameworkIds = ["react-ts", "nextjs-ts", "express-ts", "nestjs-ts", "react-native-ts"];

export default function Home() {
  const { getOverallCompletion, getTopicCompletion, isTopicUnlocked } = useProgress();
  const overall = getOverallCompletion();

  return (
    <AppShell>
      <div className="space-y-10">
        <Hero />
        <ProgressOverview value={overall} />

        <section id="topics" className="space-y-6">
          <SectionHeading
            eyebrow="Core Path"
            title="Lộ trình TypeScript từ cơ bản tới nâng cao"
            description="Đi theo thứ tự để mở khóa dần. Hoàn thành 4 bài tập mỗi chủ đề để tiến tới bước tiếp theo."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {topics
              .filter((topic) => !frameworkIds.includes(topic.id))
              .map((topic) => (
                <TopicCard
                  key={topic.id}
                  id={topic.id}
                  title={topic.title}
                  description={topic.description}
                  level={topic.level}
                  progress={getTopicCompletion(topic.id)}
                  locked={!isTopicUnlocked(topic.id)}
                />
              ))}
          </div>
        </section>

        <section id="frameworks" className="space-y-6">
          <SectionHeading
            eyebrow="Framework Playbook"
            title="TypeScript + Frameworks"
            description="Ứng dụng TypeScript vào React, Next.js, Express, NestJS, và React Native."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {topics
              .filter((topic) => frameworkIds.includes(topic.id))
              .map((topic) => (
                <TopicCard
                  key={topic.id}
                  id={topic.id}
                  title={topic.title}
                  description={topic.description}
                  level={topic.level}
                  progress={getTopicCompletion(topic.id)}
                  locked={!isTopicUnlocked(topic.id)}
                />
              ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
}
