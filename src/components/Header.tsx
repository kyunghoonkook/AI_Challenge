import React from 'react';
import { useSearchStore } from '../store/searchStore';

interface HeaderProps {
  onBack: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBack }) => {
  const { resetConditions } = useSearchStore();

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        {/* 뒤로가기 버튼 */}
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="뒤로가기"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* 페이지 제목 */}
        <h1 className="text-lg font-bold text-text">검색조건설정</h1>

        {/* 초기화 버튼 */}
        <button
          onClick={resetConditions}
          className="text-text font-medium hover:text-primary transition-colors"
        >
          초기화
        </button>
      </div>
    </header>
  );
};

export default Header;
