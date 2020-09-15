import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  FiArrowLeft,
  FiCalendar,
  FiCreditCard,
  FiDollarSign,
  FiInfo,
  FiMapPin,
  FiShoppingBag,
  FiUser,
} from 'react-icons/fi';

import Header from 'components/Header';
import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';

import { Container } from './styles';

const Order: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <Breadcrumb
            items={[
              { title: 'Início', url: '/' },
              { title: 'Pedidos', url: '/orders' },
              { title: 'Detalhes do Pedido' },
            ]}
          />

          <div className="section-header row" tabIndex={0}>
            <div className="col">
              <h1 className="section-title">Pedido #1234</h1>
              <p className="description">Detalhes do pedido REF: #1234</p>
            </div>
            <div className="col">
              <Button
                icon={FiArrowLeft}
                outline
                onClick={() => history.goBack()}
              >
                Voltar
              </Button>
            </div>
          </div>

          <section className="section-content">
            <div className="row">
              <div className="col">
                <div className="card" tabIndex={0}>
                  <h2 className="card-title">Pedido</h2>
                  <div className="card-info">
                    <div className="card-info-item" tabIndex={0}>
                      <small>Data de cadastro</small>
                      <div>
                        <FiCalendar />
                        <span>10/01/2020 - 15:34</span>
                      </div>
                    </div>
                    <div className="card-info-item" tabIndex={0}>
                      <small>Lojista</small>
                      <div>
                        <FiShoppingBag />
                        <span>DBURGER</span>
                      </div>
                    </div>
                    <div className="card-info-item" tabIndex={0}>
                      <small>Itens do pedido</small>
                      <ul>
                        <li tabIndex={0}>
                          <span>1 x Pizza</span>
                          <span>R$ 4.990,00</span>
                        </li>
                        <li tabIndex={0}>
                          <span>1 x Pizza</span>
                          <span>R$ 4.990,00</span>
                        </li>
                        <li tabIndex={0}>
                          <span>1 x Pizza</span>
                          <span>R$ 4.990,00</span>
                          <div>
                            Colocar apenas a arroz na cobertura de chocolate
                          </div>
                        </li>
                        <li tabIndex={0}>
                          <span>1 x Pizza</span>
                          <span>R$ 4.990,00</span>
                        </li>
                        <li tabIndex={0}>
                          <span>1 x Pizza</span>
                          <span>R$ 4.990,00</span>
                          <div>Colocar apenas a cobertura de chocolate</div>
                        </li>

                        <li tabIndex={0}>
                          <span>SubTotal</span>
                          <span>R$ 14.990,00</span>
                          <div>
                            <span>Taxa de entrega</span>
                            <span>R$18,00</span>
                          </div>
                        </li>

                        <li tabIndex={0}>
                          <span>
                            <FiDollarSign />
                            Total
                          </span>
                          <span>R$15.990,00</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card" tabIndex={0}>
                  <h2 className="card-title">Cliente</h2>
                  <div className="card-info">
                    <div className="card-info-item" tabIndex={0}>
                      <small>Nome</small>
                      <div>
                        <FiUser />
                        <span>Jon Snow</span>
                      </div>
                    </div>
                    <div className="card-info-item" tabIndex={0}>
                      <small>Endereço</small>
                      <div>
                        <FiMapPin />
                        <span>
                          R. Campos Salles, 2070 - Sala 1 Vila Independência -
                          Piracicaba / SP
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" tabIndex={0}>
                  <h2 className="card-title">Pagamento</h2>
                  <div className="card-info">
                    <div className="card-info-item" tabIndex={0}>
                      <small>Método</small>
                      <div>
                        <FiCreditCard />
                        <span>Crédito</span>
                      </div>
                    </div>
                    <div className="card-info-item" tabIndex={0}>
                      <small>Valor de pagamento</small>
                      <div>
                        <FiDollarSign />
                        <span>R$ 14.990,00</span>
                      </div>
                    </div>
                    <div className="card-info-item" tabIndex={0}>
                      <small>Valor pendente</small>
                      <div>
                        <FiInfo />
                        <span className="text-danger">R$ 1.990,00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              outline
              icon={FiArrowLeft}
              className="btn-return"
              onClick={() => history.goBack()}
            >
              Voltar
            </Button>
          </section>
        </div>
      </Container>
    </>
  );
};

export default Order;
