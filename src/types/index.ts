// 검색 조건 관련 타입 정의
export interface SearchCondition {
  workPeriod: string[];
  workDays: string[];
  workTime: string[];
  gender: string[];
  employmentType: string[];
  area: string[];
  jobCategory: string[];
}

// 지역 정보 타입
export interface AreaData {
  name: string;
  collection: string[];
}

// 직업 정보 타입
export interface JobData {
  name: string;
  collection: string[];
}

// 근무 조건 타입
export interface WorkCondition {
  workPeriod: {
    name: string;
    collection: string[];
  };
  workDays: {
    name: string;
    collection: string[];
  };
  workTime: {
    name: string;
    collection: string[];
  };
  gender: {
    name: string;
    collection: string[];
  };
  employmentType: {
    name: string;
    maxCount: number;
    type: string;
    collection: string[];
  };
}

// 필터 옵션 타입
export interface FilterOption {
  id: string;
  label: string;
  selected: boolean;
}

// 섹션 타입
export interface FilterSection {
  id: keyof SearchCondition;
  title: string;
  options: FilterOption[];
  maxCount?: number;
  type?: string;
}
