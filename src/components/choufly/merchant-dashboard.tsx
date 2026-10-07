"use client";
import { useState } from "react";
import {
  Eye,
  Bookmark,
  Footprints,
  Search,
  TrendingUp,
  Package,
  Check,
  Pencil,
} from "lucide-react";
import { BrowserMockup } from "./mockups";
const initial = [
  { name: "HP 305 Black", stock: 12, price: 42 },
  { name: "Lenovo USB-C 65W", stock: 3, price: 69 },
  { name: "Samsung 25W", stock: 0, price: 39 },
];
export function MerchantDashboardMockup() {
  const [items, setItems] = useState(initial);
  const [edit, setEdit] = useState<number | null>(null);
  return (
    <BrowserMockup className="merchant-dashboard">
      <div className="dashboard-head">
        <span className="mini-wordmark">
          CHOUFLY<span>•</span>
          <small>ESPACE COMMERÇANT</small>
        </span>
        <span className="store-avatar">M</span>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-greeting">
          <div>
            <small>Votre commerce, en un coup d’œil</small>
            <h3>
              Bonjour, MyTek Ennasr <span>↗</span>
            </h3>
          </div>
          <span className="demo-pill">Aperçu fictif</span>
        </div>
        <div className="dashboard-stats">
          {[
            [Eye, "143", "Vues produits"],
            [Bookmark, "27", "Réservations"],
            [Footprints, "19", "Visites confirmées"],
            [Search, "38", "Recherches sans résultat"],
          ].map(([Icon, value, label]) => {
            const I = Icon as typeof Eye;
            return (
              <div key={String(label)}>
                <I size={15} />
                <strong>{String(value)}</strong>
                <small>{String(label)}</small>
              </div>
            );
          })}
        </div>
        <div className="dashboard-table-heading">
          <b>
            <Package size={15} />
            Mes produits
          </b>
          <span>3 produits</span>
        </div>
        <div className="dashboard-table">
          <div className="table-header">
            <span>PRODUIT</span>
            <span>STOCK</span>
            <span>PRIX</span>
            <span>STATUT</span>
            <span />
          </div>
          {items.map((item, i) => (
            <div className="table-row" key={item.name}>
              <b>{item.name}</b>
              <span>{item.stock ? item.stock + " en stock" : "Rupture"}</span>
              <span>
                {edit === i ? (
                  <input
                    aria-label={"Prix de " + item.name}
                    type="number"
                    min="0"
                    value={item.price}
                    onChange={(e) =>
                      setItems(
                        items.map((x, j) =>
                          j === i
                            ? {
                                ...x,
                                price: Math.max(0, Number(e.target.value)),
                              }
                            : x,
                        ),
                      )
                    }
                  />
                ) : (
                  item.price + " DT"
                )}
              </span>
              <button
                className={"stock-toggle " + (item.stock ? "on" : "")}
                onClick={() =>
                  setItems(
                    items.map((x, j) =>
                      j === i ? { ...x, stock: x.stock ? 0 : 1 } : x,
                    ),
                  )
                }
                aria-label={"Changer la disponibilité de " + item.name}
                aria-pressed={item.stock > 0}
              >
                <i />
                {item.stock ? "Disponible" : "Rupture"}
              </button>
              <button
                className="edit-button"
                aria-label={
                  (edit === i ? "Enregistrer " : "Modifier ") + item.name
                }
                onClick={() => setEdit(edit === i ? null : i)}
              >
                {edit === i ? <Check size={14} /> : <Pencil size={14} />}
              </button>
            </div>
          ))}
        </div>
        <div className="insight-notice">
          <TrendingUp size={18} />
          <span>
            <b>Une demande à saisir.</b> 12 personnes près de vous ont recherché
            HP 305 cette semaine.
            <small>Exemple d’analyse · Données fictives</small>
          </span>
        </div>
      </div>
    </BrowserMockup>
  );
}
