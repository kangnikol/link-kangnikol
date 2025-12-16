import React from "react"

const Profile = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-6 animate-fade-in-down py-6 md:py-12">
      <div className="flex flex-col gap-2 relative">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-mauve mb-2">Portfolio</span>
        <h1 className="text-5xl md:text-7xl font-bold text-text tracking-tighter leading-[0.9]">
          Nicholas <br /> 
          <span className="italic font-serif font-light text-overlay2">Alvi Saputra</span>
        </h1>
        <p className="text-lg md:text-xl text-subtext0 font-medium tracking-wide mt-4 md:mt-6 max-w-xs md:max-w-sm leading-relaxed">
          Software Engineer & <br/> Digital Craftsman based in Bandung.
        </p>
      </div>
    </div>
  )
}

export default Profile
