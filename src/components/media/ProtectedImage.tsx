"use client";

import Image, { type ImageProps } from "next/image";
import styles from "./ProtectedImage.module.css";

type ProtectedImageProps = Omit<
  ImageProps,
  "draggable" | "onContextMenu" | "onDragStart"
>;

export function ProtectedImage({
  alt,
  className,
  ...props
}: ProtectedImageProps) {
  const protectedClassName = [styles.image, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Image
      {...props}
      alt={alt}
      className={protectedClassName}
      draggable={false}
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
    />
  );
}
