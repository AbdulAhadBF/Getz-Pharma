import { Microscope, Dna, FileText, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Research() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="relative bg-blue-900 py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop"
            alt="Research Laboratory"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Research & Innovation</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Pushing the boundaries of science to discover tomorrow's cures.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Focus Areas</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We concentrate our research efforts where we believe we can make the most significant impact on patient lives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Microscope className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Targeted Therapies</h3>
              <p className="text-gray-600 mb-4">
                Developing precision medicines that target the specific genetic drivers of diseases, minimizing side effects and maximizing efficacy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Dna className="w-12 h-12 text-green-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Biologics</h3>
              <p className="text-gray-600 mb-4">
                Harnessing the power of living systems to create complex, highly effective treatments for autoimmune disorders and oncology.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <FileText className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Novel Delivery Systems</h3>
              <p className="text-gray-600 mb-4">
                Innovating how medicines are delivered to the body to improve absorption, patient compliance, and therapeutic outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Trials CTA */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-900 rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-white mb-4">Clinical Trials</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Clinical trials are essential to developing new treatments. Learn about our ongoing studies and how you or your patients might participate.
              </p>
              <div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Find a Trial <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1000&auto=format&fit=crop" 
                alt="Clinical Trial" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
