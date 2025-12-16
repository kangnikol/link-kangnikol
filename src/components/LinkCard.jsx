import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const LinkCard = ({ link, index }) => {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="group block w-full outline-none"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={`
        relative
        border-t border-surface2
        py-6
        flex items-center justify-between
        transition-all duration-300 ease-out
        hover:pl-4
        animate-fade-in-up
        ${link.highlight ? "text-mauve" : "text-text"}
      `}>
        <div className="flex items-center gap-4">
            <span className={`text-xl md:text-2xl font-serif transition-all duration-300 ${link.highlight ? "italic font-bold tracking-wide" : "group-hover:italic"}`}>
              {link.name} {link.highlight && <span className="text-xs not-italic ml-2 opacity-70 font-sans tracking-widest border border-mauve px-2 py-0.5 rounded-full">NEW</span>}
            </span>
        </div>
        <div className={`text-xl transition-all duration-300 transform ${link.highlight ? "opacity-100 translate-x-0" : "text-overlay1 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"}`}>
             <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </a>
  )
}

export default LinkCard
