import { SVG } from "./svg.data";
import { SvgItem } from "./SvgItem";

export function Svg() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-10">
        {SVG.map((idItem) => (
          <SvgItem item={idItem} key={idItem.hefr} />
        ))}
      </div>
    </>
  );
}
