import { create } from 'zustand';
import { SearchCondition } from '../types';

interface SearchStore {
  // 상태
  conditions: SearchCondition;
  selectedCounts: Record<keyof SearchCondition, number>;
  
  // 액션
  toggleCondition: (section: keyof SearchCondition, value: string) => void;
  resetConditions: () => void;
  loadFromResume: () => void;
  getSelectedCount: (section: keyof SearchCondition) => number;
  getTotalResults: () => number;
}

// 초기 검색 조건
const initialConditions: SearchCondition = {
  workPeriod: [],
  workDays: [],
  workTime: [],
  gender: [],
  employmentType: [],
  area: [],
  jobCategory: [],
};

export const useSearchStore = create<SearchStore>((set, get) => ({
  // 초기 상태
  conditions: initialConditions,
  selectedCounts: {
    workPeriod: 0,
    workDays: 0,
    workTime: 0,
    gender: 0,
    employmentType: 0,
    area: 0,
    jobCategory: 0,
  },

  // 조건 토글
  toggleCondition: (section, value) => {
    set((state) => {
      const currentSection = state.conditions[section];
      const isSelected = currentSection.includes(value);
      
      let newSection: string[];
      if (isSelected) {
        // 선택 해제
        newSection = currentSection.filter(item => item !== value);
      } else {
        // 선택 추가 (최대 개수 제한 확인)
        const maxCount = section === 'employmentType' ? 7 : Infinity;
        if (currentSection.length >= maxCount) {
          return state; // 최대 개수 도달 시 추가 불가
        }
        newSection = [...currentSection, value];
      }

      const newConditions = {
        ...state.conditions,
        [section]: newSection,
      };

      const newSelectedCounts = {
        ...state.selectedCounts,
        [section]: newSection.length,
      };

      return {
        conditions: newConditions,
        selectedCounts: newSelectedCounts,
      };
    });
  },

  // 모든 조건 초기화
  resetConditions: () => {
    set({
      conditions: initialConditions,
      selectedCounts: {
        workPeriod: 0,
        workDays: 0,
        workTime: 0,
        gender: 0,
        employmentType: 0,
        area: 0,
        jobCategory: 0,
      },
    });
  },

  // 이력서에서 불러오기 (시뮬레이션)
  loadFromResume: () => {
    // 실제로는 API 호출을 통해 이력서 데이터를 가져옴
    const resumeConditions: SearchCondition = {
      workPeriod: ['1개월~3개월', '3개월~6개월'],
      workDays: ['월~금', '주말(토,일)'],
      workTime: ['오전 파트', '오후 파트'],
      gender: ['무관'],
      employmentType: ['알바'],
      area: ['강남구', '서초구'],
      jobCategory: ['서빙', '주방보조·설거지'],
    };

    const resumeCounts = {
      workPeriod: resumeConditions.workPeriod.length,
      workDays: resumeConditions.workDays.length,
      workTime: resumeConditions.workTime.length,
      gender: resumeConditions.gender.length,
      employmentType: resumeConditions.employmentType.length,
      area: resumeConditions.area.length,
      jobCategory: resumeConditions.jobCategory.length,
    };

    set({
      conditions: resumeConditions,
      selectedCounts: resumeCounts,
    });
  },

  // 선택된 개수 반환
  getSelectedCount: (section) => {
    return get().selectedCounts[section];
  },

  // 총 결과 수 계산 (시뮬레이션)
  getTotalResults: () => {
    const { conditions } = get();
    let baseCount = 2634; // 기본 결과 수
    
    // 선택된 조건에 따라 결과 수 조정 (실제로는 API 호출 결과)
    if (conditions.workPeriod.length > 0) baseCount = Math.floor(baseCount * 0.8);
    if (conditions.workDays.length > 0) baseCount = Math.floor(baseCount * 0.7);
    if (conditions.employmentType.length > 0) baseCount = Math.floor(baseCount * 0.6);
    
    return Math.max(baseCount, 100); // 최소 100건
  },
}));
