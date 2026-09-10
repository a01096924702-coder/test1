import React from 'react';
import { Fingerprint, ClipboardCheck, Wallet, Sparkles, PlayCircle } from 'lucide-react';

interface ProcessStepsProps {
  onOpenStepModal: (step: number) => void;
}

export const ProcessSteps: React.FC<ProcessStepsProps> = ({ onOpenStepModal }) => {
  return (
    <section className="mb-14 bg-[#f1f4f1] rounded-xl p-5 sm:p-8 border border-[#e0e3e0]">
      {/* Top Header */}
      <div className="max-w-3xl mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-[#2c694e] uppercase tracking-wider block">
            신청 진행 절차
          </span>
          <h2 className="text-2xl font-bold text-[#012d1d] mt-0.5">신청은 이렇게 하세요</h2>
          <p className="text-sm text-[#414844] mt-1">
            간편하고 신속한 지원금 신청 4단계를 확인하세요. 카드를 클릭하면 모의 절차를 시연해 볼 수 있습니다.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenStepModal(1)}
          className="self-start md:self-auto px-4 py-2.5 bg-[#2c694e] text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-[#012d1d] transition-colors flex items-center gap-2 cursor-pointer shadow-sm active:scale-98 whitespace-nowrap"
        >
          <PlayCircle className="w-4 h-4" />
          <span>온라인 신청 시뮬레이션</span>
        </button>
      </div>

      {/* 4-Step Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Step 1 */}
        <div
          onClick={() => onOpenStepModal(1)}
          className="bg-white rounded-xl p-5 shadow-sm relative flex flex-col cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md border border-[#e0e3e0] group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="w-8 h-8 rounded-full bg-[#1b4332] text-white text-sm font-bold flex items-center justify-center">
              1
            </span>
            <Fingerprint className="w-6 h-6 text-[#717973] group-hover:text-[#1b4332] transition-colors" />
          </div>
          <span className="text-xs font-bold text-[#2c694e] mb-1">1단계</span>
          <h4 className="text-base font-bold text-[#012d1d] mb-1.5">[본인 확인]</h4>
          <p className="text-xs sm:text-sm text-[#414844] leading-relaxed">
            본인 인증을 통해 신청자를 확인합니다.
          </p>
        </div>

        {/* Step 2 */}
        <div
          onClick={() => onOpenStepModal(2)}
          className="bg-white rounded-xl p-5 shadow-sm relative flex flex-col cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md border border-[#e0e3e0] group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="w-8 h-8 rounded-full bg-[#1b4332] text-white text-sm font-bold flex items-center justify-center">
              2
            </span>
            <ClipboardCheck className="w-6 h-6 text-[#717973] group-hover:text-[#1b4332] transition-colors" />
          </div>
          <span className="text-xs font-bold text-[#2c694e] mb-1">2단계</span>
          <h4 className="text-base font-bold text-[#012d1d] mb-1.5">[자격 확인]</h4>
          <p className="text-xs sm:text-sm text-[#414844] leading-relaxed">
            지원 대상 여부를 확인합니다.
          </p>
        </div>

        {/* Step 3 */}
        <div
          onClick={() => onOpenStepModal(3)}
          className="bg-white rounded-xl p-5 shadow-sm relative flex flex-col cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md border border-[#e0e3e0] group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="w-8 h-8 rounded-full bg-[#1b4332] text-white text-sm font-bold flex items-center justify-center">
              3
            </span>
            <Wallet className="w-6 h-6 text-[#717973] group-hover:text-[#1b4332] transition-colors" />
          </div>
          <span className="text-xs font-bold text-[#2c694e] mb-1">3단계</span>
          <h4 className="text-base font-bold text-[#012d1d] mb-1.5">[수령 수단 선택]</h4>
          <p className="text-xs sm:text-sm text-[#414844] leading-relaxed">
            [지원금 지급 수단 확인 필요]
          </p>
        </div>

        {/* Step 4 */}
        <div
          onClick={() => onOpenStepModal(4)}
          className="bg-white rounded-xl p-5 shadow-sm relative flex flex-col cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-md border border-[#e0e3e0] group"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="w-8 h-8 rounded-full bg-[#2c694e] text-white text-sm font-bold flex items-center justify-center">
              4
            </span>
            <Sparkles className="w-6 h-6 text-[#2c694e]" />
          </div>
          <span className="text-xs font-bold text-[#2c694e] mb-1">4단계</span>
          <h4 className="text-base font-bold text-[#012d1d] mb-1.5">[지원금 지급]</h4>
          <p className="text-xs sm:text-sm text-[#414844] leading-relaxed">
            [지급 시기 확인 필요]
          </p>
        </div>
      </div>
    </section>
  );
};
