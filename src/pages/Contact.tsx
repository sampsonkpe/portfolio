import { Mail, Phone, MapPin, Download } from "lucide-react";

export default function Contact() {
  return (
    <main className="pt-24 px-6 pb-24">
      <div className="mx-auto max-w-3xl text-center">

        <h1 className="text-2xl font-semibold text-foreground">
          Contact
        </h1>

        {/* SECTION 1 */}
        <div className="mt-10 space-y-4">

          <a
            href="mailto:sampsonkpe2@icloud.com"
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
          >
            <Mail className="h-5 w-5 text-primary" />
            sampsonkpe2@icloud.com
          </a>

          <a
            href="tel:+233592992510"
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-5"
          >
            <Phone className="h-5 w-5 text-primary" />
            +233 59 299 2510
          </a>

          <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
            <MapPin className="h-5 w-5 text-primary" />
            Oyarifa — Accra, Ghana
          </div>

        </div>

        {/* SECTION 2 */}
        <div className="mt-10 flex gap-4">

          <a
            href="https://github.com/sampsonkpe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card hover:shadow-sm"
          >
            <img
              src="/icons/github-light.png"
              className="h-6 w-6 dark:hidden"
            />
            <img
              src="/icons/github-dark.png"
              className="h-6 w-6 hidden dark:block"
             />
          </a>

          <a
            href="https://instagram.com/sampsonkpe/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card hover:shadow-sm"
          >
            <img src="/icons/instagram.png" className="h-5 w-5" />
          </a>

          <a
            href="https://pinterest.com/sampsonkpe/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-card hover:shadow-sm"
          >
            <img src="/icons/pinterest.png" className="h-5 w-5" />
          </a>

        </div>

        {/* RESUME BUTTON */}
        <div className="mt-10">
          <a
            href="/CURRICULUMVITAE.pdf"
            download
            className="mt-12 inline-flex items-center justify-center rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:opacity-80 hover:shadow-lg"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
        </div>

      </div>
    </main>
  );
}