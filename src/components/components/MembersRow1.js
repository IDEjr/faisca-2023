import MakeCard from './MakeCard';
import styles from './../../styles/ListMembers.module.css';

function MembersRow1({ members }) {
  const primeiro = members[0];
  const segundo = members[1];
  const terceiro = members[2];
  const quarto = members[3];

  return (
    <div className={styles.ListStyle}>
      <h1 className={styles.EquipeText}>Nossa <br></br>Equipe</h1>
      <MakeCard
        key={0}
        imagem={primeiro.imagem}
        nome={primeiro.nome}
        ciclo={primeiro.ciclo}
        marginLeft="20  %"
      />
      <MakeCard
        key={1}
        imagem={segundo.imagem}
        nome={segundo.nome}
        ciclo={segundo.ciclo}
        marginLeft=".1%"
      />
      <MakeCard
        key={2}
        imagem={terceiro.imagem}
        nome={terceiro.nome}
        ciclo={terceiro.ciclo}
        marginLeft="13.5%"
      />
      <MakeCard
        key={3}
        imagem={quarto.imagem}
        nome={quarto.nome}
        ciclo={quarto.ciclo}
        marginLeft=".1%"
      />
    </div>
  );
}

export default MembersRow1;