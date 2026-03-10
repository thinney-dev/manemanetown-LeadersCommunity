import React from 'react';

const About = () => {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      
      {/* うっすらとした背景フィルター（Heroとの繋がりを綺麗にするため） */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/50 to-transparent pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
        
        {/* 見出しエリア */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-widest mb-4">
            ABOUT
          </h2>
          <p className="text-gold-gradient font-sans text-sm tracking-[0.2em]">
            MLCとは？
          </p>
        </div>

        {/* テキストエリア */}
        <div className="space-y-8 md:space-y-10">
          <p className="text-white/90 text-base md:text-xl font-sans tracking-[0.15em] leading-loose md:leading-loose">
            単なる就活対策ではなく、社会で通用する
              論理的思考力　対話力　社会貢献意識を培いながら
              本質的な成長を通して世界で活躍できるキャリアを切り拓く、自分らしく生きる人を増やす実践型学生コミュニティです。
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;