# Futurama

[샘플 API](https://sampleapis.com/) 에서[Futurama API](https://sampleapis.com/api-list/futurama)를 이용하여 설계한 프로젝트입니다.

API를 이용해 데이터를 받아오고 스크린에 출력하여 Futurama 애니메이션의 정보를 나타내고 있습니다.
가독성과 유지보수성을 위해 추상화하는데 집중한 프로젝트 입니다.

- 서비스 링크 : https://futurama-eta.vercel.app/
- GitHub : https://github.com/LEEHYUNHO2001/futurama.vercel.com
- Velog : https://velog.io/@leehyunho2001/Futurama-API

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

- 기간 : 2021.12.20(목) ~ 2021.12.28(일)
  - 초기 환경 셋팅
  - Futurama API 데이터 사용
  - 프로젝트 추상화
  - 동적 라우팅
  - emotion(styled)
  - 반응형

<br>

## src 디렉터리 구조

```
  src
  ├─ components
  │   ├─ layout
  │   │   ├─ index.ts
  │   │   ├─ Layout.tsx
  │   │   ├─ MobileNav.tsx
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
  │   │   ├─ [id]].tsx
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
  │   ├─ routes.ts
  │
  └─  utils
        ├─ fetcher.ts

  index.html
```

### 더 도전해보기

emotion 추상화
