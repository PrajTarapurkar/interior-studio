"use client";



export default function Hero({ section }: { section: any }) {
  return (
    <>
      
      {/* HERO */}
      <section className="
        relative
        overflow-hidden

        pt-[150px]
        sm:pt-[170px]
        md:pt-[190px]
        lg:pt-[210px]

        pb-20
        sm:pb-24
        lg:pb-32
      ">

        {/* GLOW */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-[#d6b98c]/10 blur-[100px] sm:blur-[160px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <p className="uppercase tracking-[0.35em] text-[#d6b98c] text-[10px] sm:text-xs md:text-sm mb-5">
               {section?.badge || "What We Offer"}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] max-w-5xl mx-auto">

            {section?.heading || "Premium Interior"}
            <span className="block text-[#d6b98c] mt-2">
              {section?.highlightText || "Design Services"}
            </span>

          </h1>

          <p className="mt-6 sm:mt-8 text-gray-400 text-sm sm:text-base lg:text-xl leading-relaxed max-w-3xl mx-auto px-2">

            {section?.description || "At Kulal Interiors, we blend creativity with technical precision to deliver spaces that are both luxurious and functional."}

          </p>

        </div>

      </section>

    </>
  );
}




