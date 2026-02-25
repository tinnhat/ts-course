export type Exercise = {
  id: string;
  title: string;
  prompt: string;
  hint: string;
  solution: string;
  expected?: string[];
  difficulty: "easy" | "medium" | "hard" | "challenge";
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
};

export type Topic = {
  id: string;
  title: string;
  level: "basic" | "intermediate" | "advanced" | "framework";
  description: string;
  prerequisites?: string[];
  theory: string[];
  examples: Array<{ title: string; code: string; note?: string }>;
  exercises: Exercise[];
  quiz: QuizQuestion[];
};

export const topics: Topic[] = [
  {
    id: "ts-basics",
    title: "TS Basics & Setup",
    level: "basic",
    description: "Khung nền tảng để hiểu TypeScript, compiler và type annotations.",
    theory: [
      "TypeScript adds a type system on top of JavaScript to catch bugs earlier.",
      "Type annotations mô tả kiểu dữ liệu mong đợi cho biến, hàm và object.",
      "Type inference giúp TS tự suy ra kiểu khi bạn khởi tạo giá trị.",
      "tsconfig.json điều khiển hành vi compiler, strict mode khuyến khích an toàn.",
    ],
    examples: [
      {
        title: "Basic annotations",
        code: "const course: string = \"TypeScript 101\";\nconst lessonCount: number = 12;\nconst isPublic: boolean = true;",
      },
      {
        title: "Inference",
        code: "const topic = \"Types\"; // inferred as string\nconst levels = [\"basic\", \"advanced\"]; // string[]",
      },
    ],
    exercises: [
      {
        id: "ts-basics-1",
        title: "Annotate variables",
        prompt:
          "Khai báo 3 biến name, age, isStudent với type annotations phù hợp. Yêu cầu: name: string, age: number, isStudent: boolean.",
        hint: "Dùng string, number, boolean.",
        solution:
          "const name: string = \"Linh\";\nconst age: number = 21;\nconst isStudent: boolean = true;",
        expected: [
          "re:const\\s+name\\s*:\\s*string",
          "re:const\\s+age\\s*:\\s*number",
          "re:const\\s+isStudent\\s*:\\s*boolean",
        ],
        difficulty: "easy",
      },
      {
        id: "ts-basics-2",
        title: "Inference check",
        prompt:
          "Tạo biến title và mảng tags. Yêu cầu: title = 'Intro', tags chứa 'ts' và 'basics', không dùng type annotation.",
        hint: "Không cần type annotations, chỉ cần giá trị.",
        solution: "const title = \"Intro\";\nconst tags = [\"ts\", \"basics\"];",
        expected: ["const title = \"Intro\";", "const tags = [\"ts\", \"basics\"];"],
        difficulty: "medium",
      },
      {
        id: "ts-basics-3",
        title: "Strict mode concept",
        prompt:
          "Giải thích vì sao strict mode giúp tìm lỗi sớm (1-2 câu). Yêu cầu: nhắc tới type safety và cảnh báo null/implicit any.",
        hint: "Nó bắt buộc khai báo type rõ ràng và cảnh báo null/undefined.",
        solution:
          "Strict mode buoc code ro rang hon ve type, canh bao null/undefined va implicit any, nen loi duoc phat hien som hon.",
        expected: ["strict mode", "type"],
        difficulty: "hard",
      },
      {
        id: "ts-basics-4",
        title: "tsconfig basics",
        prompt:
          "Kể 2 option trong tsconfig và tác dụng ngắn gọn. Yêu cầu: ghi đúng tên option.",
        hint: "Ví dụ: strict, target, module, noImplicitAny.",
        solution: "strict: bật tất cả kiểm tra type an toàn.\nnoImplicitAny: cảnh báo khi type any bị sử dụng ngầm.",
        expected: ["strict", "noImplicitAny"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "ts-basics-q1",
        question: "TypeScript mang lại lợi ích chính nào?",
        options: [
          "Thêm type system để bắt lỗi sớm",
          "Thay thế hoàn toàn JavaScript",
          "Tự động chạy nhanh hơn runtime",
          "Bỏ qua compiler",
        ],
        answerIndex: 0,
        explanation: "TypeScript bổ sung type system để phát hiện lỗi sớm và tăng an toàn type.",
      },
      {
        id: "ts-basics-q2",
        question: "Type inference nghĩa là gì?",
        options: [
          "TS tự suy ra type từ giá trị",
          "Bạn phải luôn khai báo type",
          "TS chỉ dùng any",
          "TS không hỗ trợ type",
        ],
        answerIndex: 0,
        explanation: "Type inference giúp TS tự suy ra type từ giá trị ban đầu.",
      },
      {
        id: "ts-basics-q3",
        question: "Option nào giúp cảnh báo implicit any?",
        options: ["strict", "noImplicitAny", "target", "module"],
        answerIndex: 1,
        explanation: "noImplicitAny cảnh báo khi type any bị dùng ngầm.",
      },
    ],
  },
  {
    id: "types-aliases",
    title: "Types & Type Aliases",
    level: "basic",
    description: "Học các kiểu cơ bản và cách đặt tên cho type phức tạp.",
    theory: [
      "Primitive types: string, number, boolean, null, undefined.",
      "Array type có thể viết như string[] hoặc Array<string>.",
      "Tuple mô tả mảng có số lượng và kiểu phần tử cố định.",
      "Type alias giúp đặt tên cho một kiểu phức tạp để tái sử dụng.",
    ],
    examples: [
      {
        title: "Type alias for object",
        code: "type Lesson = { id: string; title: string; duration: number };\nconst intro: Lesson = { id: \"1\", title: \"Basics\", duration: 20 };",
      },
      {
        title: "Tuple example",
        code: "const point: [number, number] = [10, 20];",
      },
    ],
    exercises: [
      {
        id: "types-aliases-1",
        title: "Array typing",
        prompt:
          "Khai báo mảng levels chứa các string. Yêu cầu: viết 2 cách typing string[] và Array<string>.",
        hint: "Dùng string[] và Array<string>.",
        solution: "const levels1: string[] = [\"basic\", \"advanced\"];\nconst levels2: Array<string> = [\"basic\", \"advanced\"];",
        expected: ["string[]", "Array<string>", "levels"],
        difficulty: "easy",
      },
      {
        id: "types-aliases-2",
        title: "Tuple",
        prompt: "Tạo tuple gồm name và age. Yêu cầu: kiểu [string, number].",
        hint: "[string, number]",
        solution: "const profile: [string, number] = [\"Mai\", 23];",
        expected: ["[string, number]"],
        difficulty: "medium",
      },
      {
        id: "types-aliases-3",
        title: "Type alias",
        prompt:
          "Tạo type alias Course gồm id, title, isPublished. Yêu cầu: id: string, title: string, isPublished: boolean.",
        hint: "Dùng type Course = { ... }.",
        solution:
          "type Course = { id: string; title: string; isPublished: boolean };\nconst course: Course = { id: \"c1\", title: \"TS\", isPublished: true };",
        expected: [
          "re:type\\s+course",
          "re:id\\s*:\\s*\\w+",
          "re:title\\s*:\\s*\\w+",
          "re:ispublished\\s*:\\s*\\w+",
        ],
        difficulty: "hard",
      },
      {
        id: "types-aliases-4",
        title: "Union in alias",
        prompt: "Tạo type Status chỉ nhận 'draft' | 'published'.",
        hint: "Dùng union type trong alias.",
        solution: "type Status = \"draft\" | \"published\";",
        expected: ["type Status", "\"draft\"", "\"published\""],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "types-aliases-q1",
        question: "Type alias dùng để làm gì?",
        options: [
          "Đặt tên cho type phức tạp",
          "Bắt buộc class",
          "Tăng tốc runtime",
          "Thay thế interface hoàn toàn",
        ],
        answerIndex: 0,
        explanation: "Type alias giúp đặt tên cho type phức tạp để tái sử dụng.",
      },
      {
        id: "types-aliases-q2",
        question: "Tuple mô tả điều gì?",
        options: [
          "Mảng có số lượng và kiểu phần tử cố định",
          "Object không có key",
          "Function overload",
          "String pattern",
        ],
        answerIndex: 0,
        explanation: "Tuple là mảng với độ dài và kiểu phần tử xác định.",
      },
      {
        id: "types-aliases-q3",
        question: "Array<string> và string[] là gì?",
        options: ["Hai cách viết tương đương", "Khác runtime", "Chỉ dùng cho tuple", "Không hợp lệ"],
        answerIndex: 0,
        explanation: "Cả hai là cách viết tương đương cho mảng string.",
      },
    ],
  },
  {
    id: "functions",
    title: "Functions & Function Types",
    level: "basic",
    description: "Khai báo tham số, return type và typing cho callback.",
    theory: [
      "Function parameters can have type annotations.",
      "Return type cho biết hàm sẽ trả về gì. TS có thể infer nhiều trường hợp.",
      "Optional parameters dùng dấu ? và có thể có default value.",
      "Function type alias mô tả shape của callback.",
    ],
    examples: [
      {
        title: "Typed function",
        code: "function add(a: number, b: number): number {\n  return a + b;\n}",
      },
      {
        title: "Function type alias",
        code: "type Formatter = (value: string) => string;\nconst upper: Formatter = (value) => value.toUpperCase();",
      },
    ],
    exercises: [
      {
        id: "functions-1",
        title: "Return type",
        prompt: "Viết hàm greet(name: string) trả về string.",
        hint: "function greet(name: string): string",
        solution: "function greet(name: string): string { return `Hello ${name}`; }",
        expected: ["function greet", "name: string", ": string"],
        difficulty: "easy",
      },
      {
        id: "functions-2",
        title: "Optional param",
        prompt: "Viết hàm log(message: string, level?: string) với level là optional string.",
        hint: "level?: string",
        solution: "function log(message: string, level?: string) { return level ? `[${level}] ${message}` : message; }",
        expected: ["level?: string"],
        difficulty: "medium",
      },
      {
        id: "functions-3",
        title: "Callback type",
        prompt: "Tạo type Callback = (value: number) => boolean.",
        hint: "type Callback = (value: number) => boolean",
        solution: "type Callback = (value: number) => boolean;",
        expected: ["type Callback", "number", "boolean"],
        difficulty: "hard",
      },
      {
        id: "functions-4",
        title: "Default param",
        prompt: "Viết hàm multiply(a: number, b: number = 2) trả về number.",
        hint: "function multiply(a: number, b: number = 2)",
        solution: "function multiply(a: number, b: number = 2) { return a * b; }",
        expected: ["b: number = 2"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "functions-q1",
        question: "Return type trong TypeScript có tác dụng gì?",
        options: [
          "Cho biết kiểu dữ liệu trả về của hàm",
          "Chỉ dùng cho class",
          "Tự động tạo hàm",
          "Bắt buộc any",
        ],
        answerIndex: 0,
        explanation: "Return type mô tả kiểu dữ liệu hàm trả về.",
      },
      {
        id: "functions-q2",
        question: "Optional parameter được ký hiệu như thế nào?",
        options: ["?", "!", ":", "*"],
        answerIndex: 0,
        explanation: "Dùng dấu ? để đánh dấu optional parameter.",
      },
      {
        id: "functions-q3",
        question: "Function type alias dùng để làm gì?",
        options: [
          "Mô tả shape của callback",
          "Tạo object",
          "Đổi tên biến",
          "Tạo interface",
        ],
        answerIndex: 0,
        explanation: "Function type alias dùng để mô tả chữ ký hàm.",
      },
    ],
  },
  {
    id: "interfaces",
    title: "Interfaces & Types",
    level: "basic",
    description: "Mô tả shape của object và sự khác nhau cơ bản giữa interface và type.",
    theory: [
      "Interface mô tả shape của object và có thể extend nhau.",
      "Type cũng làm được nhưng hỗ trợ union và intersection.",
      "Optional properties dùng dấu ?.",
      "Readonly properties chỉ đọc, không thể gán lại.",
    ],
    examples: [
      {
        title: "Interface with optional",
        code: "interface User { id: string; name: string; bio?: string }\nconst user: User = { id: \"u1\", name: \"An\" };",
      },
      {
        title: "Interface extension",
        code: "interface Base { id: string }\ninterface Course extends Base { title: string }",
      },
    ],
    exercises: [
      {
        id: "interfaces-1",
        title: "Define interface",
        prompt: "Tạo interface Lesson { id: string; title: string; duration: number }.",
        hint: "interface Lesson { ... }",
        solution: "interface Lesson { id: string; title: string; duration: number }",
        expected: ["interface Lesson", "id: string", "title: string", "duration: number"],
        difficulty: "easy",
      },
      {
        id: "interfaces-2",
        title: "Readonly",
        prompt: "Thêm readonly vào id của interface Course.",
        hint: "readonly id: string",
        solution: "interface Course { readonly id: string; title: string }",
        expected: ["readonly id"],
        difficulty: "medium",
      },
      {
        id: "interfaces-3",
        title: "Type vs interface",
        prompt: "Viết type Status = 'draft' | 'published'.",
        hint: "type Status = ...",
        solution: "type Status = \"draft\" | \"published\";",
        expected: ["type Status", "\"draft\"", "\"published\""],
        difficulty: "hard",
      },
      {
        id: "interfaces-4",
        title: "Extend interface",
        prompt: "Tạo interface AdvancedCourse extends Course { level: string }.",
        hint: "interface AdvancedCourse extends Course { level: string }",
        solution: "interface AdvancedCourse extends Course { level: string }",
        expected: ["extends Course", "level: string"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "interfaces-q1",
        question: "Interface thường dùng để mô tả gì?",
        options: ["Shape của object", "Runtime behavior", "CSS", "Database"],
        answerIndex: 0,
        explanation: "Interface mô tả shape của object.",
      },
      {
        id: "interfaces-q2",
        question: "Readonly property có ý nghĩa gì?",
        options: ["Không thể gán lại", "Bắt buộc null", "Chỉ dùng trong class", "Tự động any"],
        answerIndex: 0,
        explanation: "Readonly property chỉ đọc, không thể gán lại.",
      },
      {
        id: "interfaces-q3",
        question: "Type khác interface ở điểm nào?",
        options: ["Type hỗ trợ union/intersection", "Type chỉ cho class", "Type không dùng được", "Type chỉ runtime"],
        answerIndex: 0,
        explanation: "Type hỗ trợ union/intersection rõ ràng hơn interface.",
      },
    ],
  },
  {
    id: "unions-narrowing",
    title: "Union / Intersection & Type Narrowing",
    level: "intermediate",
    description: "Làm việc với union type và thu hẹp type để code an toàn.",
    theory: [
      "Union type cho phép nhiều kiểu khác nhau: string | number.",
      "Intersection type kết hợp các type: A & B.",
      "Type narrowing dùng if, typeof, in, instanceof để xử lý từng trường hợp.",
      "Discriminated unions dùng field chung (kind/type) để phân nhánh.",
    ],
    examples: [
      {
        title: "Union with typeof",
        code: "function format(value: string | number) {\n  return typeof value === \"number\" ? value.toFixed(2) : value.toUpperCase();\n}",
      },
      {
        title: "Discriminated union",
        code: "type Loading = { state: \"loading\" };\ntype Success = { state: \"success\"; data: string };\ntype ViewState = Loading | Success;",
      },
    ],
    exercises: [
      {
        id: "unions-1",
        title: "Simple union",
        prompt: "Tạo type ID = string | number.",
        hint: "type ID = string | number",
        solution: "type ID = string | number;",
        expected: ["type ID", "string | number"],
        difficulty: "easy",
      },
      {
        id: "unions-2",
        title: "Narrowing with in",
        prompt:
          "Viết function printUser(user: Admin | Guest). Yêu cầu: Admin có role: string, Guest không có role, dùng 'in' để xử lý.",
        hint: "if (\"role\" in user) ...",
        solution:
          "type Admin = { name: string; role: string };\ntype Guest = { name: string };\nfunction printUser(user: Admin | Guest) {\n  if (\"role\" in user) return `${user.name} (${user.role})`;\n  return user.name;\n}",
        expected: ["in user", "role"],
        difficulty: "medium",
      },
      {
        id: "unions-3",
        title: "Intersection",
        prompt: "Tạo type CourseMeta = Course & { tags: string[] }.",
        hint: "Use & operator",
        solution: "type Course = { id: string; title: string };\ntype CourseMeta = Course & { tags: string[] };",
        expected: ["Course &", "tags: string[]"],
        difficulty: "hard",
      },
      {
        id: "unions-4",
        title: "Discriminated union",
        prompt:
          "Tạo union Shape cho Circle và Square. Yêu cầu: Circle { kind: 'circle'; radius: number }, Square { kind: 'square'; size: number }.",
        hint: "field kind: 'circle' | 'square'",
        solution:
          "type Circle = { kind: \"circle\"; radius: number };\ntype Square = { kind: \"square\"; size: number };\ntype Shape = Circle | Square;",
        expected: ["kind", "circle", "square"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "unions-q1",
        question: "Union type dùng để làm gì?",
        options: ["Cho phép nhiều kiểu dữ liệu", "Tạo class", "Bỏ type", "Chỉ dùng cho array"],
        answerIndex: 0,
        explanation: "Union type cho phép một giá trị thuộc nhiều kiểu.",
      },
      {
        id: "unions-q2",
        question: "Type narrowing dùng để?",
        options: ["Thu hẹp type trong nhánh logic", "Tạo module", "Bỏ compiler", "Thêm CSS"],
        answerIndex: 0,
        explanation: "Type narrowing giúp xác định type trong từng nhánh.",
      },
      {
        id: "unions-q3",
        question: "Discriminated union cần gì?",
        options: ["Field chung (kind/type)", "Decorator", "Database", "Runtime enum"],
        answerIndex: 0,
        explanation: "Discriminated union dùng field chung để phân nhánh.",
      },
    ],
  },
  {
    id: "generics",
    title: "Generics",
    level: "intermediate",
    description: "Tạo type linh hoạt và tái sử dụng cho function, interface.",
    theory: [
      "Generics cho phép truyền type vào function, class, interface.",
      "Constraint (extends) giới hạn type để đảm bảo thuộc tính cần thiết.",
      "Default generics giúp type có giá trị mặc định.",
      "Generic type giúp viết code reuse mà vẫn type-safe.",
    ],
    examples: [
      {
        title: "Generic function",
        code: "function identity<T>(value: T): T {\n  return value;\n}\nconst id = identity<string>(\"ts\");",
      },
      {
        title: "Constraint",
        code: "function withId<T extends { id: string }>(value: T) {\n  return value.id;\n}",
      },
    ],
    exercises: [
      {
        id: "generics-1",
        title: "Basic generic",
        prompt: "Viết hàm wrap<T>(value: T): T[] trả về [value].",
        hint: "function wrap<T>(value: T): T[]",
        solution: "function wrap<T>(value: T): T[] { return [value]; }",
        expected: ["wrap<T>", ": T[]"],
        difficulty: "easy",
      },
      {
        id: "generics-2",
        title: "Generic interface",
        prompt: "Tạo interface ApiResponse<T> { data: T; error?: string }.",
        hint: "interface ApiResponse<T> { data: T; error?: string }",
        solution: "interface ApiResponse<T> { data: T; error?: string }",
        expected: ["interface ApiResponse<T>", "error?: string"],
        difficulty: "medium",
      },
      {
        id: "generics-3",
        title: "Constraint",
        prompt: "Viết hàm getName<T extends { name: string }>(value: T): string.",
        hint: "extends { name: string }",
        solution: "function getName<T extends { name: string }>(value: T) { return value.name; }",
        expected: ["extends", "name: string"],
        difficulty: "hard",
      },
      {
        id: "generics-4",
        title: "Default generic",
        prompt: "Tạo type Box<T = string> = { value: T }.",
        hint: "type Box<T = string> = { value: T }",
        solution: "type Box<T = string> = { value: T };",
        expected: ["T = string", "value: T"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "generics-q1",
        question: "Generics cho phép điều gì?",
        options: ["Truyền type vào function/class", "Bỏ type", "Chỉ dùng cho CSS", "Chạy nhanh hơn"],
        answerIndex: 0,
        explanation: "Generics cho phép truyền type để tái sử dụng code.",
      },
      {
        id: "generics-q2",
        question: "Constraint trong generic dùng để?",
        options: ["Giới hạn type", "Bỏ compiler", "Chỉ dùng ở runtime", "Đổi tên biến"],
        answerIndex: 0,
        explanation: "Constraint giới hạn type để đảm bảo thuộc tính cần thiết.",
      },
      {
        id: "generics-q3",
        question: "Default generic giúp gì?",
        options: ["Có type mặc định", "Bắt buộc any", "Không dùng được", "Chỉ class"],
        answerIndex: 0,
        explanation: "Default generic cung cấp type mặc định.",
      },
    ],
  },
  {
    id: "oop",
    title: "OOP in TypeScript",
    level: "intermediate",
    description: "Học class, constructor, access modifiers, inheritance.",
    theory: [
      "Class là khuôn mẫu object có properties và methods.",
      "Access modifiers: public, private, protected.",
      "Readonly fields chỉ gán giá trị trong constructor.",
      "Inheritance cho phép class con extend class cha.",
    ],
    examples: [
      {
        title: "Basic class",
        code: "class Course {\n  constructor(public id: string, public title: string) {}\n}\nconst course = new Course(\"c1\", \"TS\");",
      },
      {
        title: "Inheritance",
        code: "class AdvancedCourse extends Course {\n  constructor(id: string, title: string, public level: string) {\n    super(id, title);\n  }\n}",
      },
    ],
    exercises: [
      {
        id: "oop-1",
        title: "Class basics",
        prompt: "Tạo class User có name: string và method greet(): string.",
        hint: "constructor(public name: string) {}",
        solution: "class User {\n  constructor(public name: string) {}\n  greet() { return `Hello ${this.name}`; }\n}",
        expected: ["class User", "greet"],
        difficulty: "easy",
      },
      {
        id: "oop-2",
        title: "Private field",
        prompt: "Tạo class Counter có private count và method increment(): number.",
        hint: "private count = 0",
        solution: "class Counter {\n  private count = 0;\n  increment() { this.count += 1; return this.count; }\n}",
        expected: ["private count"],
        difficulty: "medium",
      },
      {
        id: "oop-3",
        title: "Readonly",
        prompt: "Tạo class Lesson có readonly id và title: string.",
        hint: "readonly id: string",
        solution: "class Lesson {\n  constructor(readonly id: string, public title: string) {}\n}",
        expected: ["readonly id"],
        difficulty: "hard",
      },
      {
        id: "oop-4",
        title: "Extend",
        prompt: "Tạo class VideoLesson extends Lesson thêm duration: number.",
        hint: "extends Lesson",
        solution: "class VideoLesson extends Lesson {\n  constructor(id: string, title: string, public duration: number) {\n    super(id, title);\n  }\n}",
        expected: ["extends Lesson", "duration"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "oop-q1",
        question: "Access modifier private có ý nghĩa gì?",
        options: ["Chỉ truy cập trong class", "Truy cập ở mọi nơi", "Chỉ readonly", "Chỉ static"],
        answerIndex: 0,
        explanation: "private chỉ cho phép truy cập trong class.",
      },
      {
        id: "oop-q2",
        question: "Inheritance dùng để?",
        options: ["Kế thừa thuộc tính/method", "Xóa class", "Tạo type alias", "Bỏ constructor"],
        answerIndex: 0,
        explanation: "Inheritance cho phép class con kế thừa từ class cha.",
      },
      {
        id: "oop-q3",
        question: "Readonly field có thể gán lại sau constructor không?",
        options: ["Không", "Có", "Chỉ trong method", "Chỉ trong subclass"],
        answerIndex: 0,
        explanation: "Readonly chỉ gán trong constructor, không gán lại sau đó.",
      },
    ],
  },
  {
    id: "modules",
    title: "Modules & ES Modules",
    level: "intermediate",
    description: "Tổ chức code bằng export/import và chia file.",
    theory: [
      "ES Modules dùng export và import để chia code.",
      "Named export và default export có cách sử dụng khác nhau.",
      "Type-only import (import type) giảm bundle và tránh side effects.",
      "Barrel files dễ tiện, nhưng có thể tăng bundle nếu dùng sai.",
    ],
    examples: [
      {
        title: "Named export",
        code: "export const title = \"TS\";\nexport type Course = { id: string; title: string };",
      },
      {
        title: "Import type",
        code: "import type { Course } from \"./course\";",
      },
    ],
    exercises: [
      {
        id: "modules-1",
        title: "Named export",
        prompt: "Viết file export const version = '1.0'. Yêu cầu dùng named export.",
        hint: "export const version = \"1.0\"",
        solution: "export const version = \"1.0\";",
        expected: ["export const version"],
        difficulty: "easy",
      },
      {
        id: "modules-2",
        title: "Default export",
        prompt: "Viết default export function greet(): string.",
        hint: "export default function greet() {}",
        solution: "export default function greet() { return \"hi\"; }",
        expected: ["export default function greet"],
        difficulty: "medium",
      },
      {
        id: "modules-3",
        title: "Import type",
        prompt: "Giải thích lý do dùng import type (1-2 câu).",
        hint: "Tranh tao runtime import, chi su dung cho type.",
        solution: "import type giup chi nhap type, khong tao runtime dependency, giam side effects va ho tro tree-shaking.",
        expected: ["import type", "runtime"],
        difficulty: "hard",
      },
      {
        id: "modules-4",
        title: "Avoid barrel",
        prompt: "Nêu rõ vì sao barrel có thể tăng bundle size (1-2 câu).",
        hint: "Import gom co the keo them module khong can.",
        solution: "Barrel file co the keo theo nhieu export khong can thiet, lam tang bundle vi tree-shaking kho hon trong mot so truong hop.",
        expected: ["bundle", "tree-shaking"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "modules-q1",
        question: "Named export khác default export ở đâu?",
        options: ["Cách import khác nhau", "Không khác", "Chỉ runtime", "Chỉ type"],
        answerIndex: 0,
        explanation: "Named export cần { } khi import, default export thì không.",
      },
      {
        id: "modules-q2",
        question: "import type có lợi ích gì?",
        options: ["Tránh runtime import", "Tạo class", "Bỏ type", "Đổi module"],
        answerIndex: 0,
        explanation: "import type chỉ dùng cho type, không tạo runtime dependency.",
      },
      {
        id: "modules-q3",
        question: "Barrel file có rủi ro gì?",
        options: ["Tăng bundle size", "Tăng type safety", "Tăng tốc runtime", "Không ảnh hưởng"],
        answerIndex: 0,
        explanation: "Barrel file có thể kéo theo nhiều module không cần thiết.",
      },
    ],
  },
  {
    id: "utility-types",
    title: "Utility Types",
    level: "advanced",
    description: "Sử dụng Partial, Pick, Omit, Record để viết type nhanh hơn.",
    theory: [
      "Utility types là các type có sẵn để biến đổi shape.",
      "Partial<T> biến tất cả property thành optional.",
      "Pick<T, K> và Omit<T, K> chọn/loại property.",
      "Record<K, T> tạo object với key có kiểu K và value T.",
    ],
    examples: [
      {
        title: "Partial",
        code: "type Course = { id: string; title: string; level: string };\ntype DraftCourse = Partial<Course>;",
      },
      {
        title: "Record",
        code: "type Level = \"basic\" | \"advanced\";\nconst labels: Record<Level, string> = { basic: \"Co ban\", advanced: \"Nang cao\" };",
      },
    ],
    exercises: [
      {
        id: "utility-1",
        title: "Pick",
        prompt: "Tạo type CoursePreview = Pick<Course, 'id' | 'title'>.",
        hint: "Pick<Course, 'id' | 'title'>",
        solution: "type Course = { id: string; title: string; level: string };\ntype CoursePreview = Pick<Course, \"id\" | \"title\">;",
        expected: ["Pick<", "id", "title"],
        difficulty: "easy",
      },
      {
        id: "utility-2",
        title: "Omit",
        prompt: "Tạo type PublicUser = Omit<User, 'password'>.",
        hint: "Omit<User, 'password'>",
        solution: "type User = { id: string; name: string; password: string };\ntype PublicUser = Omit<User, \"password\">;",
        expected: ["Omit<", "password"],
        difficulty: "medium",
      },
      {
        id: "utility-3",
        title: "Partial",
        prompt: "Tạo type UpdateCourse = Partial<Course>.",
        hint: "Partial<Course>",
        solution: "type Course = { id: string; title: string; level: string };\ntype UpdateCourse = Partial<Course>;",
        expected: ["Partial<"],
        difficulty: "hard",
      },
      {
        id: "utility-4",
        title: "Record",
        prompt: "Tạo Record gồm key là Status và value là string.",
        hint: "Record<Status, string>",
        solution: "type Status = \"draft\" | \"published\";\nconst statusLabel: Record<Status, string> = { draft: \"Ban nhap\", published: \"Da dang\" };",
        expected: ["Record<", "Status"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "utility-q1",
        question: "Partial<T> làm gì?",
        options: ["Biến tất cả property thành optional", "Bỏ type", "Tạo union", "Tạo class"],
        answerIndex: 0,
        explanation: "Partial<T> biến mọi property thành optional.",
      },
      {
        id: "utility-q2",
        question: "Pick<T, K> dùng để?",
        options: ["Chọn một số property", "Xóa property", "Đổi key", "Tạo tuple"],
        answerIndex: 0,
        explanation: "Pick<T, K> chọn một số property từ T.",
      },
      {
        id: "utility-q3",
        question: "Record<K, T> tạo ra gì?",
        options: ["Object với key K và value T", "Array", "Union", "Enum"],
        answerIndex: 0,
        explanation: "Record tạo object với key và value theo type.",
      },
    ],
  },
  {
    id: "advanced-types",
    title: "Advanced Types",
    level: "advanced",
    description: "Mapped types, conditional types và template literal types.",
    theory: [
      "Mapped types lặp qua keys để tạo type mới.",
      "Conditional types cho phép rẽ nhánh dựa trên type.",
      "Template literal types tạo string type theo pattern.",
      "Infer giúp trích xuất type từ conditional type.",
    ],
    examples: [
      {
        title: "Mapped type",
        code: "type Flags<T> = { [K in keyof T]: boolean };\ntype FeatureFlags = Flags<{ darkMode: string; offline: number }>;",
      },
      {
        title: "Conditional type",
        code: "type IsString<T> = T extends string ? true : false;\ntype A = IsString<string>; // true",
      },
    ],
    exercises: [
      {
        id: "advanced-1",
        title: "Mapped type",
        prompt: "Tạo type ReadonlyCourse từ Course bằng mapped type.",
        hint: "{ readonly [K in keyof Course]: Course[K] }",
        solution:
          "type Course = { id: string; title: string };\ntype ReadonlyCourse = { readonly [K in keyof Course]: Course[K] };",
        expected: ["readonly", "keyof"],
        difficulty: "easy",
      },
      {
        id: "advanced-2",
        title: "Conditional type",
        prompt: "Tạo type IsArray<T> trả về true nếu T là array.",
        hint: "T extends any[] ? true : false",
        solution: "type IsArray<T> = T extends any[] ? true : false;",
        expected: ["extends", "any[]"],
        difficulty: "medium",
      },
      {
        id: "advanced-3",
        title: "Template literal",
        prompt: "Tạo type EventName = `on${Capitalize<string>}`.",
        hint: "Dung template literal types.",
        solution: "type EventName = `on${Capitalize<string>}`;",
        expected: ["`on", "Capitalize"],
        difficulty: "hard",
      },
      {
        id: "advanced-4",
        title: "Infer",
        prompt: "Tạo type ElementType<T> lấy element type nếu T là array.",
        hint: "T extends (infer U)[] ? U : T",
        solution: "type ElementType<T> = T extends (infer U)[] ? U : T;",
        expected: ["infer", "[]"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "advanced-q1",
        question: "Mapped type dùng để?",
        options: ["Lặp qua keys để tạo type mới", "Tạo class", "Xóa type", "Tạo runtime"],
        answerIndex: 0,
        explanation: "Mapped type lặp qua keys để tạo type mới.",
      },
      {
        id: "advanced-q2",
        question: "Conditional type cho phép?",
        options: ["Rẽ nhánh theo type", "Chỉ dùng trong runtime", "Bỏ type", "Đổi module"],
        answerIndex: 0,
        explanation: "Conditional type cho phép rẽ nhánh theo type.",
      },
      {
        id: "advanced-q3",
        question: "Template literal types dùng để?",
        options: ["Tạo string type theo pattern", "Tạo array", "Tạo class", "Tạo enum"],
        answerIndex: 0,
        explanation: "Template literal types tạo string type theo pattern.",
      },
    ],
  },
  {
    id: "react-ts",
    title: "React + TypeScript",
    level: "framework",
    description: "Typing props, state, events và hooks trong React.",
    theory: [
      "Component props có thể khai báo bằng type hoặc interface.",
      "useState có thể infer type từ giá trị ban đầu.",
      "Event types (React.ChangeEvent, React.FormEvent) giúp typing input.",
      "Children props dùng React.ReactNode.",
    ],
    examples: [
      {
        title: "Props typing",
        code: "type ButtonProps = { label: string; onClick: () => void };\nfunction Button({ label, onClick }: ButtonProps) {\n  return <button onClick={onClick}>{label}</button>;\n}",
      },
      {
        title: "useState typing",
        code: "const [count, setCount] = useState(0);\nconst [user, setUser] = useState<{ name: string } | null>(null);",
      },
    ],
    exercises: [
      {
        id: "react-ts-1",
        title: "Props type",
        prompt: "Tạo component Card có props title: string và children: React.ReactNode.",
        hint: "children: React.ReactNode",
        solution:
          "type CardProps = { title: string; children: React.ReactNode };\nfunction Card({ title, children }: CardProps) { return (<section><h3>{title}</h3>{children}</section>); }",
        expected: ["children: React.ReactNode", "title: string"],
        difficulty: "easy",
      },
      {
        id: "react-ts-2",
        title: "Event typing",
        prompt: "Viết handler onChange cho input type text (React.ChangeEvent<HTMLInputElement>).",
        hint: "(e: React.ChangeEvent<HTMLInputElement>)",
        solution: "const onChange = (e: React.ChangeEvent<HTMLInputElement>) => { console.log(e.target.value); };",
        expected: ["React.ChangeEvent<HTMLInputElement>", "target.value"],
        difficulty: "medium",
      },
      {
        id: "react-ts-3",
        title: "useState union",
        prompt: "Tạo state selectedId có type string | null, giá trị ban đầu null.",
        hint: "useState<string | null>(null)",
        solution: "const [selectedId, setSelectedId] = useState<string | null>(null);",
        expected: ["useState<string | null>", "null"],
        difficulty: "hard",
      },
      {
        id: "react-ts-4",
        title: "Ref typing",
        prompt: "Tạo ref cho input element: useRef<HTMLInputElement | null>(null).",
        hint: "useRef<HTMLInputElement | null>(null)",
        solution: "const inputRef = useRef<HTMLInputElement | null>(null);",
        expected: ["useRef<HTMLInputElement | null>", "null"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "react-ts-q1",
        question: "Props trong React nên typing bằng gì?",
        options: ["type hoặc interface", "runtime class", "JSON", "CSS"],
        answerIndex: 0,
        explanation: "Props nên được typing bằng type hoặc interface.",
      },
      {
        id: "react-ts-q2",
        question: "React.ChangeEvent dùng để?",
        options: ["Typing event của input", "Tạo component", "Tạo state", "Tạo module"],
        answerIndex: 0,
        explanation: "React.ChangeEvent giúp typing event cho input.",
      },
      {
        id: "react-ts-q3",
        question: "children props thường có type gì?",
        options: ["React.ReactNode", "string", "number", "any"],
        answerIndex: 0,
        explanation: "children thường có type React.ReactNode.",
      },
    ],
  },
  {
    id: "nextjs-ts",
    title: "Next.js + TypeScript",
    level: "framework",
    description: "Typing params, server components và data fetch trong Next.js.",
    theory: [
      "App Router sử dụng file-based routing, params được typing thông qua props.",
      "Server components là default, client components dùng \"use client\".",
      "Typed route params giúp an toàn khi đọc params.",
      "Data fetching có thể dùng fetch và tương tác với caching.",
    ],
    examples: [
      {
        title: "Typed params",
        code: "type PageProps = { params: { slug: string } };\nexport default function Page({ params }: PageProps) {\n  return <div>{params.slug}</div>;\n}",
      },
      {
        title: "Client component",
        code: "\"use client\";\nimport { useState } from \"react\";\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n}",
      },
    ],
    exercises: [
      {
        id: "nextjs-1",
        title: "Route params",
        prompt: "Tạo PageProps = { params: { id: string } }.",
        hint: "type PageProps = { params: { id: string } }",
        solution: "type PageProps = { params: { id: string } };",
        expected: ["params", "id: string"],
        difficulty: "easy",
      },
      {
        id: "nextjs-2",
        title: "Client directive",
        prompt: "Khi nào cần \"use client\"? Giải thích 1 câu (nhắc state/effects/handlers).",
        hint: "Khi dung state, effects, event handlers.",
        solution: "Can \"use client\" khi component su dung state, effects, context, hoac event handlers trong client.",
        expected: ["use client", "state"],
        difficulty: "medium",
      },
      {
        id: "nextjs-3",
        title: "Fetch typing",
        prompt: "Tạo type Course và ghi fetch trả về Course[] (sử dụng await fetch).",
        hint: "const data: Course[] = await fetch(...).then(r => r.json())",
        solution:
          "type Course = { id: string; title: string };\nconst data: Course[] = await fetch(\"/api/courses\").then(r => r.json());",
        expected: ["Course[]", "fetch"],
        difficulty: "hard",
      },
      {
        id: "nextjs-4",
        title: "Server component",
        prompt: "Vì sao server component giảm bundle? Giải thích 1 câu.",
        hint: "No khong duoc ship len client.",
        solution: "Server component chay tren server va khong duoc ship len client, nen giam bundle size va JS tren client.",
        expected: ["bundle", "client"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "nextjs-q1",
        question: "Khi nào cần \"use client\"?",
        options: ["Khi dùng state/effects/handlers", "Luôn luôn", "Chỉ server", "Không bao giờ"],
        answerIndex: 0,
        explanation: "use client cần khi dùng state, effects, hoặc event handlers.",
      },
      {
        id: "nextjs-q2",
        question: "Server component giúp gì?",
        options: ["Giảm bundle client", "Tăng JS client", "Bắt buộc CSS", "Tắt caching"],
        answerIndex: 0,
        explanation: "Server component không ship lên client, giúp giảm bundle.",
      },
      {
        id: "nextjs-q3",
        question: "Typed route params giúp?",
        options: ["An toàn khi đọc params", "Tăng runtime", "Bỏ type", "Không cần"],
        answerIndex: 0,
        explanation: "Typed params giúp tránh sai khi đọc params.",
      },
    ],
  },
  {
    id: "express-ts",
    title: "Express + TypeScript",
    level: "framework",
    description: "Typing request/response và middleware trong Express.",
    theory: [
      "Express Request/Response có generic type để typing params/body/query.",
      "Middleware có signature (req, res, next).",
      "Được thường dùng với zod/validation để type-safe.",
      "App structure nên tách routes và controllers.",
    ],
    examples: [
      {
        title: "Typed Request",
        code: "import type { Request, Response } from \"express\";\n\ntype Params = { id: string };\nfunction getCourse(req: Request<Params>, res: Response) {\n  res.json({ id: req.params.id });\n}",
      },
      {
        title: "Typed body",
        code: "type Body = { title: string };\nfunction createCourse(req: Request<{}, {}, Body>, res: Response) {\n  res.json(req.body);\n}",
      },
    ],
    exercises: [
      {
        id: "express-1",
        title: "Params typing",
        prompt: "Tạo Params type có courseId: string, dùng trong Request<Params>.",
        hint: "type Params = { courseId: string }",
        solution: "type Params = { courseId: string };\nfunction handler(req: Request<Params>, res: Response) { res.send(req.params.courseId); }",
        expected: ["courseId", "Request<Params>"],
        difficulty: "easy",
      },
      {
        id: "express-2",
        title: "Body typing",
        prompt: "Tạo Body type có title: string và level: string cho Request body.",
        hint: "Request<{}, {}, Body>",
        solution: "type Body = { title: string; level: string };\nfunction handler(req: Request<{}, {}, Body>, res: Response) { res.json(req.body); }",
        expected: ["Request<{}, {}, Body>", "level"],
        difficulty: "medium",
      },
      {
        id: "express-3",
        title: "Middleware typing",
        prompt: "Viết middleware log method và gọi next() (Request, Response, NextFunction).",
        hint: "(req: Request, res: Response, next: NextFunction) => void",
        solution: "import type { Request, Response, NextFunction } from \"express\";\nconst logger = (req: Request, res: Response, next: NextFunction) => { console.log(req.method); next(); };",
        expected: ["NextFunction", "next()"],
        difficulty: "hard",
      },
      {
        id: "express-4",
        title: "Validation idea",
        prompt: "Giải thích vì sao cần validation cho body (1-2 câu).",
        hint: "Dam bao data dung shape truoc khi xu ly.",
        solution: "Validation dam bao request body dung shape/constraints, tranh loi runtime va tang type-safety cho backend.",
        expected: ["validation", "type"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "express-q1",
        question: "Request generic dùng để?",
        options: ["Typing params/body/query", "Tạo route", "Bỏ type", "Tạo UI"],
        answerIndex: 0,
        explanation: "Request generic giúp typing params/body/query.",
      },
      {
        id: "express-q2",
        question: "Middleware signature gồm gì?",
        options: ["req, res, next", "ctx, next", "req, next", "res, next"],
        answerIndex: 0,
        explanation: "Middleware signature chuẩn là (req, res, next).",
      },
      {
        id: "express-q3",
        question: "Vì sao cần validation?",
        options: ["Đảm bảo dữ liệu đúng shape", "Tăng CSS", "Giảm type safety", "Không cần"],
        answerIndex: 0,
        explanation: "Validation đảm bảo dữ liệu đúng shape trước khi xử lý.",
      },
    ],
  },
  {
    id: "nestjs-ts",
    title: "NestJS + TypeScript",
    level: "framework",
    description: "DTOs, decorators và validation trong NestJS.",
    theory: [
      "NestJS dùng decorators để khai báo controllers và routes.",
      "DTO (Data Transfer Object) mô tả shape dữ liệu vào/ra.",
      "class-validator + class-transformer giúp validate DTO.",
      "Service và dependency injection là core concept.",
    ],
    examples: [
      {
        title: "DTO example",
        code: "import { IsString } from \"class-validator\";\nexport class CreateCourseDto {\n  @IsString()\n  title: string;\n}",
      },
      {
        title: "Controller",
        code: "@Controller(\"courses\")\nexport class CoursesController {\n  @Post()\n  create(@Body() dto: CreateCourseDto) {\n    return dto;\n  }\n}",
      },
    ],
    exercises: [
      {
        id: "nestjs-1",
        title: "DTO",
        prompt: "Tạo DTO CreateUserDto có email: string và password: string.",
        hint: "class CreateUserDto { email: string; password: string }",
        solution: "export class CreateUserDto { email: string; password: string }",
        expected: ["class CreateUserDto", "email", "password"],
        difficulty: "easy",
      },
      {
        id: "nestjs-2",
        title: "Decorator",
        prompt: "Viết controller có route GET /health (sử dụng @Controller, @Get).",
        hint: "@Controller() va @Get('health')",
        solution: "@Controller()\nexport class HealthController {\n  @Get(\"health\")\n  health() { return { ok: true }; }\n}",
        expected: ["@Controller", "@Get"],
        difficulty: "medium",
      },
      {
        id: "nestjs-3",
        title: "Validation",
        prompt: "Tại sao cần class-validator cho DTO? (1 câu).",
        hint: "Validate input tu client.",
        solution: "class-validator giup validate input truoc khi vao business logic, giam loi va tang an toan du lieu.",
        expected: ["class-validator", "validate"],
        difficulty: "hard",
      },
      {
        id: "nestjs-4",
        title: "Service",
        prompt: "Giải thích vai trò service trong NestJS (1 câu).",
        hint: "No chua business logic.",
        solution: "Service chua business logic va duoc inject vao controller de tach concerns.",
        expected: ["business logic", "inject"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "nestjs-q1",
        question: "DTO dùng để?",
        options: ["Mô tả dữ liệu vào/ra", "Tạo route", "Tạo DB", "Tạo UI"],
        answerIndex: 0,
        explanation: "DTO mô tả shape dữ liệu vào/ra.",
      },
      {
        id: "nestjs-q2",
        question: "class-validator giúp gì?",
        options: ["Validate dữ liệu", "Tạo controller", "Tạo module", "Chạy nhanh hơn"],
        answerIndex: 0,
        explanation: "class-validator giúp validate DTO.",
      },
      {
        id: "nestjs-q3",
        question: "Service trong NestJS có vai trò gì?",
        options: ["Chứa business logic", "Chỉ render UI", "Chỉ config", "Chỉ test"],
        answerIndex: 0,
        explanation: "Service chứa business logic và được inject vào controller.",
      },
    ],
  },
  {
    id: "react-native-ts",
    title: "React Native + TypeScript",
    level: "framework",
    description: "Typing props, styles và navigation trong React Native.",
    theory: [
      "React Native components có props typing từ React Native types.",
      "StyleSheet.create giúp type-safe styles.",
      "Navigation typing quan trọng để an toàn route params.",
      "useState/useRef tương tự React web.",
    ],
    examples: [
      {
        title: "Typed props",
        code: "type CardProps = { title: string };\nexport function Card({ title }: CardProps) {\n  return <Text>{title}</Text>;\n}",
      },
      {
        title: "StyleSheet",
        code: "const styles = StyleSheet.create({\n  container: { padding: 16 },\n  title: { fontSize: 18 },\n});",
      },
    ],
    exercises: [
      {
        id: "rn-1",
        title: "Props typing",
        prompt: "Tạo component Badge nhận label: string.",
        hint: "type BadgeProps = { label: string }",
        solution: "type BadgeProps = { label: string };\nfunction Badge({ label }: BadgeProps) { return <Text>{label}</Text>; }",
        expected: ["BadgeProps", "label: string"],
        difficulty: "easy",
      },
      {
        id: "rn-2",
        title: "StyleSheet",
        prompt: "Tạo styles cho container có padding 12 (StyleSheet.create).",
        hint: "StyleSheet.create({ container: { padding: 12 } })",
        solution: "const styles = StyleSheet.create({ container: { padding: 12 } });",
        expected: ["StyleSheet.create", "padding: 12"],
        difficulty: "medium",
      },
      {
        id: "rn-3",
        title: "Navigation params",
        prompt: "Giải thích vì sao cần typing params cho navigation (1 câu).",
        hint: "Tranh sai key/shape.",
        solution: "Typing params giup tranh sai key/shape khi navigate, tang an toan va auto-complete.",
        expected: ["typing", "params"],
        difficulty: "hard",
      },
      {
        id: "rn-4",
        title: "useState typing",
        prompt: "Tạo state selectedTab có type 'home' | 'profile', giá trị ban đầu 'home'.",
        hint: "useState<\"home\" | \"profile\">(\"home\")",
        solution: "const [selectedTab, setSelectedTab] = useState<\"home\" | \"profile\">(\"home\");",
        expected: ["useState<\"home\" | \"profile\">"],
        difficulty: "challenge",
      },
    ],
    quiz: [
      {
        id: "rn-q1",
        question: "StyleSheet.create giúp gì?",
        options: ["Type-safe styles", "Tạo route", "Tạo state", "Tạo module"],
        answerIndex: 0,
        explanation: "StyleSheet.create giúp type-safe styles.",
      },
      {
        id: "rn-q2",
        question: "Typing navigation params giúp?",
        options: ["Tránh sai params khi navigate", "Tăng CSS", "Bỏ type", "Không cần"],
        answerIndex: 0,
        explanation: "Typing params giúp tránh sai khi navigate.",
      },
      {
        id: "rn-q3",
        question: "useState trong React Native giống React web?",
        options: ["Có", "Không", "Chỉ server", "Chỉ class"],
        answerIndex: 0,
        explanation: "useState tương tự React web.",
      },
    ],
  },
];
