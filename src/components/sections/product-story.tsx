import {
  Search,
  MapPin,
  Check,
  ArrowUpRight,
  ArrowRight,
  Clock3,
  Phone,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Radio,
  Store,
  Route,
  MousePointer2,
} from "lucide-react";
import { Container, SectionHeader, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
export function Problem() {
  return (
    <section className="section problem-section" id="probleme">
      <Container>
        <div className="split problem-split">
          <SectionHeader
            label="LE PROBLÈME, VOUS LE CONNAISSEZ"
            title={
              <>
                Vous savez quoi.
                <br />
                <span className="muted-heading">Mais pas où.</span>
              </>
            }
            description="Un onglet Google. Un message WhatsApp. Trois appels. Et parfois, un déplacement pour rien."
          />
          <Reveal className="problem-visual">
            <div className="scattered-search">
              <Search size={17} />
              Google<span>12 résultats. Et le stock ?</span>
            </div>
            <div className="scattered-message">
              <MessageCircle size={18} />
              <span>
                « Aslema, mazél disponible ? »
                <small>Message envoyé · Pas encore de réponse</small>
              </span>
            </div>
            <div className="scattered-call">
              <Phone size={15} />
              Encore un magasin à appeler…
            </div>
            <div className="problem-answer">
              <span className="mini-wordmark">
                CHOUFLY<span>•</span>
              </span>
              <b>Une recherche. Une vraie réponse.</b>
              <ArrowUpRight size={21} />
            </div>
          </Reveal>
        </div>
        <div className="question-line">
          <span>LA BONNE QUESTION</span>
          <p>
            Où le trouver <b>maintenant</b>, <b>près de moi</b>,<br />
            et être sûr qu’il est <b>disponible</b> ?
          </p>
          <ArrowUpRight />
        </div>
      </Container>
    </section>
  );
}
export function HowItWorks() {
  return (
    <section className="section how-section" id="fonctionnement">
      <Container>
        <SectionHeader
          label="COMMENT ÇA MARCHE"
          title={
            <>
              De la recherche au produit.
              <br />
              Sans les détours.
            </>
          }
        />
        <div className="steps-grid">
          {[
            {
              n: "01",
              title: "Recherchez",
              description: "Écrivez simplement ce que vous cherchez.",
              icon: Search,
              visual: (
                <div className="mini-input">
                  <Search size={15} />
                  SSD 1TB<span>↵</span>
                </div>
              ),
            },
            {
              n: "02",
              title: "Comparez",
              description: "Le prix, la distance, le stock. Tout est là.",
              icon: MapPin,
              visual: (
                <div className="compare-mini">
                  <span>69 DT</span>
                  <span>1,1 km</span>
                  <span>
                    <i />
                    LIVE
                  </span>
                </div>
              ),
            },
            {
              n: "03",
              title: "Réservez",
              description: "Bloquez le produit pendant 30 minutes.",
              icon: Clock3,
              visual: (
                <div className="reserve-mini">
                  <Check size={16} />
                  Mis de côté <b>30:00</b>
                </div>
              ),
            },
            {
              n: "04",
              title: "Récupérez",
              description: "Rendez-vous directement au bon magasin.",
              icon: Navigation,
              visual: (
                <div className="route-mini">
                  <span />
                  <i />
                  <MapPin size={25} />
                  <small>Vous y êtes.</small>
                </div>
              ),
            },
          ].map((step) => (
            <Reveal key={step.n} className="step-card">
              <div className="step-number">
                {step.n}
                <step.icon size={19} />
              </div>
              <div className="step-visual">{step.visual}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
        <div className="flow-line">
          <span>Search</span>
          <ArrowRight />
          <span>Find</span>
          <ArrowRight />
          <span>Reserve</span>
          <ArrowRight />
          <b>Go.</b>
        </div>
      </Container>
    </section>
  );
}
export function StockConfidence() {
  const cards = [
    {
      label: "LIVE",
      icon: Radio,
      description: "Synchronisé avec le stock du magasin.",
      time: "Mis à jour il y a 2 min",
      className: "live",
    },
    {
      label: "CONFIRMÉ",
      icon: ShieldCheck,
      description: "Disponibilité confirmée par le commerçant.",
      time: "Confirmé il y a 18 min",
      className: "confirmed",
    },
    {
      label: "DERNIÈRE CONFIRMATION",
      icon: Clock3,
      description: "Dernière information disponible.",
      time: "Il y a 7 h",
      className: "old",
    },
    {
      label: "À VÉRIFIER",
      icon: Phone,
      description: "Appelez le magasin avant de vous déplacer.",
      time: "Une confirmation est nécessaire",
      className: "verify",
    },
  ];
  return (
    <section className="section confidence-section">
      <Container>
        <div className="confidence-heading">
          <SectionHeader
            label="LA CONFIANCE, ÇA SE VOIT"
            title={
              <>
                « En stock », c’est bien.
                <br />
                <span>Savoir depuis quand,</span>
                <br />
                c’est mieux.
              </>
            }
          />
          <div className="confidence-seal">
            <ShieldCheck size={44} strokeWidth={1} />
            <span>
              LA FRAÎCHEUR
              <br />
              FAIT LA DIFFÉRENCE
            </span>
          </div>
        </div>
        <div className="confidence-grid">
          {cards.map((c) => (
            <Reveal className={"confidence-card " + c.className} key={c.label}>
              <c.icon size={23} />
              <span className="status-label">
                <i />
                {c.label}
              </span>
              <p>{c.description}</p>
              <small>{c.time}</small>
            </Reveal>
          ))}
        </div>
        <div className="confidence-bottom">
          <p>
            Pas seulement une réponse.
            <br />
            <b>La confiance dans cette réponse.</b>
          </p>
          <span>
            Les niveaux de fiabilité prévus dans CHOUFLY.
            <br />
            Exemples illustratifs, sans intégration de stock active.
          </span>
        </div>
      </Container>
    </section>
  );
}
export function Reservation() {
  return (
    <section className="section reservation-section">
      <Container className="split">
        <div>
          <SectionHeader
            label="30 MINUTES POUR VOUS"
            title={
              <>
                Trouvé. Réservé.
                <br />
                <span className="muted-heading">Il ne reste qu’à y aller.</span>
              </>
            }
            description="Vous avez trouvé le bon produit ? Demandez au commerçant de le mettre de côté. Une fois confirmé, partez l’esprit tranquille."
          />
          <Button secondary>Tester une réservation</Button>
        </div>
        <Reveal className="reservation-flow">
          <span className="flow-demo">SCÉNARIO DE DÉMONSTRATION</span>
          <div className="notification notification-one">
            <span className="notification-icon">
              <MousePointer2 size={20} />
            </span>
            <div>
              <small>VOUS · 15:10</small>
              <b>Réserver pendant 30 min</b>
              <span>Lenovo USB-C 65W × 1</span>
            </div>
          </div>
          <div className="notification notification-two">
            <span className="notification-icon">
              <Store size={20} />
            </span>
            <div>
              <small>LE COMMERÇANT</small>
              <b>Nouvelle demande de réservation</b>
              <span>
                Lenovo 65W × 1 <strong>Confirmer ✓</strong>
              </span>
            </div>
          </div>
          <div className="notification notification-three">
            <span className="notification-icon">
              <Check size={20} />
            </span>
            <div>
              <small>C’EST CONFIRMÉ</small>
              <b>Réservé jusqu’à 15:40</b>
              <span>Votre produit vous attend. À tout de suite !</span>
            </div>
          </div>
          <span className="reservation-doodle">
            <Route size={24} />
            Le trajet le plus simple, c’est le bon.
          </span>
        </Reveal>
      </Container>
    </section>
  );
}
