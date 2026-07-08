export interface ShopProduct {
  name: string;
  description: string;
  price: string;
}

const HELLOASSO_SHOP_URL =
  "https://www.helloasso.com/associations/les-mousquetaires-foot-us/boutiques/boutique-des-mousquetaires";

/**
 * Transcribed 1:1 from the HelloAsso shop. HelloAsso's shop widget has no
 * per-product URL (it's a single-page multi-item form, not individual
 * product pages) — every card links to the same shop URL, where the exact
 * item can be added to cart.
 */
export const shopProducts: ShopProduct[] = [
  { name: "Pin's Mousquetaires", description: "Pin's avec le logo des Mousquetaires", price: "3€" },
  { name: 'Bandeau "M"', description: "Bandeau", price: "15€" },
  { name: "Bonnet MOUSQUETAIRES", description: "Bonnet des Mousquetaires", price: "25€" },
  {
    name: 'Chaussettes "un pour tous, tous sur un"',
    description: "Personnalisables : numéro",
    price: "18€",
  },
  { name: "Maillot supporter", description: "Nom et numéro personnalisable, de S à XXXL", price: "55€" },
  { name: 'Cagoule Balaclava "M"', description: "Cagoule balaclava", price: "20€" },
  {
    name: "Serviette de match",
    description: "Fixable à la ceinture avec velcro — idéal pour skill player",
    price: "15€",
  },
  { name: "Veste zip technique", description: "Veste zip Mousquetaires Football, taille S/M/L/XL", price: "45€" },
  { name: "Short Perf", description: "Taille du S au XXL", price: "25€" },
  { name: "Pantalon survêtement perf", description: "Pantalon survêtement perf", price: "35€" },
  { name: "Coupe vent doublé Navy", description: "Coupe-vent doublé", price: "45€" },
  { name: "Coupe vent doublé Jaune", description: "Coupe-vent doublé", price: "45€" },
  { name: "T-shirt MSQTRS Jaune", description: "T-shirt Mousquetaires", price: "25€" },
  { name: 'T-shirt "M" Navy', description: "T-shirt Mousquetaires", price: "25€" },
  { name: "Hoodie personnalisé Navy", description: "Personnalisation du numéro", price: "40€" },
  { name: "T-shirt manches longues Navy", description: "T-shirt manches longues", price: "30€" },
  { name: "T-shirt manches longues training", description: "T-shirt manches longues training", price: "30€" },
];

export { HELLOASSO_SHOP_URL };
