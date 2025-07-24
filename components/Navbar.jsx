import React from 'react'

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[rgba(17,19,23,0.6)] backdrop-blur-sm flex items-center p-4 pl-16 gap-x-4 h-[85px] border-y border-white/20">
        <div className="flex-shrink-0 text-[#F2CC5A]">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 flex-shrink-0 spin-slower"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5v13.5H3.75V5.25zM7.5 5.25v13.5M16.5 5.25v13.5M3.75 9.75h3.75M3.75 14.25h3.75M16.5 9.75h3.75M16.5 14.25h3.75"
            />
        </svg>
        </div>

        <div>
            <h1 className="text-2xl font-bold text-[#F2CC5A] leading-tight">AI Scene Writer</h1>
            <p className="text-sm text-gray-400 leading-normal">Hollywood screenplays powered by AI</p>
        </div>
    </div>

  )
}

export default Navbar