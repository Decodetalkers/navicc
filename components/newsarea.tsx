import {
  NewsContent,
  NewsMain,
  Text,
  UnitAll,
  UnitImg,
} from "~/styles/newscomponent.ts";

export function NewsMainArea() {
  return (
    <NewsMain>
      <NewsContent>
        <UnitAll>
          <UnitImg src="static/mv2.jpg" />
          <Text>
            <h1>
              次世代バイク用ナトリウムイオンバッテリーが日本初登場。
              Makuakeにて予約販売開始！
            </h1>
            <h3>
              7月10日
            </h3>
          </Text>
        </UnitAll>
        <UnitAll>
          <UnitImg src="static/mv2.jpg" />
          <Text>
            <h1>
              次世代バイク用ナトリウムイオンバッテリーが日本初登場。
              Makuakeにて予約販売開始！
            </h1>
            <h3>
              7月10日
            </h3>
          </Text>
        </UnitAll>
        <UnitAll>
          <UnitImg src="static/mv2.jpg" />
          <Text>
            <h1>
              次世代バイク用ナトリウムイオンバッテリーが日本初登場。
              Makuakeにて予約販売開始！
            </h1>
            <h3>
              7月10日
            </h3>
          </Text>
        </UnitAll>
      </NewsContent>
    </NewsMain>
  );
}
