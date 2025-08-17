import React from 'react';
import { useSearchStore } from '../store/searchStore';

const ResultButton: React.FC = () => {
  const { getTotalResults } = useSearchStore();
  const totalResults = getTotalResults();

  const handleViewResults = () => {
    // 실제로는 검색 결과 페이지로 이동
    alert(`${totalResults}건의 결과를 확인합니다!`);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-20">
      <button
        onClick={handleViewResults}
        className="w-full btn-primary py-4 text-lg font-semibold"
      >
        {totalResults.toLocaleString()}건의 결과보기
      </button>
    </div>
  );
};

export default ResultButton;
