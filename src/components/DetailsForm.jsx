import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useState } from "react";


function DetailsForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const handleSubmit = async () => {
        if(!document.getElementById("firstName").value || !document.getElementById("lastName").value || !document.getElementById("phone").value || !document.getElementById("email").value || !document.getElementById("province").value || !document.getElementById("bestTime").value) {
            alert("Please fill in all the required fields.");
            return;
        }
        setLoading(true);
        setError("");
        try{
            const {data, error} = await supabase.functions.invoke("submit-lead", {
                body: {
                    debt: document.getElementById("debt").value,
                    first_name: document.getElementById("firstName").value,
                    last_name: document.getElementById("lastName").value,
                    phone: document.getElementById("phone").value,
                    email: document.getElementById("email").value,
                    province: document.getElementById("province").value,
                    best_time: document.getElementById("bestTime").value
                },
            });
            if (error) { 
                throw error; 
            }

            if (data?.error) {
            throw new Error(data.error);
            }

            navigate("/thank-you");
        } catch (error) {
            setError(error.message || "An unexpected error occurred. Please try again later.");
        } finally {
            setLoading(false);
        }
    }
    return(
        <div className="container mx-auto px-6 max-w-2xl">
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-100/50 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-100/50 blur-3xl rounded-full"></div>
            <div className="relative pt-20">
                <div className="text-card-foreground p-6 md:p-6 lg:p-12 bg-white/50 backdrop-blur-xl border border-white/20 rounded-2xl w-full max-w-2xl mx-auto font-satoshi shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
                <div className="absolute bottom-0 left-0 w-full h-[8px] bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 rounded-b-2xl shadow-[0_4px_10px_rgba(79,70,229,0.3)]"></div>
                <div className="mb-6 md:mb-6 lg:mb-8">
                    
                    <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" className="relative w-full overflow-hidden border border-accent/20 h-2 rounded-full bg-gray-200 [&amp;&gt;div]:bg-gradient-to-r [&amp;&gt;div]:from-blue-600 [&amp;&gt;div]:via-indigo-500 [&amp;&gt;div]:to-purple-500 [&amp;&gt;div]:shadow-lg [&amp;&gt;div]:shadow-indigo-400/30">
                    <div data-state="indeterminate" data-max="100" className="h-full w-full flex-1 bg-gradient-to-r from-accent to-accent-soft transition-all duration-500 ease-out shadow-sm" style={{ transform: "translateX(-83.3333%)" }}></div>
                </div>
            </div>
            <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground leading-tight">Let's Get You Connected</h3>
                <p className="text-muted-foreground">Enter your details so our team can follow up about your assessment.</p>
                <div className="space-y-2">
                    <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-foreground" for="debt">Current Debt</label>
                    <input type="text" className="flex w-full bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 rounded-xl border-2 text-body border-input" id="debt" autocomplete="email" placeholder="Enter your current debt" defaultValue=""/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    
                    <div className="space-y-2">
                        <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-foreground" for="firstName">First Name</label>
                        <input className="flex w-full bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 rounded-xl border-2 text-body border-input" id="firstName" placeholder="First Name" defaultValue=""/>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-foreground" for="lastName">Last Name</label>
                        <input className="flex w-full bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 rounded-xl border-2 text-body border-input" id="lastName" placeholder="Last Name" defaultValue=""/>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-foreground" for="phone">Phone Number</label>
                    <div className="relative">
                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground-muted font-medium">+1</div>
                        <input type="tel" className="flex w-full bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 rounded-xl border-2 text-body pl-12 border-input" id="phone" inputmode="tel" autocomplete="tel" placeholder="(___) ___-____" maxlength="14" defaultValue=""/>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-foreground" for="email">Email</label>
                    <input type="email" className="flex w-full bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm h-12 rounded-xl border-2 text-body border-input" id="email" autocomplete="email" placeholder="email@example.com" defaultValue=""/>
                </div>
                <div className="space-y-2">
                    <label className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-medium text-foreground" for="province">Province</label>
                    <select id="province" name="province" defaultValue="" required className="flex w-full h-12 rounded-xl border-2 border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                        <option value="" disabled>
                            Select your province or territory
                        </option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Northwest Territories">Northwest Territories</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Nunavut">Nunavut</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Prince Edward Island">Prince Edward Island</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                        <option value="Yukon">Yukon</option>
                    </select>
                    
                    
                </div>
                <div className="space-y-2">
                    <label htmlFor="bestTime" className="text-sm font-medium text-foreground">Best Time to Call</label>
                    <select id="bestTime" name="bestTime" defaultValue="" required className="flex w-full h-12 rounded-xl border-2 border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                        <option value="" disabled>
                            Select your preferred time
                        </option>
                        <option value="Morning">9 AM – 12 PM</option>
                        <option value="Afternoon">12 PM – 4 PM</option>
                        <option value="Evening">4 PM – 7 PM</option>
                    </select>
                </div>
            </div>
            <div className="flex gap-4 pt-8 ">
                <button onClick={handleSubmit} disabled={loading} className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 touch-manipulation bg-blue-600 hover:bg-blue-700 text-white shadow-[0_8px_30px_0_hsl(var(--accent)/25%)] hover:shadow-[0_12px_40px_0_hsl(var(--accent)/35%)] hover:from-accent hover:to-accent transition-all duration-300 font-bold border-2 border-white/20 px-2 py-2 text-lg rounded-full flex-1 min-h-touch btn-premium-hover">
                    <span className="truncate">
                        {loading ? "Submitting..." : "Submit"}
                    </span>
                </button>
                {error && (<p className="mt-3 text-sm text-red-600" role="alert">{error}</p>)}
            </div>
        </div>
        </div></div>
    )
}
export default DetailsForm;