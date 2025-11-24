import React, { useState } from 'react';
import { Exercise } from '../types';
import LatexRenderer from './LatexRenderer';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Need to install or mock icons. Since I can't install, I'll use simple SVG JSX.

interface ExerciseCardProps {
  exercise: Exercise;
  index: number;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, index }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden mb-6 transition-all hover:shadow-md">
      {/* Header / Source */}
      <div className="bg-blue-50/50 px-6 py-3 border-b border-blue-100 flex justify-between items-center">
        <span className="text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 px-2 py-1 rounded">
          题目 {index + 1}
        </span>
        <span className="text-xs text-slate-500 font-medium font-mono">
          {exercise.source}
        </span>
      </div>

      {/* Question Body */}
      <div className="p-6">
        <div className="text-slate-800 text-lg leading-relaxed mb-4">
          <LatexRenderer content={exercise.question} block={false} />
        </div>

        {/* Action Button */}
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            showAnswer
              ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
          }`}
        >
          {showAnswer ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
              收起答案
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              查看答案
            </>
          )}
        </button>

        {/* Answer Section with Animation */}
        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
            showAnswer ? 'grid-rows-[1fr] opacity-100 mt-6' : 'grid-rows-[0fr] opacity-0 mt-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="bg-green-50 rounded-lg p-5 border border-green-100 text-slate-700">
               <h4 className="text-sm font-bold text-green-700 mb-2 uppercase tracking-wide">参考答案</h4>
               <LatexRenderer content={exercise.answer} block={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;