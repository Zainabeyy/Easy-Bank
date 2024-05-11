import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";
import Header from "./components/Header";
import BenefitCard from "./components/benefitCard";
import benefitsData from "./components/benefitsData";
import articleData from "./components/articleData";
import LatestArticle from "./components/article";
export default function App() {
  const benefitCards = benefitsData.map((benefit) => {
    return <BenefitCard key={benefit.id} item={benefit} />;
  });
  const articlesHTML = articleData.map((article) => {
    return <LatestArticle key={article.id} item={article} />;
  });
  return (
    <div>
      <Nav />
      <Header />
      <main>
        <section className="benefitsSection">
          <h2 className="WhyChooseHeading">Why choose Easybank?</h2>
          <p className="WhyChooseParagraph">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
          <div className="benefits">{benefitCards}</div>
        </section>
        <section className="articleSection">
          <h2 className="articleHeading">Latest Articles</h2>
          <div className="articles">{articlesHTML}</div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
