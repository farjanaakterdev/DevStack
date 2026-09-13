import bannerStack from '../../assets/banner-stack.png'

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:flex-row lg:justify-between lg:gap-16 lg:px-8 lg:py-24">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Build your next big idea with{' '}
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              Dev Stack
            </span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 sm:text-xl">
            A modern development stack to help you ship fast, stay scalable, and
            write code you love. Explore curated technologies and projects from
            the community.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#"
              className="w-full rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 px-7 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-purple-600/25 transition-opacity hover:opacity-90 sm:w-auto"
            >
              Explore Technologies
            </a>
            <a
              href="#"
              className="w-full rounded-full border-2 border-purple-200 px-7 py-3 text-center text-sm font-semibold text-purple-700 transition-colors hover:border-purple-500 hover:bg-purple-50 sm:w-auto"
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