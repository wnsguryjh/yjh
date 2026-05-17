# 양준혁 · Yang Junhyuk — Portfolio

AI-Native 스마트 총무 전문가 포트폴리오 웹사이트.
**저장소:** [github.com/wnsguryjh/yjh](https://github.com/wnsguryjh/yjh)
**공개 주소(배포 후):** `https://wnsguryjh.github.io/yjh/`

별도의 빌드 도구 없이 정적 파일만으로 동작하므로 GitHub Pages에 바로 배포됩니다.

---

## 🚀 빠른 배포 (이 저장소 기준)

### A. 명령어로 푸시

이 폴더 그대로 `wnsguryjh/yjh` 저장소에 올립니다.

```bash
# 이 폴더 안에서
git init
git add .
git commit -m "feat: portfolio v1"
git branch -M main
git remote add origin https://github.com/wnsguryjh/yjh.git
git push -u origin main
```

### B. GitHub Pages 활성화

저장소 페이지에서:

1. **Settings** → 왼쪽 메뉴 **Pages**
2. **Source**: `Deploy from a branch`
3. **Branch**: `main` / `/(root)` → **Save**

1~2분 뒤 다음 주소에서 공개됩니다:

> **https://wnsguryjh.github.io/yjh/**

---

## 📁 구성

| 파일 | 역할 |
|---|---|
| `index.html` | 진입점 — 폰트, 스타일, 스크립트 로드 |
| `styles.css` | 전체 스타일 (에디토리얼 미니멀, 반응형) |
| `data.js` | 콘텐츠 (한국어 + 영어) |
| `components.jsx` | React 컴포넌트 — Hero, KPI, About, Career, Projects, Skills, Education, Contact, Footer |
| `app.jsx` | 메인 앱 (언어 토글, 액티브 섹션 추적, 리빌) |
| `.nojekyll` | GitHub Pages가 Jekyll로 처리하지 않도록 빈 파일 |

## ✨ 기능

- **KO ↔ EN 언어 토글** — 선택값 `localStorage` 저장
- **프로젝트 검색 + 카테고리 필터** (전체 / 비용 / AI / 공간 / 운영) — 10개 프로젝트
- **프로젝트 상세 모달** — ESC·배경 클릭으로 닫기
- **스크롤 리빌 + 액티브 섹션 네비게이션** (IntersectionObserver)
- **데스크탑·모바일 동등 반응형**

## ✏️ 콘텐츠 수정

`data.js` 한 파일만 손보면 사이트 전체가 갱신됩니다. 모든 텍스트는 `{ ko, en }` 객체로 작성되어 있어 양 언어 모두 채워주세요.

### 새 프로젝트 추가

`window.PORTFOLIO_DATA.projects` 배열에 추가:

```js
{
  id: "p11",
  year: "2026",
  category: "ops",          // cost | ai | space | ops
  title:    { ko: "...", en: "..." },
  org:      "KONA I",
  headline: { ko: "...", en: "..." },
  summary:  { ko: "...", en: "..." },
  details:  { ko: ["..."], en: ["..."] },
  tags:     { ko: ["..."], en: ["..."] }
}
```

## 🌐 커스텀 도메인 (선택)

저장소 루트에 `CNAME` 파일을 만들어 도메인 한 줄을 적고, DNS에서 `CNAME` 또는 `A` 레코드를 GitHub Pages IP로 설정.

## 🛠 로컬 실행

`<script type="text/babel">`은 `file://` 에서 차단되므로 간단한 로컬 서버 사용:

```bash
python3 -m http.server 8000
# 또는
npx serve .
```

브라우저에서 `http://localhost:8000` 으로 접속.

## 🎨 디자인 시스템

- **Type** — Newsreader (Serif, 헤딩·이탤릭 강조) + IBM Plex Sans KR (본문) + IBM Plex Mono (메타·번호)
- **Color** — Bg `#fafaf8`, Ink `#0d0d0d`, Mute `#8a8579`, Accent `oklch(0.52 0.14 32)` (테라코타)
- **Grid** — 12-col, max-width 1280
- **Motion** — 0.65s ease 페이드 + 16px translate

— Compiled May 2026
