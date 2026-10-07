"use client";
import { useState, useRef } from "react";
import {
  Search,
  MapPin,
  SlidersHorizontal,
  X,
  Check,
  ArrowRight,
  Phone,
  RotateCcw,
} from "lucide-react";
import { products, Product, Store } from "@/data/demo";
import { Container, SectionHeader } from "@/components/ui/primitives";
import {
  BrowserMockup,
  StoreResultCard,
  ProductCard,
} from "@/components/choufly/mockups";
export function SearchDemo() {
  const [query, setQuery] = useState(products[0].short);
  const [active, setActive] = useState<Product | null>(products[0]);
  const [radius, setRadius] = useState(5);
  const [availability, setAvailability] = useState("all");
  const [price, setPrice] = useState(1000);
  const [openOnly, setOpenOnly] = useState(false);
  const [selection, setSelection] = useState<Store | null>(null);
  const [stage, setStage] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const results =
    active?.stores.filter(
      (s) =>
        s.distance <= radius &&
        (availability === "all" || s.stock !== "verify") &&
        s.price <= price &&
        (!openOnly || s.open),
    ) ?? [];
  function search() {
    const q = query.trim().toLowerCase();
    setActive(
      q
        ? (products.find(
            (p) =>
              (p.name + " " + p.short).toLowerCase().includes(q) ||
              q
                .split(/\s+/)
                .every((w) =>
                  (p.name + " " + p.short).toLowerCase().includes(w),
                ),
          ) ?? null)
        : null,
    );
  }
  function choose(p: Product) {
    setActive(p);
    setQuery(p.short);
  }
  function reserve(store: Store) {
    setSelection(store);
    setStage(0);
    dialog.current?.showModal();
  }
  return (
    <section className="section demo-section" id="demo">
      <Container>
        <div className="section-heading-row">
          <SectionHeader
            label="À VOUS DE CHERCHER"
            title={
              <>
                Moins de détours.
                <br />
                Plus de trouvailles.
              </>
            }
            description="Un produit, quelques secondes, les bonnes adresses. Essayez avec nos exemples."
          />
          <span className="demo-pill">Démo interactive · Données fictives</span>
        </div>
        <BrowserMockup className="discovery-browser">
          <div className="discovery-top">
            <b className="mini-wordmark">
              CHOUFLY<span>•</span>
            </b>
            <form
              className="demo-search"
              onSubmit={(e) => {
                e.preventDefault();
                search();
              }}
            >
              <Search size={19} />
              <input
                aria-label="Rechercher un produit"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Que cherchez-vous ?"
              />
              <button aria-label="Lancer la recherche">
                <ArrowRight size={18} />
              </button>
            </form>
            <span className="demo-location">
              <MapPin size={14} />
              Ariana
            </span>
          </div>
          <div className="suggestions">
            {products.map((p) => (
              <button
                className={active?.id === p.id ? "selected" : ""}
                key={p.id}
                onClick={() => choose(p)}
              >
                {p.short}
              </button>
            ))}
          </div>
          <div className="discovery-body">
            <aside className="filters">
              <h3>
                <SlidersHorizontal size={16} />
                Affiner la recherche
              </h3>
              <label htmlFor="radius">
                Rayon<span>{radius} km</span>
              </label>
              <input
                id="radius"
                type="range"
                min="1"
                max="10"
                value={radius}
                onChange={(e) => setRadius(Number(e.target.value))}
              />
              <div className="range-labels">
                <span>1 km</span>
                <span>10 km</span>
              </div>
              <label htmlFor="availability">Disponibilité</label>
              <select
                id="availability"
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
              >
                <option value="all">Tous les résultats</option>
                <option value="confirmed">Stock disponible confirmé</option>
              </select>
              <label htmlFor="price">
                Prix maximum<span>{price} DT</span>
              </label>
              <input
                id="price"
                type="range"
                min="50"
                max="1000"
                step="10"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={openOnly}
                  onChange={(e) => setOpenOnly(e.target.checked)}
                />
                Ouvert maintenant
              </label>
              <button
                className="reset-filters"
                onClick={() => {
                  setRadius(5);
                  setAvailability("all");
                  setPrice(1000);
                  setOpenOnly(false);
                }}
              >
                <RotateCcw size={12} />
                Réinitialiser
              </button>
              <div className="filter-map">
                <MapPin />
                <b>Ariana</b>
                <span>Votre recherche, tout près.</span>
              </div>
            </aside>
            <div className="discovery-results" aria-live="polite">
              <div className="results-heading">
                <b>
                  {results.length} commerce{results.length > 1 ? "s" : ""} à
                  proximité
                </b>
                <span>Rayon de {radius} km</span>
              </div>
              {active && <ProductCard name={active.name} />}
              <div className="result-list">
                {results.map((store) => (
                  <StoreResultCard
                    key={store.id}
                    store={store}
                    onReserve={() => reserve(store)}
                  />
                ))}
                {!results.length && (
                  <div className="empty-state">
                    <Search size={32} />
                    <h3>
                      {active
                        ? "Aucun résultat avec ces filtres."
                        : "Ce produit ne fait pas partie de la démo."}
                    </h3>
                    <p>
                      {active
                        ? "Élargissez le rayon ou ajustez vos filtres."
                        : "Essayez Lenovo, AirPods Pro, SSD 1TB ou Canon 545."}
                    </p>
                  </div>
                )}
              </div>
              <p className="demo-note">
                Ces exemples illustrent le produit. Aucun stock réel ni
                réservation réelle.
              </p>
            </div>
          </div>
        </BrowserMockup>
      </Container>
      <dialog
        ref={dialog}
        className="reservation-dialog"
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Fermer la réservation"
          onClick={() => dialog.current?.close()}
        >
          <X size={20} />
        </button>
        <span className="eyebrow">SIMULATION DE RÉSERVATION</span>
        {selection?.stock === "verify" ? (
          <>
            <span className="dialog-icon">
              <Phone />
            </span>
            <h2>Un petit appel avant de partir.</h2>
            <p>
              Le stock de {selection.name} a été mis à jour il y a 8 h. Dans le
              produit final, vous pourrez contacter le magasin pour le vérifier.
            </p>
            <button
              className="button button-primary"
              onClick={() => dialog.current?.close()}
            >
              Compris
              <Check size={16} />
            </button>
          </>
        ) : (
          <>
            <span className="dialog-icon">
              <Check />
            </span>
            <h2>
              {stage === 0
                ? "Le bon produit vous attend."
                : stage === 1
                  ? "Au tour du commerçant."
                  : "Trouvé. Réservé."}
            </h2>
            <p>
              {active?.name}
              <br />
              <strong>
                {selection?.name} · {selection?.price} DT
              </strong>
            </p>
            <div className="reservation-summary">
              {stage === 0
                ? "Demandez une mise de côté pendant 30 minutes."
                : stage === 1
                  ? "Demande reçue par le commerce. Simulez sa confirmation."
                  : "Réservation simulée : votre produit est mis de côté pendant 30 minutes."}
            </div>
            {stage < 2 ? (
              <button
                className="button button-primary"
                onClick={() => setStage(stage + 1)}
              >
                {stage === 0
                  ? "Réserver pendant 30 min"
                  : "Confirmer côté commerçant"}
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                className="button button-primary"
                onClick={() => dialog.current?.close()}
              >
                Terminer la démo
                <Check size={16} />
              </button>
            )}
            <small>Aucun magasin contacté. Aucune réservation effectuée.</small>
          </>
        )}
      </dialog>
    </section>
  );
}
