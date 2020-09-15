import React from 'react';
import { FiArrowRight, FiDollarSign, FiPlus, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Header from 'components/Header';
import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
import Select from 'components/Form/Select';

import { Container } from './styles';

const Orders: React.FC = () => {
  const orders = [1, 2, 3, 4];

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <Breadcrumb
            items={[{ title: 'Início', url: '/' }, { title: 'Pedidos' }]}
          />
          <div className="section-header row" tabIndex={0}>
            <div className="col">
              <h1 className="section-title">Pedidos</h1>
              <p className="description">
                Seus pedidos recebidos até o momento.
              </p>
            </div>
            <div className="col">
              <div className="btn-group">
                <Select
                  name="order"
                  label="Ordem"
                  options={[
                    { label: 'Data de cadastro', value: 'date' },
                    { label: 'Valor do pedido', value: 'value' },
                  ]}
                />
                <Button icon={FiPlus} iconPosition="only-sm">
                  Cadastrar
                </Button>
              </div>
            </div>
          </div>

          <div className="section-content">
            <div className="card-list">
              {orders.map(order => (
                <Link
                  key={order}
                  to={`orders/${order}`}
                  className="card card-hover"
                >
                  <div className="card-header">
                    <div className="card-date" tabIndex={0}>
                      <strong>6</strong>
                      <span>Set</span>
                    </div>
                    <div className="card-header-info" tabIndex={0}>
                      <span>REF #1234</span>
                      <strong>DPIZZA</strong>
                    </div>
                  </div>
                  <div className="card-info">
                    <div className="card-info-item" tabIndex={0}>
                      <small>Cliente</small>
                      <div>
                        <FiUser />
                        <span>Jon Snow</span>
                      </div>
                    </div>
                    <div className="card-info-item" tabIndex={0}>
                      <small>Total com frente</small>
                      <div>
                        <FiDollarSign />
                        <span>R$ 8.950,00</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <Button
                      icon={FiArrowRight}
                      iconPosition="right"
                      outline
                      small
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                </Link>
              ))}
            </div>

            <Button outline className="btn-load-more">
              Carregar mais
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Orders;
