"use client";

import type { ComponentProps, MouseEvent } from "react";

type SmoothAnchorProps = Omit<ComponentProps<"a">, "href"> & {
  href: `#${string}`;
};

export default function SmoothAnchor({
  href,
  onClick,
  ...props
}: SmoothAnchorProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const target = document.getElementById(decodeURIComponent(href.slice(1)));
    if (!target) return;

    event.preventDefault();
    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }
    const scrollPadding = Number.parseFloat(
      getComputedStyle(document.documentElement).scrollPaddingTop,
    );
    const top = Math.max(
      0,
      target.getBoundingClientRect().top + window.scrollY - (scrollPadding || 0),
    );
    window.scrollTo({
      top,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  return <a href={href} {...props} onClick={handleClick} />;
}
