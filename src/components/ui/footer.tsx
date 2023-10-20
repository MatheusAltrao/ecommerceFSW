const Footer = () => {
  return (
    <footer className="bg-accent px-8 py-4  text-sm  text-zinc-600">
      © 2023 Copyright <span className="font-semibold">FSW Store</span>
      <p>
        Desenvolvido por{" "}
        <a
          className="text-cyan-500 underline transition-colors hover:text-cyan-700 "
          href="https://myportfolio-omega-nine.vercel.app/"
        >
          Matheus Altrao
        </a>
      </p>
    </footer>
  );
};

export default Footer;
