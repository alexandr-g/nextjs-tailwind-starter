const Index = () => (
  <section className="m-0 flex flex-col w-screen justify-center bg-gray-900 h-screen text-gray-100 ">
    <nav>
      <ul className="flex justify-between text-xl py-8 px-8 md:px-48 ">
        <li>NextJS + TailwindCSS</li>
        <a
          className="hover:text-purple-500"
          href="https://grischuk.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Alexander Grischuk
        </a>
      </ul>
    </nav>

    <h1 className="text-6xl my-auto mx-auto mt-40 md:mx-48">
      NextJS <br />
      <span className="text-purple-500 ml-20">
        +
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://tailwindcss.com/"
          className="hover:text-blue-500"
        >
          Tailwind CSS v2
        </a>
      </span>
      <br />
      Example
    </h1>

    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-purple-600">
            Explore Tailwind CSS today.
          </span>
        </h2>
        <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwindcss.com/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwindcss.com/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Index
