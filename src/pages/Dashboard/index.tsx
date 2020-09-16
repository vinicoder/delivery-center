import React, { useCallback, useEffect, useState } from 'react';
import {
  FiArrowRight,
  FiDollarSign,
  FiRefreshCw,
  FiShoppingBag,
  FiUsers,
} from 'react-icons/fi';
import { useQuery, gql } from '@apollo/client';
import { HorizontalBar, ChartComponentProps } from 'react-chartjs-2';

import Header from 'components/Header';

import Button from 'components/Button';
import { Link } from 'react-router-dom';
import Loader from 'components/Loader';
import { formatToCurrency } from 'utils';
import { Container } from './styles';

interface Customer {
  _id: string;
}

interface Order {
  _id: string;
  store: string;
  externalReference: string;
  amount: number;
  reference: number;
  customer: Customer;
}

interface Data {
  orders: Order[];
}

interface CardsParams {
  orders: number;
  clients: number;
  amount: number;
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
        _id
      }
    }
  }
`;

const Dashboard: React.FC = () => {
  const { loading, error, data, refetch } = useQuery<Data>(GET_ORDERS);
  const [cardsData, setCardsData] = useState<CardsParams>({
    orders: 0,
    clients: 0,
    amount: 0,
  });

  const stores = ['DPIZZA', 'DBURGER', 'DHOTDOG'];

  const loadCardsData = useCallback(() => {
    const orders = data?.orders;

    if (!orders) return;

    const totalOrders = orders?.length;

    const totalClients = [...new Set(orders.map(order => order.customer._id))]
      .length;

    const totalAmount = orders
      .map(order => order.amount)
      .reduce((a, b) => a + b);

    setCardsData({
      orders: totalOrders,
      clients: totalClients,
      amount: totalAmount,
    });
  }, [data]);

  useEffect(() => {
    loadCardsData();
  }, [loadCardsData]);

  const chartData = useCallback(() => {
    const orders = data?.orders;

    if (!orders) return [];

    const results: number[] = [];

    stores.forEach(store => {
      results.push(orders.filter(order => order.store === store).length || 0);
    });

    return results;
  }, [data, stores]);

  const chartConfig: ChartComponentProps = {
    data: {
      labels: stores,
      datasets: [
        {
          borderWidth: 0,
          backgroundColor: ['#FCCB99', '#85BDBF', '#FE5100'],
          data: chartData(),
        },
      ],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              drawTicks: false,
            },
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  return (
    <>
      <Header />
      <Container>
        <div className="container">
          <div className="section-header" tabIndex={0}>
            <h1 className="section-title">Olá, Jon Doe</h1>
            <h4 className="section-title section-title-thin text-secondary">
              Bom te receber de volta! :)
            </h4>
            <p className="description">
              Acompanhe o resumo geral das atividades da sua empresa.
            </p>
          </div>

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

          <div className="section-content">
            <div className="featured-cards">
              <div className="card card-outline" tabIndex={0}>
                <FiShoppingBag />
                <div>
                  <strong>{data && cardsData.orders}</strong>
                  <span>{loading ? 'Carregando...' : 'Pedidos'}</span>
                </div>
              </div>
              <div className="card card-outline" tabIndex={0}>
                <FiUsers />
                <div>
                  <strong>{data && cardsData.clients}</strong>
                  <span>{loading ? 'Carregando...' : 'Clientes'}</span>
                </div>
              </div>
              <div className="card card-outline" tabIndex={0}>
                <FiDollarSign />
                <div>
                  <strong>{data && formatToCurrency(cardsData.amount)}</strong>
                  <span>{loading ? 'Carregando...' : 'Faturamento'}</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="card" tabIndex={0}>
                  <div className="card-title">Pedidos recentes</div>
                  {data && (
                    <div className="order-list">
                      {data.orders.map(order => (
                        <Link
                          key={order._id}
                          to={`orders/${order.reference}`}
                          className="order"
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
                            <Button
                              outline
                              icon={FiArrowRight}
                              iconPosition="only"
                            >
                              Ver Detalhes
                            </Button>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}

                  {loading && <Loader />}
                </div>
              </div>
              <div className="col">
                <div className="card" tabIndex={0}>
                  <div className="card-title">Pedidos por lojista</div>
                  {data && (
                    <div className="chart">
                      <HorizontalBar
                        data={chartConfig.data}
                        options={chartConfig.options}
                      />
                    </div>
                  )}

                  {loading && <Loader />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Dashboard;
