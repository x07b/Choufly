import {
  ArrowUpRight,
  MapPin,
  Search,
  PlugZap,
  Check,
  LockKeyhole,
  Signal,
  Wifi,
  BatteryFull,
} from "lucide-react";
import { products, Store, Stock } from "@/data/demo";
export function StockStatus({ stock }: { stock: Stock }) {
  return (
    <span className={"stock " + stock}>
      <i />
      {stock === "live"
        ? "LIVE"
        : stock === "confirmed"
          ? "CONFIRMÉ"
          : "À VÉRIFIER"}
    </span>
  );
}
export function ProductCard({ name = products[0].name }: { name?: string }) {
  return (
    <div className="product-card">
      <span className="product-icon">
        <PlugZap size={30} strokeWidth={1.4} />
      </span>
      <div>
        <small>LE BON PRODUIT, AU BON ENDROIT</small>
        <strong>{name}</strong>
        <span>Comparez les commerces autour de vous.</span>
      </div>
    </div>
  );
}
export function StoreResultCard({
  store,
  onReserve,
}: {
  store: Store;
  onReserve?: () => void;
}) {
  return (
    <article className="store-card">
      <span className={"store-avatar avatar-" + store.id}>
        {store.initials}
      </span>
      <div className="store-info">
        <h4>{store.name}</h4>
        <span>
          <MapPin size={11} />
          {store.distance.toLocaleString("fr")} km ·{" "}
          {store.open ? "Ouvert" : "Fermé"}
        </span>
        <div className="store-fresh">
          <StockStatus stock={store.stock} />
          <small>{store.freshness}</small>
        </div>
      </div>
      <div className="store-price">
        <strong>
          {store.price}
          <small> DT</small>
        </strong>
        {onReserve ? (
          <button onClick={onReserve}>
            {store.stock === "verify" ? "Voir le détail" : "Réserver"}
            <ArrowUpRight size={12} />
          </button>
        ) : (
          <a href="#demo">
            Voir l’offre
            <ArrowUpRight size={12} />
          </a>
        )}
      </div>
    </article>
  );
}
export function BrowserMockup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={"browser " + className}>
      <div className="browser-bar">
        <span className="window-dots">
          <i />
          <i />
          <i />
        </span>
        <span>
          <LockKeyhole size={10} />
          choufly.tn / démo
        </span>
        <span className="browser-plus">+</span>
      </div>
      {children}
    </div>
  );
}
export function HeroMockup() {
  return (
    <div className="hero-product">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <span className="floating float-distance">
        <MapPin size={15} />
        <b>1,1 km</b>
        <small>Juste à côté.</small>
      </span>
      <span className="floating float-stock">
        <span className="live-dot" />
        Stock LIVE
        <Check size={13} />
      </span>
      <BrowserMockup>
        <div className="mockup-content">
          <div className="mockup-top">
            <b className="mini-wordmark">
              CHOUFLY<span>•</span>
            </b>
            <span>
              <MapPin size={12} />
              Ariana, Tunis
            </span>
          </div>
          <div className="mock-search">
            <Search size={17} />
            <span>Chargeur Lenovo USB-C 65W</span>
            <span className="search-square">
              <ArrowUpRight size={16} />
            </span>
          </div>
          <div className="result-label">
            <span>3 commerces à proximité</span>
            <span>Dans un rayon de 5 km</span>
          </div>
          {products[0].stores.map((store) => (
            <StoreResultCard key={store.id} store={store} />
          ))}
          <div className="demo-caption">
            <span className="dot" />
            Aperçu du produit · Données fictives
          </div>
        </div>
      </BrowserMockup>
      <span className="floating float-reserved">
        <span className="round-check">
          <Check size={14} />
        </span>
        <span>
          <b>Un détour en moins.</b>
          <small>Réservé pendant 30 min</small>
        </span>
      </span>
      <div className="visual-caption">
        MAWJOUD. 9RIB. TAWA.<span>↗</span>
      </div>
    </div>
  );
}
export function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone-status">
        <b>9:41</b>
        <span>
          <Signal size={12} />
          <Wifi size={12} />
          <BatteryFull size={15} />
        </span>
      </div>
      <div className="phone-island" />
      <div className="phone-content">
        <div className="mini-wordmark">
          CHOUFLY<span>•</span>
        </div>
        <span className="phone-location">
          <MapPin size={12} />
          Ariana, Tunis
        </span>
        <h3>
          Chouf
          <br />
          win fama.
        </h3>
        <p>
          Le bon produit.
          <br />À deux pas de vous.
        </p>
        <a className="phone-search" href="#demo">
          <Search size={15} />
          Chargeur Lenovo 65W
        </a>
        <div className="phone-map">
          <div className="map-pin pin-a">
            <MapPin size={20} />
            <b>69 DT</b>
          </div>
          <div className="map-pin pin-b">
            <MapPin size={17} />
            <b>65 DT</b>
          </div>
          <span className="map-you" />
        </div>
        <div className="phone-result">
          <span className="store-avatar">M</span>
          <div>
            <b>MyTek Ennasr</b>
            <small>
              1,1 km · <span>Disponible</span>
            </small>
          </div>
          <strong>69 DT</strong>
        </div>
        <a className="button button-primary" href="#demo">
          Voir le produit
          <ArrowUpRight size={15} />
        </a>
        <small className="phone-demo">Interface de démonstration</small>
      </div>
      <div className="phone-home" />
    </div>
  );
}
