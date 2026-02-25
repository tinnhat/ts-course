# TypeScript Course (Personal)

Website học TypeScript theo lộ trình từ cơ bản đến nâng cao, có ví dụ, bài tập, bài kiểm tra, và cơ chế mở khóa theo tiến độ.

## Features
- Lộ trình học chia theo chủ đề (core + frameworks)
- Mỗi chủ đề có lý thuyết, ví dụ, 4 bài tập và quiz cuối chủ đề
- Gợi ý bài tập qua tooltip
- Editor CodeMirror hỗ trợ TypeScript
- Tracking tiến độ bằng LocalStorage
- Mở khóa chủ đề kế tiếp khi hoàn thành bài tập + đạt quiz
- Light/Dark mode

## Tech Stack
- Next.js App Router + TypeScript
- Tailwind CSS + shadcn UI
- CodeMirror for editor
- next-themes for dark mode

## Getting Started
```bash
pnpm install
pnpm dev
```

Open http://localhost:3000

## Project Structure
- `src/data/topics.ts`: nội dung bài học + bài tập + quiz
- `src/components/`: UI components
- `src/lib/`: progress store + hooks
- `docs/`: tài liệu feature và kiến trúc

## Documentation
- `docs/FEATURES.md`
- `docs/COMPONENTS.md`
- `docs/ARCHITECTURE.md`
