import React, { useState } from 'react';
import { FAQ_LIST } from '../data/portalData';
import { ChevronDown } from 'lucide-react';

interface FaqSectionProps {
  onExpandToast: (msg: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onExpandToast }) => {
  // Q1 open by default as in screenshot
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    q1: true,
    q2: false,
    q3: false,
    q4: false,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    FAQ_LIST.forEach((item) => {
      allOpen[item.id] = true;
    });
    setOpenItems(allOpen);
    onExpandToast('모든 자주 묻는 질문을 펼쳤습니다.');
  };

  const collapseAll = () => {
    const allClosed: Record<string, boolean> = {};
    FAQ_LIST.forEach((item) => {
      allClosed[item.id] = false;
    });
    setOpenItems(allClosed);
    onExpandToast('모든 질문을 접었습니다.');
  };

  return (
    <section className="mb-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-5 gap-3">
        <div>
          <span className="text-xs font-bold text-[#2c694e] uppercase tracking-wider block">
            시민들이 가장 많이 물어보시는 내용
          </span>
          <h2 className="text-2xl font-bold text-[#012d1d] mt-0.5">자주 묻는 질문 (FAQ)</h2>
        </div>

        <div className="flex items-center gap-2 text-xs sm:text-sm self-start sm:self-auto">
          <button
            type="button"
            onClick={expandAll}
            className="text-[#2c694e] hover:underline font-semibold cursor-pointer py-1"
          >
            전체 펼치기
          </button>
          <span className="text-[#c1c8c2]">|</span>
          <button
            type="button"
            onClick={collapseAll}
            className="text-[#414844] hover:underline cursor-pointer py-1"
          >
            전체 닫기
          </button>
        </div>
      </div>

      {/* Accordion Group */}
      <div className="space-y-3" id="faq-accordion-group">
        {FAQ_LIST.map((faq, index) => {
          const isOpen = !!openItems[faq.id];
          return (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-[#e0e3e0] transition-all"
            >
              <button
                type="button"
                onClick={() => toggleItem(faq.id)}
                aria-expanded={isOpen}
                className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-[#f1f4f1]/60 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3.5 pr-3">
                  <span className="w-8 h-8 rounded-full bg-[#ecefec] text-[#012d1d] font-bold text-xs sm:text-sm flex items-center justify-center shrink-0">
                    Q{index + 1}
                  </span>
                  <span className="text-base font-bold text-[#181c1b] leading-snug">
                    {faq.question}
                  </span>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-[#012d1d] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Collapsible Content */}
              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 pt-1 animate-in fade-in duration-150">
                  <div className="p-4 bg-[#f1f4f1] rounded-lg border-l-4 border-[#012d1d]">
                    <p className="text-sm sm:text-base text-[#181c1b] leading-relaxed">
                      {faq.answer}
                    </p>
                    {faq.subAnswer && (
                      <p className="text-xs sm:text-sm text-[#414844] mt-2 leading-relaxed">
                        {faq.subAnswer}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
