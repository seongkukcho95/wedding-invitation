import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

// dayjs 설정: UTC 및 타임존 플러그인 확장, 한국어 로캘 설정
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

/**
 * 예식 일시 설정
 * Asia/Seoul 타임존 기준으로 설정합니다.
 */
export const WEDDING_DATE = dayjs.tz("2027-05-15 11:30", "Asia/Seoul")

/**
 * 예식 일시 포맷
 * 분이 0이면 분을 생략하고, 그 외에는 표시합니다.
 * 예: 2027년 5월 15일 토요일 오전 11시 30분
 */
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

/**
 * 예식 당월 휴무일 (달력 표시용)
 * 5월 5일 어린이날, 5월 13일 부처님오신날
 */
export const HOLIDAYS = [5, 13]

/**
 * 예식 장소 명칭
 */
export const LOCATION = "당산 그랜드컨벤션 3층 리젠시홀"

/**
 * 예식 장소 상세 주소
 */
export const LOCATION_ADDRESS = "서울특별시 영등포구 양평로 58"

/**
 * 예식장 검색명과 교통 안내입니다.
 * 출처: https://www.grandconvention.co.kr/location/ (2026-10-14 확인)
 * 주차 규모: https://www.grandconvention.co.kr/banquet/other/
 */
export const LOCATION_SEARCH_NAME = "그랜드컨벤션센터"
export const LOCATION_PHONE = "02-3667-9000"
export const TRANSPORTATION = {
  subway: [
    "2호선 당산역 1번 출구 → 직진 도보 1분",
    "9호선 당산역 13번 출구 → 직진 도보 1분",
  ],
  bus: [
    {
      stop: "당산역 정류장 (19-172)",
      routes: [
        "간선: 603, 605, 660, 661, 760, 761",
        "지선: 5620, 5714, 6514, 6620, 6623, 6631, 6632",
      ],
    },
    {
      stop: "당산역 정류장 (19-996)",
      routes: [
        "일반: 60, 60-3, 70, 70-2, 70-3, 88",
        "직행: 7000, 7100, 8000, 8600, 8601, 9030, G6001, G6002, G6003, G6005",
        "좌석: 700",
      ],
    },
  ],
  parking: "주차공간 약 600대가 마련되어 있습니다.",
  notice: "※ 주말에는 교통이 혼잡하므로 대중교통 이용을 권장합니다.",
}

/** 식사 시간 및 장소 안내 */
export const MEAL_TIME = "오전 11시 ~ 오후 1시"
export const MEAL_LOCATION = "2층 연회장"

/** 계절에 맞춘 초대 문구 */
export const INVITATION_OPENING = "싱그러운 봄 향기 가득한 날"

/**
 * 카카오톡 공유 시 사용할 위치 정보 주소
 * 필요에 따라 LOCATION과 다르게 설정할 수 있습니다.
 */
export const SHARE_ADDRESS = LOCATION_ADDRESS

/**
 * 카카오톡 공유 시 표시될 위치 제목
 */
export const SHARE_ADDRESS_TITLE = LOCATION

/**
 * 지도 서비스(네이버, 카카오)에 사용할 좌표 [경도, 위도]
 */
export const WEDDING_HALL_POSITION = [126.9006931, 37.5350853]

/**
 * 네이버 지도 장소 ID (NMAP_PLACE_ID)
 * 네이버 지도에서 장소 검색 후 URL의 숫자 부분을 입력합니다.
 */
export const NMAP_PLACE_ID = 20352298

// 신부 정보 설정
export const BRIDE_FULLNAME = "이혜린"
export const BRIDE_FIRSTNAME = "혜린"
export const BRIDE_TITLE = "딸"
export const BRIDE_FATHER = "이화기"
export const BRIDE_MOTHER = "길애란"

/**
 * 신부측 연락처 및 계좌 정보
 * 실제 값은 .env.local 또는 GitHub Actions Secrets에 설정합니다.
 * 미설정 항목은 연락처·계좌 모달에서 숨깁니다.
 * Vite 설정에서도 이 파일을 읽으므로 import.meta.env가 없는 경우를 허용합니다.
 */
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: import.meta.env?.VITE_BRIDE_PHONE ?? "",
    account: import.meta.env?.VITE_BRIDE_ACCOUNT ?? "",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: import.meta.env?.VITE_BRIDE_FATHER_PHONE ?? "",
    account: import.meta.env?.VITE_BRIDE_FATHER_ACCOUNT ?? "",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: import.meta.env?.VITE_BRIDE_MOTHER_PHONE ?? "",
    account: import.meta.env?.VITE_BRIDE_MOTHER_ACCOUNT ?? "",
  },
]

// 신랑 정보 설정
export const GROOM_FULLNAME = "조성국"
export const GROOM_FIRSTNAME = "성국"
export const GROOM_TITLE = "아들"
export const GROOM_FATHER = "故 조수형"
export const GROOM_MOTHER = "김윤덕"

/**
 * 신랑측 연락처 및 계좌 정보
 * 실제 값은 .env.local 또는 GitHub Actions Secrets에서 가져옵니다.
 */
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: import.meta.env?.VITE_GROOM_PHONE ?? "",
    account: import.meta.env?.VITE_GROOM_ACCOUNT ?? "",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: import.meta.env?.VITE_GROOM_MOTHER_PHONE ?? "",
    account: import.meta.env?.VITE_GROOM_MOTHER_ACCOUNT ?? "",
  },
]
