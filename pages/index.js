import React from "react";
import Link from "next/link";

export async function getStaticProps() {
  const bolos = await fetch("https://62b4dc33530b26da4cc60791.mockapi.io/bolos")
    .then((respostaDoServer) => {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
    })
    .then((respostaEmObjeto) => respostaEmObjeto);

  return {
    props: {
      bolos,
    },
  };
}

export default function Home(props) {
  const { bolos } = props;

  return (
    <section>
      <h1>Blog de receitas de bolos</h1>
      <div className="container">
        {bolos.map((bolos) => (
          <Link href={`/bolos/${bolos.id}`} key={bolos.id}>
            <article className="cards">
              <img src={bolos.image} alt="Imagem de receita" />
              <a>{bolos.title}</a>
              <p>{bolos.description}</p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
