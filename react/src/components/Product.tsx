import React from 'react'

export default function Home() {
  const products = [
    {
      id: 1,
      name: "HG00 1/144 Gundam Nadleeh",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/1-22097060-3845-4a4e-bb75-5852551800ac.jpg?v=1735301355690",
    },
    {
      id: 2,
      name: "HG00 1/144 Gundam Nadleeh",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/1-22097060-3845-4a4e-bb75-5852551800ac.jpg?v=1735301355690",
    },
    {
      id: 3,
      name: "HG00 1/144 Gundam Nadleeh",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/1-22097060-3845-4a4e-bb75-5852551800ac.jpg?v=1735301355690",
    },
    {
      id: 4,
      name: "HG00 1/144 Gundam Nadleeh",
      image:
        "https://bizweb.dktcdn.net/thumb/large/100/382/833/products/1-22097060-3845-4a4e-bb75-5852551800ac.jpg?v=1735301355690",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Danh sách sản phẩm</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-between border border-gray-300 rounded-lg overflow-hidden p-4 shadow-md transition-transform transform hover:-translate-y-1 hover:shadow-lg h-[300px]"
          >
            <div className="w-full h-[70%] flex justify-center items-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-bold text-center my-2">{product.name}</h3>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-gray-800">
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
