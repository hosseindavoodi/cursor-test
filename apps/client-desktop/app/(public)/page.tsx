import Hero from "./_components/hero.section";
import Padding from "../_components/padding";
import ProductSearch from "./_components/product.search";
import Navbar from "../_components/navbar";

function Home() {
  return (
    <div>
      <Navbar varient="glass" />
      <div className="h-[2000px]">
        <Hero title="رزرو پرواز" />
        <Padding>
          <ProductSearch />
        </Padding>
      </div>
    </div>
  );
}

export default Home;
