import bannerStack from '../../assets/banner-stack.png'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8 lg:py-24">
        <div className="w-full max-w-2xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-gray-900">Build Your Ideal</span>
            <span className="block text-gradient-brand">
              Development Stack
            </span>
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:justify-start">
            <a
              href="#"
              className="flex-1 rounded-lg bg-gradient-brand px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:flex-none sm:px-7 sm:py-3.5"
            >
              Explore Technologies
            </a>
            <a
              href="#"
              className="flex-1 rounded-lg border border-gray-200 bg-white px-4 py-3 text-center text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 sm:flex-none sm:px-7 sm:py-3.5"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <img
            src={bannerStack}
            alt="Dev Stack banner illustration"
            className="w-full max-w-sm sm:max-w-md lg:max-w-none"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero