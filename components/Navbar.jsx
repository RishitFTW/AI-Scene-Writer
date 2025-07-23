import React from 'react'

function Navbar() {
  return (
        <div class="fixed top-0 left-0 right-0 z-50 bg-[#111317] flex items-center p-4 pl-16 gap-x-4 h-[85px] border-y border-white/20">
            <div class="flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-[#F2CC5A]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zM12.75 8.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            </div>
            <div>
                <h1 class="text-2xl font-bold text-[#F2CC5A] leading-tight">AI Scene Writer</h1>
                <p class="text-sm text-gray-400 leading-normal">Hollywood screenplays powered by AI</p>
            </div>
        </div>

  )
}

export default Navbar