function Footer(){
    return (
        <footer class="bg-[#002B9A] text-white font-satoshi relative overflow-hidden">
            <div class="relative z-10 pt-12 pb-28 lg:pt-16 lg:pb-20">
                <div class="container mx-auto px-4 lg:px-8">
                    <div class="max-w-5xl mx-auto space-y-10">
                        <div>
                            <div class="flex flex-col items-center justify-center space-y-6">
                                <img src="https://ik.imagekit.io/efnhxhh9p/tr:w-208,h-80,f-avif,q-85/logo.avif" srcset="https://ik.imagekit.io/efnhxhh9p/tr:w-208,h-80,f-avif,q-85/logo.avif 1x, https://ik.imagekit.io/efnhxhh9p/tr:w-416,h-160,f-avif,q-85/logo.avif 2x" alt="Debt Advisors Canada Logo" class="h-20 w-52" loading="lazy" decoding="async" width="208" height="80"/>
                            </div>
                        </div>
                        <div class="border-t border-white/20 my-8"></div>
                        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                            <p class="text-xs md:text-sm text-white/80">© 2026 Debt Advisors Canada. All rights reserved.</p>
                        </div>
                        <div class="mt-10 text-xs text-white/70 leading-relaxed space-y-4">
                            <p>Debt Advisors Canada provides debt assessment and referral services. We are not a Licensed Insolvency Trustee firm and do not administer consumer proposals or bankruptcies.</p>
                            <p>Information submitted through this website may be reviewed by our team and, where appropriate, referred to a third-party service provider for further review. Debt Advisors Canada may receive compensation for referrals. Options, fees, timelines, and outcomes depend on your individual situation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;