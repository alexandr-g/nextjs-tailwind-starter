export default () => (
  <section className="m-0 flex flex-col w-screen justify-center bg-gray-800 h-screen text-gray-100 ">
    <nav>
      <ul className="flex justify-between text-xl py-8 px-8 md:px-48 ">
        <li>NextJS + TailwindCSS</li>
        <a
          className="text-teal-500 hover:text-purple-800"
          href="https://grischuk.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Alexander Grischuk
        </a>
      </ul>
    </nav>

    <h1 className="text-6xl my-auto mx-auo md:mx-48">
      NextJS <br />
      <span className="text-teal-400">+ Tailwind CSS Example</span>
    </h1>
  </section>
)
