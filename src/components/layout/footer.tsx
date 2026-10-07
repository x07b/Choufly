"use client";
import { useRef, useState } from "react";
import { X, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/primitives";
export function Footer() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [panel, setPanel] = useState("");
  function show(name: string) {
    setPanel(name);
    dialog.current?.showModal();
  }
  return (
    <>
      <footer id="contact">
        <Container>
          <div className="footer-top">
            <div className="footer-brand">
              <a className="wordmark" href="#">
                CHOUFLY<span>®</span>
              </a>
              <p>Chouf win fama.</p>
              <span>
                Les bonnes adresses commencent
                <br />
                par une bonne recherche.
              </span>
            </div>
            <div>
              <h3>Produit</h3>
              <a href="#fonctionnement">Comment ça marche</a>
              <a href="#demo">Pour les utilisateurs</a>
              <a href="#commerces">Pour les commerces</a>
            </div>
            <div>
              <h3>Entreprise</h3>
              <a href="#apropos">À propos</a>
              <button onClick={() => show("Contact")}>
                Contact
                <ArrowUpRight size={12} />
              </button>
            </div>
            <div>
              <h3>Légal</h3>
              <button onClick={() => show("Confidentialité")}>
                Confidentialité
              </button>
              <button onClick={() => show("Conditions")}>Conditions</button>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} CHOUFLY</span>
            <span className="made-in">
              <span>✳</span>Made in Tunisia
            </span>
            <span>Une idée locale. Beaucoup de possibilités.</span>
          </div>
        </Container>
      </footer>
      <dialog
        ref={dialog}
        className="info-dialog"
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
      >
        <button
          className="dialog-close"
          aria-label="Fermer"
          onClick={() => dialog.current?.close()}
        >
          <X size={20} />
        </button>
        <span className="eyebrow">CHOUFLY · VERSION DE DÉMONSTRATION</span>
        <h2>{panel}</h2>
        {panel === "Contact" ? (
          <>
            <p>
              Vous êtes commerçant ? Explorez l’espace commerçant et ses
              fonctionnalités dans cette démonstration.
            </p>
            <p>
              Aucune inscription ni demande de contact n’est collectée sur cette
              version. Le canal de contact officiel sera ajouté avant le
              lancement public.
            </p>
            <a
              className="button button-primary"
              href="#commerces"
              onClick={() => dialog.current?.close()}
            >
              Découvrir l’espace commerçant
              <ArrowUpRight size={16} />
            </a>
          </>
        ) : panel === "Confidentialité" ? (
          <>
            <p>
              Cette démonstration ne propose ni compte, ni formulaire de
              collecte, ni outil d’analyse d’audience. Les recherches et
              interactions restent dans la mémoire de votre navigateur et sont
              réinitialisées au rechargement.
            </p>
            <p>
              La police est hébergée avec le site. Aucun service de carte ni de
              géolocalisation n’est utilisé. L’hébergement peut traiter les
              données techniques nécessaires à la livraison des pages.
            </p>
            <p>
              Les informations relatives au responsable du service et à
              l’exercice des droits devront être complétées avant un lancement
              commercial.
            </p>
          </>
        ) : (
          <>
            <p>
              Ce site présente la vision produit CHOUFLY. Les prix, stocks,
              commerces, statistiques et réservations affichés sont des exemples
              de démonstration.
            </p>
            <p>
              Aucun achat, engagement de commerce ou réservation réelle n’est
              effectué. Les objectifs présentés ne constituent pas des
              performances garanties. Les conditions du service commercial
              seront publiées lors de son lancement.
            </p>
          </>
        )}
      </dialog>
    </>
  );
}
