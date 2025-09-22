import { useEffect, useState } from "react";

const gold = "#D4AF37";
const dark = "#0B0B0B";
const bg = "#FAFAFA";

function Icon({ path, className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
    >
      <path d={path} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="font-medium text-gray-900">{q}</span>
        <Icon
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
          path="M6 9l6 6 6-6"
        />
      </button>
      {open && <div className="pb-6 leading-relaxed text-gray-600">{a}</div>}
    </div>
  );
}

function Step({ i, title, text }) {
  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full"
          style={{ background: bg, border: `1px solid ${gold}` }}
        >
          <span className="text-sm font-semibold" style={{ color: gold }}>
            {i}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{text}</p>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1 rounded-b-2xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(212,175,55,0) 0%, rgba(212,175,55,0.25) 50%, rgba(212,175,55,0) 100%)",
        }}
      />
    </div>
  );
}

function ValueCard({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: bg }}>
          <Icon className="h-5 w-5 text-gray-900" path={icon} />
        </div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{text}</p>
    </div>
  );
}

function FeeTile({ title, price, unit, bullets = [] }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <h4 className="text-sm font-medium text-gray-500">{title}</h4>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        {unit && <span className="text-sm text-gray-500">{unit}</span>}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        {bullets.map((b, index) => (
          <li key={index} className="flex items-start gap-2">
            <Icon className="mt-0.5 h-4 w-4" path="M5 13l4 4L19 7" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function EdelmetallDepotMockup() {
  const [sticky, setSticky] = useState(false);
  const [feesMode, setFeesMode] = useState("standard");

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 72);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: bg }}>
      <header
        className={`sticky top-0 z-50 ${sticky ? "backdrop-blur-sm/50" : ""}`}
        style={{ background: sticky ? "rgba(255,255,255,0.8)" : "transparent" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full" style={{ background: gold }} />
              <span className="text-sm font-semibold tracking-wide" style={{ color: dark }}>
                RHEINGOLD EDELMETALL
              </span>
            </div>
            <nav className="hidden items-center gap-8 text-sm text-gray-700 md:flex">
              <a href="#was" className="hover:text-gray-900">
                Edelmetalldepot
              </a>
              <a href="#wie" className="hover:text-gray-900">
                So funktioniert&apos;s
              </a>
              <a href="#gebuehren" className="hover:text-gray-900">
                Gebühren
              </a>
              <a href="#vorteile" className="hover:text-gray-900">
                Vorteile
              </a>
              <a href="#faq" className="hover:text-gray-900">
                FAQ
              </a>
            </nav>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm hover:shadow"
              style={{ background: gold }}
            >
              Depot jetzt eröffnen
              <Icon className="h-4 w-4" path="M5 12h14M12 5l7 7-7 7" />
            </a>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 py-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Ihr Edelmetalldepot – jetzt bequem online eröffnen
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                Lagern Sie Gold, Silber, Platin oder Palladium sicher in Liechtenstein. Ab sofort mit digitalem Onboarding und KYC – ohne Papierkram, ohne Umwege.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#cta"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow"
                  style={{ background: gold }}
                >
                  Depot jetzt online eröffnen
                </a>
                <a
                  href="#wie"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  <Icon className="h-4 w-4" path="M9 5l7 7-7 7" />Kurzer Ablauf
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" path="M5 13l4 4L19 7" />Sichere Lagerung in Liechtenstein
                </div>
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" path="M5 13l4 4L19 7" />100% digitaler KYC-Prozess
                </div>
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" path="M5 13l4 4L19 7" />Transparente Gebühren
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
                <div className="h-64 w-full bg-gradient-to-br from-white via-gray-100 to-gray-200" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="rounded-2xl border border-gray-200 bg-white/80 p-4 backdrop-blur">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full" style={{ background: gold }} />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">Online-Onboarding</p>
                        <p className="text-xs text-gray-600">Kontoeröffnung in ca. 10–15 Minuten*</p>
                      </div>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-gray-700">
                      <div className="rounded-xl border border-gray-200 bg-white p-3">Persönliche Daten</div>
                      <div className="rounded-xl border border-gray-200 bg-white p-3">ID-Prüfung (KYC)</div>
                      <div className="rounded-xl border border-gray-200 bg-white p-3">Risikofragen</div>
                      <div className="rounded-xl border border-gray-200 bg-white p-3">Depot aktivieren</div>
                    </div>
                    <p className="mt-3 text-[10px] text-gray-500">*Individuelle Dauer je nach Identverfahren</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="was" className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900">Ihr Konto für physische Edelmetalle</h2>
            <p className="mt-4 leading-relaxed text-gray-700">
              Ein Edelmetalldepot ist Ihr persönliches Konto zur sicheren Verwahrung und Verwaltung physischer Edelmetalle. Sie kaufen Gold, Silber, Platin oder Palladium direkt über uns – wir lagern für Sie hochsicher in Liechtenstein. Jederzeit transparent, jederzeit verfügbar.
            </p>
            <div className="mt-6 grid gap-4 text-gray-700 sm:grid-cols-3">
              {["Physische Edelmetalle in Ihrem Eigentum", "Hochsichere Lagerung in Liechtenstein", "Ein- & Auslieferung jederzeit möglich"].map((t, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <Icon className="h-5 w-5" path="M5 13l4 4L19 7" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="wie" className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Depot eröffnen in 4 einfachen Schritten</h2>
            <a
              href="#cta"
              className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white shadow-sm sm:inline-flex"
              style={{ background: gold }}
            >
              Jetzt starten <Icon className="h-4 w-4" path="M5 12h14M12 5l7 7-7 7" />
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Step i={1} title="Online registrieren" text="Konto anlegen, E-Mail bestätigen – sicher und schnell." />
            <Step i={2} title="Ident (KYC) durchführen" text="ID online prüfen lassen – ohne Papierkram, ohne Postversand." />
            <Step i={3} title="Depot aktivieren" text="Einstellungen bestätigen, rechtliche Hinweise akzeptieren." />
            <Step i={4} title="Kaufen & lagern" text="Edelmetalle erwerben und in Liechtenstein verwahren lassen." />
          </div>
        </div>
      </section>

      <section id="gebuehren" className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Transparent &amp; fair – unsere Depotgebühren</h2>
              <p className="mt-2 text-sm text-gray-600">Klar strukturiert, jederzeit einsehbar. Keine versteckten Kosten.</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white p-1">
              <button
                onClick={() => setFeesMode("standard")}
                className={`rounded-full px-3 py-1 text-sm ${feesMode === "standard" ? "bg-gray-900 text-white" : "text-gray-700"}`}
              >
                Standard
              </button>
              <button
                onClick={() => setFeesMode("premium")}
                className={`rounded-full px-3 py-1 text-sm ${feesMode === "premium" ? "bg-gray-900 text-white" : "text-gray-700"}`}
              >
                Premium
              </button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <FeeTile
              title="Grundgebühr"
              price={feesMode === "standard" ? "CHF 0" : "CHF 0"}
              unit="/ Jahr"
              bullets={["Keine Eröffnungsgebühr", "Keine Mindestlaufzeit"]}
            />
            <FeeTile
              title="Lagergebühr Gold"
              price={feesMode === "standard" ? "0.60%" : "0.50%"}
              unit="p.a."
              bullets={["Jährliche Abrechnung", "Versicherung inkl."]}
            />
            <FeeTile
              title="Lagergebühr Silber/Platin/Palladium"
              price={feesMode === "standard" ? "0.90%" : "0.80%"}
              unit="p.a."
              bullets={["Jährliche Abrechnung", "Versicherung inkl."]}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a href="#" className="text-sm font-medium text-gray-900 underline underline-offset-4">
              Alle Gebühren im Detail (PDF)
            </a>
            <span className="text-xs text-gray-500">*Beispielwerte – durch Ihre finalen Tarife ersetzen</span>
          </div>
        </div>
      </section>

      <section id="vorteile" className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Warum ein Edelmetalldepot bei Rheingold?</h2>
            <p className="mt-2 text-sm text-gray-600">
              Liechtensteinische Stabilität, höchste Sicherheitsstandards und ein erfahrenes Team – jetzt kombiniert mit vollem Online-Onboarding.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <ValueCard
              icon="M3 7l9 6 9-6-9-4-9 4z"
              title="Hochsichere Lagerung"
              text="Verwahrung in Liechtenstein mit Versicherungsschutz und klaren Eigentumsnachweisen."
            />
            <ValueCard
              icon="M5 12h14M12 5l7 7-7 7"
              title="100% digitaler Einstieg"
              text="Kontoeröffnung mit Online-Ident – kein Papier, keine Wege zur Post."
            />
            <ValueCard
              icon="M12 6v6l4 2"
              title="Jederzeit verfügbar"
              text="Käufe, Verkäufe und physische Auslieferungen sind jederzeit möglich."
            />
          </div>
        </div>
      </section>

      <section id="faq" className="py-8 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Häufige Fragen</h2>
          <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-2 sm:p-4">
            <FAQItem
              q="Wie lange dauert das Online-Onboarding?"
              a={<>In der Regel 10–15 Minuten. Die Dauer kann je nach Identverfahren variieren.</>}
            />
            <FAQItem
              q="Sind meine Edelmetalle versichert?"
              a={<>Ja, im Rahmen der Verwahrung besteht Versicherungsschutz. Details entnehmen Sie bitte der Gebühren- und Produktinformation.</>}
            />
            <FAQItem
              q="Kann ich mir die Edelmetalle ausliefern lassen?"
              a={<>Ja, eine physische Auslieferung ist möglich. Etwaige Versand- und Bearbeitungskosten entnehmen Sie bitte der Übersicht.</>}
            />
            <FAQItem
              q="Kann ich mehrere Depots eröffnen?"
              a={<>Ja, z. B. getrennt nach Privat- und Firmenvermögen oder für Familienmitglieder.</>}
            />
          </div>
        </div>
      </section>

      <section id="cta" className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-gray-900">Starten Sie jetzt – sicher, schnell, online</h3>
              <p className="mt-3 text-gray-700">
                Eröffnen Sie Ihr Edelmetalldepot mit digitalem KYC und nutzen Sie die Vorteile der Verwahrung in Liechtenstein.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm hover:shadow"
                  style={{ background: gold }}
                >
                  Depot jetzt online eröffnen
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Fragen &amp; Antworten
                </a>
              </div>
            </div>
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-20"
              style={{ background: gold }}
            />
          </div>
        </div>
      </section>

      <footer className="mt-8 border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Rheingold Edelmetall AG. Alle Rechte vorbehalten.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-700">
              <a href="#" className="hover:text-gray-900">
                AGB
              </a>
              <a href="#" className="hover:text-gray-900">
                Gebührenübersicht
              </a>
              <a href="#" className="hover:text-gray-900">
                Datenschutz
              </a>
              <a href="#" className="hover:text-gray-900">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
