
import { useState } from "react";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const chantiersMock = [
  {
    id: 1,
    titre: "Rénovation maison",
    adresse: "124 Rue de la Paix",
    entreprise: "Batimenita Duval",
    contact: "Jean Martin",
    tel: "12 430 0670",
    avancement: 65,
    photos: [
      "/photos/photo1.jpg",
      "/photos/photo2.jpg",
      "/photos/photo3.jpg"
    ],
    documents: [
      { nom: "Devis.pdf", url: "/docs/devis.pdf" },
      { nom: "Facture.pdf", url: "/docs/facture.pdf" }
    ]
  }
];

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const chantier = chantiersMock[0];

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoggedIn(true);
      setError("");
    } catch (err) {
      setError("Identifiants incorrects. Veuillez réessayer.");
    }
  };

  if (!loggedIn) {
    return (
      <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", background: "#f0f4f8" }}>
        <div style={{ background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 0 20px rgba(0,0,0,0.1)", width: "320px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#1a1a1a" }}>Espace Client</h2>
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", marginBottom: "0.75rem", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }} />
          <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} style={{ width: "100%", marginBottom: "0.75rem", padding: "0.5rem", borderRadius: "6px", border: "1px solid #ccc" }} />
          {error && <p style={{ color: "red", fontSize: "0.85rem", marginBottom: "0.5rem" }}>{error}</p>}
          <button onClick={handleLogin} style={{ width: "100%", background: "#6EA6DC", border: "none", padding: "0.75rem", color: "white", fontWeight: "bold", borderRadius: "6px" }}>Se connecter</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif", background: "#f9fafb", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "#222" }}>Tableau de bord</h1>
      <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "12px", boxShadow: "0 0 12px rgba(0,0,0,0.05)", maxWidth: "900px" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", color: "#333" }}>{chantier.titre}</h2>
        <p><strong>Adresse :</strong> {chantier.adresse}</p>
        <p><strong>Entreprise :</strong> {chantier.entreprise}</p>
        <p><strong>Contact :</strong> {chantier.contact} ({chantier.tel})</p>
        <div style={{ marginTop: "1rem" }}>
          <p><strong>Avancement :</strong></p>
          <div style={{ background: "#e0e0e0", borderRadius: "8px", overflow: "hidden", height: "14px", width: "100%", marginBottom: "4px" }}>
            <div style={{ width: chantier.avancement + "%", background: "#6EA6DC", height: "100%" }}></div>
          </div>
          <p style={{ fontSize: "0.9rem" }}>{chantier.avancement}%</p>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <h3 style={{ marginBottom: "0.5rem", color: "#444" }}>Photos</h3>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            {chantier.photos.map((url, i) => (
              <img key={i} src={url} alt="chantier" style={{ width: "140px", height: "100px", objectFit: "cover", borderRadius: "8px", border: "1px solid #ddd" }} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: "1.5rem" }}>
          <h3 style={{ marginBottom: "0.5rem", color: "#444" }}>Documents</h3>
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            {chantier.documents.map((doc, i) => (
              <li key={i}>
                <a href={doc.url} target="_blank" rel="noreferrer" style={{ color: "#3366cc", textDecoration: "none" }}>{doc.nom}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
