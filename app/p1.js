import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Just Apple",
    description: "Crispy baked apple slices with natural sweetness",
    image: "/api/placeholder/400/400",
    category: "Fruit Chips",
    weight: "30g",
    shelfLife: "12 Months",
    processing: "Dehydrated",
    ingredients: "Apples",
    about: `Our Just Apple chips are a delicious, wholesome snack made from 
    handpicked apples, carefully sliced and dehydrated to preserve their 
    natural flavor and nutrients. Each bite delivers a satisfying crunch, 
    perfectly balanced with the fruit’s natural sweetness. Unlike fried snacks, 
    these apple chips are completely oil-free and contain no added sugar, 
    preservatives, or artificial flavors. With a long shelf life of 12 months, 
    they are the perfect guilt-free companion for your daily snacking, travel, 
    or fitness routine. Packed with dietary fiber and essential nutrients, 
    they provide both taste and nourishment in every serving.`
  },
  {
    id: 2,
    name: "Granny Smith (Green Apples)",
    description: "Golden baked banana chips, perfectly crunched",
    image: "/card.jpg",
    category: "Fruit Chips",
    weight: "30g",
    shelfLife: "12 Months",
    processing: "Dehydrated",
    ingredients: "Green Apples",
    about: `Granny Smith chips are tangy, crisp, and refreshing...` // keep short
  },
  {
    id: 3,
    name: "Lime & Chilli",
    description: "A blend of strawberry, blueberry, and raspberry",
    image: "/card.jpg",
    category: "Berry Blends",
    weight: "30g",
    shelfLife: "12 Months",
    processing: "Dehydrated",
    ingredients: "Lime, Chilli",
    about: `Lime & Chilli fruit blend is a zesty twist...`
  }
];

export default function ProductPage({params}) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return <h2 className="text-center mt-10 text-xl font-semibold">Product not found</h2>;
  }

  return (
    <div className="container mx-auto px-6 pt-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Product Image */}
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <span className="font-semibold">Category:</span> {product.category}
            </div>
            <div>
              <span className="font-semibold">Weight:</span> {product.weight}
            </div>
            <div>
              <span className="font-semibold">Shelf Life:</span> {product.shelfLife}
            </div>
            <div>
              <span className="font-semibold">Processing:</span> {product.processing}
            </div>
            <div className="col-span-2">
              <span className="font-semibold">Ingredients:</span> {product.ingredients}
            </div>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md">
            Add to Cart
          </button>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">About this product</h2>
        <p className="text-gray-700 leading-relaxed">{product.about}</p>
      </div>
    </div>
  );
}
