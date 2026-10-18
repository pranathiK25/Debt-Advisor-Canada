import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
    const [selectedDebt, setSelectedDebt] = useState("");
    const navigate = useNavigate();

    const handleContinue = () => {
        if (!selectedDebt) {
            alert("Please select a debt amount.");
            return;
        }
        navigate('/details', { state: { selectedDebt } });
    }
    
    return (
        <div id="debt-form" className="bg-white py-12 px-8 sm:p-8 rounded-2xl shadow-2xl border border-gray-100 w-full max-w-md">
            <div>
                <div className="text-lg font-semibold text-blue-600 pb-2">Let’s understand your situation.</div>
                <div className="space-y-8">
                    <h3 className="text-xl md:text-3xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
                        About how much total debt are you carrying right now?
                    </h3>
                    <div role="radiogroup" aria-required="false" dir="ltr" className="grid gap-2 space-y-4" tabIndex="0" style={{ outline: "none" }}>
                        <div className="flex items-center space-x-4 p-5 md:p-6 rounded-2xl border-2 transition-all duration-200 min-h-touch shadow-lg border-white/30 hover:border-blue-600/50 hover:bg-white/5" tabIndex="0" style={{ transform: "none" }}>
                            <input type="radio" name="debt" value="10000-20000" id="debt-0" className="h-5 w-5 accent-blue-600" checked={selectedDebt === "10000-20000"} onChange={(e) => setSelectedDebt(e.target.value)}/>
                            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm md:text-xl font-semibold text-gray-800 flex-1 leading-relaxed cursor-pointer" htmlFor="debt-0">
                                $10,000–$20,000
                            </label>
                        </div>
                        <div className="flex items-center space-x-4 p-5 md:p-6 rounded-2xl border-2 transition-all duration-200 min-h-touch shadow-lg border-white/30 hover:border-blue-600/50 hover:bg-white/5" tabIndex="0" style={{ transform: "none" }}>
                            <input type="radio" name="debt" value="20000-50000" id="debt-1" className="h-5 w-5 accent-blue-600" checked={selectedDebt === "20000-50000"} onChange={(e) => setSelectedDebt(e.target.value)}/>
                            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm md:text-xl font-semibold text-gray-800 flex-1 leading-relaxed cursor-pointer" htmlFor="debt-1">
                                $20,000–$50,000
                            </label>
                        </div>
                        <div className="flex items-center space-x-4 p-5 md:p-6 rounded-2xl border-2 transition-all duration-200 min-h-touch shadow-lg border-white/30 hover:border-blue-600/50 hover:bg-white/5" tabIndex="0">
                            <input type="radio" name="debt" value="50000+" id="debt-2" className="h-5 w-5 accent-blue-600" checked={selectedDebt === "50000+"} onChange={(e) => setSelectedDebt(e.target.value)}/>
                            <label className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm md:text-xl font-semibold text-gray-800 flex-1 leading-relaxed cursor-pointer" htmlFor="debt-2">
                                $50,000+
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 pt-8">
                <button onClick={handleContinue} className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 touch-manipulation bg-blue-600 hover:bg-blue-700 text-white hover:shadow-[0_12px_40px_0_hsl(var(--accent)/35%)] hover:from-accent hover:to-accent duration-300 font-bold border-2 border-white/20 px-2 py-2 text-lg flex-1 min-h-touch btn-premium-hover rounded-xl shadow-xl transition-transform hover:scale-[1.01] active:scale-[0.99] group">
                <span className="truncate flex items-center justify-center gap-2">
                    Continue
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-5 w-5 transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                    </svg>
                </span>
                </button>
            </div>
        </div>
    )
}

export default Form;