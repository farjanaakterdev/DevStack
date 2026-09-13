import bannerStack from '../../assets/banner-stack.png'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:justify-between lg:gap-16 lg:px-8 lg:py-24">
        <div className="max-w-2xl text-left">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block text-gray-900">Build Your Ideal</span>
            <span className="block text-gradient-brand">
              Development Stack
            </span>
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="w-full rounded-lg bg-gradient-brand px-7 py-3.5 text-center text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
            >
              Explore Technologies
            </a>
            <a
              href="#"
              className="w-full rounded-lg border border-gray-200 bg-white px-7 py-3.5 text-center text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <img
            src={bannerStack}
            alt="Dev Stack banner illustration"
            className="w-full max-w-md lg:max-w-none"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero