import React from 'react';
import { useSearchStore } from '../store/searchStore';

const JobCategorySection: React.FC = () => {
  const { selectedCounts } = useSearchStore();
  const currentCount = selectedCounts.jobCategory;

  return (
    <section className="bg-white px-4 py-4 mb-2">
      {/* 섹션 헤더 */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="section-title">업직종</h2>
        <span className="counter">
          {currentCount}/10
        </span>
      </div>

      {/* 추가하기 버튼 */}
      <button className="w-full btn-secondary flex items-center justify-center space-x-2 py-4">
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
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
        <span>추가하기</span>
      </button>
    </section>
  );
};

export default JobCategorySection;
