import { Award, Target, History, Users, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-blue-900 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About GetZ Pharma</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            A legacy of excellence, driven by innovation and a commitment to improving global healthcare outcomes.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=1000&auto=format&fit=crop" 
                alt="Scientists in lab" 
                className="rounded-2xl shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To discover, develop, and deliver innovative medicines that help patients prevail over serious diseases. We are committed to providing high-quality, affordable healthcare solutions to communities worldwide.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To be the world's leading biopharmaceutical company that transforms patients' lives through science, setting the standard for quality, safety, and value in the healthcare industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide our decisions, actions, and interactions every single day.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Integrity", desc: "We demonstrate the highest ethical standards in all our actions." },
              { title: "Innovation", desc: "We continuously seek new and better ways to serve our patients." },
              { title: "Quality", desc: "We are dedicated to excellence in everything we do." },
              { title: "Accountability", desc: "We take responsibility for our performance in all our decisions." },
              { title: "Collaboration", desc: "We work together to achieve our common goals." },
              { title: "Patient Focus", desc: "We put the needs of patients first in all our endeavors." }
            ].map((value, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Guided by experienced professionals dedicated to advancing healthcare.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: "Dr. Sarah Jenkins", role: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=400&auto=format&fit=crop" },
              { name: "Michael Chen", role: "Chief Financial Officer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
              { name: "Dr. Robert Taylor", role: "Head of R&D", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400&auto=format&fit=crop" },
              { name: "Elena Rodriguez", role: "VP of Global Operations", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" }
            ].map((leader, i) => (
              <div key={i} className="text-center">
                <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{leader.name}</h3>
                <p className="text-blue-600 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
