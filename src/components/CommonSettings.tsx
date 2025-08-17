import React from 'react';
import { useSearchStore } from '../store/searchStore';

const CommonSettings: React.FC = () => {
  const { loadFromResume } = useSearchStore();

  return (
    <section className="bg-white px-4 py-4 mb-2">
      {/* 안내 텍스트 */}
      <p className="text-sm text-gray-600 mb-3">
        모든 채용메뉴에 공통 반영됩니다.
      </p>
      
      {/* 이력서에서 불러오기 버튼 */}
      <button
        onClick={loadFromResume}
        className="w-full btn-secondary text-left flex items-center justify-between"
      >
        <span>내 이력서에서 불러오기</span>
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </section>
  );
};

export default CommonSettings;
