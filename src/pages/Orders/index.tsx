/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  FiArrowLeft,
  FiArrowRight,
  FiDollarSign,
  FiPlus,
  FiRefreshCw,
  FiUser,
} from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import { formatToCurrency, getDebitAmount, getSearchParam } from 'utils';

import Header from 'components/Header';
import Breadcrumb from 'components/Breadcrumb';
import Button from 'components/Button';
import Select from 'components/Form/Select';
import Loader from 'components/Loader';

import { Container } from './styles';

interface Customer {
  name: string;
}
interface Payment {
  amount: number;
}

interface Order {
  _id: string;
  store: string;
  externalReference: string;
  reference: number;
  amount: number;
  customer: Customer;
  payments: Payment[];
}

interface Data {
  orders: Order[];
}

interface Pages {
  [index: number]: Order[];
}

const GET_ORDERS = gql`
  query getOrders {
    orders {
      _id
      store
      externalReference
      reference
      amount
      customer {
        name
      }
      payments {
        amount
      }
    }
  }
`;

const Orders: React.FC = () => {
  const history = useHistory();
  const { loading, error, data, refetch } = useQuery<Data>(GET_ORDERS);
  const [page, setPage] = useState<number>(0);
  const [orders, setOrders] = useState<Order[]>([]);
  const searchQuery = getSearchParam('s');

  const perPage = 6;

  const pagesTotal = useMemo(() => {
    const ordersData = data?.orders.length || 0;
    return Math.round(ordersData / perPage);
  }, [data, perPage]);

  const pages = useMemo<Pages>(() => {
    let ordersData = data?.orders;

    if (!ordersData) return [] as Pages;

    if (searchQuery.length > 0) {
      ordersData = ordersData.filter(order => {
        const fields = [
          order.store,
          order.externalReference,
          order.customer.name,
        ];

        const params: string[] = [];

        fields.forEach(field =>
          field
            .split(/\s+/)
            .forEach(word => params.push(word.toLowerCase().trim())),
        );

        const searchTerms = searchQuery
          .split(/\s+/)
          .map(term => term.toLowerCase().trim());

        const result = searchTerms.findIndex(term => params.includes(term));

        return result >= 0;
      });
    }

    const pagesData = [];

    for (let i = 0; i < pagesTotal; i += 1) {
      const n = i + 1;
      pagesData[i] = ordersData.filter(
        (_, index) =>
          index >= n * perPage - perPage && index <= n * perPage - 1,
      );
    }

    return pagesData;
  }, [data, pagesTotal, searchQuery]);

  const isPaginate = useMemo(() => {
    return page + 1 < pagesTotal;
  }, [page, pagesTotal]);

  const loadOrders = useCallback(() => {
    const newData = pages[page] || [];

    if (page === 0) {
      setOrders(newData);

      return newData;
    }

    const newOrders = [...orders, ...newData];

    setOrders(newOrders);

    return newOrders;
  }, [page, pages, searchQuery]);

  useEffect(() => {
    loadOrders();
  }, [loadOrders]);

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
            {data && (
              <>
                <div className="card-list">
                  {orders.map(order => {
                    const debitAmount = getDebitAmount({
                      amount: order.amount,
                      payments: order.payments,
                    });

                    return (
                      <Link
                        key={order._id}
                        to={`orders/${order.reference}`}
                        className="card card-hover"
                      >
                        <div className="card-header">
                          <div className="card-date" tabIndex={0}>
                            <strong>6</strong>
                            <span>Set</span>
                          </div>
                          <div className="card-header-info" tabIndex={0}>
                            <span>
                              REF
                              {` #${order.externalReference}`}
                            </span>
                            <strong>{order.store}</strong>
                          </div>
                        </div>
                        <div className="card-info">
                          <div className="card-info-item" tabIndex={0}>
                            <small>Cliente</small>
                            <div>
                              <FiUser />
                              <span>{order.customer.name}</span>
                            </div>
                          </div>
                          <div className="card-info-item" tabIndex={0}>
                            <small>Total com frente</small>
                            <div>
                              <FiDollarSign />
                              <span>{formatToCurrency(order.amount)}</span>
                            </div>
                          </div>
                          {debitAmount > 0 && (
                            <div className="card-info-item" tabIndex={0}>
                              <small>Valor pendente</small>
                              <div>
                                <FiDollarSign />
                                <span>{formatToCurrency(debitAmount)}</span>
                              </div>
                            </div>
                          )}
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
                    );
                  })}
                </div>

                {isPaginate && (
                  <Button
                    outline
                    className="btn-load-more"
                    onClick={() => setPage(page + 1)}
                  >
                    Carregar mais
                  </Button>
                )}
              </>
            )}

            {loading && (
              <div className="card">
                <Loader />
              </div>
            )}

            {error && (
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
            )}

            {!loading && searchQuery && orders.length <= 0 && (
              <div className="card alert">
                <h6>
                  Nenhuma informação encontrada para
                  <span className="text-primary">{` ${searchQuery}.`}</span>
                </h6>
                <Button
                  icon={FiArrowLeft}
                  outline
                  onClick={() => history.goBack()}
                >
                  Voltar
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Orders;
