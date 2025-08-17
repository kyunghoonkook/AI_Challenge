import React from 'react';
import { useSearchStore } from '../store/searchStore';
import { SearchCondition } from '../types';

interface FilterSectionProps {
  section: keyof SearchCondition;
  title: string;
  options: string[];
  maxCount?: number;
  type?: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  section,
  title,
  options,
  maxCount,
  type
}) => {
  const { conditions, selectedCounts, toggleCondition } = useSearchStore();
  const selectedOptions = conditions[section];
  const currentCount = selectedCounts[section];

  return (
    <section className="bg-white px-4 py-4 mb-2">
      {/* 섹션 헤더 */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="section-title">{title}</h2>
        {maxCount && (
          <span className="counter">
            {currentCount}/{maxCount}
          </span>
        )}
      </div>

      {/* 필터 옵션들 */}
      <div className="space-y-2">
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option);
          const isDisabled = maxCount && currentCount >= maxCount && !isSelected;

          return (
            <button
              key={option}
              onClick={() => toggleCondition(section, option)}
              disabled={isDisabled}
              className={`w-full filter-option ${
                isSelected ? 'selected' : ''
              } ${
                isDisabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default FilterSection;
