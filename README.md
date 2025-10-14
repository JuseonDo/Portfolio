# Portfolio QR Code Business Card

세련된 스크롤 애니메이션이 적용된 포트폴리오 웹사이트입니다. GitHub Pages로 무료 호스팅됩니다!

**현재 포트폴리오 소유자**: Juseon Do - AI Researcher

## 특징

- ✨ 부드러운 스크롤 애니메이션 (Framer Motion)
- 📱 완벽한 반응형 디자인
- 🎨 세련된 화이트 테마
- 📄 JSON 파일로 쉬운 콘텐츠 관리
- 🚀 GitHub Pages 자동 배포
- 💻 백엔드 서버 불필요 (정적 사이트)

## 기술 스택

- **React 18** - UI 라이브러리
- **Vite** - 빌드 도구
- **Framer Motion** - 애니메이션
- **GitHub Pages** - 호스팅
- **GitHub Actions** - 자동 배포

## 로컬 개발 환경 설정

### 사전 요구사항
- Node.js 18 이상
- npm

### 설치 및 실행

```bash
# 레포지토리 클론
git clone https://github.com/your-username/PortfolioQRCode.git
cd PortfolioQRCode

# 프론트엔드 디렉토리로 이동
cd frontend

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

## 콘텐츠 수정 방법

### 1. 데이터 파일 수정

`frontend/public/data.json` 파일을 직접 수정하세요:

```json
{
  "contact": {
    "name": "Your Name",
    "title": "Your Title",
    "email": "your.email@example.com",
    ...
  },
  "publications": [
    {
      "id": 1,
      "title": "Your Paper Title",
      "authors": "Author Names",
      ...
    }
  ],
  "experiences": [...],
  "education": {...}
}
```

### 2. 스킬 수정

`frontend/src/components/About.jsx` 파일에서:

```javascript
const aiSkills = [
  'NLP', 'Large Language Models', 'RAG', ...
];

const technicalSkills = [
  'Python', 'PyTorch', 'Huggingface', ...
];
```

### 3. 스타일 변경

`frontend/src/index.css` 파일에서 색상 테마 변경:

```css
:root {
  --primary-color: #2563eb;      /* 메인 컬러 */
  --text-primary: #1e293b;       /* 기본 텍스트 */
  --text-secondary: #64748b;     /* 보조 텍스트 */
  ...
}
```

## GitHub Pages 배포

### 1. GitHub 레포지토리 생성

```bash
# Git 초기화 (아직 안 했다면)
git init
git add .
git commit -m "Initial commit"

# GitHub 레포지토리에 푸시
git remote add origin https://github.com/your-username/your-repo-name.git
git branch -M main
git push -u origin main
```

### 2. GitHub Pages 설정

1. GitHub 레포지토리로 이동
2. **Settings** → **Pages** 클릭
3. **Source**에서 **GitHub Actions** 선택

### 3. 자동 배포

이제 `main` 브랜치에 푸시할 때마다 자동으로 배포됩니다!

```bash
# 콘텐츠 수정 후
git add .
git commit -m "Update portfolio content"
git push
```

몇 분 후 `https://your-username.github.io/your-repo-name/`에서 확인 가능합니다.

## 빌드

로컬에서 빌드 테스트:

```bash
cd frontend
npm run build
npm run preview
```

빌드된 파일은 `frontend/dist` 디렉토리에 생성됩니다.

## 프로젝트 구조

```
PortfolioQRCode/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 배포 워크플로우
├── frontend/
│   ├── public/
│   │   └── data.json          # 포트폴리오 데이터 (여기를 수정!)
│   ├── src/
│   │   ├── components/        # React 컴포넌트
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 사용 팁

### 이미지 추가하기

1. 이미지 파일을 `frontend/public/images/` 에 저장
2. `data.json`에서 경로 참조:
   ```json
   "image": "/images/your-image.jpg"
   ```

### 새 섹션 추가하기

1. `frontend/src/components/`에 새 컴포넌트 생성
2. `App.jsx`에서 import 및 사용
3. 필요한 경우 `data.json`에 데이터 추가

### 커스텀 도메인 사용

GitHub Pages에서 커스텀 도메인을 설정한 경우, `frontend/public/` 디렉토리에 `CNAME` 파일 추가:

```
yourdomain.com
```

## 문제 해결

### GitHub Actions 배포 실패

1. GitHub Settings → Pages → Source가 "GitHub Actions"로 설정되어 있는지 확인
2. `.github/workflows/deploy.yml` 파일이 존재하는지 확인
3. Actions 탭에서 에러 로그 확인

### 데이터가 표시되지 않음

1. `frontend/public/data.json` 파일이 올바른 JSON 형식인지 확인
2. 브라우저 콘솔에서 에러 확인 (F12)

## 라이선스

MIT License

## 문의

질문이나 제안사항이 있으시면 Issue를 등록해주세요.

---

Made with ❤️ using React + Vite + GitHub Pages
# Portfolio
