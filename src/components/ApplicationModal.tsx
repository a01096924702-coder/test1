import React, { useState } from 'react';
import {
  X,
  Fingerprint,
  ClipboardCheck,
  Wallet,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Check,
  Receipt,
} from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  initialStep?: number;
  onClose: () => void;
  onComplete: (receiptData: { name: string; receiptNo: string; method: string }) => void;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  initialStep = 1,
  onClose,
  onComplete,
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [applicantName, setApplicantName] = useState('홍길동');
  const [ssnFront, setSsnFront] = useState('850101');
  const [phone, setPhone] = useState('010-1234-5678');
  const [familyCount, setFamilyCount] = useState(2);
  const [payMethod, setPayMethod] = useState('희망사랑 지역사랑상품권 (모바일/QR)');
  const [receiptNo, setReceiptNo] = useState('HN2025-0314-8891');

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep === 1) {
      if (!applicantName.trim()) {
        alert('신청자 성명을 입력해 주세요.');
        return;
      }
    }
    if (currentStep < 4) {
      if (currentStep === 3) {
        // Generate dynamic receipt number
        const randomDigits = Math.floor(1000 + Math.random() * 9000);
        const newNo = `HN2025-0314-${randomDigits}`;
        setReceiptNo(newNo);
        onComplete({
          name: applicantName,
          receiptNo: newNo,
          method: payMethod,
        });
      }
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const stepsMeta = [
    { num: 1, label: '본인확인' },
    { num: 2, label: '자격확인' },
    { num: 3, label: '수령수단' },
    { num: 4, label: '신청완료' },
  ];

  return (
    <div
      id="modal-apply-flow"
      className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto border border-[#e0e3e0]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e0e3e0] mb-6">
          <div className="flex items-center gap-2">
            <Receipt className="w-6 h-6 text-[#1b4332]" />
            <h3 className="text-lg sm:text-xl font-bold text-[#012d1d]">
              온라인 지원금 간편 신청
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

        {/* Stepper Indicator */}
        <div className="flex items-center justify-between mb-8 relative">
          {/* Background Bar */}
          <div className="absolute left-6 right-6 top-4 -translate-y-1/2 h-1 bg-[#ecefec] z-0"></div>
          {/* Active progress bar */}
          <div
            className="absolute left-6 top-4 -translate-y-1/2 h-1 bg-[#1b4332] z-0 transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 3) * 88}%` }}
          ></div>

          {stepsMeta.map((s) => {
            const isDone = s.num < currentStep;
            const isCurrent = s.num === currentStep;

            return (
              <div key={s.num} className="flex flex-col items-center gap-1.5 z-10 bg-white px-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shadow-sm transition-all ${
                    isDone
                      ? 'bg-[#2c694e] text-white'
                      : isCurrent
                      ? 'bg-[#012d1d] text-white ring-4 ring-[#aeeecb]/50'
                      : 'bg-[#ecefec] text-[#717973]'
                  }`}
                >
                  {isDone ? <Check className="w-4 h-4" /> : s.num}
                </div>
                <span
                  className={`text-xs font-semibold ${
                    isCurrent
                      ? 'text-[#012d1d] font-bold'
                      : isDone
                      ? 'text-[#2c694e]'
                      : 'text-[#717973]'
                  }`}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Step Views */}
        <div className="min-h-[260px] flex flex-col justify-between">
          {/* STEP 1: 본인확인 */}
          {currentStep === 1 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center gap-2 text-base font-bold text-[#012d1d]">
                <Fingerprint className="w-5 h-5 text-[#2c694e]" />
                <h4>1단계: 신청인 본인 인증</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#414844]">
                지원금 부정수급 방지 및 주민등록 확인을 위해 본인 정보를 입력해 주세요.
              </p>

              <div className="space-y-3 pt-2">
                <div>
                  <label className="text-xs font-bold text-[#414844] block mb-1">
                    신청인 성명
                  </label>
                  <input
                    type="text"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="홍길동"
                    className="w-full bg-[#f1f4f1] border border-[#c1c8c2]/50 rounded-xl p-3 text-sm text-[#181c1b] focus:ring-2 focus:ring-[#1b4332] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#414844] block mb-1">
                    주민등록번호 앞 6자리
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      maxLength={6}
                      value={ssnFront}
                      onChange={(e) => setSsnFront(e.target.value)}
                      placeholder="850101"
                      className="w-1/2 bg-[#f1f4f1] border border-[#c1c8c2]/50 rounded-xl p-3 text-sm text-[#181c1b] focus:ring-2 focus:ring-[#1b4332] focus:outline-none"
                    />
                    <span className="text-[#717973] font-bold">-</span>
                    <div className="w-1/2 p-3 bg-[#ecefec] rounded-xl text-[#717973] text-center font-bold tracking-widest text-sm select-none border border-[#e0e3e0]">
                      ● ● ● ● ● ● ●
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#414844] block mb-1">
                    휴대폰 번호
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="010-1234-5678"
                    className="w-full bg-[#f1f4f1] border border-[#c1c8c2]/50 rounded-xl p-3 text-sm text-[#181c1b] focus:ring-2 focus:ring-[#1b4332] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: 자격확인 */}
          {currentStep === 2 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center gap-2 text-base font-bold text-[#012d1d]">
                <ClipboardCheck className="w-5 h-5 text-[#2c694e]" />
                <h4>2단계: 행정망 연계 자격 확인</h4>
              </div>

              <div className="p-4 bg-[#f1f4f1] rounded-xl space-y-2.5 border border-[#e0e3e0]/80">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-[#414844]">주민등록 관할</span>
                  <span className="font-bold text-[#012d1d]">희망찬특별자치시 희망구</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-[#414844]">거주 요건 충족 여부</span>
                  <span className="text-[#2c694e] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-[#2c694e]" />
                    적격 (2025.01.01 이전 전입)
                  </span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-[#414844]">세대원 구성</span>
                  <span className="font-bold text-[#181c1b]">{familyCount}인 가구</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base border-t border-[#c1c8c2]/40 pt-2.5">
                  <span className="text-[#181c1b] font-bold">예상 지원액</span>
                  <span className="font-extrabold text-[#012d1d] text-lg">
                    {familyCount === 1 ? '300,000 원' : familyCount === 2 ? '400,000 원' : '500,000 원'}
                  </span>
                </div>
              </div>

              <div className="p-3 bg-[#aeeecb]/30 rounded-lg text-xs text-[#316e52] border border-[#aeeecb]">
                ※ 행정정보 공동이용망을 통해 자격 요건을 실시간 자동 검증하였습니다.
              </div>
            </div>
          )}

          {/* STEP 3: 수령수단 선택 */}
          {currentStep === 3 && (
            <div className="space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center gap-2 text-base font-bold text-[#012d1d]">
                <Wallet className="w-5 h-5 text-[#2c694e]" />
                <h4>3단계: 지원금 수령 수단 선택</h4>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    id: '희망사랑 지역사랑상품권 (모바일/QR)',
                    title: '희망사랑 지역사랑상품권 (모바일/QR)',
                    desc: '승인 즉시 모바일 앱으로 충전되며 관내 가맹점에서 간편결제 가능',
                  },
                  {
                    id: '기존 신용·체크카드 포인트 충전',
                    title: '기존 신용·체크카드 포인트 충전',
                    desc: '보유 중인 카드사(신한/국민/농협/하나 등) 포인트로 충전',
                  },
                  {
                    id: '전용 선불카드 (행정복지센터 방문수령)',
                    title: '전용 선불카드 (행정복지센터 방문수령)',
                    desc: '스마트폰이나 신용카드가 없는 어르신 및 취약계층 권장',
                  },
                ].map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                      payMethod === option.id
                        ? 'bg-[#aeeecb]/30 border-[#2c694e] ring-1 ring-[#2c694e]'
                        : 'bg-[#f1f4f1] border-[#c1c8c2]/50 hover:bg-[#ecefec]'
                    }`}
                  >
                    <input
                      type="radio"
                      name="flow-paymethod"
                      value={option.id}
                      checked={payMethod === option.id}
                      onChange={() => setPayMethod(option.id)}
                      className="mt-1 text-[#1b4332] focus:ring-[#1b4332]"
                    />
                    <div>
                      <p className="text-sm font-bold text-[#181c1b]">{option.title}</p>
                      <p className="text-xs text-[#414844] mt-0.5">{option.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4: 신청완료 */}
          {currentStep === 4 && (
            <div className="space-y-4 animate-in fade-in duration-200 text-center py-2">
              <div className="w-16 h-16 rounded-full bg-[#aeeecb] text-[#2c694e] flex items-center justify-center mx-auto mb-2 shadow-inner">
                <Sparkles className="w-8 h-8 text-[#012d1d]" />
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-[#012d1d]">
                신청 접수가 완료되었습니다!
              </h4>

              <p className="text-sm text-[#181c1b]">
                접수번호:{' '}
                <span className="font-mono font-bold text-[#2c694e] text-base tracking-wider">
                  {receiptNo}
                </span>
              </p>

              <div className="bg-[#f1f4f1] rounded-xl p-4 text-left text-xs sm:text-sm space-y-2 text-[#414844] border border-[#e0e3e0]">
                <p>
                  • 신청자:{' '}
                  <strong className="text-[#181c1b] font-bold">{applicantName}</strong> 님
                </p>
                <p>
                  • 수령 수단:{' '}
                  <strong className="text-[#181c1b] font-bold">{payMethod}</strong>
                </p>
                <p>
                  • 심사 및 지급 예정일:{' '}
                  <strong className="text-[#012d1d] font-bold">2025년 4월 초 순차 지급</strong>
                </p>
                <p className="text-xs text-[#717973] pt-1">
                  * 진행 상황은 등록하신 휴대폰 번호({phone})로 알림톡이 전송됩니다.
                </p>
              </div>
            </div>
          )}

          {/* Action Footer Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-[#e0e3e0] mt-6">
            {currentStep > 1 && currentStep < 4 ? (
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2.5 rounded-lg bg-[#ecefec] text-[#181c1b] text-sm font-semibold hover:bg-[#e0e3e0] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>이전 단계</span>
              </button>
            ) : (
              <div></div>
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-lg bg-[#012d1d] text-white text-sm font-bold hover:bg-[#2c694e] transition-colors flex items-center gap-2 cursor-pointer shadow-sm active:scale-98"
              >
                <span>{currentStep === 3 ? '최종 신청하기' : '다음 단계'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-[#012d1d] text-white text-sm font-bold hover:bg-[#2c694e] transition-colors cursor-pointer shadow-sm active:scale-98"
              >
                확인 및 닫기
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
