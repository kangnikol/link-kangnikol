
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"

export const links = [
  {
    name: "Portfolio",
    url: "https://new-kangnikol.vercel.app/",
    icon: faGlobe, // Using a generic globe for portfolio or we can use another
    color: "hover:text-green", 
    highlight: true,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/nicholasalvis/",
    icon: faLinkedin,
    color: "hover:text-blue",
  },
  {
    name: "Github",
    url: "https://github.com/kangnikol",
    icon: faGithub,
    color: "hover:text-mauve", 
  },
]
