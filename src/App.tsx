/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SummaryCards } from './components/SummaryCards';
import { ProcessSteps } from './components/ProcessSteps';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { EligibilityModal } from './components/EligibilityModal';
import { ApplicationModal } from './components/ApplicationModal';
import { ToastContainer } from './components/Toast';
import { ToastMessage, EligibilityForm } from './types';
import { FileText, Bell, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('grants');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isEligibilityOpen, setIsEligibilityOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [applyInitialStep, setApplyInitialStep] = useState(1);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Toast dispatch helper
  const addToast = (
    message: string,
    type: 'info' | 'success' | 'warning' | 'error' = 'info'
  ) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenStepModal = (stepNumber: number) => {
    setApplyInitialStep(stepNumber);
    setIsApplyOpen(true);
  };

  const handleProceedToApplyFromEligibility = (form: EligibilityForm) => {
    setIsEligibilityOpen(false);
    setApplyInitialStep(1);
    setIsApplyOpen(true);
    addToast(
      `${form.familyCount}인 가구 자격 조건이 연계되어 온라인 신청이 시작됩니다.`,
      'success'
    );
  };

  const handleScrollToApply = () => {
    const el = document.getElementById('apply-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      addToast('신청 접수 창구 영역으로 이동하였습니다.', 'info');
    }
  };

  const handleAuthComplete = (provider: string) => {
    setIsAuthOpen(false);
    addToast(`${provider}을 통한 본인확인이 안전하게 완료되었습니다.`, 'success');
  };

  const handleApplicationCompleted = (data: { name: string; receiptNo: string }) => {
    addToast(
      `${data.name} 님의 지원금 신청이 접수번호 [${data.receiptNo}]로 정상 접수되었습니다!`,
      'success'
    );
  };

  const handleLegalClick = (title: string) => {
    addToast(`'${title}' 정책 안내 문서 페이지입니다.`, 'info');
  };

  const handleSearch = (query: string) => {
    // In-page search jump or filter
    if (query.includes('신청') || query.includes('절차') || query.includes('단계')) {
      const el = document.querySelector('section.mb-14.bg-\\[\\#f1f4f1\\]');
      el?.scrollIntoView({ behavior: 'smooth' });
    } else if (query.includes('금액') || query.includes('자격') || query.includes('대상')) {
      setIsEligibilityOpen(true);
    } else {
      const el = document.getElementById('apply-section');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7faf7] text-[#181c1b]">
      {/* Toast notifications */}
      <ToastContainer toasts={toasts} onRemove={removeToast} />

      {/* Header */}
      <Header
        onOpenLogin={() => setIsAuthOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onSearch={handleSearch}
        addToast={addToast}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-[124px] pb-12">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Primary View: 지원사업 안내 (Exact Screen Requested) */}
          {activeTab === 'grants' && (
            <div className="animate-in fade-in duration-200">
              {/* Section 1: Hero & Deadline Period Card */}
              <HeroSection
                onApplyClick={() => handleOpenStepModal(1)}
                onScrollToApply={handleScrollToApply}
              />

              {/* Section 2: Three Core Summary Cards */}
              <SummaryCards
                onOpenEligibility={() => setIsEligibilityOpen(true)}
              />

              {/* Section 3: 4-Step Process Guide */}
              <ProcessSteps onOpenStepModal={handleOpenStepModal} />

              {/* Section 4: Citizen FAQ Accordion */}
              <FaqSection onExpandToast={(msg) => addToast(msg, 'info')} />

              {/* Section 5: CTA Application & Contact Desk */}
              <CtaSection
                onOpenApply={() => handleOpenStepModal(1)}
                onOpenEligibility={() => setIsEligibilityOpen(true)}
              />
            </div>
          )}

          {/* Secondary Tab: 복지 혜택 조회 */}
          {activeTab === 'benefits' && (
            <div className="py-8 animate-in fade-in duration-200">
              <div className="bg-white rounded-2xl p-8 border border-[#e0e3e0] shadow-sm mb-8">
                <span className="text-xs font-bold text-[#2c694e] uppercase tracking-wider block mb-1">
                  맞춤형 복지 서비스
                </span>
                <h2 className="text-2xl font-bold text-[#012d1d] mb-3">
                  시민 맞춤형 복지 혜택 조회
                </h2>
                <p className="text-[#414844] text-sm mb-6 leading-relaxed">
                  희망찬 자치시에서 제공하는 생애주기별, 대상자별 지원 혜택을 한자리에서 확인하고 신청하세요.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="p-5 bg-[#f1f4f1] rounded-xl border border-[#e0e3e0]">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#aeeecb] text-[#316e52] text-xs font-bold">
                      생계·주거
                    </span>
                    <h3 className="font-bold text-[#012d1d] text-base mt-2 mb-1">
                      2025 희망찬 자치시민 생활안정 지원금
                    </h3>
                    <p className="text-xs text-[#414844] mb-3">
                      어려운 시기, 시민의 생활 부담을 덜어드리기 위한 맞춤형 지원금 (가구당 최대 50만원)
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveTab('grants')}
                      className="text-xs font-bold text-[#012d1d] hover:text-[#2c694e] flex items-center gap-1 cursor-pointer"
                    >
                      <span>상세보기 및 신청</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-5 bg-[#f1f4f1] rounded-xl border border-[#e0e3e0]">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ecefec] text-[#414844] text-xs font-bold">
                      노인·건강
                    </span>
                    <h3 className="font-bold text-[#012d1d] text-base mt-2 mb-1">
                      어르신 안심 교통비 지원
                    </h3>
                    <p className="text-xs text-[#414844] mb-3">
                      관내 만 65세 이상 어르신을 위한 대중교통 이용료 바우처 지원
                    </p>
                    <button
                      type="button"
                      onClick={() => addToast('어르신 안심 교통비 지원 상세 안내를 준비 중입니다.', 'info')}
                      className="text-xs font-bold text-[#012d1d] hover:text-[#2c694e] flex items-center gap-1 cursor-pointer"
                    >
                      <span>상세보기</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="p-5 bg-[#f1f4f1] rounded-xl border border-[#e0e3e0]">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#ecefec] text-[#414844] text-xs font-bold">
                      청년·취업
                    </span>
                    <h3 className="font-bold text-[#012d1d] text-base mt-2 mb-1">
                      청년 미래 도약 자립 장려금
                    </h3>
                    <p className="text-xs text-[#414844] mb-3">
                      구직 활동 및 역량 개발을 지원하는 분기별 자립 수당 지급
                    </p>
                    <button
                      type="button"
                      onClick={() => addToast('청년 미래 도약 자립 장려금 상세 안내를 준비 중입니다.', 'info')}
                      className="text-xs font-bold text-[#012d1d] hover:text-[#2c694e] flex items-center gap-1 cursor-pointer"
                    >
                      <span>상세보기</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsEligibilityOpen(true)}
                    className="px-5 py-2.5 bg-[#012d1d] text-white rounded-xl text-sm font-bold hover:bg-[#2c694e] transition-colors cursor-pointer"
                  >
                    내 지원 조건 모의 진단하기
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Secondary Tab: 공지사항 */}
          {activeTab === 'notices' && (
            <div className="py-8 animate-in fade-in duration-200">
              <div className="bg-white rounded-2xl p-8 border border-[#e0e3e0] shadow-sm">
                <span className="text-xs font-bold text-[#2c694e] uppercase tracking-wider block mb-1">
                  자치시 소식
                </span>
                <h2 className="text-2xl font-bold text-[#012d1d] mb-4">공지사항</h2>

                <div className="divide-y divide-[#e0e3e0]">
                  {[
                    {
                      id: 1,
                      tag: '필독',
                      title: '[공고] 2025 희망찬 자치시민 생활안정 지원금 접수 일정 안내',
                      date: '2025.03.01',
                      dept: '복지정책과',
                      isImportant: true,
                    },
                    {
                      id: 2,
                      tag: '안내',
                      title: '어르신 및 취약계층 현장 방문 신청 전용 창구 운영 안내',
                      date: '2025.02.28',
                      dept: '생활지원팀',
                      isImportant: false,
                    },
                    {
                      id: 3,
                      tag: '안내',
                      title: '지원금 수령 수단(모바일 상품권, 신용카드 포인트) 변경 유의사항',
                      date: '2025.02.25',
                      dept: '지역경제과',
                      isImportant: false,
                    },
                    {
                      id: 4,
                      tag: '안내',
                      title: '부정수급 방지 및 본인인증 시스템 점검 안내',
                      date: '2025.02.20',
                      dept: '정보화총괄과',
                      isImportant: false,
                    },
                  ].map((notice) => (
                    <div
                      key={notice.id}
                      onClick={() => {
                        if (notice.id === 1) setActiveTab('grants');
                        else addToast(`'${notice.title}' 본문을 확인합니다.`, 'info');
                      }}
                      className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#f1f4f1] px-3 rounded-lg cursor-pointer transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`px-2 py-0.5 text-xs font-bold rounded ${
                            notice.isImportant
                              ? 'bg-[#ffdad6] text-[#93000a]'
                              : 'bg-[#ecefec] text-[#414844]'
                          }`}
                        >
                          {notice.tag}
                        </span>
                        <span className="text-sm font-semibold text-[#181c1b]">
                          {notice.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-[#717973] pl-10 sm:pl-0">
                        <span>{notice.dept}</span>
                        <span>{notice.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Secondary Tab: 민원상담 */}
          {activeTab === 'counsel' && (
            <div className="py-8 animate-in fade-in duration-200">
              <div className="bg-white rounded-2xl p-8 border border-[#e0e3e0] shadow-sm">
                <span className="text-xs font-bold text-[#2c694e] uppercase tracking-wider block mb-1">
                  시민 소통 창구
                </span>
                <h2 className="text-2xl font-bold text-[#012d1d] mb-4">
                  민원상담 및 문의 안내
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                  <div className="p-5 bg-[#f1f4f1] rounded-xl border border-[#e0e3e0]">
                    <h3 className="font-bold text-[#012d1d] text-base mb-2">
                      전화 상담 센터
                    </h3>
                    <p className="text-xs sm:text-sm text-[#414844] mb-3 leading-relaxed">
                      지원 자격, 서류 심사, 지급 시기 등에 대해 유선 상담원과 직접 상담하실 수 있습니다.
                    </p>
                    <p className="text-sm font-bold text-[#1b4332]">
                      시민행복콜센터 042-120
                    </p>
                    <p className="text-xs text-[#717973] mt-1">
                      운영시간: 평일 09:00 ~ 18:00 (공휴일 제외)
                    </p>
                  </div>

                  <div className="p-5 bg-[#f1f4f1] rounded-xl border border-[#e0e3e0]">
                    <h3 className="font-bold text-[#012d1d] text-base mb-2">
                      온라인 1:1 민원 접수
                    </h3>
                    <p className="text-xs sm:text-sm text-[#414844] mb-4 leading-relaxed">
                      궁금하신 점을 남겨주시면 담당 주무관이 검토 후 24시간 내 답변해 드립니다.
                    </p>
                    <button
                      type="button"
                      onClick={() => addToast('온라인 1:1 상담 접수 폼을 준비 중입니다.', 'info')}
                      className="px-4 py-2 bg-[#012d1d] text-white text-xs font-bold rounded-lg hover:bg-[#2c694e] transition-colors"
                    >
                      상담글 작성하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer onLegalClick={handleLegalClick} />

      {/* Modal 1: Citizen Login & Auth */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthenticate={handleAuthComplete}
      />

      {/* Modal 2: Eligibility & Amount Calculator */}
      <EligibilityModal
        isOpen={isEligibilityOpen}
        onClose={() => setIsEligibilityOpen(false)}
        onProceedToApply={handleProceedToApplyFromEligibility}
      />

      {/* Modal 3: 4-Step Application Wizard */}
      <ApplicationModal
        isOpen={isApplyOpen}
        initialStep={applyInitialStep}
        onClose={() => setIsApplyOpen(false)}
        onComplete={handleApplicationCompleted}
      />
    </div>
  );
}
