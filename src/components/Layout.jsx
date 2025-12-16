import React from "react"

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-full bg-base text-text flex flex-col items-center justify-center px-6 font-lora selection:bg-rosewater selection:text-base overflow-hidden">
       <main className="w-full max-w-xl flex flex-col gap-6 md:gap-10">
         {children}
       </main>
    </div>
  )
}

export default Layout
