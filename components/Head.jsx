import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Sami Hindi is a full-time student living in Zurich, Switzerland.
      />
      <meta
        name="keywords"
        content="sami hindi, sami, hindi, web developer portfolio, sami developer, sami developer, mern stack, sami hindi portfolio, sami hacker"
      />
      <meta property="og:title" content="Sami Hindi's Portfolio" />
      <meta
        property="og:description"
        content="Hey! I'm Sami Hindi, a full stack developer. I'm currently studying in Switzerland."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Nitin Ranganath",
};
