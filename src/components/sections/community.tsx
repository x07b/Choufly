import {
  Laptop,
  Headphones,
  Cpu,
  Refrigerator,
  Car,
  Wrench,
  MapPin,
  ArrowUpRight,
  Search,
  Route,
  Store,
} from "lucide-react";
import { Container, SectionHeader, Button } from "@/components/ui/primitives";
import { PhoneMockup } from "@/components/choufly/mockups";
import { Reveal } from "@/components/ui/reveal";
export function Categories() {
  return (
    <section className="section categories-section">
      <Container>
        <div className="section-heading-row">
          <SectionHeader
            label="QU’EST-CE QU’ON CHERCHE ?"
            title={
              <>
                Du quotidien.
                <br />
                Du concret. Du disponible.
              </>
            }
          />
          <p>
            On commence par la tech.
            <br />
            Et demain, par bien plus.
          </p>
        </div>
        <div className="category-grid">
          {[
            [Laptop, "Informatique"],
            [Headphones, "Accessoires téléphone"],
            [Cpu, "Électronique"],
            [Refrigerator, "Électroménager"],
            [Car, "Pièces auto"],
            [Wrench, "Bricolage"],
          ].map(([Icon, label], i) => {
            const I = Icon as typeof Laptop;
            return i < 3 ? (
              <a className="category-tile" key={String(label)} href="#demo">
                <I size={32} strokeWidth={1.3} />
                <b>{String(label)}</b>
                <span>
                  Premières catégories
                  <ArrowUpRight size={16} />
                </span>
              </a>
            ) : (
              <div className="category-tile future" key={String(label)}>
                <I size={32} strokeWidth={1.3} />
                <b>{String(label)}</b>
                <span>À explorer ensuite</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
export function LocalFocus() {
  return (
    <section className="section local-section" id="apropos">
      <Container className="split">
        <div>
          <SectionHeader
            label="NÉ ICI. UTILE ICI."
            title={
              <>
                On commence localement.
                <br />
                <span className="muted-heading">Pour être vraiment utile.</span>
              </>
            }
            description="CHOUFLY se déploie zone par zone, avec suffisamment de commerces et de produits pour que chaque recherche ait réellement une chance d’aboutir."
          />
          <div className="local-tags">
            <span>Grand Tunis</span>
            <span>Ariana</span>
            <span>Ennasr</span>
            <span>Menzah</span>
          </div>
          <p className="small-note">
            Zones de lancement envisagées · Le produit est en développement.
          </p>
        </div>
        <Reveal className="local-map">
          <div className="map-road road-one" />
          <div className="map-road road-two" />
          <div className="map-ring" />
          <div className="map-label map-ariana">
            <MapPin size={19} />
            <span>
              Ariana<small>Le début de l’histoire</small>
            </span>
          </div>
          <div className="map-label map-ennasr">
            <span className="dot" />
            Ennasr
          </div>
          <div className="map-label map-menzah">
            <span className="dot" />
            Menzah
          </div>
          <span className="map-city">
            GRAND
            <br />
            TUNIS
          </span>
          <span className="map-note">
            Un quartier à la fois. ↗<small>Carte schématique</small>
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
export function Principles() {
  return (
    <section className="principles">
      <Container>
        <span className="eyebrow">
          LES PRINCIPES DU PRODUIT, PAS DES CHIFFRES DE TRACTION
        </span>
        <div className="principles-grid">
          {[
            ["< 2", "sec", "Objectif de réponse"],
            ["5", "km", "Rayon de recherche par défaut"],
            ["30", "min", "Durée de réservation prévue"],
            ["100", "%", "Objectif de visibilité sur la fraîcheur"],
          ].map(([v, u, l]) => (
            <div key={l}>
              <strong>
                {v}
                <small>{u}</small>
              </strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
export function Personas() {
  return (
    <section className="section personas-section">
      <Container>
        <SectionHeader
          label="ÇA VOUS RESSEMBLE ?"
          title={
            <>
              Fait pour ceux qui ont
              <br />
              mieux à faire que chercher.
            </>
          }
        />
        <div className="persona-grid">
          {[
            [Search, "Pour les pressés", "Je cherche un produit maintenant."],
            [
              Route,
              "Pour les pragmatiques",
              "Je veux éviter de faire 4 magasins.",
            ],
            [
              Store,
              "Pour les commerçants",
              "Je veux attirer des clients qui cherchent déjà mes produits.",
            ],
          ].map(([Icon, label, copy]) => {
            const I = Icon as typeof Search;
            return (
              <div className="persona-card" key={String(label)}>
                <span className="persona-icon">
                  <I size={21} />
                </span>
                <small>{String(label)}</small>
                <h3>{String(copy)}</h3>
                <span className="persona-rule" />
              </div>
            );
          })}
        </div>
        <p className="small-note">
          Des besoins auxquels nous répondons, pas des témoignages clients.
        </p>
      </Container>
    </section>
  );
}
export function AppPreview() {
  return (
    <section className="section app-section">
      <Container className="split">
        <div>
          <SectionHeader
            label="LE RÉFLEXE CHOUFLY"
            title={
              <>
                Tout le quartier.
                <br />
                <span className="muted-heading">Dans votre poche.</span>
              </>
            }
            description="Une expérience pensée pour trouver vite, décider vite et se déplacer seulement quand ça vaut le coup."
          />
          <Button>Essayer la démo</Button>
          <p className="app-arabizi">
            Tlawwej 3la 7aja?
            <br />
            <b>Chouf fi CHOUFLY.</b>
          </p>
        </div>
        <Reveal className="phone-stage">
          <div className="phone-orbit" />
          <span className="phone-float-one">
            <MapPin size={16} />
            Le bon magasin. Tout près.
          </span>
          <PhoneMockup />
          <span className="phone-float-two">
            <span className="live-dot" />
            Mawjoud. 9rib. Tawa.
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
export function FinalCTA() {
  return (
    <section className="final-cta">
      <Container>
        <span className="eyebrow">
          VOTRE PROCHAINE TROUVAILLE EST TOUT PRÈS.
        </span>
        <h2>
          Vous cherchez quelque chose ?<br />
          <span>Chouf win fama.</span>
          <ArrowUpRight />
        </h2>
        <p>Découvrez les produits disponibles autour de vous avec CHOUFLY.</p>
        <div className="cta-actions">
          <Button>Commencer une recherche</Button>
          <Button href="#contact" secondary>
            Rejoindre CHOUFLY comme commerçant
          </Button>
        </div>
        <div className="cta-bottom">
          <span>UN PRODUIT TUNISIEN. UNE IDÉE UNIVERSELLE.</span>
          <span>CHOUFLY®</span>
        </div>
      </Container>
    </section>
  );
}
