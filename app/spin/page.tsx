import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { Button } from "@/components/ui/button"

export default function Spin() {
  return (
    <>
      <div>Spin The Wheel</div>
      <div className="w-[450px]">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/fn-nodetail.jpg"
            width={1000}
            height={760}
            alt="Image"
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </>
  );
}
