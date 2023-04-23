import Catalogue from "@/components/Catalogue";
import Header from "@/components/Header";
import { client } from "@/prismic/client";
import { CatalogueDocument } from "@/types/prismic-types";

type Props = {
  data: CatalogueDocument[];
};

export default function Home({ data }: Props) {
  return (
    <main className="min-h-screen px-10 py-16 lg:p-24">
      <Header title="Emma Heiðarsdóttir" subtitle="Works available" />
      <Catalogue items={data} />
    </main>
  );
}

export async function getStaticProps() {
  const data = await client.getAllByType<CatalogueDocument>("catalogue");

  return {
    props: {
      data,
    },
  };
}
