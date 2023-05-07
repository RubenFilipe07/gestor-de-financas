import './Card.sass'

function Card(props: { titulo: string; valor: number; }) {
  return (
    <div className="card">
      <p className='card-titulo'>{props.titulo}</p>
      <h1 className='card-valor'>{props.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h1>
    </div>
  );
}

export default Card;
