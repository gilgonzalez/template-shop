import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

const categories = ["men", "women", "child"]


export default function CategoryPage({ params: { id } }: Props) {
  
  if( !categories.includes(id)) {
    notFound()
  }
  
  return (
    <div>
      <h1>Category Page {id}</h1>
    </div>
  );
}