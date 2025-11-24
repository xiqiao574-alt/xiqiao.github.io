export interface Exercise {
  id: string;
  source: string; // e.g., "同济教材P20 习题1.2"
  question: string; // LaTeX supported string
  answer: string; // LaTeX supported string
}

export interface Chapter {
  id: string;
  title: string;
  exercises: Exercise[];
}

// Declare global KaTeX property on window since we load it via CDN
declare global {
  interface Window {
    katex: any;
  }
}