import React from 'react';
import {
  FiArrowRight,
  FiDollarSign,
  FiShoppingBag,
  FiUsers,
} from 'react-icons/fi';

import { HorizontalBar, ChartComponentProps } from 'react-chartjs-2';

import Header from 'components/Header';

import Button from 'components/Button';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const Dashboard: React.FC = () => {
  const latestOrders = [1, 2, 3];

  const chartData: ChartComponentProps = {
    data: {
      labels: ['DPIZZA', 'DBURGER', 'DHOTDOG'],
      datasets: [
        {
          borderWidth: 0,
          backgroundColor: ['#FCCB99', '#85BDBF', '#FE5100'],
          data: [130, 240, 100],
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

          <div className="section-content">
            <div className="featured-cards">
              <div className="card card-outline" tabIndex={0}>
                <FiShoppingBag />
                <div>
                  <strong>6.530</strong>
                  <span>Pedidos</span>
                </div>
              </div>
              <div className="card card-outline" tabIndex={0}>
                <FiUsers />
                <div>
                  <strong>250</strong>
                  <span>Clientes</span>
                </div>
              </div>
              <div className="card card-outline" tabIndex={0}>
                <FiDollarSign />
                <div>
                  <strong>R$ 4.500</strong>
                  <span>Faturamento</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <div className="card" tabIndex={0}>
                  <div className="card-title">Pedidos recentes</div>
                  <div className="order-list">
                    {latestOrders.map(order => (
                      <Link
                        key={order}
                        to={`orders/${order}`}
                        className="order"
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
                </div>
              </div>
              <div className="col">
                <div className="card" tabIndex={0}>
                  <div className="card-title">Pedidos por lojista</div>
                  <div className="chart">
                    <HorizontalBar
                      data={chartData.data}
                      options={chartData.options}
                    />
                  </div>
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
