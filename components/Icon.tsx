// src/components/Icon.tsx
import { Icons } from "../src/icons/index";

type IconProps = {
  name: keyof typeof Icons; // Icons 객체 key만 허용
  className?: string; // Tailwind 등 스타일 적용
};

export default function Icon({ name, className }: IconProps) {
  const Component = Icons[name];
  if (!Component) return null; // 혹시 없는 아이콘이면 아무것도 렌더링 X
  return <Component className={className} />;
}
