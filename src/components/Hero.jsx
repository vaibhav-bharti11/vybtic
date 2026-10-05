import React from 'react';

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pb-32 lg:pt-20">
      <div className="mx-auto max-w-5xl text-center">
        <h1 className="font-heading text-5xl font-normal leading-[1.02] tracking-[-0.035em] text-[#ECEEF1] sm:text-6xl md:text-7xl lg:text-[82px]">
          Intelligent technology,
          <br className="hidden sm:block" />
          <span className="text-[#C9CDD2]"> built to make a difference.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-neutral-300 sm:text-lg">
          Vyntiq is an AI-first technology company building intelligent, high-quality
          products and solutions that solve real-world problems and create lasting impact.
        </p>
      </div>
    </section>
  );
}
