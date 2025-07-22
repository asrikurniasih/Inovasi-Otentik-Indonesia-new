export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Pilih paket terbaik untuk Anda
        </h2>
        <p className="mb-8 font-normal text-gray-500">
          Anda mendapatkan Update Gratis Tanpa Batas dan Dukungan Premium di setiap paket.
        </p>
      </div>
      <div className="mt-12">
        <div className="container mx-auto md:flex justify-center gap-10">
          <div className="border border-gray-200 w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0 bg-white rounded-lg">
            <div className="pt-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 capitalize mb-2">
                Open Source
              </h3>
              <div className="text-3xl font-bold text-gray-900 flex gap-1 justify-center">
                Gratis
              </div>
            </div>
            <div className="text-center p-6">
              <ul className="flex flex-col mb-8 px-5">
                <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                  <span className="text-sm font-normal">Dokumentasi</span>
                </li>
                <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                  <span className="text-sm font-normal">20 Komponen</span>
                </li>
                <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                  <span className="text-sm font-normal">10 Blok</span>
                </li>
                <li className="flex items-center justify-center gap-3 border-b py-4 text-gray-700">
                  <span className="text-sm font-normal">3 Halaman Contoh</span>
                </li>
              </ul>
              <a href="#" target="_blank">
                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">
                  Download
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-900 text-white w-full md:w-1/2 lg:w-1/4 rounded-lg">
            <div className="pt-6 text-center">
              <h3 className="text-xl font-bold capitalize mb-2">
                Versi Pro
              </h3>
              <div className="text-3xl font-bold flex gap-1 justify-center">
                $99
              </div>
            </div>
            <div className="text-center p-6">
              <ul className="flex flex-col mb-8 px-5">
                <li className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                  <span className="text-sm font-normal">Dokumentasi</span>
                </li>
                <li className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                  <span className="text-sm font-normal">140+ Komponen</span>
                </li>
                <li className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                  <span className="text-sm font-normal">30+ Blok</span>
                </li>
                <li className="flex items-center justify-center gap-3 border-b py-4 text-white border-white/30">
                  <span className="text-sm font-normal">10+ Halaman Contoh</span>
                </li>
              </ul>
              <a href="#">
                <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100">
                  Dapatkan Akses
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 