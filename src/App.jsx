import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
const App = () => {
  const listLink = [
    {
      name: "Github",
      link: "https://github.com/kangnikol",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/nicholasalvis/",
    },
    {
      name: "Portfolio",
      link: "https://new-kangnikol.vercel.app/",
    },
  ]

  return (
    <div className="flex justify-center items-center h-screen w-screen p-4">
      <div className="p-4 rounded-md bg-surface0 flex flex-row gap-4 text-text lg:w-2/5 drop-shadow-lg">
        <div className="flex flex-col items-center gap-4 pr-4 border-r justify-center border-text w-full lg:w-3/4">
          <img src="/myphoto.webp" alt="Nicholas's Photo" className="w-24" />
          <h1 className="border-b border-text font-bold text-sm lg:text-lg">
            Nicholas Alvi Saputra
          </h1>
          <p className="font-medium text-sm lg:text-md">Software Engineer</p>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h1 className="font-bold text-sm lg:text-lg">
            Hi! Here are several links for you to check out.
          </h1>
          {listLink.map((e, i) => (
            <a
              href={e.link}
              target="_blank"
              rel="noreferrer"
              key={i}
              className="text-text"
            >
              <div className="items-center transition ease-in-out duration-300 px-4 py-2 rounded-md bg-yellow hover:bg-transparent border-yellow border text-base hover:text-text text-sm lg:text-md font-bold flex justify-between">
                {e.name}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
