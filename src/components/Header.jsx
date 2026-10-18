function Header() {
  return (
    <header class="fixed top-4 left-1/2 -translate-x-1/2 
                 z-50 w-[92%] md:w-[85%] lg:w-[75%] 
                 rounded-full 
                 bg-white/5 backdrop-blur-3xl
                 shadow-lg border border-white/30 
                 transition-transform duration-300 ease-in-out
                 translate-y-0">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a aria-label="Return to Debt Advisors Canada homepage" href="/">
                <img src="https://ik.imagekit.io/efnhxhh9p/tr:w-224,h-80,q-100/logo_.avif" width="112" height="40" alt="Debt Advisors Canada" class="h-10 md:h-12"/>
            </a>
            <a href="tel:+112892013339" class="px-4 py-2 rounded-full 
                      bg-blue-600 text-white 
                      text-sm md:text-base lg:text-lg 
                      font-semibold shadow-md 
                      hover:bg-blue-700 transition-colors" aria-label="Call Debt Advisors Canada at 1-289-201-3339">
                1-289-201-3339
            </a>
        </div>
    </header>
  );
}

export default Header;