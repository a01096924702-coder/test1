import React, { useState, useEffect } from 'react';
import { LOGO_URL, PROFILE_AVATAR_URL } from '../data/portalData';
import { Search, X, Menu, Lock, Sparkles, Check } from 'lucide-react';

interface HeaderProps {
  onOpenLogin: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSearch: (query: string) => void;
  addToast: (msg: string, type?: 'info' | 'success' | 'warning' | 'error') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenLogin,
  activeTab,
  setActiveTab,
  onSearch,
  addToast,
}) => {
  const [fontSizeLevel, setFontSizeLevel] = useState<0 | 1 | 2>(0);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  // Apply font scale class to html tag
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove('font-scale-large', 'font-scale-xlarge');
    if (fontSizeLevel === 1) {
      html.classList.add('font-scale-large');
    } else if (fontSizeLevel === 2) {
      html.classList.add('font-scale-xlarge');
    }
  }, [fontSizeLevel]);

  const toggleFontSize = () => {
    setFontSizeLevel((prev) => {
      const next = ((prev + 1) % 3) as 0 | 1 | 2;
      if (next === 1) addToast('글자 크기를 1단계 확대했습니다. (+15%)', 'info');
      else if (next === 2) addToast('글자 크기를 최대 크기로 확대했습니다. (+30%)', 'info');
      else addToast('글자 크기를 기본값으로 복원했습니다.', 'info');
      return next;
    });
  };

  const resetFontSize = () => {
    setFontSizeLevel(0);
    addToast('글자 크기를 기본값으로 복원했습니다.', 'info');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      addToast('검색어를 입력해 주세요.', 'warning');
      return;
    }
    onSearch(searchQuery.trim());
    addToast(`'${searchQuery.trim()}'에 대한 지원 정보를 검색했습니다.`, 'success');
  };

  const navItems = [
    { id: 'grants', label: '지원사업 안내' },
    { id: 'benefits', label: '복지 혜택 조회' },
    { id: 'notices', label: '공지사항' },
    { id: 'counsel', label: '민원상담' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      {/* Top utility bar */}
      <div className="bg-[#f1f4f1] px-4 md:px-8 lg:px-12 py-1.5 border-b border-[#e0e3e0]/60">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between text-xs text-[#414844]">
          <span className="font-medium tracking-tight">희망찬 자치시 공식 공공지원사업 포털</span>

          <div className="flex items-center gap-4">
            {/* Font scaling control */}
            <div className="flex items-center gap-1.5">
              <span className="text-[#414844] font-medium hidden sm:inline">글자크기</span>
              <button
                type="button"
                id="btn-font-normal"
                onClick={resetFontSize}
                className={`px-2 py-0.5 rounded text-xs transition-colors ${
                  fontSizeLevel === 0
                    ? 'bg-[#1b4332] text-white font-bold'
                    : 'bg-[#ecefec] hover:bg-[#e0e3e0] text-[#181c1b]'
                }`}
                title="기본 글자 크기 (100%)"
              >
                가
              </button>
              <button
                type="button"
                id="btn-font-large"
                onClick={toggleFontSize}
                className={`px-2 py-0.5 rounded text-xs transition-colors ${
                  fontSizeLevel > 0
                    ? 'bg-[#1b4332] text-white font-bold'
                    : 'bg-[#ecefec] hover:bg-[#e0e3e0] text-[#181c1b]'
                }`}
                title="글자 확대 (115% / 130%)"
              >
                가+ {fontSizeLevel > 0 && `(${fontSizeLevel})`}
              </button>
            </div>

            {/* Quick search button */}
            <button
              type="button"
              id="btn-toggle-search"
              onClick={() => setShowSearch(!showSearch)}
              className="flex items-center gap-1 hover:text-[#181c1b] transition-colors cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-[#2c694e]" />
              <span className="font-medium">돋보기</span>
            </button>

            {/* Login / Auth */}
            <button
              type="button"
              id="btn-login-modal"
              onClick={onOpenLogin}
              className="flex items-center gap-1 hover:text-[#181c1b] transition-colors cursor-pointer font-medium"
            >
              <Lock className="w-3 h-3 text-[#2c694e]" />
              <span>{userLoggedIn ? '홍길동 님 (본인인증 완료)' : '로그인/본인확인'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Search Dropdown Bar */}
      {showSearch && (
        <div
          id="quick-search-bar"
          className="bg-white border-b border-[#c1c8c2]/50 shadow-md px-4 md:px-8 py-3 transition-all"
        >
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-[1200px] mx-auto flex items-center gap-3"
          >
            <Search className="w-5 h-5 text-[#1b4332] shrink-0" />
            <input
              type="text"
              id="quick-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="검색어를 입력하세요 (예: 신청방법, 지급기준, 행정복지센터, 가구원수)..."
              className="w-full bg-transparent border-none outline-none text-[#181c1b] placeholder:text-[#717973] text-sm focus:ring-0"
              autoFocus
            />
            <button
              type="submit"
              className="px-4 py-1.5 bg-[#1b4332] text-white rounded-lg text-xs font-semibold hover:bg-[#2c694e] transition-colors whitespace-nowrap cursor-pointer"
            >
              검색
            </button>
            <button
              type="button"
              onClick={() => setShowSearch(false)}
              className="p-1 text-[#414844] hover:text-[#181c1b] rounded"
              title="닫기"
            >
              <X className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Main navigation bar */}
      <div className="h-20 max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer select-none"
          onClick={() => setActiveTab('grants')}
        >
          <img
            src={LOGO_URL}
            alt="희망찬 자치시 시민 복지 지원 포털"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              // Fallback if network blocked
              e.currentTarget.style.display = 'none';
              const fallback = document.getElementById('logo-fallback');
              if (fallback) fallback.style.display = 'flex';
            }}
          />
          <div
            id="logo-fallback"
            className="hidden items-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-[#1b4332] text-white flex items-center justify-center font-bold text-base shadow-sm">
              희
            </div>
            <div className="leading-tight">
              <span className="text-base font-bold text-[#1b4332] block">희망찬 자치시</span>
              <span className="text-[10px] text-[#414844] tracking-tight block">시민 복지 지원 포털</span>
            </div>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id);
                  if (item.id !== 'grants') {
                    addToast(`'${item.label}' 메뉴로 이동했습니다.`, 'info');
                  }
                }}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1b4332] text-white shadow-sm'
                    : 'text-[#414844] hover:bg-[#ecefec] hover:text-[#181c1b]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right side items */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onOpenLogin}
            title="마이페이지 / 본인인증"
            className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
          >
            <img
              src={PROFILE_AVATAR_URL}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover border border-[#e0e3e0] cursor-pointer hover:opacity-90"
              onError={(e) => {
                // Fallback avatar
                e.currentTarget.style.display = 'none';
                const avatarFallback = document.getElementById('avatar-fallback');
                if (avatarFallback) avatarFallback.style.display = 'flex';
              }}
            />
            <div
              id="avatar-fallback"
              className="hidden w-8 h-8 rounded-full bg-[#ecefec] text-[#1b4332] items-center justify-center text-xs font-bold border border-[#c1c8c2]"
            >
              시민
            </div>
          </button>

          {/* Mobile hamburger menu */}
          <button
            type="button"
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#ecefec] text-[#181c1b]"
            title="메뉴 열기"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#e0e3e0] bg-white px-4 py-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#1b4332] text-white'
                    : 'text-[#414844] hover:bg-[#ecefec]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
