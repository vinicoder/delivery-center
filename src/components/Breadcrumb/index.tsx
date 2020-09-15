import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface BreadcrumbProps {
  items: {
    title: string;
    url?: string;
  }[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <Container className="breadcrumbs">
      <ol>
        {items.map((item, key) => (
          <li
            key={item.title}
            itemScope
            itemType="http://data-vocabulary.org/Breadcrumb"
            className="home"
          >
            {item.url ? (
              <>
                <Link
                  to={item.url}
                  title={`Ir para ${item.title}`}
                  itemProp="url"
                >
                  <span itemProp="title">{item.title}</span>
                </Link>
              </>
            ) : (
              <span>{item.title}</span>
            )}
            {key < items.length - 1 && (
              <span>
                <FiChevronRight />
              </span>
            )}
          </li>
        ))}
      </ol>
    </Container>
  );
};

export default Breadcrumb;
