import Link from "next/link";
const ProductBanner = ({ pageName, pageTitle }) => {
  return (
    <section
      className="page-banner-area bgs-cover py-60 rpy-100"
      style={{ backgroundImage: "url(assets/images/background/banner.jpg)" }}
    >
      <div className="container">
        <div className="banner-inner text-white text-center">
          <h1 className="page-title wow fadeInUp delay-0-2s animated">
            {pageTitle ? pageTitle : pageName}
          </h1>
          <div className="image my-40 wow fadeInUp delay-0-2s">
                  <img
                    src="assets/images/projects/mockup-erp.png"
                    alt="Service Details"
                  />
                </div>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-5 wow fadeInUp delay-0-4s animated">
              <li className="breadcrumb-item">
                <Link legacyBehavior href="/index">
                  <a>home</a>
                </Link>
              </li>
              <li className="breadcrumb-item active">{pageName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};
export default ProductBanner;
