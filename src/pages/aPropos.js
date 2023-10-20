import "./_apropos.scss";
import Banniere from "../components/banniere";

import { useEffect, useState } from "react";
import imgApropos from "../assets/img/montagne.png";
import Collapse from "../components/collapse";

export default function APropos() {
  const [boxAproposContent, setboxAproposContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/a-propos-content.json"
        );
        if (!response.ok) {
          throw new Error("La requête a échoué.");
        }
        const data = await response.json();
        setboxAproposContent(data);
      } catch (error) {
        console.error("Erreur : ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <main className="apropos">
        <Banniere img={imgApropos} />
        {boxAproposContent != null &&
          boxAproposContent.map((content, index) => (
            <Collapse
              key={index}
              title={content.title}
              content={content.content}
            />
          ))}
      </main>
    </>
  );
}
