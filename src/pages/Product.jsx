import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";

export default function Products() {


    const { data, isLoading, error, isFetched} = useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    });


    if(isLoading) return    <p>loading..</p>
  return (
    <div>
      <h1>Products</h1>

      <div>
        {data.map(p => (
            <p key={p.id}>{p.title}</p>
        ))}
      </div>
    </div>
  );
}