import './Menu.sass'
import logo from '../../assets/logo.svg'
//import antd icons
import { DollarOutlined, PlusCircleOutlined, MinusSquareOutlined} from '@ant-design/icons';


function Menu() {
  return (
    <div className="menu">
        <div className="menu-logo">
            <img src={logo} alt="logo" />
        </div>

        <div className="menu-links">           

            <div className="menu-links-item">
                <DollarOutlined />
                <p>Geral</p>
            </div>

            <div className="menu-links-item">
                <PlusCircleOutlined />
                <p>Saldo</p>
            </div>

            <div className="menu-links-item">
                <MinusSquareOutlined />
                <p>Despesas</p>
            </div>
        </div>
    
    </div>
  );
}

export default Menu;
