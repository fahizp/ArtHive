import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constant";

type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => (
  <div className="footer_column">
    <h4 className="font-semibold text-white">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-warp gap-12">
          <FooterColumn
            title={footerLinks[0].title}
            links={footerLinks[0].links}
          />
          <FooterColumn
            title={footerLinks[1].title}
            links={footerLinks[1].links}
          />
          <FooterColumn
            title={footerLinks[2].title}
            links={footerLinks[2].links}
          />
          <FooterColumn
            title={footerLinks[3].title}
            links={footerLinks[3].links}
          />
          <div className="flex items-start flex-col">
            <Image src="/logo-w.svg" width={116} height={38} alt="logo" />
            <p className="text-start text-sm font-normal mt-5 max-w-xs">
              ArtHive is the world&apos;s leading community for creatives to
              share, grow, and get paid.
            </p>
          </div>
        </div>
        <div className="flexBetween footer_copyright">
            <p>@ 2023 ArtHive. All rights reserved</p>
            <p className="text-white">
                <span className=" font-semibold">10,214</span> projects submitted
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
