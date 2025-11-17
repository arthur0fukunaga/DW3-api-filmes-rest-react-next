import Head from "next/head";
import Container from "@/components/Container";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Filmes API</title>
          <meta
            name="description"
            content="Consumo em React de uma API de Filmes"
          />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <HomeContent/>
        </Container>
      </main>
    </>
  );
};
