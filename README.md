# Wine

[샘플 API](https://sampleapis.com/) 에서 [Wine API](https://sampleapis.com/api-list/wines)와 [Beer API](https://sampleapis.com/api-list/beers)를 사용하고 있습니다. 맥주 데이터와 와인 데이터를 받아와 읽어주는 기능을 구현했습니다.

API를 이용해 데이터를 받아오고 프로젝트에서 유지보수 하기 쉽도록 추상화하는데 집중한 프로젝트 입니다.

- 서비스 링크 : https://futurama-eta.vercel.app/
- GitHub : https://github.com/LEEHYUNHO2001/futurama.vercel.com
- Velog : https://velog.io/@leehyunho2001/Wine-API-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B2%88%EC%99%B8

<br>

## 시작하기

```bash
npm run dev
# or
yarn dev
```

[http://localhost:3000](http://localhost:3000) 에서 결과를 확인할 수 있습니다.

<br>

## 스택

- Front-End
  - React Hooks
  - Next.js
  - TypeScript
  - Emotion(styled)
- Deploy
  - Vercel

<br>

## 개발일정

- 기간 : 2021.12.20(목) ~ 2021.12.26(일)
  - 초기 환경 셋팅
  - Futurama API 데이터 사용
  - 프로젝트 추상화
  - emotion(styled)

<br>

## src 디렉터리 구조

```
  src
  ├─ components
  │   ├─ layout
  │   │   ├─ index.ts
  │   │   ├─ Layout.tsx
  │   │   ├─ Navigation.tsx
  │   │
  │   ├─ CastCard.tsx
  │   ├─ CharacterCard.tsx
  │   ├─ CharacterCardContainer.tsx
  │   ├─ EpisodesCard.tsx
  │   ├─ Error.tsx
  │   ├─ InfoCard.tsx
  │   ├─ InventoryCard.tsx
  │   ├─ Loading.tsx
  │   ├─ QuestionsCard.tsx
  │
  ├─ constants
  │   ├─ index.ts
  │
  ├─ hooks
  │   ├─ useData.tsx
  │
  ├─ pages
  │   ├─ cast
  │   │   ├─ index.tsx
  │   │
  │   ├─ characters
  │   │   ├─ index.tsx
  │   │
  │   ├─ episodes
  │   │   ├─ index.tsx
  │   │
  │   ├─ info
  │   │   ├─ index.tsx
  │   │
  │   ├─ inventory
  │   │   ├─ index.tsx
  │   │
  │   ├─ questions
  │   │   ├─ index.tsx
  │   │
  │   ├─ _app.tsx
  │   └─ index.tsx
  │
  ├─ types
  │   ├─ cast.ts
  │   ├─ characters.ts
  │   ├─ episodes.ts
  │   ├─ info.ts
  │   ├─ inventory.ts
  │   ├─ questions.ts
  │
  └─  utils
        ├─ fetcher.ts

  index.html
```

### 더 도전해보기

동적 라우팅
