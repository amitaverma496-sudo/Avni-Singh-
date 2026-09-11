import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { Check, X, RotateCcw, ArrowRight, HelpCircle } from 'lucide-react';

export const SectionQuiz: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answersState, setAnswersState] = useState<{ [key: number]: boolean }>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQ = QUIZ_QUESTIONS[currentIndex];

  const handleSelect = (optionIndex: number) => {
    if (selectedOption !== null) return; // Prevent changing after answered
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === currentQ.correctIndex;
    setAnswersState((prev) => ({ ...prev, [currentIndex]: isCorrect }));
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setAnswersState({});
    setIsCompleted(false);
  };

  const isAnswered = selectedOption !== null;
  const isCorrect = isAnswered && selectedOption === currentQ.correctIndex;

  return (
    <section id="section-quiz" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-sans font-medium tracking-wide uppercase text-[#D9B779] bg-[#D9B779]/15 border border-[#D9B779]/30 mb-3">
            Memory Verification
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#342728] font-medium tracking-tight mb-3">
            Okay, now test me.
          </h2>
          <p className="text-sm sm:text-base text-[#342728]/70 font-sans">
            Pick an answer to verify whether I actually kept track of what you told me.
          </p>
        </div>

        {/* Quiz Card Container */}
        <div className="bg-[#FFFDFC] border border-[#C98291]/25 rounded-2xl p-6 sm:p-10 shadow-[0_8px_30px_-12px_rgba(114,85,103,0.1)] relative">
          {!isCompleted ? (
            <div>
              {/* Question progress header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#342728]/10 text-xs font-sans text-[#725567]">
                <span className="font-medium tracking-wider uppercase">
                  Question {currentIndex + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <span className="font-mono text-[#D9B779] font-semibold">
                  {Object.values(answersState).filter(Boolean).length} / {QUIZ_QUESTIONS.length} Correct
                </span>
              </div>

              {/* Question Text */}
              <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#342728] mb-6 leading-snug">
                {currentQ.question}
              </h3>

              {/* 3 Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, idx) => {
                  let btnStyle = 'border-[#C98291]/20 bg-[#FFF9F3]/60 text-[#342728] hover:border-[#725567]/40 hover:bg-[#FFF9F3]';
                  
                  if (isAnswered) {
                    if (idx === currentQ.correctIndex) {
                      btnStyle = 'border-[#A8B5A0] bg-[#A8B5A0]/15 text-[#342728] font-medium';
                    } else if (idx === selectedOption) {
                      btnStyle = 'border-[#C98291] bg-[#C98291]/15 text-[#725567]';
                    } else {
                      btnStyle = 'opacity-40 border-transparent bg-gray-50 text-gray-400';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelect(idx)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-xl border text-sm sm:text-base transition-all duration-200 flex items-center justify-between cursor-pointer ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {isAnswered && idx === currentQ.correctIndex && (
                        <Check className="w-5 h-5 text-[#6a875d] shrink-0 ml-3" />
                      )}
                      {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                        <X className="w-5 h-5 text-[#C98291] shrink-0 ml-3" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Response message & explanation */}
              {isAnswered && (
                <div
                  className={`p-4 rounded-xl border transition-all duration-300 mb-6 ${
                    isCorrect
                      ? 'bg-[#A8B5A0]/15 border-[#A8B5A0]/40 text-[#342728]'
                      : 'bg-[#C98291]/15 border-[#C98291]/30 text-[#725567]'
                  }`}
                >
                  <p className="font-handwriting text-xl sm:text-2xl font-medium mb-1">
                    {isCorrect ? 'See? I was listening. 😌' : 'Okay… that one hurt my credibility. 😅'}
                  </p>
                  <p className="text-xs sm:text-sm text-[#342728]/80 font-sans">
                    {currentQ.explanation}
                  </p>
                </div>
              )}

              {/* Next Question / Finish Button */}
              {isAnswered && (
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#725567] text-[#FFFDFC] text-sm font-medium hover:bg-[#5f4455] transition-colors shadow-sm cursor-pointer"
                  >
                    <span>{currentIndex < QUIZ_QUESTIONS.length - 1 ? 'Next Question' : 'See Results'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Quiz Completed View */
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#A8B5A0]/20 text-[#6a875d] flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl font-medium text-[#342728] mb-2">
                Memory Check Completed
              </h3>
              <p className="text-base font-sans text-[#725567] mb-2">
                You scored: {Object.values(answersState).filter(Boolean).length} / {QUIZ_QUESTIONS.length}
              </p>
              <p className="font-handwriting text-2xl text-[#C98291] mb-6">
                {Object.values(answersState).filter(Boolean).length >= 4
                  ? 'Official verdict: I wasn\'t faking it. 😌'
                  : 'Well, at least you know I didn\'t cheat!'}
              </p>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#725567]/30 text-[#725567] text-sm font-medium hover:bg-[#725567]/10 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Test again</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
