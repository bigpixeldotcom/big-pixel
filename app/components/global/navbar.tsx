import Image from "next/image";

export default function NavBar() {
  return (
    <div className="mt-9 sticky">
      <nav className="min-w-5xl mx-auto p-4 bg-white/70 rounded-2xl outline-1 outline-offset-1 outline-white backdrop-blur-sm inline-flex justify-between items-center overflow-hidden">
        <div className="size-11 relative">
          <Image
            className="size-10 top-0 absolute"
            src="/brand/nav-icon.png"
            width={40}
            height={40}
            alt="Big Pixel"
          />
        </div>
      </nav>
    </div>
  )
}
