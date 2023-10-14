import "./_error404.scss";

export default function Error404() {
  return (
    <>
      <main className="error404">
        <h1>404</h1>
        <h2>
          <div>Oups! La page que </div>
          <div>vous demandez n'existe pas.</div>
        </h2>
        <a href="/">Retourner sur la page d'accueuil</a>
      </main>
    </>
  );
}
