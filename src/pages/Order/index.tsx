import React, { useEffect, useMemo, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import {
  FiArrowLeft,
  FiCalendar,
  FiCreditCard,
  FiDollarSign,
  FiInfo,
  FiMapPin,
  FiRefreshCw,
  FiShoppingBag,
  FiUser,
} from 'react-icons/fi';
import { useQuery, gql } from '@apollo/client';

import Header from 'components/Header';
import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
import Loader from 'components/Loader';

import { formatToCurrency, getDebitAmount } from 'utils';
import { PAYMENT_METHOD } from 'utils/enum';

import { Container } from './styles';

export interface Customer {
  name: string;
}

export interface Address {
  number: string;
  neighborhood: string;
  complement: string;
  city: string;
  state: string;
  street: string;
}

export interface Item {
  _id: string;
  name: string;
  amount: string;
  quantity: number;
  note?: string;
}

export interface Payment {
  _id: string;
  method: string;
  amount: number;
}

export interface Order {
  _id: string;
  reference: number;
  store: string;
  externalReference: string;
  amount: number;
  deliveryFee: number;
  customer: Customer;
  address: Address;
  items: Item[];
  payments: Payment[];
}

export interface Data {
  orders: Order[];
}

const GET_ORDERS = gql`
  query getOrders {
    orders {
      _id
      reference
      store
      externalReference
      amount
      deliveryFee
      customer {
        name
      }
      address {
        number
        neighborhood
        complement
        city
        state
        street
      }
      items {
        _id
        name
        amount
        quantity
        note
      }
      payments {
        _id
        method
        amount
      }
    }
  }
`;

const Order: React.FC = () => {
  const history = useHistory();
  const { params } = useRouteMatch<{ id: string }>();
  const { loading, error, data, refetch } = useQuery<Data>(GET_ORDERS);
  const [order, setOrder] = useState<Order | null>(null);

  const { id: reference } = params;

  useEffect(() => {
    const orders = data?.orders;

    if (!orders) return;

    const orderObj = orders.find(
      orderItem => orderItem.reference === parseInt(reference, 10),
    );

    if (!orderObj) return;

    setOrder(orderObj);
  }, [data, reference]);

  const debitAmount = useMemo(() => {
    if (!order?.amount && !order?.payments) return 0;

    return getDebitAmount({
      amount: order.amount,
      payments: order.payments,
    });
  }, [order]);

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
              <h1 className="section-title">
                Pedido
                {order && ` #${order?.externalReference}`}
              </h1>
              <p className="description">
                Detalhes do pedido
                {order && ` REF: #${order?.externalReference}`}
              </p>
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
            {order && (
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
                          <span>{order.store}</span>
                        </div>
                      </div>
                      <div className="card-info-item" tabIndex={0}>
                        <small>Itens do pedido</small>
                        <ul>
                          {order.items.map(item => (
                            <li key={item._id} tabIndex={0}>
                              <span>{`${item.quantity} x ${item.name}`}</span>
                              <span>{formatToCurrency(item.amount)}</span>
                              {item.note && <div>{item.note}</div>}
                            </li>
                          ))}

                          <li tabIndex={0}>
                            <span>SubTotal</span>
                            <span>
                              {formatToCurrency(
                                order.amount - order.deliveryFee,
                              )}
                            </span>
                            <div>
                              <span>Taxa de entrega</span>
                              <span>{formatToCurrency(order.deliveryFee)}</span>
                            </div>
                          </li>

                          <li tabIndex={0}>
                            <span>
                              <FiDollarSign />
                              Total
                            </span>
                            <span>{formatToCurrency(order.amount)}</span>
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
                          <span>{order.customer.name}</span>
                        </div>
                      </div>
                      <div className="card-info-item" tabIndex={0}>
                        <small>Endereço</small>
                        <div>
                          <FiMapPin />
                          <span>
                            {`${order.address.street}, ${
                              order.address.number
                            } ${
                              order.address.complement &&
                              ` - ${order.address.complement}`
                            } - ${order.address.neighborhood} - ${
                              order.address.city
                            } / ${order.address.state}`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card" tabIndex={0}>
                    <h2 className="card-title">Pagamento</h2>
                    <div className="card-info">
                      {order.payments.map(payment => (
                        <div key={payment._id}>
                          <div className="card-info-item" tabIndex={0}>
                            <small>Método</small>
                            <div>
                              <FiCreditCard />
                              <span>{PAYMENT_METHOD[payment.method]}</span>
                            </div>
                          </div>
                          <div className="card-info-item" tabIndex={0}>
                            <small>Valor de pagamento</small>
                            <div>
                              <FiDollarSign />
                              <span>{formatToCurrency(payment.amount)}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      {debitAmount > 0 && (
                        <div className="card-info-item" tabIndex={0}>
                          <small>Valor pendente</small>
                          <div>
                            <FiInfo />
                            <span className="text-danger">
                              {formatToCurrency(debitAmount)}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {loading && (
              <div className="card">
                <Loader />
              </div>
            )}

            {error ||
              (data && !order && (
                <div className="card alert">
                  <h6>Nenhuma informação disponível.</h6>
                  <Button
                    icon={FiRefreshCw}
                    outline
                    iconPosition="right"
                    onClick={() => refetch()}
                  >
                    Tentar novamente
                  </Button>
                </div>
              ))}

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
