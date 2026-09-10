import React from 'react';
import {
  Users,
  Banknote,
  Building2,
  CheckCircle2,
  Info,
  HelpCircle,
  CreditCard,
  Store,
  Calendar,
  Bell,
  ExternalLink,
} from 'lucide-react';

interface SummaryCardsProps {
  onOpenEligibility: () => void;
}

export const SummaryCards: React.FC<SummaryCardsProps> = ({ onOpenEligibility }) => {
  return (
    <section className="mb-14">
      {/* Section Header */}
      <div className="mb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
        <div>
          <span className="text-xs font-bold text-[#2c694e] uppercase tracking-wider block">
            한눈에 보는 핵심 안내
          </span>
          <h2 className="text-2xl font-bold text-[#012d1d] mt-0.5">꼭 알아두세요</h2>
        </div>

        <button
          type="button"
          onClick={onOpenEligibility}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#012d1d] hover:text-[#2c694e] transition-colors cursor-pointer self-start sm:self-auto py-1"
        >
          <span>모의 자격 바로 진단</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#2c694e]" />
        </button>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: 지원 대상 */}
        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between border border-[#e0e3e0] hover:border-[#2c694e]/40 transition-all">
          <div>
            {/* Top row */}
            <div className="flex items-center justify-between mb-5">
              <span className="px-3 py-1 rounded-full bg-[#ecefec] text-[#012d1d] text-xs font-semibold">
                ① 누가 받나요?
              </span>
              <div className="w-11 h-11 rounded-xl bg-[#f1f4f1] flex items-center justify-center text-[#012d1d]">
                <Users className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-lg font-bold text-[#012d1d] mb-4">지원 대상</h3>

            {/* Checklist */}
            <ul className="space-y-2.5 text-sm text-[#181c1b]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2c694e] shrink-0 mt-0.5" />
                <span>
                  주민등록상 <strong className="font-semibold">[지원 대상 기준 확인 필요]</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2c694e] shrink-0 mt-0.5" />
                <span>
                  신청일 현재 <strong className="font-semibold">[거주 요건 확인 필요]</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2c694e] shrink-0 mt-0.5" />
                <span>
                  가구별 지원 대상 여부는{' '}
                  <strong className="font-semibold">[확인 필요]</strong>
                </span>
              </li>
            </ul>
          </div>

          {/* Bottom Info Box */}
          <div className="mt-6 pt-3 bg-[#f1f4f1] rounded-lg p-3.5 border border-[#e0e3e0]/50">
            <div className="flex items-center gap-1.5 text-[#2c694e] text-xs font-bold mb-1">
              <Info className="w-3.5 h-3.5 shrink-0" />
              <span>안내 사항</span>
            </div>
            <p className="text-xs text-[#414844] leading-relaxed">
              가구별 자격 및 지원 제외 요건 세부사항은 [확인 필요]
            </p>
          </div>
        </div>

        {/* Card 2: 지원 금액 */}
        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between border border-[#e0e3e0] hover:border-[#2c694e]/40 transition-all">
          <div>
            {/* Top row */}
            <div className="flex items-center justify-between mb-5">
              <span className="px-3 py-1 rounded-full bg-[#aeeecb] text-[#316e52] text-xs font-semibold">
                ② 얼마나 받나요?
              </span>
              <div className="w-11 h-11 rounded-xl bg-[#f1f4f1] flex items-center justify-center text-[#2c694e]">
                <Banknote className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-lg font-bold text-[#012d1d] mb-4">지원 금액</h3>

            {/* Checklist */}
            <ul className="space-y-2.5 text-sm text-[#181c1b]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2c694e] shrink-0 mt-0.5" />
                <span>
                  <strong>가구원 수에 따라 차등 지급</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2c694e] shrink-0 mt-0.5" />
                <span>
                  1인 가구: <strong className="font-semibold">[금액 확인 필요]</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2c694e] shrink-0 mt-0.5" />
                <span>
                  2인 이상 가구: <strong className="font-semibold">[금액 확인 필요]</strong>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2c694e] shrink-0 mt-0.5" />
                <span>
                  <strong>가구당 최대 50만 원</strong>
                </span>
              </li>
            </ul>
          </div>

          {/* Bottom Info Box */}
          <div className="mt-6 pt-3 bg-[#aeeecb]/30 rounded-lg p-3.5 border border-[#aeeecb]/60">
            <div className="flex items-center gap-1.5 text-[#316e52] text-xs font-bold mb-1">
              <HelpCircle className="w-3.5 h-3.5 shrink-0" />
              <span>확인 유의사항</span>
            </div>
            <p className="text-xs text-[#414844] leading-relaxed">
              ※ 이미지에 표시된 내용으로 보이나 최종 확인 필요
            </p>
          </div>
        </div>

        {/* Card 3: 지급 방법 */}
        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm flex flex-col justify-between border border-[#e0e3e0] hover:border-[#2c694e]/40 transition-all">
          <div>
            {/* Top row */}
            <div className="flex items-center justify-between mb-5">
              <span className="px-3 py-1 rounded-full bg-[#ecefec] text-[#012d1d] text-xs font-semibold">
                ③ 어떻게 받나요?
              </span>
              <div className="w-11 h-11 rounded-xl bg-[#f1f4f1] flex items-center justify-center text-[#012d1d]">
                <Building2 className="w-5 h-5" />
              </div>
            </div>

            <h3 className="text-lg font-bold text-[#012d1d] mb-4">지급 방법</h3>

            {/* Sub-blocks */}
            <div className="space-y-2.5 text-sm text-[#181c1b]">
              <div className="p-2.5 rounded-lg bg-[#f1f4f1] border border-[#e0e3e0]/40">
                <div className="flex items-center gap-1.5 text-[#012d1d] font-bold text-xs">
                  <CreditCard className="w-3.5 h-3.5 text-[#2c694e]" />
                  <span>지원금 지급 방법</span>
                </div>
                <p className="text-xs text-[#414844] mt-1 pl-5">[확인 필요]</p>
              </div>

              <div className="p-2.5 rounded-lg bg-[#f1f4f1] border border-[#e0e3e0]/40">
                <div className="flex items-center gap-1.5 text-[#012d1d] font-bold text-xs">
                  <Store className="w-3.5 h-3.5 text-[#2c694e]" />
                  <span>사용 가능한 곳</span>
                </div>
                <p className="text-xs text-[#414844] mt-1 pl-5">[확인 필요]</p>
              </div>

              <div className="p-2.5 rounded-lg bg-[#f1f4f1] border border-[#e0e3e0]/40">
                <div className="flex items-center gap-1.5 text-[#012d1d] font-bold text-xs">
                  <Calendar className="w-3.5 h-3.5 text-[#2c694e]" />
                  <span>사용 기간</span>
                </div>
                <p className="text-xs text-[#414844] mt-1 pl-5">[확인 필요]</p>
              </div>
            </div>
          </div>

          {/* Bottom Info Box */}
          <div className="mt-6 pt-3 bg-[#f1f4f1] rounded-lg p-3.5 border border-[#e0e3e0]/50">
            <div className="flex items-center gap-1.5 text-[#012d1d] text-xs font-bold mb-1">
              <Bell className="w-3.5 h-3.5 text-[#2c694e] shrink-0" />
              <span>세부 지급 알림</span>
            </div>
            <p className="text-xs text-[#414844] leading-relaxed">
              상세 지급 수단 및 가맹점 안내는 확정 공고 시 별도 공지 예정입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
