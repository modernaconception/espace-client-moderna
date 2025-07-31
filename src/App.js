
import { useState } from "react";

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
  const chantier = chantiersMock[0];

  if (!loggedIn) {
    return (
      <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center", background: "#d8e6f3" }}>
        <div style={{ background: "white", padding: "2rem", borderRadius: "8px", width: "300px" }}>
          <h2 style={{ textAlign: "center" }}>Espace Client</h2>
          <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: "100%", marginBottom: "1rem" }} />
          <input type="password" placeholder="Mot de passe" value={password} onChange={e => setPassword(e.target.value)} style={{ width: "100%", marginBottom: "1rem" }} />
          <button onClick={() => setLoggedIn(true)} style={{ width: "100%", background: "#6EA6DC", border: "none", padding: "0.5rem", color: "white", borderRadius: "4px" }}>Se connecter</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Tableau de bord</h1>
      <div style={{ marginBottom: "1rem" }}>
        <h2>{chantier.titre}</h2>
        <p><strong>Adresse :</strong> {chantier.adresse}</p>
        <p><strong>Entreprise :</strong> {chantier.entreprise}</p>
        <p><strong>Contact :</strong> {chantier.contact} ({chantier.tel})</p>
        <p><strong>Avancement :</strong></p>
        <div style={{ background: "#eee", borderRadius: "4px", overflow: "hidden", height: "10px" }}>
          <div style={{ width: chantier.avancement + "%", background: "#6EA6DC", height: "100%" }}></div>
        </div>
        <p>{chantier.avancement}%</p>
      </div>
      <div>
        <h3>Photos</h3>
        <div style={{ display: "flex", gap: "1rem" }}>
          {chantier.photos.map((url, i) => (
            <img key={i} src={url} alt="chantier" style={{ width: "100px", height: "100px", objectFit: "cover" }} />
          ))}
        </div>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <h3>Documents</h3>
        <ul>
          {chantier.documents.map((doc, i) => (
            <li key={i}><a href={doc.url} target="_blank" rel="noreferrer">{doc.nom}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
