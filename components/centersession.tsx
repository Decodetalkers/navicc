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
          <h2>
            車用品<br />
            EC事業
          </h2>
          <img src="static/center0.png" />
        </CircleText>
      </Circle>
      <Circle place={1}>
        <CircleText>
          <h2>
            車用品<br />
            卸販売<br />外注取付
          </h2>
          <img src="static/center1.png" />
        </CircleText>
      </Circle>
      <Circle place={2}>
        <CircleText>
          <h2>
            レンタル
          </h2>
          <img src="static/center2.png" />
        </CircleText>
      </Circle>
      <Circle place={3}>
        <CircleText>
          <h2>
            貿易
          </h2>
          <img src="static/center3.png" />
          <img src="static/center3.1.png" />
        </CircleText>
      </Circle>
      <Circle place={4}>
        <CircleText>
          <h2>
            グループ<br />
            事業
          </h2>
          <img src="static/center4.png" />
        </CircleText>
      </Circle>
      <Circle place={5}>
        <CircleText>
          <h2>
            健康
          </h2>
          <img src="static/center5.png" />
        </CircleText>
      </Circle>
      <Circle place={6}>
        <CircleText>
          <h2>
            豊橋<br />
            リテール
          </h2>
          <img src="static/center6.0.png" style={{ maxHeight: 30 }} />
          <img src="static/center6.1.png" />
          <img src="static/center6.2.png" />
        </CircleText>
      </Circle>
      <Circle place={7}>
        <CircleText>
          <h2>
            自社商品<br />開発
          </h2>
          <img src="static/center7.jpg" />
        </CircleText>
      </Circle>
    </CenterSection>
  );
}
