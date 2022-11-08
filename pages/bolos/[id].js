import { useRouter } from "next/router";
import BoloInfo from "../../features/BoloInfo/BoloInfo.tsx";

export default function Bolos({ bolo }) {
  const router = useRouter();

  const homeHandle = () => router.push("/");

  return <BoloInfo bolo={bolo} goToHomeBtn={homeHandle} />;
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://62b4dc33530b26da4cc60791.mockapi.io/bolos/${params?.id}`
  );
  const bolo = await res.json();

  return {
    props: { bolo },
  };
}

export async function getStaticPaths({}) {
  const res = await fetch("https://62b4dc33530b26da4cc60791.mockapi.io/bolos");
  const bolos = await res.json();
  const paths = bolos.map((bolo) => {
    return {
      params: { id: bolo.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
