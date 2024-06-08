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
      name: "Personal Portfolio",
      link: "https://new-kangnikol.vercel.app/",
    },
  ]

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="p-4 rounded-md bg-surface0 flex flex-row gap-4 text-text w-2/5 drop-shadow-lg">
        <div className="flex flex-col items-center gap-4 pr-4 border-r border-text w-1/2">
          <img
            src="https://media.discordapp.net/attachments/917983285370572821/1243588288871272621/photo_portfolio.webp?ex=66652318&is=6663d198&hm=d4629a15475ac69e075759e58f818287ad1a4525986c64bcf5df806d1a720a24&=&format=webp&width=597&height=661"
            alt="Nicholas's Photo"
            className="w-24"
          />
          <h1 className="border-b border-text font-bold">
            Nicholas Alvi Saputra
          </h1>
          <p className="font-medium">Software Engineer</p>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h1 className="font-bold text-lg">
            Hi! Here are several links for you to check out.
          </h1>
          {listLink.map((i, e) => (
            <a
              href={i.link}
              target="_blank"
              rel="noreferrer"
              key={e}
              className="text-text"
            >
              <div className="items-center transition ease-in-out duration-300 px-4 py-2 rounded-md bg-yellow hover:bg-transparent border-yellow border text-base hover:text-text font-bold flex justify-between">
                {i.name}
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
