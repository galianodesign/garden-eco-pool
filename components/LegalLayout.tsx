import Link from "next/link";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="legal-top">
        <div className="wrap">
          <Link href="/" className="legal-brand">
            <img src="/logo.png" alt="Garden Eco Pool" />
            <span>
              Garden <b>Eco Pool</b>
            </span>
          </Link>
        </div>
      </div>
      <div className="legal-hero">
        <div className="iwrap">
          <h1>{title}</h1>
          <p className="upd">Última actualización: junio de 2026</p>
        </div>
      </div>
      <main className="legal-main">
        {children}
        <Link href="/" className="legal-back">
          ← Volver al inicio
        </Link>
      </main>
      <footer className="legal-footer">
        <div className="wrap">
          <span>© 2026 Garden Eco Pool</span>
          <div>
            <Link href="/aviso-legal">Aviso legal</Link> ·{" "}
            <Link href="/privacidad">Privacidad</Link> ·{" "}
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
