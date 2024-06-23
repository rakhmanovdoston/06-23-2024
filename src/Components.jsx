import { useState, useEffect } from "react";

function ComponentApp() {
  const [product, setProduct] = useState([]);

  useEffect(() => {});

  useEffect(() => {
    async function fetchingcomp() {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();
      setProduct(data);
    }

    fetchingcomp();
  });

  return (
    <div>
      <header className="w-full h-[85px] bg-[#D5F8CF]"></header>
      <main>
        <div className="grid grid-cols-3 grid-rows-3 gap-2.5 ml-40 mt-20">
          {product.map((p) => {
            return (
              <div
                key={p.id}
                className="border border-black w-[300px] h-[522px] p-2 flex flex-col gap-3"
              >
                <img src={p.img} alt="" />
                <h1 className="font-bold">{p.name}</h1>
                <p className="">{p.description}</p>
                <b className=" block">{p.price}</b>
                <button className=" border-black w-[225px] h-[60px] rounded-md bg-[#0BA42D] text-white">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default ComponentApp;
