import React from 'react';

const JoinButton = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pointer-events-none flex flex-col justify-end mb-0">
      
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-navy-900 via-navy-900/90 to-transparent z-0 pointer-events-none"></div>

      <div className="relative z-10 p-6 w-full pb-8">
        {/* ▼ リンク先をフォームに変更し、別タブで開くように設定 ▼ */}
        <a
          href="https://forms.gle/LfG5TbG8iLJGsupbA"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto block w-full bg-gradient-to-r from-[#D4AF37] via-[#F2D06B] to-[#C5A028] text-navy-900 font-bold py-4 rounded-full text-center shadow-[0_6px_25px_rgba(212,175,55,0.5)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.6)] active:scale-[0.98] transition-all duration-200 tracking-[0.15em] text-lg font-serif border border-[#F2D06B]/50 relative overflow-hidden group"
        >
          <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] animate-[shine_3s_infinite]"></div>
          <span className="relative z-10 drop-shadow-sm">コミュニティに参加する</span>
        </a>
      </div>
    </div>
  );
};

export default JoinButton;