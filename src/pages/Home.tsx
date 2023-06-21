const Home = (): JSX.Element => {
  return (
    <section className="snap-center h-screen bg-[url('./assets/home-background.JPG')] bg-fixed bg-center bg-no-repeat bg-cover -z-1 flex flex-col content-center justify-center text-center p-0">
      <p className="text-6xl before:horizontal-line after:horizontal-line">Hey, I'm</p>
      <p className="text-9xl">Jonathan Lee</p>
      <p className="text-5xl">Software Engineer &#183; Roboticist &#183; Mechanical Engineer</p>
    </section>
  );
};

export default Home;