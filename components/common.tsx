import { PropsWithChildren } from "react";
import { EmptyPlaceCSS, InlineLinkCSS } from "~/styles/common.ts";

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
