import "@/App.css";

const App = () => {
  const buttons = [
    {
      title: "Agende sua Consulta",
      subtitle: "WhatsApp",
      icon: "fab fa-whatsapp",
      href: "https://api.whatsapp.com/send/?phone=5562994423813&text=Ol%C3%A1+Dra.+Gostaria+de+obter+mais+informa%C3%A7%C3%B5es+sobre+sua+consulta.+&type=phone_number&app_absent=0",
    },
    {
      title: "Combo de eBooks",
      subtitle: "Eliane Costa",
      icon: "fas fa-book",
      href: "https://lastlink.com/p/C557B4F03/checkout-payment",
    },
    {
      title: "Consultório",
      subtitle: "PUNK CROSSFIT",
      icon: "fas fa-map-marker-alt",
      href: "https://www.google.com.br/search?client=safari&sca_esv=47a906e9dc93da55&channel=iphone_bm&q=PUNK+CROSSFIT&ludocid=9725252000059705323&lsig=AB86z5VFf1QfEEDOdwNqgPDvt4cy&shndl=-1&shem=labmtrc,lsde,vslcca&source=sh/x/loc/act/m1/3",
    },
    {
      title: "Mounjaro: o jeito certo de usar",
      subtitle: "Saiba mais",
      icon: "fas fa-pills",
      href: "https://elipcl.hotmart.host/pagina-de-vendas-61793b05-1c8d-4c7f-acef-73a11629e2fa?fbclid=PAQ0xDSwQgJJJleHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaev_AxuRmrNgPLYRjj8ksBZHlqLKLZ5SSMG852cCohJjQnMN6kyatwDxx9HzA_aem_-R1OPGvSv7uMj2u4isP0bg",
    },
  ];

  return (
    <div className="landing-container" data-testid="landing-container">
      {/* Hero Section */}
      <section className="hero-section" data-testid="hero-section">
        <div className="hero-bg"></div>
        
        {/* Profile Photo with Floating Animation */}
        <div className="profile-photo-container" data-testid="profile-photo">
          <img
            src="https://customer-assets.emergentagent.com/job_5c5ac3d8-d8fe-4420-8f90-6fd83e1edd67/artifacts/w5ekkmxu_IMG_7800.JPG.jpeg"
            alt="Dra. Eliane Costa"
            className="profile-photo"
          />
          <div className="photo-gradient-overlay"></div>
        </div>

        {/* Title Section */}
        <div className="title-section" data-testid="title-section">
          <h1 className="main-title">Dra. Eliane Costa</h1>
          <p className="subtitle">Resultados reais começam na alimentação certa.</p>
          <div className="golden-line"></div>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="buttons-section" data-testid="buttons-section">
        <div className="buttons-container">
          {buttons.map((btn, index) => (
            <a
              key={index}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-btn"
              data-testid={`btn-${index}`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="btn-icon">
                <i className={btn.icon}></i>
              </div>
              <div className="btn-text">
                <span className="btn-title">{btn.title}</span>
                <span className="btn-subtitle">{btn.subtitle}</span>
              </div>
              <div className="btn-glow"></div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" data-testid="footer">
        <p className="copyright">
          © 2026 Dra. Eliane Costa - Nutricionista Esportiva
        </p>
      </footer>
    </div>
  );
};

export default App;
