import React from 'react';

const Closing = () => {
  return (
    <section 
      className="relative py-40 px-6 flex flex-col items-center justify-center text-center min-h-[60vh] bg-transparent"
    >
      <div className="relative z-10 max-w-4xl mx-auto space-y-12">
        
        <div className="space-y-12">
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight drop-shadow-2xl">
            共に一歩を<br />
            踏み出しませんか？
          </h2>
          
          <p className="text-silver/90 text-sm md:text-lg font-sans tracking-wide drop-shadow-md">
            あなたの<span className="text-gold-gradient">個</span>が輝く場所が、ここにあります。
          </p>
        </div>

        {/* ボタン・コピーライト部分 */}
        <div className="space-y-12 pt-8">
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* ▼ リンク先をフォームに変更し、別タブで開くように設定 ▼ */}
            <a 
              href="https://forms.gle/LfG5TbG8iLJGsupbA" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-400 text-navy-900 font-bold py-4 px-12 rounded hover:bg-white transition duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              コミュニティに参加する
            </a>
            {/* ▼ 「体験に申し込む」ボタンを削除しました ▼ */}
          </div>

          <div className="pt-20 text-silver/30 text-xs">
            © 2026 THINNEY Inc. All Rights Reserved.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Closing;