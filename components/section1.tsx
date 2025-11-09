import { Background, Empty, Section1Top, Text } from "~/styles/section1.ts";

export function Section1Page() {
  return (
    <Section1Top>
      <Empty />
      <Background src="./static/navic_top.jpg" />
      <Text>
        <p>
          人とのつながりを大切に。<br />
          様々な分野で新たな価値を生み出していく。
        </p>
      </Text>
    </Section1Top>
  );
}
