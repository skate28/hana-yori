import { Experience } from "@/components/experience";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { MenuSection } from "@/components/menu-section";
import { OrderLinks } from "@/components/order-links";
import { Parties } from "@/components/parties";
import { Preorder } from "@/components/preorder";
import { Reviews } from "@/components/reviews";
import { SectionDivider } from "@/components/section-divider";
import { Visit } from "@/components/visit";

export default function HomePage() {
  return (
    <main id="content">
      <Hero />
      <Marquee />
      <Experience />
      <MenuSection />
      <Parties />
      <SectionDivider />
      <Preorder />
      <OrderLinks />
      <Gallery />
      <Reviews />
      <Visit />
    </main>
  );
}
