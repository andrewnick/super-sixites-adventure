import Head from "next/head";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";

export default function Web() {
  const [loading, setLoading] = useState("is-loading");
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeout, setPageTimeout] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading("");
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenArticle = (article) => {
    setIsArticleVisible(!isArticleVisible);
    setArticle(article);

    setTimeout(() => {
      setPageTimeout(!timeout);
    }, 325);

    setTimeout(() => {
      setArticleTimeout(!articleTimeout);
    }, 350);
  };

  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout);
    setTimeout(() => {
      setPageTimeout(!timeout);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(!isArticleVisible);
      setArticle("");
    }, 350);
  };

  return (
    <div
      className={`body ${loading} ${
        isArticleVisible ? "is-article-visible" : ""
      }`}
    >
      <div>
        <div id="wrapper">
          <Header onOpenArticle={handleOpenArticle} timeout={timeout} />
          <Main
            timeout={timeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
          />
          <Footer timeout={timeout} />
        </div>

        <div id="bg" />
      </div>
    </div>
  );
}
