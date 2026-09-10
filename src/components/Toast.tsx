import React from 'react';
import { ToastMessage } from '../types';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface ToastContainerProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({ toasts, onRemove }) => {
  if (toasts.length === 0) return null;

  return (
    <div
      id="toast-container"
      className="fixed bottom-6 right-6 z-[120] flex flex-col gap-2 pointer-events-none max-w-sm w-full"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3.5 bg-[#2d3130] text-[#eef1ee] rounded-xl shadow-xl border border-white/10 text-sm animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          <div className="flex items-center gap-2.5">
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#75daa8] shrink-0" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-[#ffdad6] shrink-0" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-[#92f7c3] shrink-0" />}
            {toast.type === 'warning' && <AlertCircle className="w-5 h-5 text-amber-300 shrink-0" />}
            <span className="font-medium leading-snug">{toast.message}</span>
          </div>
          <button
            onClick={() => onRemove(toast.id)}
            className="text-white/60 hover:text-white p-1 rounded-md transition-colors"
            title="닫기"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
