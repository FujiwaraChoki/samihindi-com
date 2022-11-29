const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>
      <p>
        I'm a full-stack developer with a passion for learning new technologies.
        I'm currently in School in Zurich, Switzerland, and I'm looking forward
        to studying Computer Science at the ETH Zurich. I'm an avid Gym-Goer and
        I love to listen to music, especially Hardstyle and sometimes Japanese
        City Pop.
      </p>
      <p>
        I'm currently working on a few projects, including a Discord Bot, which
        should be released soon.
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
