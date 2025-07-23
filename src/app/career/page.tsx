import Image from "next/image";

export default function CareerPage() {
  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto px-4 pt-12 text-center gap-8 items-center mb-3">
        <h1 className="text-4xl font-extrabold mb-4 text-blue-700 text-center">Build the Future With Us</h1>
        <p className="mb-6 max-w-3xl text-lg mx-auto">
          We're a team of innovators, engineers, designers, and strategists who believe in building technology that makes a real impact. If you're passionate about solving problems, using AI, and creating meaningful digital products — we’d love to meet you.
        </p>
      </div>
      <section className="container mx-auto px-4 pb-16 grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4 mt-8">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🔍</div>
              <div className="font-bold mb-1">Purpose-Driven Projects</div>
              <div>Work on solutions that empower governments, schools, and businesses across Indonesia.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🧠</div>
              <div className="font-bold mb-1">Innovative Culture</div>
              <div>Collaborate with forward-thinking professionals in AI, software, and system integration.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">📈</div>
              <div className="font-bold mb-1">Room to Grow</div>
              <div>We invest in your learning and development through mentorship, courses, and hands-on experience.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-3xl mb-2">🌍</div>
              <div className="font-bold mb-1">Flexible & Inclusive</div>
              <div>Hybrid work opportunities, inclusive culture, and a focus on results — not hours.</div>
            </div>
          </div>
          <div className="text-center lg:text-left mt-8">
            <a href="mailto:hi@ioi.co.id">
              {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Apply Now</button> */}
              <button className="bg-gray-900 text-white px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors h-[40px] text-[14px]">
              Apply Now
              </button>
            </a>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src="/palette.png" alt="Career" width={800} height={600} className="rounded-3xl w-full h-auto" />
        </div>
      </section>
    </div>
  );
}
