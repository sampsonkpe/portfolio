export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {year} Sampson Kojo Kpe
        </p>
      </div>
    </footer>
  );
}