"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import ScreenplayViewer from '@/components/ScreenPlayViewer';
import toast from 'react-hot-toast';

function StoryPage() {
  const router = useRouter();
  const [screenplay, setScreenplay] = useState("");
  const [renderingScreenplay, setRenderingScreenplay] = useState(false);

  useEffect(() => {
    setRenderingScreenplay(true);
    const storedScreenplay = localStorage.getItem('screenplayResult');

    if (storedScreenplay) {
      setScreenplay(storedScreenplay);
    } else {
      setScreenplay("No screenplay found. Please go back and generate one.");
    }

    setTimeout(() => {
      setRenderingScreenplay(false);
    }, 1500); 
  }, []);

    const handleDownload = () => {
    if (!screenplay) return;

    const blob = new Blob([screenplay], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'screenplay.txt';
    a.click();

    URL.revokeObjectURL(url); // clean up
    toast.success('Screenplay downloaded!');
  };

  const handleCopy=()=>{
    if (!screenplay) return
    navigator.clipboard.writeText(screenplay);
    toast.success('Screenplay copied to clipboard!')
  }

  return (
    <div className="h-[1000px] w-full bg-[#111317] pt-[85px] px-[310px]">
      <div className="w-full h-[750px] bg-[#111317] mt-[30px]">
        <div className='bg-[#111317]'>
          <div className="flex items-center justify-between w-full max-w-4xl mx-auto">
            {/* Left Text */}
            <h1 className="text-[#F2CC5A] text-2xl font-semibold">Your Screenplay</h1>

            {/* Button Group */}
            <div className="flex space-x-2">
              {/* Copy Button */}
              <button className="flex items-center space-x-1 bg-[#111317] hover:bg-[#2a2a2e] text-white px-3 py-1.5 rounded border border-white/20 text-sm"
              onClick={handleCopy}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2M16 8h2a2 2 0 012 2v8a2 2 0 01-2 2h-8a2 2 0 01-2-2v-2" />
                </svg>
                <span>Copy</span>
              </button>


              {/* Download Button */}
              <button className="flex items-center space-x-1 bg-[#111317] hover:bg-[#2a2a2e] text-white px-3 py-1.5 rounded border border-white/20 text-sm"
              onClick={handleDownload}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
                </svg>
                <span>Download</span>
              </button>

              {/* New Scene Button */}
              <button
                className="flex items-center space-x-1 bg-[#111317] hover:bg-[#3a3a3f] text-white px-3 py-1.5 rounded border border-white/20 text-sm"
                onClick={() => { router.push('/') }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
                </svg>
                <span>New Scene</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content / Skeleton */}
        <div className='bg-[#F7F6F2] mt-[20px] h-full rounded-md p-6 text-black overflow-y-auto'>
          {renderingScreenplay ? (
            <div className="space-y-4 animate-pulse">
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-5/6"></div>
              <div className="h-3 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-2/3"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              <div className="h-3 bg-gray-300 rounded w-5/6"></div>
            </div>
          ) : (
            <ScreenplayViewer screenplay={screenplay} />
          )}
        </div>
      </div>
    </div>
  )
}

export default StoryPage
