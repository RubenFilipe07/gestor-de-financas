import './Dashboard.sass'
import Card from '../Card/Card';

function Dashboard() {
  return (
    <div className="dashboard">
        <Card titulo="Saldo" valor={200} />
        <Card titulo="Despesas" valor={100} />
        <Card titulo="Orçamento" valor={100} />
    </div>
  );
}

export default Dashboard;
