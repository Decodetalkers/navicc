import {
  CenterLogo,
  CenterSection,
  CenterSvg,
  Circle,
  CircleText,
} from "~/styles/centersection.ts";

export function CenterArea() {
  return (
    <CenterSection>
      <CenterSvg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="20 20 160 160"
          aria-hidden
          datatype="shape"
          role="presentation"
          aria-label=""
          preserveAspectRatio="xMidYMid meet"
        >
          <g>
            <path d="M43.463 156.537L20 100l23.463-56.537L100 20l56.537 23.463L180 100l-23.463 56.537L100 180l-56.537-23.463z" />
          </g>
        </svg>
      </CenterSvg>
      <CenterLogo>
        <img src="static/navic_logo.png" />
      </CenterLogo>

      <Circle place={0}>
        <CircleText>
          <h1>ss</h1>
          <img src="static/center1.png" />
        </CircleText>
      </Circle>
      <Circle place={1}>
      </Circle>
      <Circle place={2}>
      </Circle>
      <Circle place={3}>
      </Circle>
      <Circle place={4}>
      </Circle>
      <Circle place={5}>
      </Circle>
      <Circle place={6}>
      </Circle>
      <Circle place={7} />
    </CenterSection>
  );
}
