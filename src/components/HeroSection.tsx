import React, { useState } from 'react';
import { Home, ChevronRight, Calendar, ArrowDown, ShieldCheck, Play, Pause, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onApplyClick: () => void;
  onScrollToApply: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onApplyClick, onScrollToApply }) => {
  const [isAutoMoving, setIsAutoMoving] = useState(true);
  const [manualOffset, setManualOffset] = useState(0);

  const handleStepMove = (delta: number) => {
    setIsAutoMoving(false);
    setManualOffset((prev) => Math.max(-120, Math.min(120, prev + delta)));
  };

  const handleReset = () => {
    setIsAutoMoving(false);
    setManualOffset(0);
  };

  return (
    <section className="flex flex-col gap-6 mb-12">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#414844]">
        <a
          href="#grants"
          className="hover:text-[#1b4332] flex items-center gap-1 transition-colors font-medium"
        >
          <Home className="w-3.5 h-3.5" />
          <span>지원사업 안내</span>
        </a>
        <ChevronRight className="w-3 h-3 text-[#717973]" />
        <span>시민생활안정</span>
        <ChevronRight className="w-3 h-3 text-[#717973]" />
        <span className="text-[#181c1b] font-bold">2025 희망찬 자치시민 생활안정 지원금</span>
      </nav>

      {/* Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#aeeecb] text-[#316e52] text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-[#2c694e] animate-pulse"></span>
          접수중
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e6e9e6] text-[#414844] text-xs font-semibold">
          2025년 민생안정 맞춤형 지원사업
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#ecefec] text-[#012d1d] text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-[#2c694e]" />
          시민 안심 간편 복지
        </span>
      </div>

      {/* Title & Subtitle */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-[#012d1d] tracking-tight leading-snug">
          2025 희망찬 자치시민 생활안정 지원금
        </h1>
        <p className="text-base sm:text-lg text-[#414844] leading-relaxed">
          어려운 시기, 시민의 생활 부담을 덜어드리기 위해 생활안정 지원금을 지급합니다.
        </p>
      </div>

      {/* Deadline Highlight Box */}
      <div className="bg-white rounded-xl p-5 sm:p-6 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 border border-[#e0e3e0]">
        <div className="flex items-start sm:items-center gap-4 flex-1">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl bg-[#1b4332] text-white flex items-center justify-center shrink-0 shadow-inner">
            <Calendar className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-xs text-[#2c694e] font-bold tracking-wide uppercase">
                  신청 접수 기간
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#93000a] text-xs font-bold">
                  접수 마감
                </span>
              </div>

              {/* 좌우 움직임 조작 컨트롤러 */}
              <div className="flex items-center gap-1 bg-[#ecefec] px-1.5 py-1 rounded-lg text-xs text-[#414844] border border-[#e0e3e0]">
                <button
                  type="button"
                  onClick={() => handleStepMove(-25)}
                  title="왼쪽으로 이동"
                  aria-label="왼쪽으로 이동"
                  className="px-1.5 py-0.5 rounded hover:bg-white hover:text-[#012d1d] font-bold transition-colors cursor-pointer text-xs"
                >
                  ◀
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!isAutoMoving) setManualOffset(0);
                    setIsAutoMoving((prev) => !prev);
                  }}
                  title={isAutoMoving ? '움직임 멈춤' : '좌우 왕복 움직임 시작'}
                  className="px-2 py-0.5 rounded bg-white hover:bg-[#aeeecb]/40 text-[#012d1d] font-bold text-[11px] transition-colors flex items-center gap-1 cursor-pointer shadow-xs"
                >
                  {isAutoMoving ? (
                    <>
                      <Pause className="w-3 h-3 text-[#2c694e]" />
                      <span>움직임 멈춤</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-[#2c694e]" />
                      <span>좌우 움직임 재생</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => handleStepMove(25)}
                  title="오른쪽으로 이동"
                  aria-label="오른쪽으로 이동"
                  className="px-1.5 py-0.5 rounded hover:bg-white hover:text-[#012d1d] font-bold transition-colors cursor-pointer text-xs"
                >
                  ▶
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  title="중앙 원위치"
                  aria-label="원위치로 되돌리기"
                  className="p-1 rounded hover:bg-white text-[#717973] hover:text-[#012d1d] transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* 좌우로 움직이는 기간 텍스트 */}
            <div className="overflow-hidden py-1">
              <motion.p
                animate={
                  isAutoMoving
                    ? { x: [-20, 20, -20] }
                    : { x: manualOffset }
                }
                transition={
                  isAutoMoving
                    ? {
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }
                    : { type: 'spring', stiffness: 350, damping: 25 }
                }
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
                dragElastic={0.2}
                whileTap={{ cursor: 'grabbing' }}
                title="마우스나 터치로도 좌우로 직접 드래그할 수 있습니다"
                className="text-base sm:text-lg lg:text-xl font-bold text-[#181c1b] inline-block cursor-grab select-none tracking-tight hover:text-[#2c694e] transition-colors"
              >
                2025년 3월 3일(월) 09:00 <span className="text-[#414844] font-normal">~</span> 3월 28일(금) 18:00
              </motion.p>
            </div>

            <p className="text-xs sm:text-sm text-[#414844]">
              ※ 주말·공휴일에도 온라인 신청 가능 여부{' '}
              <span className="text-[#2c694e] font-semibold">[확인 필요]</span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="w-full sm:w-auto shrink-0 flex items-center">
          <button
            type="button"
            id="btn-hero-apply"
            onClick={onScrollToApply}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#012d1d] text-white text-sm sm:text-base font-bold hover:bg-[#2c694e] transition-all shadow-sm cursor-pointer active:scale-98"
          >
            <span>[온라인 신청하기]</span>
            <ArrowDown className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
