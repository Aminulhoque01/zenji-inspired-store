export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "BLUE FLAME TEE",
    category: "TEES",
    price: 34.99,
    oldPrice: 39.99,
    badge: "SALE",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: "2",
    name: "BUSHIDO TEE",
    category: "TEES",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: "3",
    name: "DEMON BLOOD TEE",
    category: "TEES",
    price: 34.99,
    oldPrice: 39.99,
    badge: "SALE",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: "4",
    name: "DOMAIN EXPANSION",
    category: "TEES",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: "5",
    name: "WARRIOR SPIRIT",
    category: "TEES",
    price: 36.99,
    oldPrice: 42.99,
    badge: "LIMITED",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: "6",
    name: "NIGHT SHADOW HOODIE",
    category: "HOODIES",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: "7",
    name: "ORIGIN CAP",
    category: "ACCESSORIES",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=85",
  },

  {
    id: "8",
    name: "TOKYO AFTER DARK",
    category: "OUTERWEAR",
    price: 89.99,
    badge: "NEW",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",
  },
];