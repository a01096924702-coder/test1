import React, { useState } from 'react';
import { Calculator, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { EligibilityForm } from '../types';

interface EligibilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToApply: (form: EligibilityForm) => void;
}

export const EligibilityModal: React.FC<EligibilityModalProps> = ({
  isOpen,
  onClose,
  onProceedToApply,
}) => {
  const [form, setForm] = useState<EligibilityForm>({
    residence: 'resident',
    familyCount: 1,
    isVulnerable: false,
  });

  if (!isOpen) return null;

  const isResident = form.residence === 'resident';

  // Calculate estimated amount
  let calculatedAmount = 0;
  let statusText = '지원 적격 대상';
  let isEligible = true;

  if (!isResident) {
    statusText = '지원 대상 제외';
    isEligible = false;
    calculatedAmount = 0;
  } else {
    if (form.familyCount === 1) {
      calculatedAmount = 300000;
    } else if (form.familyCount === 2) {
      calculatedAmount = 400000;
    } else {
      calculatedAmount = 500000; // Cap at 500,000 won
    }

    if (form.isVulnerable && calculatedAmount < 500000) {
      calculatedAmount += 50000;
    }
  }

  return (
    <div
      id="modal-calc"
      className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-[#e0e3e0]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e0e3e0] mb-4">
          <div className="flex items-center gap-2">
            <Calculator className="w-5 h-5 text-[#2c694e]" />
            <h3 className="text-lg font-bold text-[#012d1d]">
              간편 모의 자격 및 예상 지원금 계산기
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#414844] hover:text-[#181c1b] p-1 rounded-lg hover:bg-[#ecefec] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#414844] mb-4 leading-relaxed">
          간단한 설문을 통해 생활안정 지원금 수령 대상 여부 및 예상 지원 금액을 즉시 모의 계산해 드립니다.
        </p>

        {/* Inputs */}
        <div className="space-y-4 mb-5">
          {/* Question 1 */}
          <div>
            <label className="block text-sm font-bold text-[#181c1b] mb-1.5">
              1. 주민등록 거주지 요건
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label
                className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                  form.residence === 'resident'
                    ? 'bg-[#aeeecb]/30 border-[#2c694e] text-[#012d1d] font-bold'
                    : 'bg-[#f1f4f1] border-[#c1c8c2]/50 text-[#414844]'
                }`}
              >
                <input
                  type="radio"
                  name="calc-residence"
                  value="resident"
                  checked={form.residence === 'resident'}
                  onChange={() => setForm({ ...form, residence: 'resident' })}
                  className="text-[#1b4332] focus:ring-[#1b4332]"
                />
                <span className="text-xs sm:text-sm">희망찬 자치시 거주</span>
              </label>

              <label
                className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                  form.residence === 'non_resident'
                    ? 'bg-[#ffdad6]/30 border-[#ba1a1a] text-[#ba1a1a] font-bold'
                    : 'bg-[#f1f4f1] border-[#c1c8c2]/50 text-[#414844]'
                }`}
              >
                <input
                  type="radio"
                  name="calc-residence"
                  value="non_resident"
                  checked={form.residence === 'non_resident'}
                  onChange={() => setForm({ ...form, residence: 'non_resident' })}
                  className="text-[#1b4332] focus:ring-[#1b4332]"
                />
                <span className="text-xs sm:text-sm">타 시/도 거주</span>
              </label>
            </div>
          </div>

          {/* Question 2 */}
          <div>
            <label className="block text-sm font-bold text-[#181c1b] mb-1.5">
              2. 가구원 수 (주민등록표 기준)
            </label>
            <select
              value={form.familyCount}
              onChange={(e) => setForm({ ...form, familyCount: parseInt(e.target.value, 10) })}
              className="w-full bg-[#f1f4f1] border border-[#c1c8c2]/50 rounded-xl p-3 text-sm text-[#181c1b] focus:ring-2 focus:ring-[#1b4332] focus:outline-none"
            >
              <option value="1">1인 가구</option>
              <option value="2">2인 가구</option>
              <option value="3">3인 가구</option>
              <option value="4">4인 이상 가구</option>
            </select>
          </div>

          {/* Question 3 */}
          <div>
            <label className="block text-sm font-bold text-[#181c1b] mb-1.5">
              3. 신청 대상 유형
            </label>
            <label className="flex items-center gap-2.5 p-3 bg-[#f1f4f1] rounded-xl border border-[#c1c8c2]/50 cursor-pointer hover:bg-[#ecefec]">
              <input
                type="checkbox"
                checked={form.isVulnerable}
                onChange={(e) => setForm({ ...form, isVulnerable: e.target.checked })}
                className="rounded text-[#1b4332] focus:ring-[#1b4332] w-4 h-4"
              />
              <span className="text-xs sm:text-sm text-[#181c1b]">
                기초생활수급자 / 차상위계층 / 한부모가정 해당
              </span>
            </label>
          </div>
        </div>

        {/* Live Calculation Result Card */}
        <div
          className={`p-4 rounded-xl mb-5 border ${
            isEligible
              ? 'bg-[#aeeecb]/30 border-[#2c694e]/40'
              : 'bg-[#ffdad6]/40 border-[#ba1a1a]/30'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-bold text-[#316e52]">모의 판정 결과</span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                isEligible
                  ? 'bg-[#2c694e] text-white'
                  : 'bg-[#ba1a1a] text-white'
              }`}
            >
              {statusText}
            </span>
          </div>

          <div className="flex items-baseline justify-between mt-2">
            <span className="text-xs sm:text-sm text-[#181c1b]">예상 지급 금액:</span>
            <span className="text-xl sm:text-2xl font-extrabold text-[#012d1d]">
              {calculatedAmount.toLocaleString()} 원
            </span>
          </div>

          <p className="text-xs text-[#414844] mt-2 border-t border-black/10 pt-2 leading-relaxed">
            {isEligible
              ? `* ${form.familyCount}인 가구 기준 ${form.isVulnerable ? '(취약계층 우대)' : ''} 최대 ${calculatedAmount.toLocaleString()}원의 생활안정 지원금이 예상됩니다. (가구당 최대 50만 원 한도)`
              : '* 관외 전출자 및 타 시·도 주민등록 거주자는 지원 대상에서 제외됩니다.'}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {isEligible ? (
            <button
              type="button"
              onClick={() => onProceedToApply(form)}
              className="flex-1 py-3 bg-[#012d1d] text-white text-sm font-bold rounded-xl hover:bg-[#2c694e] transition-colors cursor-pointer text-center"
            >
              이 조건으로 바로 신청하기
            </button>
          ) : (
            <button
              type="button"
              disabled
              className="flex-1 py-3 bg-[#c1c8c2] text-[#717973] text-sm font-bold rounded-xl cursor-not-allowed text-center"
            >
              지원 대상 미충족
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-5 py-3 bg-[#ecefec] text-[#181c1b] text-sm font-bold rounded-xl hover:bg-[#e0e3e0] transition-colors cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
