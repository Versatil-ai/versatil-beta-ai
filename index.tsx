import { useState } from "react";

export default function Home() {
  const [steps, setSteps] = useState([
    { step: "Choisir ton nom de marque", done: true },
    { step: "Créer ton premier produit test", done: true },
    { step: "Connecter ton site à Stripe", done: false },
    { step: "Écrire ta première fiche produit", done: false },
  ]);

  const suggestions = ["NovaShop", "Shoply", "VibeCart", "Craftr", "Versatil"];

  const generateName = () => {
    const random = suggestions[Math.floor(Math.random() * suggestions.length)];
    alert(`Nom suggéré : ${random}`);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#7F00FF" }}>
        Versatil – Ton copilote e-commerce
      </h1>

      <h2 style={{ marginTop: "2rem" }}>Checklist de lancement</h2>
      <ul>
        {steps.map((item, i) => (
          <li key={i} style={{ marginBottom: "0.5rem" }}>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => {
                const newSteps = [...steps];
                newSteps[i].done = !newSteps[i].done;
                setSteps(newSteps);
              }}
            />
            <span style={{ marginLeft: "0.5rem" }}>{item.step}</span>
          </li>
        ))}
      </ul>

      <h2 style={{ marginTop: "2rem" }}>Générateur de nom</h2>
      <button onClick={generateName} style={{ padding: "0.5rem", background: "#7F00FF", color: "#fff", border: "none", borderRadius: "5px" }}>
        Générer un nom
      </button>

      <footer style={{ marginTop: "4rem", textAlign: "center" }}>
        <a href="https://wa.me/33612345678" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: "0.5rem", background: "#25D366", color: "white", border: "none", borderRadius: "5px" }}>
            Écris-nous sur WhatsApp
          </button>
        </a>
      </footer>
    </div>
  );
}
