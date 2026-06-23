import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/getProducts";

export default function Products() {


    const { data, isLoading, error, isFetched} = useQuery({
        queryKey: ["products"],
        queryFn: getProducts
    });

    console.log(data);
  return (
    <div>
      <h1>Products</h1>

      <div>
        {data.map(p => (
            <p>{p.title}</p>
        ))}
      </div>
    </div>
  );
}