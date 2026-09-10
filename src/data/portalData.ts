import { FaqItem, StepItem } from '../types';

export const FAQ_LIST: FaqItem[] = [
  {
    id: 'q1',
    question: '소득이나 재산 기준을 잘 모르겠어요.',
    answer: '신청 과정에서 지원 대상 여부를 확인할 수 있습니다. (※ 구체적인 확인 방법은 [확인 필요])',
    subAnswer: '행정정보 공동이용 시스템을 통해 별도의 서류 제출 없이 온라인 신청 화면에서 소득 및 주민등록 자격 요건을 자동으로 전산 조회하여 안내해 드립니다.',
  },
  {
    id: 'q2',
    question: '온라인 신청이 어려우면 어떻게 하나요?',
    answer: '[방문 신청 가능 여부 및 신청 장소 확인 필요]',
    subAnswer: '온라인 이용이 어려우신 어르신 및 취약계층은 신분증을 지참하여 거주지 관할 행정복지센터 전용 창구를 방문하시면 직원의 대면 지원을 받으실 수 있습니다.',
  },
  {
    id: 'q3',
    question: '지원금은 언제 받을 수 있나요?',
    answer: '[지급일 확인 필요]',
    subAnswer: '접수 마감 후 서류 및 자격 전산 심사를 거쳐 순차적으로 지급되며, 세부 일정은 대상자 휴대폰 알림톡/문자 메시지로 신속히 안내됩니다.',
  },
  {
    id: 'q4',
    question: '지원금은 어디에서 사용할 수 있나요?',
    answer: '[사용처 및 사용기간 확인 필요]',
    subAnswer: '지역 내 가맹 소상공인 점포 및 전통시장, 지정된 복지 가맹점에서 폭넓게 사용하실 수 있도록 지원될 예정입니다.',
  },
];

export const STEP_ITEMS: StepItem[] = [
  {
    stepNumber: 1,
    title: '[본인 확인]',
    description: '본인 인증을 통해 신청자를 확인합니다.',
    iconName: 'fingerprint',
  },
  {
    stepNumber: 2,
    title: '[자격 확인]',
    description: '지원 대상 여부를 확인합니다.',
    iconName: 'fact_check',
  },
  {
    stepNumber: 3,
    title: '[수령 수단 선택]',
    description: '[지원금 지급 수단 확인 필요]',
    iconName: 'wallet',
  },
  {
    stepNumber: 4,
    title: '[지원금 지급]',
    description: '[지급 시기 확인 필요]',
    iconName: 'celebration',
  },
];

export const LOGO_URL =
  'https://lh3.googleusercontent.com/aida/AEtjO1UmQyCIFbaei_7A8mPer9Ci69Tn8zBSMO0e99ouuVrTC31RtxGfelPr8kTh7_Ek65Wtsb34jjZGJ0C8KLnWhe38VRj53iQEtb4aQwFHNeMwJOXx-bck-BqhigaWZjwTpQCQSDTgdnTGUKP4R3FNiZRlv8gur5gIwYrzSWF_SV2dtjpY9gmgKeh2jUejtTUpgs3SaX2Gj0IwCo8NqUeKtOm7FjnvBB0gKKVVTk21S0Dp2ki77c-2icbYCks';

export const PROFILE_AVATAR_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuADUI7OWBfJ38cGMwINcT20S-EoIT7LDraYCTgzDIxdNPGz2jLXcP6IU8eI7pNy82wZmHoaGe01ws7yRGr20-hmsgLVm6yQFnLkY0a_AliZ-e1bqBteqiFXcliW_WW2TAt92QAWYzIrG_W71lWqNPGmevHs-lB1I3_IiZKX3BrXfT4bo9Xr82MPWlM842l1aYpW7y7ot4Ll4MMdLRwR3qYJA581NdKo4UmemYj8pKSTgSa_GYUO_OppJg';
