import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

type ProductsResponse = {
  products: Product[];
  total: number;
};

function App() {
  const limit = 30;
  const [data, setData] = useState<Product[]>([]); // Fixed: Changed from Product to Product[]
  const [total, setTotal] = useState<number>(0);
  const [skip, setSkip] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      // Added pagination parameters to the API call
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      );
      const data: ProductsResponse = await response.json();
      setData(data.products);
      setTotal(data.total);
      console.log(data);
    };
    fetchData();
  }, [skip]); // Added skip as dependency to refetch when pagination changes

  return (
    <>
      <div className="flex w-screen flex-wrap gap-2 px-4 py-2 justify-center-safe">
        {data.map((item: Product) => {
          // Fixed: Changed from object to Product
          return <Products key={item.id} {...item} />;
        })}
      </div>

      {/* Optional: Add pagination controls */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={() => setSkip((prev) => Math.max(0, prev - limit))}
          disabled={skip === 0}
        >
          Previous
        </button>
        <span>Page {Math.floor(skip / limit) + 1}</span>
        <button
          onClick={() => setSkip((prev) => prev + limit)}
          disabled={skip + limit >= total}
        >
          Next
        </button>
      </div>
    </>
  );
}

const Products = ({ title, price, thumbnail }: Product) => {
  return (
    <div className="product border border-1 border-b-gray-300 p-2 rounded-md">
      <div className="img w-20">
        <img src={thumbnail} alt={title} />{" "}
        {/* Added alt text for accessibility */}
      </div>
      <div className="title text-xl font-bold truncate w-24">
        <p className="">{title}</p>
      </div>
      <p className="py-2">${price}</p>
    </div>
  );
};

export default App;
