import {
  ArrowUpRight,
  TrendingUp,
  MapPin,
  Store,
  Search,
  Clock3,
  Zap,
  Navigation,
  Check,
} from "lucide-react";
import { Container, SectionHeader, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { MerchantDashboardMockup } from "@/components/choufly/merchant-dashboard";
export function Merchants() {
  return (
    <section className="section merchants-section" id="commerces">
      <Container>
        <div className="section-heading-row">
          <SectionHeader
            label="POUR LES COMMERCES"
            title={
              <>
                Votre stock mérite
                <br />
                de se faire <span className="accent-underline">remarquer.</span>
              </>
            }
            description="Transformez votre stock en clients. Soyez visible au moment précis où quelqu’un, près de chez vous, cherche ce que vous vendez."
          />
          <Button href="#contact">
            Rejoindre CHOUFLY
            <Store size={17} />
          </Button>
        </div>
        <Reveal>
          <MerchantDashboardMockup />
        </Reveal>
        <div className="merchant-benefits">
          <span>
            <Check size={16} />
            Votre catalogue devient visible
          </span>
          <span>
            <Check size={16} />
            Des clients déjà intéressés
          </span>
          <span>
            <Check size={16} />
            Des recherches qui deviennent des visites
          </span>
        </div>
      </Container>
    </section>
  );
}
export function Demand() {
  return (
    <section className="section demand-section">
      <Container className="split">
        <Reveal className="demand-visual">
          <div className="demand-top">
            <span>
              <TrendingUp size={17} />
              LE POULS DU QUARTIER
            </span>
            <span>Vision produit</span>
          </div>
          <div className="demand-query">
            <span>Que cherche-t-on autour de vous ?</span>
            <h3>
              HP 305
              <ArrowUpRight size={25} />
            </h3>
          </div>
          <div className="demand-total">
            <b>1 840</b>
            <span>
              recherches
              <br />
              dans cet exemple
            </span>
          </div>
          <div className="demand-bar">
            <span />
            <span />
          </div>
          <div className="demand-legend">
            <span>
              <i />
              690 avec résultat
            </span>
            <span>
              <i />1 150 sans résultat
            </span>
          </div>
          <div className="demand-local">
            <MapPin size={19} />
            <p>
              <b>312 recherches à Ariana</b>
              <span>ce mois-ci, dans ce scénario fictif</span>
            </p>
            <ArrowUpRight size={19} />
          </div>
          <small className="demo-note">
            Données illustratives · Ne représente pas une activité réelle
          </small>
        </Reveal>
        <div>
          <SectionHeader
            label="VOIR PLUS LOIN QUE SON STOCK"
            title={
              <>
                Et si votre prochain
                <br />
                best-seller était
                <br />
                <span className="muted-heading">déjà recherché ?</span>
              </>
            }
            description="Comprenez aussi ce que vos clients cherchent… avant même de le vendre."
          />
          <p className="body-copy">
            À terme, CHOUFLY pourrait aider les commerces à identifier la
            demande locale non satisfaite et à choisir les produits à proposer.
            Une direction produit, construite autour des besoins du quartier.
          </p>
        </div>
      </Container>
    </section>
  );
}
export function WhyChoufly() {
  return (
    <section className="section why-section">
      <Container>
        <SectionHeader
          label="MOINS DE HASARD. PLUS DE CHOUFLY."
          title={<>Pensé pour le vrai monde.</>}
        />
        <div className="why-grid">
          {[
            {
              icon: MapPin,
              title: "Vraiment près de vous.",
              copy: "Découvrez ce qui existe réellement autour de vous.",
              mini: (
                <div className="why-map">
                  <span>Vous</span>
                  <i />
                  <Navigation size={27} />
                  <b>1,1 km</b>
                </div>
              ),
            },
            {
              icon: Clock3,
              title: "Une info qui a une date.",
              copy: "La date de mise à jour est visible, pas cachée.",
              mini: (
                <div className="why-fresh">
                  <span className="live-dot" />
                  Mis à jour il y a <b>2 min</b>
                </div>
              ),
            },
            {
              icon: Zap,
              title: "Chercher. Trouver. C’est tout.",
              copy: "Pas besoin de publier une demande et d’attendre une réponse.",
              mini: (
                <div className="why-search">
                  <Search size={17} />
                  <span>Ce qu’il vous faut</span>
                  <Check size={17} />
                </div>
              ),
            },
            {
              icon: Store,
              title: "Le local, en premier.",
              copy: "Transformez une recherche en visite réelle.",
              mini: (
                <div className="why-local">
                  <Store size={32} strokeWidth={1.4} />
                  <span>
                    Le commerce
                    <br />
                    <b>au coin de la rue.</b>
                  </span>
                </div>
              ),
            },
          ].map((c) => (
            <Reveal className="why-card" key={c.title}>
              {c.mini}
              <c.icon size={19} />
              <h3>{c.title}</h3>
              <p>{c.copy}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
