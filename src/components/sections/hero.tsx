import { ArrowDown, ArrowRight } from "lucide-react";
import { Container, Button, Badge } from "@/components/ui/primitives";
import { HeroMockup } from "@/components/choufly/mockups";
import { Reveal } from "@/components/ui/reveal";
export function Hero() {
  return (
    <section className="hero" id="produit">
      <Container>
        <div className="hero-grid">
          <Reveal className="hero-copy">
            <Badge>PENSÉ EN TUNISIE. POUR LE QUOTIDIEN.</Badge>
            <h1>
              Ce que vous
              <br />
              cherchez est
              <br />
              <span>juste à côté.</span>
              <span className="headline-dot">↗</span>
            </h1>
            <p>
              CHOUFLY vous montre où trouver votre produit,
              <br className="desktop-break" /> avec son prix, sa distance et sa
              disponibilité.
              <br className="desktop-break" />{" "}
              <strong>Maintenant. Près de vous.</strong>
            </p>
            <div className="hero-buttons">
              <Button>Rechercher un produit</Button>
              <a className="text-link" href="#fonctionnement">
                Comment ça marche
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="reassurance">
              Sans compte<span>·</span>Recherche instantanée<span>·</span>
              Commerces locaux
            </div>
          </Reveal>
          <Reveal className="hero-visual">
            <HeroMockup />
          </Reveal>
        </div>
        <div className="hero-bottom">
          <span>LE MOTEUR DE RECHERCHE DU COMMERCE LOCAL</span>
          <span>
            Chouf win fama.<span className="tiny-star">✳</span>
          </span>
          <a href="#probleme" aria-label="Découvrir CHOUFLY">
            <ArrowDown size={17} />
          </a>
        </div>
      </Container>
    </section>
  );
}
