
function Hero() {
  return (
    <section className="w-full min-w-0 flex flex-col items-start text-left lg:col-span-7 max-w-3xl mx-auto lg:mx-0 font-dm-sans">
      <h1 className="text-[1.8rem] sm:text-4xl md:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.15] tracking-tight">
        Canadians Are Reducing Their Debt by{" "}
        <span className="text-blue-600">60–80%</span>
      </h1>

      <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
        A free, confidential assessment can help you understand where you
        stand and what may apply based on your situation.
      </p>

      <div className="mt-6">
        <blockquote className="px-4 py-3 bg-blue-50/50 border-l-4 border-blue-600 rounded-r-lg shadow-sm">
          <p className="text-[1.05rem] font-medium text-gray-700 italic">
            "Over <span className="text-green-600 font-bold">
              125,000 Canadians
            </span>{" "}
            went through this process last year."
          </p>
        </blockquote>
      </div>

      <div className="pt-5 w-full">
        <ul className="space-y-4 w-full">
          {[
            "Takes about 2 minutes",
            "No credit check to get started",
            "No obligation",
            "Private and confidential",
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-left">
              <span className="text-green-500 flex-shrink-0">✓</span>
              <span className="text-base text-gray-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 w-full flex justify-center lg:justify-start">
        <button
          type="button"
          onClick={() =>
            document.getElementById("debt-form")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="px-5 py-3 rounded-full font-semibold transition-transform duration-200 hover:scale-105 active:scale-95 bg-blue-600 text-white hover:bg-blue-700 shadow-lg sm:hidden flex items-center justify-center gap-2 text-base w-full max-w-sm mx-auto"
        >
          Start Free Assessment <span>››</span>
        </button>
      </div>

      <div className="mt-10 self-center lg:self-start">
        <div className="inline-flex items-center gap-4 rounded-lg px-4 py-3 shadow-xl bg-white ring-1 ring-black ring-opacity-5">
          <img
            src="https://ik.imagekit.io/efnhxhh9p/tr:w-118,h-40,q-100/google.avif"
            width="118"
            height="40"
            alt="Google Reviews Logo"
            className="h-7 w-auto"
          />

          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <p className="font-semibold">Excellent</p>
              <span className="text-[#FBBC04]">★★★★★</span>
            </div>
            <p className="text-sm">4.9 Star Ratings</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
