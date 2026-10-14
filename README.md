# 조성국 · 이혜린의 모바일 청첩장

2027년 5월 15일, 저희의 새로운 시작에 소중한 분들을 초대합니다.

[청첩장 보기](https://seongkukcho95.github.io/wedding-invitation/) · [GitHub 저장소](https://github.com/seongkukcho95/wedding-invitation)

## 예식 안내

| 항목        | 내용                                  |
| ----------- | ------------------------------------- |
| 신랑 · 신부 | 조성국 · 이혜린                       |
| 일시        | 2027년 5월 15일 토요일 오전 11시 30분 |
| 장소        | 당산 그랜드컨벤션 3층 리젠시홀        |
| 주소        | 서울특별시 영등포구 양평로 58         |
| 식사        | 오전 11시 ~ 오후 1시, 2층 연회장      |

## 청첩장 구성

- 예식 일시와 초대 글, 양가 가족 소개
- 예식 달력과 카운트다운
- 웨딩 사진 갤러리
- 지도·길찾기와 대중교통·자가용 안내
- 식사 안내, 전화·문자 연락, 마음 전하기
- 카카오톡 공유 및 공유용 미리보기 이미지

React 19, Vite 7, TypeScript, SASS, Day.js로 구현한 반응형 웹사이트입니다. 청첩장은 별도 서버 없이 GitHub Pages에서 운영할 수 있습니다. 지도와 카카오톡 공유는 해당 서비스의 키 설정이 필요합니다.

## 로컬 실행

Node.js 22 LTS와 npm을 사용합니다. Node.js 버전은 `.nvmrc`를 참고하세요.

```bash
git clone https://github.com/seongkukcho95/wedding-invitation.git
cd wedding-invitation
npm ci
```

`.env.example`을 참고하여 `.env.local`을 만들고 필요한 값만 입력합니다. 이미 `.env.local`이 있다면 파일을 덮어쓰지 말고 필요한 항목을 추가하세요.

```bash
npm run dev
```

기본 개발 주소는 `http://localhost:3000/wedding-invitation/`입니다. 포트가 사용 중이면 터미널에 표시되는 실제 주소로 접속합니다.

| 명령어             | 용도                      |
| ------------------ | ------------------------- |
| `npm run dev`      | 개발 서버 실행            |
| `npm run build`    | `build/`에 배포 파일 생성 |
| `npm run preview`  | 빌드 결과 미리보기        |
| `npm run lint`     | 코드 스타일 및 오류 검사  |
| `npx tsc --noEmit` | TypeScript 타입 검사      |

## 개인정보 설정

전화번호와 계좌번호는 공개 소스코드에 직접 적지 않습니다. 로컬에서는 Git에서 제외되는 `.env.local`, GitHub 배포에서는 Actions Secrets로 관리합니다.

| 대상        | 전화번호 환경변수         | 계좌 환경변수               |
| ----------- | ------------------------- | --------------------------- |
| 신랑        | `VITE_GROOM_PHONE`        | `VITE_GROOM_ACCOUNT`        |
| 신랑 어머님 | `VITE_GROOM_MOTHER_PHONE` | `VITE_GROOM_MOTHER_ACCOUNT` |
| 신부        | `VITE_BRIDE_PHONE`        | `VITE_BRIDE_ACCOUNT`        |
| 신부 아버님 | `VITE_BRIDE_FATHER_PHONE` | `VITE_BRIDE_FATHER_ACCOUNT` |
| 신부 어머님 | `VITE_BRIDE_MOTHER_PHONE` | `VITE_BRIDE_MOTHER_ACCOUNT` |

계좌 값에는 은행명과 계좌번호를 함께 입력합니다. 현재 계좌번호는 `000-0000-0000-00` 형태의 샘플을 사용합니다. 값을 비워 두면 해당 연락처 또는 계좌가 표시되지 않습니다.

이 설정은 실제 번호가 공개 저장소에 기록되는 것을 막기 위한 것입니다. 배포된 청첩장에는 번호가 포함되므로 사이트 방문자는 확인할 수 있습니다. `.env.local`과 `build/`는 커밋하지 마세요.

## 지도와 공유 설정

| 환경변수                   | 용도                           |
| -------------------------- | ------------------------------ |
| `VITE_NAVER_MAP_CLIENT_ID` | 청첩장 안에 네이버 지도 표시   |
| `VITE_KAKAO_SDK_JS_KEY`    | 카카오톡 공유·카카오 내비 연동 |

키가 없어도 주소·교통 안내와 외부 지도 연결은 사용할 수 있습니다. SDK를 사용할 때는 각 서비스의 콘솔에서 개발 주소와 실제 청첩장 배포 도메인을 등록합니다.

## GitHub Pages 배포

1. 저장소의 **Settings → Pages → Build and deployment**에서 Source를 **GitHub Actions**로 설정합니다.
2. **Settings → Secrets and variables → Actions → Secrets**에 개인정보 환경변수 10개를 각각 등록합니다. 지도·카카오톡 기능을 사용할 경우 해당 키 2개도 Secrets로 등록합니다.
3. 코드 변경을 `main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`의 **Deploy** 워크플로가 빌드하고 배포합니다. Actions 화면에서 수동 실행도 가능합니다.
4. 워크플로가 성공하면 [청첩장 주소](https://seongkukcho95.github.io/wedding-invitation/)에서 결과를 확인합니다.

`package.json`의 `homepage`가 배포 경로의 기준입니다. 빌드 시 신랑·신부 이름과 예식 안내가 HTML 메타데이터에 반영되고, 이름이 웹 앱 매니페스트에도 반영됩니다.

## 수정할 파일

| 파일 또는 폴더             | 내용                                               |
| -------------------------- | -------------------------------------------------- |
| `src/const.ts`             | 이름, 가족 소개, 예식 일시·장소, 교통편, 식사 안내 |
| `.env.local`               | 로컬에서 사용하는 연락처·계좌와 서비스 키          |
| `src/images/cover.png`     | 표지 이미지                                        |
| `src/images/index.ts`      | 갤러리 사진 목록                                   |
| `public/preview_image.png` | 카카오톡·SNS 공유 미리보기 이미지                  |
| `src/App.scss`             | 색상 테마와 공통 레이아웃                          |

사진은 긴 변 기준 약 1,000px로 줄이고 용량을 최적화하면 모바일에서 더 빠르게 열립니다.

## 선택 기능: 참석 의사 전달

현재 청첩장 안내 기능에는 서버가 필요하지 않습니다. 참석 의사 전달 기능을 추가로 사용하려면 별도 백엔드를 준비한 뒤 `VITE_SERVER_URL`을 API 기본 주소로 설정하고 `VITE_STATIC_ONLY=false`로 지정합니다. 서버는 `/attendance`에 전달되는 참석 정보를 처리해야 합니다.

GitHub 배포에서는 두 값을 Actions의 **Variables**에 등록합니다. 기본 예제는 `VITE_STATIC_ONLY=true`이고 서버 주소는 비워 두어 참석 의사 입력을 표시하지 않습니다.

## 원본과 라이선스

이 프로젝트는 [juhonamnam/wedding-invitation](https://github.com/juhonamnam/wedding-invitation)을 바탕으로 조성국 · 이혜린의 청첩장에 맞게 수정했습니다. 원본 저작권과 MIT 라이선스는 [LICENSE](LICENSE)에 보존되어 있습니다.
