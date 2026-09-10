import React from 'react';
import {
  CheckCircle2,
  ArrowRight,
  Search,
  Headphones,
  Accessibility,
} from 'lucide-react';

interface CtaSectionProps {
  onOpenApply: () => void;
  onOpenEligibility: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenApply, onOpenEligibility }) => {
  return (
    <section id="apply-section" className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm mb-14 border border-[#e0e3e0]">
      {/* Top Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2c694e] mb-2">
          <CheckCircle2 className="w-4 h-4 text-[#2c694e]" />
          희망찬 자치시 공식 공공지원 접수창구
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#012d1d]">
          지금 신청하세요
        </h2>
        <p className="text-sm sm:text-base text-[#414844] mt-2">
          신청 기간을 확인하고 생활안정 지원금을 신청하세요.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto mb-4">
        <button
          type="button"
          id="btn-action-apply"
          onClick={onOpenApply}
          className="w-full sm:w-auto flex-1 min-h-[54px] px-7 py-3 rounded-xl bg-[#1b4332] text-white text-base font-bold hover:bg-[#2c694e] transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-98"
        >
          <span>[온라인 신청하기]</span>
          <ArrowRight className="w-5 h-5" />
        </button>

        <button
          type="button"
          id="btn-action-calc"
          onClick={onOpenEligibility}
          className="w-full sm:w-auto min-h-[54px] px-6 py-3 rounded-xl bg-[#ecefec] hover:bg-[#e0e3e0] text-[#012d1d] text-base font-bold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
        >
          <Search className="w-4 h-4 text-[#2c694e]" />
          <span>[내 지원 대상 확인하기]</span>
        </button>
      </div>

      {/* Caption notice */}
      <p className="text-center text-xs text-[#414844] mb-8">
        ※ 버튼의 실제 연결 페이지 및 지원 대상 조회 서비스는{' '}
        <span className="text-[#2c694e] font-semibold">[확인 필요]</span>
      </p>

      {/* Contact & Accessibility Care Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#f1f4f1] rounded-xl p-5 sm:p-6 border border-[#e0e3e0]/60">
        {/* Contact Info */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#012d1d] flex items-center justify-center text-white shrink-0">
            <Headphones className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#2c694e] block">
              담당 부서 및 전화 문의
            </span>
            <p className="text-base font-bold text-[#181c1b]">
              희망찬 자치시청 복지정책과 생활지원팀
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-[#414844] pt-0.5">
              <span>
                시민행복콜센터: <strong className="text-[#012d1d] font-bold text-base">042-120</strong>
              </span>
              <span>
                직통전화: <strong>042-888-2114</strong>
              </span>
            </div>
            <p className="text-xs text-[#717973]">
              * 평일 09:00 ~ 18:00 운영 (점심시간 12:00 ~ 13:00)
            </p>
          </div>
        </div>

        {/* Accessibility Care Box */}
        <div className="flex items-start gap-4 bg-white p-4 rounded-xl border border-[#e0e3e0] shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#aeeecb] flex items-center justify-center text-[#316e52] shrink-0">
            <Accessibility className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#316e52] block">
              약자 동행 편의 지원
            </span>
            <h4 className="text-sm sm:text-base font-bold text-[#181c1b]">
              휠체어 전용 창구 &amp; 수어 통역 안내
            </h4>
            <p className="text-xs text-[#414844] leading-relaxed">
              모든 읍·면·동 행정복지센터에 휠체어 우선 경사로와 수어 통역 영상상담 전용 태블릿이 비치되어 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
