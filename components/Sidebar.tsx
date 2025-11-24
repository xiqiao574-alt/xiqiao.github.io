import React from 'react';
import { Chapter } from '../types';

interface SidebarProps {
  chapters: Chapter[];
  selectedChapterId: string;
  onSelectChapter: (id: string) => void;
  isOpen: boolean;
  onCloseMobile: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  chapters,
  selectedChapterId,
  onSelectChapter,
  isOpen,
  onCloseMobile,
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        {/* Header */}
        <div className="h-16 flex items-center px-6 border-b border-slate-100 bg-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.216 50.59 50.59 0 00-2.658.813m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
          <h1 className="text-xl font-bold text-white tracking-tight">数学分析习题</h1>
        </div>

        {/* Chapter List */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-1">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              onClick={() => {
                onSelectChapter(chapter.id);
                onCloseMobile();
              }}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group flex items-start ${
                selectedChapterId === chapter.id
                  ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-200'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={`mt-0.5 mr-3 flex-shrink-0 w-1.5 h-1.5 rounded-full ${selectedChapterId === chapter.id ? 'bg-blue-600' : 'bg-slate-300 group-hover:bg-slate-400'}`}></span>
              <span className="line-clamp-2">{chapter.title}</span>
            </button>
          ))}
        </div>
        
        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <p className="text-xs text-slate-400 text-center">
            基于同济/华东师范版教材
            <br />
            © 2024 MathAnalysis
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;