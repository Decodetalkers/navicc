import {
  GridContainer,
  LinkSection,
  UnitDiv,
  UnitImg,
  UnitImgDiv,
  UnitText,
} from "~/styles/link.ts";

function UnitImage({ src }: { src: string }) {
  return (
    <UnitImgDiv>
      <UnitImg src={src} />
    </UnitImgDiv>
  );
}

export function LinkSectionArea() {
  return (
    <LinkSection>
      <GridContainer>
        <UnitDiv>
          <UnitImage src="static/mv2.jpg" />
          <UnitText>
            <h1>
              レンタル事業
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage src="static/mv2.jpg" />
          <UnitText>
            <h1>
              レンタル事業
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage src="static/mv2.jpg" />
          <UnitText>
            <h1>
              レンタル事業
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage src="static/mv2.jpg" />
          <UnitText>
            <h1>
              レンタル事業
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage src="static/mv2.jpg" />
          <UnitText>
            <h1>
              レンタル事業
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage src="static/mv2.jpg" />
          <UnitText>
            <h1>
              レンタル事業
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage src="static/mv2.jpg" />
          <UnitText>
            <h1>
              レンタル事業
            </h1>
          </UnitText>
        </UnitDiv>
        <UnitDiv>
          <UnitImage src="static/mv2.jpg" />
          <UnitText>
            <h1>
              レンタル事業
            </h1>
          </UnitText>
        </UnitDiv>
      </GridContainer>
    </LinkSection>
  );
}
