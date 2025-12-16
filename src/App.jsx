import React from "react"
import Layout from "./components/Layout"
import Profile from "./components/Profile"
import LinkCard from "./components/LinkCard"
import { links } from "./data/links"

const App = () => {
  return (
    <Layout>
      <Profile />
      
      <div className="flex flex-col mt-8 border-b border-surface2">
        <p className="text-xs font-bold tracking-widest uppercase text-overlay0 mb-4">Directory</p>
        {links.map((link, index) => (
          <LinkCard key={index} link={link} index={index} />
        ))}
      </div>

      <footer className="flex justify-between items-end text-overlay0 text-xs mt-6 md:mt-12 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
        <div>
           <p>&copy; {new Date().getFullYear()}</p>
           <p>Bandung, Indonesia</p>
        </div>
        <div className="text-right">
           <p>Nicholas Alvi Saputra</p>
        </div>
      </footer>
    </Layout>
  )
}

export default App
