function HowItWorks() {
    return (
        <section class="relative bg-white py-20 md:py-28 overflow-clip">
            <div class="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-blue-200/40 blur-3xl">
            </div>
            <div class="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-indigo-200/40 blur-3xl">
            </div>
            <div class="relative container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-20">
                <div class="flex flex-col justify-center lg:sticky lg:top-28 lg:self-start">
                    <span class="text-lg font-semibold text-blue-600 mb-3">How it works</span>
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-regular text-gray-900 leading-tight">Getting help is simpler than you think</h2>
                </div>
                <div class="relative">
                    <div class="space-y-6 sticky top-28">
                        <div class="rounded-2xl bg-white shadow-md border border-gray-100 p-6 transition hover:shadow-lg">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                                    1
                                </span>
                                <span class="text-sm font-regular text-gray-500">
                                    Step one
                                </span>
                            </div>
                            <h3 class="text-2xl font-regular text-gray-900 mb-2">Quick Chat</h3>
                            <p class="text-gray-600 text-base leading-relaxed">Tell us about your situation. No credit check, no commitment.</p>
                        </div>
                        <div class="rounded-2xl bg-white shadow-md border border-gray-100 p-6 transition hover:shadow-lg">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                                    2
                                </span>
                                <span class="text-sm font-regular text-gray-500">
                                    Step two
                                </span>
                            </div>
                            <h3 class="text-2xl font-regular text-gray-900 mb-2">See What Applies to Your Situation</h3>
                            <p class="text-gray-600 text-base leading-relaxed">A specialist reviews your situation and walks you through what may be available for someone in your position.</p>
                        </div>
                        <div class="rounded-2xl bg-white shadow-md border border-gray-100 p-6 transition hover:shadow-lg">
                            <div class="flex items-center gap-3 mb-2">
                                <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                                    3
                                </span>
                                <span class="text-sm font-regular text-gray-500">
                                    Step three
                                </span>
                            </div>
                            <h3 class="text-2xl font-regular text-gray-900 mb-2">You Pay Way Less</h3>
                            <p class="text-gray-600 text-base leading-relaxed">Most people pay 20–40 cents on the dollar through one affordable monthly payment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HowItWorks;