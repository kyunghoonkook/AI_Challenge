# 알바몬 검색조건설정 모바일 웹

알바몬의 '검색조건설정' 모바일 웹 페이지를 React와 생성형 AI를 활용해 구현한 프로젝트입니다.

## 🎯 프로젝트 목표

- React 기반 프로젝트 환경 구축
- AI IDE 규칙(rule) 활성화 및 규칙 파일 작성
- 생성형 AI를 활용한 알바몬 검색조건설정 모바일 페이지 UI 구현
- 분석, 설계, 코드 작성, 테스트 등 전 과정에서 생성형 AI 도구 적극 활용

## 🏗️ 기술 스택

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Mobile First**: 모바일 최적화 UI/UX

## 📱 주요 기능

### 1. 검색조건 설정
- **근무기간**: 하루(1일) ~ 1년이상 (7개 옵션)
- **근무요일**: 월~일 ~ 주1일 (10개 옵션)
- **근무시간**: 오전 파트 ~ 풀타임 (9개 옵션)
- **성별**: 무관, 남성, 여성 (3개 옵션)
- **고용형태**: 알바 ~ 연수생/교육생 (7개 옵션, 최대 7개 선택)

### 2. 공통 기능
- **초기화**: 모든 선택된 조건을 초기화
- **이력서에서 불러오기**: 저장된 이력서 정보를 기반으로 조건 설정
- **업직종 추가**: 업직종 선택 기능 (추가 구현 예정)

### 3. UI/UX 특징
- **모바일 최적화**: 375px 이상 화면에서 최적화
- **터치 친화적**: 최소 44px 터치 영역
- **실시간 카운터**: 각 섹션별 선택된 항목 수 표시
- **고정 하단 버튼**: 결과보기 버튼을 하단에 고정

## 🚀 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```

### 3. 빌드
```bash
npm run build
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Header.tsx      # 헤더 (뒤로가기, 제목, 초기화)
│   ├── CommonSettings.tsx  # 공통설정 (이력서에서 불러오기)
│   ├── JobCategorySection.tsx  # 업직종 섹션
│   ├── FilterSection.tsx      # 재사용 가능한 필터 섹션
│   └── ResultButton.tsx       # 하단 결과보기 버튼
├── store/              # 상태 관리
│   └── searchStore.ts  # Zustand store (검색 조건 상태)
├── types/              # TypeScript 타입 정의
│   └── index.ts        # 인터페이스 및 타입
├── App.tsx             # 메인 App 컴포넌트
└── index.css           # Tailwind CSS 및 커스텀 스타일
```

## 🎨 UI/UX 가이드라인

- **색상**: Primary (#FF6B35), Secondary (#004E7C)
- **타이포그래피**: 명확하고 읽기 쉬운 폰트 크기
- **반응형**: Tailwind CSS 클래스 활용한 모바일 우선 디자인
- **접근성**: 적절한 aria-label 및 키보드 네비게이션 지원

## 🔧 AI 도구 활용

### 1. Cursor IDE 규칙
- `.cursorrules` 파일로 프로젝트 개발 가이드라인 설정
- TypeScript 엄격 모드 및 코드 품질 규칙 정의
- 컴포넌트 설계 원칙 및 개발 워크플로우 가이드

### 2. 생성형 AI 활용
- **컴포넌트 설계**: 재사용 가능한 컴포넌트 구조 설계
- **상태 관리**: Zustand를 활용한 효율적인 상태 관리
- **타입 정의**: TypeScript 인터페이스 설계
- **스타일링**: Tailwind CSS 클래스 활용

## 📊 데이터 구조

### 검색 조건 데이터
```typescript
interface SearchCondition {
  workPeriod: string[];      // 근무기간
  workDays: string[];        // 근무요일
  workTime: string[];        // 근무시간
  gender: string[];          // 성별
  employmentType: string[];  // 고용형태
  area: string[];            // 지역
  jobCategory: string[];     // 업직종
}
```

### 제공된 JSON 데이터 활용
- `area.json`: 서울시 지역 정보
- `job.json`: 외식·음료 업직종 정보
- `condition.json`: 근무 조건 상세 정보

## 🧪 테스트 및 검증

### 기능 테스트
- [x] 검색 조건 선택/해제
- [x] 조건 초기화
- [x] 이력서에서 불러오기
- [x] 실시간 카운터 업데이트
- [x] 최대 선택 개수 제한 (고용형태: 7개)

### UI 테스트
- [x] 모바일 반응형 디자인
- [x] 터치 인터페이스
- [x] 색상 및 타이포그래피
- [x] 접근성 요소

## 🔮 향후 개선 계획

1. **업직종 선택 모달**: 실제 업직종 선택 기능 구현
2. **지역 선택**: 서울시 지역별 선택 기능 추가
3. **검색 결과 연동**: 실제 API 연동 및 결과 페이지 연결
4. **애니메이션**: 부드러운 전환 효과 추가
5. **다크 모드**: 사용자 선호도에 따른 테마 지원

## 📝 개발 과정

### 1단계: 프로젝트 환경 구축
- React + TypeScript + Vite 프로젝트 생성
- Tailwind CSS 설정 및 커스텀 스타일 정의

### 2단계: AI IDE 규칙 설정
- `.cursorrules` 파일 생성
- 개발 가이드라인 및 코드 품질 규칙 정의

### 3단계: 상태 관리 설계
- Zustand store 설계
- 검색 조건 상태 관리 로직 구현

### 4단계: 컴포넌트 구현
- 재사용 가능한 컴포넌트 설계
- 모바일 최적화 UI 구현

### 5단계: 기능 통합 및 테스트
- 모든 컴포넌트 통합
- 기능 테스트 및 UI 검증

## 🤝 기여 방법

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 👨‍💻 개발자

- **프론트엔드**: React + TypeScript
- **AI 도구**: Cursor IDE, 생성형 AI 활용
- **디자인**: 모바일 우선 반응형 디자인

---

**참고**: 이 프로젝트는 알바몬의 검색조건설정 페이지를 참고하여 학습 목적으로 구현되었습니다.
