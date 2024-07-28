import PageNotFound from "@/components/ui/not-found/PageNotFound";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductNotFound() {





  return (
    <PageNotFound title="Product" href={"/category/men"} />
  );
}