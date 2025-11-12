import { Arrow, Label, MenuList, NormalLabel } from "~/styles/sidebar.ts";

import { useState } from "preact/hooks";

type MenuInner = {
  context: string;
  url: string;
};

const MenuAList: MenuInner[] = [
  {
    context: "車用品 卸販売・外注取付事業",
    url: "https://www.navic.cc/car-installation",
  },
  {
    context: "車用品 EC事業",
    url: "https://www.navic.cc/car-supplies-onlineshop",
  },
  { context: "自社商品開発事業", url: "https://www.navic.cc/clezeed" },
];

export function SideMenu() {
  return (
    <MenuList>
      <MenuUnit title="事業紹介" menu={MenuAList} />
      <NormalLabel>
        <a href="https://navic-plaza.com/">
          公式ショップ
        </a>
      </NormalLabel>
    </MenuList>
  );
}

function MenuUnit({ title, menu }: { title: string; menu: MenuInner[] }) {
  const [hidden, setHidden] = useState(true);

  const onToggled = () => {
    setHidden(!hidden);
  };

  return (
    <>
      <Arrow onClick={onToggled} ishidden={hidden} />
      <Label onClick={onToggled}>{title}</Label>

      {menu.map(({ context, url }, index) => {
        return (
          <Label key={index} hidden={hidden}>
            <a href={url}>{context}</a>
          </Label>
        );
      })}
    </>
  );
}
