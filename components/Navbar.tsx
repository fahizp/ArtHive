import { NavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import AuthProviders from "@/components/AuthProviders";
import { getCurrentUser } from "@/lib/session";
import ProfileMenu from "./ProfileMenu";
import Button from "./Button";

const Navbar = async () => {
  const session = await getCurrentUser();
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
        {session?.user ? (
          <>
            <ProfileMenu session={session} />

            <Link href="/create-project">
              <Button bgColor={"bg-nav-button"} title='Share work' />
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>

    </nav>
  );
};

export default Navbar;
