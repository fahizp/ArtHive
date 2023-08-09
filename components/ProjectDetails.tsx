"use client";
import { downloadImage } from "@/lib/actions";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

type Props = {
  description: string
  projectId: string
  image: string
  liveSiteUrl: string
}

const ProjectDetails = ({description, projectId, image, liveSiteUrl}: Props) => {
  return (
    <section className="flexCenter flex-col mt-20">
        <p className="max-w-5xl text-xl font-normal">
          {description}
        </p>

        <div className="flex flex-wrap mt-5 gap-5">
            <Button bgColor={"bg-download"} handleClick={() => downloadImage(projectId,image)} title="Download" />
          <Image src="/dot.svg" width={4} height={4} alt="dot" />
          <Link
            href={liveSiteUrl}
            target="_blank"
            rel="noreferrer"
            className="flexCenter gap-2 tex-sm font-medium text-primary-purple"
          >
            <Button bgColor={"bg-nav-button"} title="Social URL" />
          </Link>
        </div>
      </section>
  )
}

export default ProjectDetails