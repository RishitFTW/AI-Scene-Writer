import Image from "next/image";

export default function Home() {
  return (
    <div class="pt-[85px] w-full min-h-screen bg-[#111317] text-white">
      <div class="pt-11 px-6">
          <div class="max-w-3xl mx-auto text-center">
              
              <h1 class="text-4xl font-bold text-[#F2CC5A]">
                  Unleash Your Imagination
              </h1>
              
              <p class="mt-4 text-lg text-neutral-400 leading-relaxed px-14">
                  Transform any simple idea into a professionally formatted Hollywood screenplay. From epic battles to coffee shop encounters - if you can imagine it, we can script it.
              </p>

          </div>
      </div>
      <div className=" pt-10 h-[850px]">
        <div className=" w-screen h-[620px] flex items-center justify-center">
          <div className="bg-[#16181D] w-[880px] h-full border border-white/20 shadow-md shadow-white/10">
            {/* Content here */}
          </div>
        </div>        
      </div>
    </div>
  );
}
