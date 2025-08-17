import React from 'react';
import Header from './components/Header';
import CommonSettings from './components/CommonSettings';
import JobCategorySection from './components/JobCategorySection';
import FilterSection from './components/FilterSection';
import ResultButton from './components/ResultButton';
import { useSearchStore } from './store/searchStore';

// JSON 데이터 (실제로는 API에서 가져옴)
const conditionData = {
  workPeriod: {
    name: "근무기간",
    collection: [
      "1주일이하",
      "1년이상",
      "하루(1일)",
      "1개월~3개월",
      "1주일~1개월",
      "6개월~1년",
      "3개월~6개월"
    ]
  },
  workDays: {
    name: "근무요일",
    collection: [
      "월~일",
      "월~토",
      "월~금",
      "주말(토,일)",
      "주6일",
      "주5일",
      "주4일",
      "주3일",
      "주2일",
      "주1일"
    ]
  },
  workTime: {
    name: "근무시간",
    collection: [
      "오전 파트",
      "오후 파트",
      "저녁 파트",
      "새벽 파트",
      "오전~오후 파트",
      "오후~저녁 파트",
      "저녁~새벽 파트",
      "새벽~오전 파트",
      "풀타임(8시간 이상)"
    ]
  },
  gender: {
    name: "성별",
    collection: ["무관", "남성", "여성"]
  },
  employmentType: {
    name: "고용형태",
    maxCount: 7,
    type: "selection",
    collection: [
      "알바",
      "정규직",
      "계약직",
      "파견직",
      "청년인턴",
      "위촉직(프리랜서)",
      "연수생/교육생"
    ]
  }
};

function App() {
  const handleBack = () => {
    // 실제로는 이전 페이지로 이동
    alert('이전 페이지로 이동합니다!');
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* 헤더 */}
      <Header onBack={handleBack} />
      
      {/* 메인 컨텐츠 */}
      <main className="px-0">
        {/* 공통설정 */}
        <CommonSettings />
        
        {/* 업직종 */}
        <JobCategorySection />
        
        {/* 근무기간 */}
        <FilterSection
          section="workPeriod"
          title={conditionData.workPeriod.name}
          options={conditionData.workPeriod.collection}
        />
        
        {/* 근무요일 */}
        <FilterSection
          section="workDays"
          title={conditionData.workDays.name}
          options={conditionData.workDays.collection}
        />
        
        {/* 근무시간 */}
        <FilterSection
          section="workTime"
          title={conditionData.workTime.name}
          options={conditionData.workTime.collection}
        />
        
        {/* 성별 */}
        <FilterSection
          section="gender"
          title={conditionData.gender.name}
          options={conditionData.gender.collection}
        />
        
        {/* 고용형태 */}
        <FilterSection
          section="employmentType"
          title={conditionData.employmentType.name}
          options={conditionData.employmentType.collection}
          maxCount={conditionData.employmentType.maxCount}
          type={conditionData.employmentType.type}
        />
      </main>
      
      {/* 결과보기 버튼 */}
      <ResultButton />
    </div>
  );
}

export default App;
