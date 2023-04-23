import { CatalogueDocument } from "@/types/prismic-types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  items: CatalogueDocument[];
};

export default function Catalogue({ items }: Props) {
  return (
    <section className="py-24 lg:p-24">
      <div className="flex flex-wrap gap-24 lg:gap-36 justify-between">
        {items.map((item) => (
          <Link
            href={`/${item.uid}`}
            className="text-left lg:h-[65vh] grid"
            key={item.uid}
          >
            <Image
              className="h-full w-full object-contain"
              height={500}
              width={500}
              src={item.data.images[0]?.image.url ?? ""}
              alt={item.data.images[0]?.image.alt ?? ""}
            />
            <div className="pt-3 flex justify-between">
              <p>
                <span className="italic">{item.data.title}</span>
                {`, ${item.data.year}`}
              </p>
              <p>{item.data.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
