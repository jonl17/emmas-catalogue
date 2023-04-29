import ItemView from "@/components/ItemView";
import { client } from "@/prismic/client";
import { CatalogueDocument } from "@/types/prismic-types";
import { GetStaticPropsContext } from "next";

type Props = {
  data: CatalogueDocument;
};

export default function Home({ data }: Props) {
  return (
    <main className="min-h-screen">
      <ItemView item={data} />
    </main>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const uid = context.params?.uid;

  const data = await client.getByUID<CatalogueDocument>(
    "catalogue",
    uid as string
  );

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const data = await client.getByType("catalogue");

  return {
    paths: data.results.map((item) => ({
      params: {
        uid: item.uid,
      },
    })),
    fallback: false,
  };
}
