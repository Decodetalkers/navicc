import { PropsWithChildren } from "react";
import {
  EmptyPlaceCSS,
  EnglishTitleCSS,
  fadeCSS,
  InlineLinkCSS,
  JapaneseTitleCSS,
  NewsCSS,
} from "~/styles/common.ts";

import { useEffect, useRef, useState } from "preact/hooks";

export function FadeInSection({ children }: PropsWithChildren) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current!);
    return () => observer.unobserve(domRef.current!);
  }, []);
  return (
    <div
      className={`${fadeCSS["fade-in-section"]} ${
        isVisible ? fadeCSS["is-visible"] : ""
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export type InlineLinkProps = {
  link: string;
  tips: string;
};

export function Empty() {
  return <EmptyPlaceCSS />;
}

export function DescriptionInlineLink(
  { tips, link, children }: PropsWithChildren<InlineLinkProps>,
) {
  return (
    <InlineLinkCSS>
      <a href={link}>
        {children}
      </a>
      <span class="tooltiptext">{tips}</span>
    </InlineLinkCSS>
  );
}

export type TitleProps = {
  ja: string;
  en: string;
};

export function NewsTitle(
  { ja, en }: TitleProps,
) {
  return (
    <NewsCSS>
      <JapaneseTitleCSS>
        <h2>
          <span>{ja}</span>
        </h2>
      </JapaneseTitleCSS>
      <EnglishTitleCSS>
        <h1>
          <span>{en}</span>
        </h1>
      </EnglishTitleCSS>
    </NewsCSS>
  );
}
