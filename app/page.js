"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {

  const [Text,setText]= useState("");
  const [gettingStory,setgettingStory]= useState(false);
  const router= useRouter();
 
  const handleGenerate=async()=>{
    if(Text.length==0) return;
    setgettingStory(true);
    try {
      console.log(Text);
      // const response= await fetch("api/generate",{
      //   method:"POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify({ prompt: Text }),        
      // })

      // const data= await response.json();
      router.push('/StoryPage')
      console.log(data);

    } catch (error) {
      console.error("Error generating screenplay:", error);
    } finally{
      setgettingStory(false);
    }
  }

  return (
    <div className="pt-[85px] w-full min-h-screen bg-[#111317] text-white">
      <div className="pt-11 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#F2CC5A]">
            Unleash Your Imagination
          </h1>
          <p className="mt-4 text-lg text-neutral-400 leading-relaxed px-14">
            Transform any simple idea into a professionally formatted Hollywood
            screenplay. From epic battles to coffee shop encounters - if you can
            imagine it, we can script it.
          </p>
        </div>
      </div>

      <div className="pt-10 h-[790px]">
        <div className="w-screen h-[640px] flex items-center justify-center">
          <div className="bg-[#16181D] w-[880px] h-full border border-white/20 shadow-md shadow-white/10">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-[#F2CC5A] mb-1 mt-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 flex-shrink-0 spin-slower"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5v13.5H3.75V5.25zM7.5 5.25v13.5M16.5 5.25v13.5M3.75 9.75h3.75M3.75 14.25h3.75M16.5 9.75h3.75M16.5 14.25h3.75"
                  />
                </svg>
                <h1 className="text-3xl font-semibold text-[#F2CC5A]">
                  AI Scene Writer
                </h1>
              </div>
              <p className="text-lg text-neutral-400">
                Transform any idea into a Hollywood screenplay
              </p>
            </div>

            <div className="text-sm pl-8 mt-6">Scene Premise</div>

            <div className="w-full pl-8 pr-8 pt-1">
              {/* Input Box */}
              <div className="bg-[#141414] text-white p-4 rounded-md border border-[#2c2c2c] h-[140px] focus-within:border-[#F2CC5A]">
                <textarea
                  className="w-full bg-transparent resize-none outline-none text-sm placeholder:text-gray-400"
                  placeholder="Enter your scene idea (e.g., 'Two superheroes debate who makes better pancakes')"
                  rows="3"
                  maxLength="500"
                  value={Text}
                  onChange={(e)=>setText(e.target.value)}
                ></textarea>
              </div>
              <div className="text-xs text-gray-500 mt-1">{Text.length}/500 characters</div>

              {/* Button */}
              <div className="mt-4">
                <button 
                onClick={handleGenerate}
                className={`w-full transition-colors text-black font-medium py-3 rounded-md flex items-center justify-center gap-2
                                   ${Text.length > 0 ? "bg-[#FCDA76] hover:bg-[#e9c25e]" : "bg-[#a78b48] hover:bg-[#b79853]"}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.5 15.5l-1.25 3.25L1 20l3.25 1.25L5.5 24l1.25-3.25L10 20l-3.25-1.25L5.5 15.5zM18 8.25l-2.25-5.5L13.5 8.25l-5.5 2.25 5.5 2.25 2.25 5.5 2.25-5.5 5.5-2.25-5.5-2.25z"
                    />
                  </svg>
                  Generate Screenplay
                </button>
              </div>

              <div className="space-y-3 mt-6">
                <p className="text-sm text-gray-400 mb-2">
                  Need inspiration? Try these:
                </p>
                <div className="flex flex-col h-[190px] gap-2">
                  <div className="flex-1 bg-[#1e1e1e] border border-[#2c2c2c] rounded-md p-2 text-sm text-gray-300 hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                  onClick={()=>{setText("Sherlock Holmes and Darth Vader argue about whose cape is better")}}>
                    "Sherlock Holmes and Darth Vader argue about whose cape is
                    better"
                  </div>
                  <div className="flex-1 bg-[#1e1e1e] border border-[#2c2c2c] rounded-md p-2 text-sm text-gray-300 hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                  onClick={()=>{setText("Batman orders a complicated coffee at Starbucks")}}>
                    "Batman orders a complicated coffee at Starbucks"
                  </div>
                  <div className="flex-1 bg-[#1e1e1e] border border-[#2c2c2c] rounded-md p-2 text-sm text-gray-300 hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                  onClick={()=>{setText("Two rival chefs compete in a cooking show on Mars")}}>
                    "Two rival chefs compete in a cooking show on Mars"
                  </div>
                  <div className="flex-1 bg-[#1e1e1e] border border-[#2c2c2c] rounded-md p-2 text-sm text-gray-300 hover:bg-[#2a2a2a] transition-colors cursor-pointer"
                  onClick={()=>{setText("A time traveler accidentally orders pizza in medieval times")}}>
                    "A time traveler accidentally orders pizza in medieval times"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
