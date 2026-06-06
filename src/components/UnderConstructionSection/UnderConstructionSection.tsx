import Image from "next/image";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";
import styles from "./UnderConstructionSection.module.scss";

type UnderConstructionSectionImage = {
  src?: `/${string}`;
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

type UnderConstructionSectionProps = {
  eyebrow: string;
  title: string;
  body: ReactNode[];
  image?: UnderConstructionSectionImage;
};

export function UnderConstructionSection({
  eyebrow,
  title,
  body,
  image = {},
}: UnderConstructionSectionProps) {
  const {
    src = "/images/tiger.png",
    alt = "",
    width = 742,
    height = 884,
    priority = false,
  } = image;
  const isDecorativeImage = alt === "";

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h1>{title}</h1>
        {body.map((copy, index) => (
          <p className={styles.copy} key={index}>
            {copy}
          </p>
        ))}
      </div>

      <div
        className={styles.imageFrame}
        aria-hidden={isDecorativeImage ? "true" : undefined}
      >
        <Image
          className={styles.image}
          src={assetPath(src)}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
        />
      </div>
    </section>
  );
}
