import React from 'react';
import { Lock, X, Smartphone, BadgeCheck, MessageSquare, ShieldCheck, ChevronRight } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthenticate: (providerName: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onAuthenticate }) => {
  if (!isOpen) return null;

  return (
    <div
      id="modal-login"
      className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative border border-[#e0e3e0]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#e0e3e0] mb-4">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#012d1d]" />
            <h3 className="text-lg font-bold text-[#012d1d]">시민 본인확인 서비스</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-[#414844] hover:text-[#181c1b] p-1 rounded-lg hover:bg-[#ecefec] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-[#414844] mb-5 leading-relaxed">
          안전하고 신속한 지원금 신청 및 조회를 위해 간편인증 또는 공동인증서로 본인확인을 진행해 주세요.
        </p>

        {/* Auth Provider Options */}
        <div className="space-y-2.5 mb-6">
          <button
            type="button"
            onClick={() => onAuthenticate('간편인증(카카오/네이버/PASS)')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#f1f4f1] hover:bg-[#ecefec] flex items-center justify-between text-[#181c1b] border border-[#c1c8c2]/50 transition-colors cursor-pointer group text-left"
          >
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-[#2c694e] group-hover:scale-110 transition-transform" />
              <div>
                <span className="text-sm font-bold block">간편인증</span>
                <span className="text-xs text-[#414844]">카카오톡, 네이버, PASS, 토스 등</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#717973] group-hover:text-[#181c1b]" />
          </button>

          <button
            type="button"
            onClick={() => onAuthenticate('금융인증서 / 공동인증서')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#f1f4f1] hover:bg-[#ecefec] flex items-center justify-between text-[#181c1b] border border-[#c1c8c2]/50 transition-colors cursor-pointer group text-left"
          >
            <div className="flex items-center gap-3">
              <BadgeCheck className="w-5 h-5 text-[#012d1d] group-hover:scale-110 transition-transform" />
              <div>
                <span className="text-sm font-bold block">금융인증서 / 공동인증서</span>
                <span className="text-xs text-[#414844]">은행 발급 인증서로 안전하게 서명</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#717973] group-hover:text-[#181c1b]" />
          </button>

          <button
            type="button"
            onClick={() => onAuthenticate('휴대폰 본인인증')}
            className="w-full py-3.5 px-4 rounded-xl bg-[#f1f4f1] hover:bg-[#ecefec] flex items-center justify-between text-[#181c1b] border border-[#c1c8c2]/50 transition-colors cursor-pointer group text-left"
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-[#2c694e] group-hover:scale-110 transition-transform" />
              <div>
                <span className="text-sm font-bold block">휴대폰 SMS 본인확인</span>
                <span className="text-xs text-[#414844]">통신 3사 및 알뜰폰 문자 인증</span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-[#717973] group-hover:text-[#181c1b]" />
          </button>
        </div>

        {/* Security Note */}
        <div className="p-3 bg-[#f1f4f1] rounded-lg text-xs text-[#414844] flex items-center gap-2 border border-[#e0e3e0]/60">
          <ShieldCheck className="w-4 h-4 text-[#2c694e] shrink-0" />
          <span>입력하신 개인정보는 「개인정보 보호법」에 따라 철저히 보호됩니다.</span>
        </div>
      </div>
    </div>
  );
};
