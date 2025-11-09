import { PropsWithChildren } from "react";
import {
  EmptyPlaceCSS,
  EnglishTitleCSS,
  InlineLinkCSS,
  JapaneseTitleCSS,
  NewsCSS,
} from "~/styles/common.ts";

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
