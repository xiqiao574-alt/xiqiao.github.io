import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ExerciseCard from './components/ExerciseCard';
import { MATH_CHAPTERS } from './constants';
import { Chapter } from './types';
import ReactMarkdown from 'react-markdown';
function App() {
  const [activeChapterId, setActiveChapterId] = useState<string>(MATH_CHAPTERS[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeChapter: Chapter | undefined = MATH_CHAPTERS.find(c => c.id === activeChapterId);

  // Scroll to top when changing chapters
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeChapterId]);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar Navigation */}
      <Sidebar 
        chapters={MATH_CHAPTERS}
        selectedChapterId={activeChapterId}
        onSelectChapter={setActiveChapterId}
        isOpen={isSidebarOpen}
        onCloseMobile={() => setIsSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full md:pl-72 transition-all duration-300">
        
        {/* Mobile Header */}
        <div className="md:hidden bg-white border-b border-slate-200 sticky top-0 z-30 px-4 py-3 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
             <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            <h1 className="text-lg font-bold text-slate-800 truncate max-w-[200px]">
              {activeChapter?.title}
            </h1>
          </div>
        </div>
        {/* 插入的Markdown区域 */}
        <div className="p-4">
             <ReactMarkdown>
                      {`# 练习说明
本章包含：
- 基础教材习题
- 拓展训练题`}
          </ReactMarkdown>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 md:py-12">
          {/* Desktop Chapter Title */}
          <div className="hidden md:block mb-10 pb-4 border-b border-slate-200">
             <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
               {activeChapter?.title}
             </h2>
             <p className="mt-2 text-slate-500">
               本章包含基础教材习题与吉米多维奇精选习题。
             </p>
          </div>

          {/* Exercises List */}
          {activeChapter ? (
            <div className="space-y-8">
              {activeChapter.exercises.map((exercise, index) => (
                <ExerciseCard 
                  key={exercise.id} 
                  exercise={exercise} 
                  index={index} 
                />
              ))}
              
              <div className="mt-12 p-8 text-center bg-white rounded-xl border border-dashed border-slate-300 text-slate-400">
                <p>本章习题已加载完毕</p>
                <p className="text-sm mt-1">加油，数学分析人！</p>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 text-slate-500">
              请选择一个章节开始练习
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;