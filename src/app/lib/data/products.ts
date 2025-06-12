export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  images: string[];
  // tambahkan properti lain sesuai kebutuhan
}

export const products = [
   {
     id: "1",
     name: "T-Shirt",
     price: 150000,
     stock: 12,
     description: "High-quality cotton t-shirt with modern fit.",
     images: [
       "/images/tshirt.jpg",
       "/images/tshirt2.jpg",
       "/images/tshirt2.jpg",
       "/images/tshirt2.jpg",
       "/images/tshirt2.jpg",
       "/images/tshirt2.jpg",
       "/images/tshirt2.jpg",
       "/images/tshirt2.jpg",
       "/images/tshirt2.jpg",
     ],
     details: ["100% cotton", "Made in Indonesia", "Available in all sizes"],
   },
   {
     id: "2",
     name: "Abaya",
     price: 300000,
     stock: 0,
     description: "Elegant and modest abaya with beautiful embroidery.",
     images: [
       "/images/tshirt.jpg",
       "/images/abaya.jpg",
       "/images/tshirt2.jpg",
       "/images/tshirt2.jpg",
       "/images/tshirt2.jpg",
     ],
     details: ["Soft fabric", "Hand-stitched design", "One size fits all"],
   },
   {

