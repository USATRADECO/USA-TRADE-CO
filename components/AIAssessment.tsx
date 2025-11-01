
import React, { useState } from 'react';

type AssessmentStatus = 'idle' | 'loading' | 'success' | 'error';

const Spinner: React.FC = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);


const AIAssessment: React.FC = () => {
    const [status, setStatus] = useState<AssessmentStatus>('idle');
    const [result, setResult] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setResult('');

        setTimeout(() => {
            setResult('Based on the information provided, you appear to be a strong candidate. We recommend a full consultation to discuss the specifics of your case and confirm your eligibility. Please contact us to schedule an appointment.');
            setStatus('success');
        }, 2000);
    };

    return (
        <section id="assessment" className="py-16 bg-brand-blue text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">AI-Powered E-1/E-2 Visa Eligibility Assessment</h2>
                    <p className="text-lg text-gray-300 mt-2 max-w-2xl mx-auto">Answer a few questions for a preliminary assessment from our AI assistant.</p>
                </div>

                <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-lg shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-200 mb-2">Country of Citizenship</label>
                                <select id="country" className="w-full bg-white/20 text-white rounded-md border-0 p-3 focus:ring-2 focus:ring-brand-gold">
                                    <option>Select a country</option>
                                    <option>Canada</option>
                                    <option>United Kingdom</option>
                                    <option>Germany</option>
                                    <option>Japan</option>
                                    <option>Other Treaty Country</option>
                                </select>
                            </div>
                             <div>
                                <label htmlFor="investment" className="block text-sm font-medium text-gray-200 mb-2">Investment Amount (USD)</label>
                                <select id="investment" className="w-full bg-white/20 text-white rounded-md border-0 p-3 focus:ring-2 focus:ring-brand-gold">
                                    <option>Select an amount</option>
                                    <option>$50,000 - $100,000</option>
                                    <option>$100,001 - $250,000</option>
                                    <option>$250,001 - $500,000</option>
                                    <option>$500,001+</option>
                                </select>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" disabled={status === 'loading'} className="bg-brand-gold text-brand-blue font-bold px-8 py-3 rounded-md text-lg hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center w-full md:w-auto mx-auto disabled:bg-yellow-700">
                                {status === 'loading' ? <Spinner /> : null}
                                {status === 'loading' ? 'Assessing...' : 'Check Eligibility'}
                            </button>
                        </div>
                    </form>
                    {status === 'success' && (
                        <div className="mt-8 p-4 bg-green-500/20 text-green-200 rounded-md border border-green-500">
                            <h4 className="font-bold mb-2">Preliminary Result:</h4>
                            <p>{result}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AIAssessment;
