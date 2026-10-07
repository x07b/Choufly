export type Stock = "live" | "confirmed" | "verify";
export type Store = {
  id: number;
  name: string;
  initials: string;
  distance: number;
  price: number;
  stock: Stock;
  freshness: string;
  open: boolean;
};
export type Product = {
  id: string;
  name: string;
  short: string;
  category: string;
  stores: Store[];
};
const stores: Store[] = [
  {
    id: 1,
    name: "MyTek Ennasr",
    initials: "M",
    distance: 1.1,
    price: 69,
    stock: "live",
    freshness: "il y a 4 min",
    open: true,
  },
  {
    id: 2,
    name: "Tech Store Menzah",
    initials: "TS",
    distance: 2.8,
    price: 65,
    stock: "confirmed",
    freshness: "il y a 21 min",
    open: true,
  },
  {
    id: 3,
    name: "Phone House Ariana",
    initials: "PH",
    distance: 1.7,
    price: 62,
    stock: "verify",
    freshness: "il y a 8 h",
    open: false,
  },
];
export const products: Product[] = [
  {
    id: "lenovo",
    name: "Chargeur Lenovo USB-C 65W",
    short: "Chargeur Lenovo 65W",
    category: "Informatique",
    stores,
  },
  {
    id: "airpods",
    name: "AirPods Pro",
    short: "AirPods Pro",
    category: "Accessoires téléphone",
    stores: stores
      .slice(0, 2)
      .map((s, i) => ({ ...s, price: [749, 729][i], distance: [2.2, 4.1][i] })),
  },
  {
    id: "ssd",
    name: "SSD 1TB",
    short: "SSD 1TB",
    category: "Informatique",
    stores: stores.map((s, i) => ({
      ...s,
      price: [219, 199, 189][i],
      distance: [1.4, 3.6, 6.2][i],
    })),
  },
  {
    id: "canon",
    name: "Cartouche Canon 545",
    short: "Cartouche Canon 545",
    category: "Informatique",
    stores: stores.map((s, i) => ({
      ...s,
      price: [59, 55, 49][i],
      distance: [0.8, 2.4, 4.8][i],
    })),
  },
];
