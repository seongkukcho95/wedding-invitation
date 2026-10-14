/// <reference types="vite/client" />

/** 로컬 환경변수 또는 GitHub Actions Secrets로 주입하는 연락처·계좌 정보 */
interface ImportMetaEnv {
  readonly VITE_GROOM_PHONE?: string
  readonly VITE_GROOM_ACCOUNT?: string
  readonly VITE_GROOM_MOTHER_PHONE?: string
  readonly VITE_GROOM_MOTHER_ACCOUNT?: string
  readonly VITE_BRIDE_PHONE?: string
  readonly VITE_BRIDE_ACCOUNT?: string
  readonly VITE_BRIDE_FATHER_PHONE?: string
  readonly VITE_BRIDE_FATHER_ACCOUNT?: string
  readonly VITE_BRIDE_MOTHER_PHONE?: string
  readonly VITE_BRIDE_MOTHER_ACCOUNT?: string
}
