import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { WarningIcon } from './icons/WarningIcon';
import { SuccessIcon } from './icons/SuccessIcon';
import { DownloadIcon } from './icons/DownloadIcon';

type Tab = 'e1' | 'e2';

const FAQItem: React.FC<{ question: string; children: React.ReactNode; isOpen: boolean; onClick: () => void }> = ({ question, children, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-brand-blue focus:outline-none"
            >
                <span>{question}</span>
                <ChevronDownIcon className={`w-5 h-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                <div className="text-gray-600 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    );
};

const VisaDeepDive: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('e1');
    const [openFAQ, setOpenFAQ] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    const handleDownload = (visaType: 'E-1' | 'E-2') => {
        // In a real application, this would point to the actual PDF file.
        // For this demonstration, we'll just show an alert.
        alert(`Simulating download for the ${visaType} Visa Guide PDF.`);
        console.log(`Downloading ${visaType} PDF guide...`);
    };

    const e1Content = (
        <div>
            <h4 className="text-2xl font-bold text-brand-blue mb-4">E-1 Treaty Trader Visa: At a Glance</h4>
            <p className="text-gray-600 mb-6">The E-1 visa is designed for individuals or employees of companies from a treaty country who engage in a substantial volume of international trade with the United States. This trade must be continuous and principally between the U.S. and the treaty country.</p>
            
            <h5 className="font-bold text-brand-blue mb-3">Key Requirements:</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>The individual or employing firm must hold citizenship of a treaty country.</li>
                <li>The international trade must be "substantial" in volume. There is no minimum monetary value, but a continuous flow of numerous transactions is expected.</li>
                <li>The trade must be principally between the U.S. and the treaty country (over 50% of total international trade).</li>
                <li>The applicant must be an executive, supervisor, or have essential skills vital to the company's U.S. operations.</li>
            </ul>

            <div className="my-8">
                 <button 
                    onClick={() => handleDownload('E-1')}
                    className="inline-flex items-center bg-brand-teal text-white font-bold px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-md transform hover:scale-105"
                >
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Download E-1 Visa Guide (PDF)
                </button>
            </div>

            <h4 className="text-2xl font-bold text-brand-blue mb-2">Frequently Asked Questions</h4>
            <FAQItem question="What qualifies as 'substantial trade'?" isOpen={openFAQ === 'e1-1'} onClick={() => toggleFAQ('e1-1')}>
                <p>'Substantial trade' refers to the volume of trade, not its monetary value. It involves a continuous flow of sizable international trade items over time. Proof typically includes invoices, bills of lading, and purchase orders showing numerous transactions.</p>
            </FAQItem>
            <FAQItem question="Can my family members come with me on an E-1 visa?" isOpen={openFAQ === 'e1-2'} onClick={() => toggleFAQ('e1-2')}>
                <p>Yes, your spouse and unmarried children under 21 years of age are eligible for dependent E-1 visas. Your spouse may also apply for work authorization in the United States.</p>
            </FAQItem>
        </div>
    );

    const e2Content = (
        <div>
            <h4 className="text-2xl font-bold text-brand-blue mb-4">E-2 Treaty Investor Visa: At a Glance</h4>
            <p className="text-gray-600 mb-6">The E-2 visa is available to investors from treaty countries who have invested, or are in the process of investing, a substantial amount of capital in a U.S. enterprise. The investor must be coming to the U.S. to develop and direct the investment enterprise.</p>
            
            <h5 className="font-bold text-brand-blue mb-3">Key Requirements:</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>The investor must be a national of a country with which the U.S. maintains a treaty of commerce.</li>
                <li>The investment must be "substantial" and placed at risk in a commercial sense. The funds must be irrevocably committed.</li>
                <li>The investment must be in a real, operating commercial enterprise.</li>
                <li>The investment cannot be "marginal," meaning it must have the capacity to generate more than enough income to provide a minimal living for the investor and their family.</li>
                <li>The investor must have control of the funds and be coming to the U.S. to develop and direct the enterprise.</li>
            </ul>

            <div className="my-8">
                <button 
                    onClick={() => handleDownload('E-2')}
                    className="inline-flex items-center bg-brand-teal text-white font-bold px-6 py-3 rounded-md hover:bg-opacity-90 transition-all duration-300 shadow-md transform hover:scale-105"
                >
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Download E-2 Visa Guide (PDF)
                </button>
            </div>

            <h4 className="text-2xl font-bold text-brand-blue mb-2">Frequently Asked Questions</h4>
            <FAQItem question="What is considered a 'substantial amount of capital'?" isOpen={openFAQ === 'e2-1'} onClick={() => toggleFAQ('e2-1')}>
                <p>There is no set dollar amount. A 'substantial' investment is determined by a proportionality test. It must be substantial in relation to the total cost of either purchasing an existing business or establishing a new one. A lower cost enterprise will require a higher percentage of investment, while a very expensive enterprise may be financed with a smaller percentage.</p>
            </FAQItem>
            <FAQItem question="Does a home purchase count as an E-2 investment?" isOpen={openFAQ === 'e2-2'} onClick={() => toggleFAQ('e2-2')}>
                <p>No, passive investments like purchasing a home or undeveloped land do not qualify. The investment must be in an active, for-profit commercial enterprise that requires day-to-day management and oversight.</p>
            </FAQItem>
        </div>
    );

    const activeTabClasses = "bg-brand-blue text-white";
    const inactiveTabClasses = "bg-gray-200 text-gray-600 hover:bg-gray-300";

    return (
        <section id="deep-dive" className="py-16 bg-light-gray">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">E-1 & E-2 Visa Deep Dive</h2>
                    <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">Detailed insights to help you prepare your application.</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-center mb-8 rounded-lg p-1 bg-gray-200">
                        <button
                            onClick={() => setActiveTab('e1')}
                            className={`w-1/2 py-3 px-4 font-bold rounded-md transition-colors duration-300 ${activeTab === 'e1' ? activeTabClasses : inactiveTabClasses}`}
                        >
                            E-1 Treaty Trader
                        </button>
                        <button
                            onClick={() => setActiveTab('e2')}
                            className={`w-1/2 py-3 px-4 font-bold rounded-md transition-colors duration-300 ${activeTab === 'e2' ? activeTabClasses : inactiveTabClasses}`}
                        >
                            E-2 Treaty Investor
                        </button>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-xl">
                        {activeTab === 'e1' ? e1Content : e2Content}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-5xl mx-auto">
                    <div className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-red-500">
                        <h3 className="text-2xl font-bold text-brand-blue mb-4 flex items-center">
                            <WarningIcon className="w-7 h-7 mr-3 text-red-500" />
                            Common Pitfalls to Avoid
                        </h3>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start"><span className="font-bold mr-2 text-red-500">&ndash;</span> Incomplete or poorly organized documentation.</li>
                            <li className="flex items-start"><span className="font-bold mr-2 text-red-500">&ndash;</span> A business plan that is vague or lacks financial projections.</li>
                            <li className="flex items-start"><span className="font-bold mr-2 text-red-500">&ndash;</span> Failure to clearly demonstrate the source of investment funds.</li>
                            <li className="flex items-start"><span className="font-bold mr-2 text-red-500">&ndash;</span> For E-2, investing in a business deemed "marginal."</li>
                            <li className="flex items-start"><span className="font-bold mr-2 text-red-500">&ndash;</span> For E-1, not meeting the 50%+ trade requirement with the treaty country.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-green-500">
                        <h3 className="text-2xl font-bold text-brand-blue mb-4 flex items-center">
                            <SuccessIcon className="w-7 h-7 mr-3 text-green-500" />
                            Key Success Factors
                        </h3>
                         <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start"><span className="font-bold mr-2 text-green-500">&ndash;</span> A comprehensive, 5-year business plan with detailed projections.</li>
                            <li className="flex items-start"><span className="font-bold mr-2 text-green-500">&ndash;</span> Meticulous documentation of all transactions and fund sources.</li>
                            <li className="flex items-start"><span className="font-bold mr-2 text-green-500">&ndash;</span> Demonstrating clear management control and expertise.</li>
                            <li className="flex items-start"><span className="font-bold mr-2 text-green-500">&ndash;</span> Proactively showing the business's potential for U.S. job creation.</li>
                            <li className="flex items-start"><span className="font-bold mr-2 text-green-500">&ndash;</span> Engaging experienced legal and business consultants early.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisaDeepDive;