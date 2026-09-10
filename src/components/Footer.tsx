import React from 'react';
import { Phone } from 'lucide-react';

interface FooterProps {
  onLegalClick: (title: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onLegalClick }) => {
  return (
    <footer className="w-full bg-[#f1f4f1] border-t border-[#e0e3e0] mt-16">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-10">
        {/* Top links row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#e0e3e0]/80">
          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => onLegalClick('개인정보처리방침')}
              className="text-[#012d1d] font-bold hover:underline cursor-pointer"
            >
              개인정보처리방침
            </button>
            <button
              type="button"
              onClick={() => onLegalClick('이용약관')}
              className="text-[#414844] hover:text-[#181c1b] hover:underline cursor-pointer"
            >
              이용약관
            </button>
            <button
              type="button"
              onClick={() => onLegalClick('저작권보호정책')}
              className="text-[#414844] hover:text-[#181c1b] hover:underline cursor-pointer"
            >
              저작권보호정책
            </button>
            <button
              type="button"
              onClick={() => onLegalClick('누리집지도')}
              className="text-[#414844] hover:text-[#181c1b] hover:underline cursor-pointer"
            >
              누리집지도
            </button>
          </div>

          <div className="flex items-center gap-2 text-[#2c694e] text-xs sm:text-sm font-semibold">
            <Phone className="w-4 h-4 text-[#2c694e]" />
            <span>시민상담 콜센터 <strong className="font-bold text-base text-[#012d1d]">120</strong> (평일 09:00 - 18:00)</span>
          </div>
        </div>

        {/* Bottom copyright & information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#414844]">
          <div className="space-y-1.5 leading-relaxed">
            <p className="font-medium text-[#181c1b]">
              희망찬특별자치시 희망구 희망대로 100 희망찬시청 (우: 01234)
            </p>
            <p>
              대표전화: 02-120 | 팩스: 02-123-4567 | 이메일: support@hopeful.go.kr
            </p>
            <p className="pt-2 text-[#717973]">
              Copyright © 2025 희망찬자치시청 All rights reserved.
            </p>
          </div>

          <div className="flex md:justify-end">
            <div className="bg-[#ecefec] p-4 rounded-xl max-w-sm w-full border border-[#e0e3e0]/60">
              <p className="font-bold text-[#181c1b] text-xs mb-1">
                어르신 및 취약계층 원스톱 상담
              </p>
              <p className="text-xs text-[#414844] leading-relaxed">
                온라인 서식 작성이 어려우신 경우 거주지 관할 행정복지센터 복지민원창구를 방문해 주시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
