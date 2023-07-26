import { NavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "@/components/AuthProviders";

const Navbar = () => {
  const session = true;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logono-bg.svg" width={100} height={28} alt="ArtHive" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <li key={link.key}>
              <Link href={link.href}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
      {session ? (
          <>
            <Link href="/create-project">Profile</Link>

            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>

    </nav>
  );
};

export default Navbar;
