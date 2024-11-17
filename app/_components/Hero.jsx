"use client";

import { cn } from "@/lib/utils";
import DotPattern from "@/components/ui/dot-patterns";

export default function Hero() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden bg-gradient-to-br from-black to-slate-800 min-h-[95vh] p-20 md:shadow-xl">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <div className="flex justify-center font-bold underline">
        AI Course GenX
      </div>    
      <div className="mt-5 max-w-2xl text-center mx-auto">
        <h1 className="block font-bold text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-tl to-gray-600 from-white text-transparent">
          AI Course
          <span className="bg-clip-text bg-gradient-to-t from-blue-800 to-blue-400 text-transparent"> Generator</span>
        </h1>
      </div>
    

      <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-neutral-400">
        Revolutionize your Course creation with our AI-powered app, delivering engaging and high-quality courses in seconds.</p>
      </div>

    
      <div className="mt-8 gap-3 flex justify-center">
        <a className="inline-flex justify-center items-center 
        gap-x-3 text-center bg-gradient-to-tl from-blue-600
        to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" 
        href="/dashboard">
          Get started
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </a>
      
      </div>
    </div>
      <DotPattern
        width={20}
        height={20}
        cx={1.5}
        cy={1.5}
        cr={1.5}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] animate-pulse duration-2000 p-3",
        )}
      />
    </div>
  );
}
