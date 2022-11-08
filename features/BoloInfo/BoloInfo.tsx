import type { NextPage } from "next";
import Link from "next/link";

const BoloInfo: NextPage = ({ bolo, goToHomeBtn }: any) => {
  return (
    <div className="bolo">
      <Link href="/">
        <a className="botao-voltar">Voltar</a>
      </Link>

      <img src={bolo.image} alt="a foto de um delicioso bolo" />
      <h2 className="bolo-title">{bolo.title}</h2>
      <p className="bolo-description">{bolo.description}</p>
    </div>
  );
};

export default BoloInfo;
