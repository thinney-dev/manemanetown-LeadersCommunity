import React from 'react';

// ロゴ画像の読み込み
import logo1 from '../assets/logos_1.png';
import logo2 from '../assets/logos_2.png';

const Hero = () => {
  // ロゴ配列（PC版スクロール用）
  const logos = [logo1];

  return (
    <section className="relative min-h-[100dvh] md:h-screen flex flex-col justify-between md:justify-center items-center overflow-hidden">
      
      {/* 無限スクロール用のアニメーション定義 */}
      <style>{`
        @keyframes scroll-logos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-logos {
          animation: scroll-logos 40s linear infinite;
          width: max-content;
        }
      `}</style>

      <div className="relative z-10 text-center px-2 md:px-6 animate-fade-in flex-1 flex flex-col justify-center items-center w-full mt-[-2vh] md:mt-[-10vh] pb-8 md:pb-0 pt-8 md:pt-0">
        
        {/* ▼▼▼ 修正1：タグラインを左右分割の外に出し、画面中央に配置・枠線を削除しました ▼▼▼ */}
        <div className="mb-6 md:mb-10 w-full text-center">
          <p className="text-gold-gradient tracking-[0.2em] text-xs md:text-sm font-sans font-bold drop-shadow-lg">
            関西唯一・4大外資戦略コンサル認定団体
          </p>
        </div>

        {/* PC版で左右に並べるためのラッパー */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-6xl mx-auto">
          
          {/* === 左側：MLCロゴ === */}
          <div className="flex flex-col items-center justify-center space-y-2 md:space-y-3">
            <h1 className="text-8xl sm:text-[7rem] md:text-[9rem] font-serif text-gold-gradient tracking-widest drop-shadow-2xl font-normal leading-none pl-4 md:pl-8">
              MLC
            </h1>
            <p className="text-sm sm:text-base md:text-lg font-serif text-gold-gradient tracking-[0.2em] drop-shadow-md">
              まねまねタウン Leaders Community
            </p>
          </div>

          {/* === 右側：サブコピー === */}
          {/* ▼▼▼ 修正2：枠線と背景を削除し、テキストだけにしました（高さのズレ設定も解除しています） ▼▼▼ */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-white/95 text-sm md:text-base font-serif tracking-widest drop-shadow-md whitespace-nowrap">
              自分らしく生きる人を増やす<br className="md:hidden"/>実践型学生コミュニティ
            </p>
          </div>

        </div>
      </div>

      {/* 企業ロゴのエリア */}
      <div className="w-full md:absolute md:bottom-24 md:left-0 md:bg-white md:py-4 z-20 overflow-hidden mt-auto md:mt-0">
        
        {/* PC版のみ表示：横スクロール */}
        <div className="hidden md:flex animate-scroll-logos gap-12 md:gap-20 items-center px-6">
          {logos.map((logo, index) => (
            <div key={`logo-set1-${index}`} className="flex-shrink-0">
              <img 
                src={logo} 
                alt={`Partner Logo ${index + 1}`} 
                className="h-12 w-auto object-contain transition duration-300" 
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div key={`logo-set2-${index}`} className="flex-shrink-0">
              <img 
                src={logo} 
                alt={`Partner Logo ${index + 1}`} 
                className="h-12 w-auto object-contain transition duration-300" 
              />
            </div>
          ))}
        </div>

        {/* スマホ版のみ表示：静止画像1枚を中央配置 */}
        <div className="flex md:hidden justify-center items-center w-full bg-white py-5">
          <img 
            src={logo2} 
            alt="Partner Logos Mobile" 
            className="w-[92%] max-w-[360px] h-auto object-contain" 
          />
        </div>

      </div>
      
    </section>
  );
};

export default Hero;