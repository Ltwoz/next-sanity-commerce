import Hero from "./_components/hero";
import { NewestProduct } from "./_components/newest-product";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lb:pb-12">
      <Hero />
      <NewestProduct />
    </div>
  );
}
