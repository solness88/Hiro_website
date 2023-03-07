import Head from "next/head";
import Link from "next/link";

function Layout() {
  return (
    <>
      <header className="flex justify-between fixed">
        <img src="/images/HIRO_Banner.png" className="w-1/3 h-1/3" />
        <ul className="flex items-center">
          <li><Link href="/" className="font-thin mx-5">TOP</Link></li>
          <li><Link href="/" className="font-thin mx-5">BLOGS</Link></li>
          <li><Link href="/" className="font-thin mx-5">WORKS</Link></li>
          <li><Link href="/" className="font-thin mx-5">CONACT</Link></li>
        </ul>
      </header>
    </>
  )
}
export default Layout;
