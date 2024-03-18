interface IntroductionProps {}

function Introduction(props: IntroductionProps) {
  return (
    <section>
      <h1 className="text-2xl font-bold">I&apos;m an educational technologist</h1>
      <p>
        What separates humans from animals is education. It has allowed us to build tools to improve
        our lives and the world around us.
      </p>
    </section>
  );
}

export default Introduction;
