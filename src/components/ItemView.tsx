import { CatalogueDocument } from "@/types/prismic-types";
import Image from "next/image";
import { useState } from "react";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";

type Props = {
  item: CatalogueDocument;
};

export default function ItemView({ item }: Props) {
  const [imageIndex, setImageIndex] = useState(0);

  const image = item.data.images[imageIndex].image;

  return (
    <section className="lg:h-screen py-24">
      <Close />
      <div className="grid lg:grid-cols-5 h-full px-10 lg:px-0 relative place-content-center">
        <div className="relative grid lg:block col-span-3 w-full h-full max-h-[50vh] mb-10 lg:mb-0">
          <Image
            className="object-contain h-full w-full max-h-96 lg:max-h-max"
            height={1000}
            width={1000}
            src={image.url ?? ""}
            alt={image.alt ?? ""}
          />
          <p className="text-center lg:py-5">
            {item.data.images[imageIndex].caption}
          </p>
        </div>

        <div className="flex flex-col gap-7 relative">
          <div>
            <h1 className="font-bold">{item.data.title}</h1>
            <p>{item.data.year}</p>
          </div>

          <div>
            <PrismicRichText field={item.data.specs} />
          </div>

          <div>
            <PrismicRichText field={item.data.description} />
          </div>

          {item.data.more_details && (
            <div>
              <PrismicRichText field={item.data.more_details} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Close() {
  return (
    <Link className="absolute top-12 right-12 h-7 w-7 z-10" href="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
      </svg>
    </Link>
  );
}
