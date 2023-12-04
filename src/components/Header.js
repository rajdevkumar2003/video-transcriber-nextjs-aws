import Link from "next/link";
import SparklesIcon from "./SparklesIcon";


export default function Header(){
    return (
        <header className="flex justify-between mb-8">
        <div className="flex">
          <SparklesIcon/>

          <Link href="/" className="text-xl font-semibold">
            Epic<span className="text-white">Captions</span>
          </Link>
        </div>

        <nav className="flex gap-6 font-medium">
          <Link href="/">Home</Link>
          <Link href="/pricing">Pricing</Link>
        </nav>
      </header>
    )
}