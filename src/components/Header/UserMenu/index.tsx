import { useAuth } from 'hooks/AuthContext';
import React, { useEffect, useState } from 'react';
import { FiPower, FiUser } from 'react-icons/fi';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { isChildOf } from 'utils';

import { Container } from './styles';

const UserMenu: React.FC = () => {
  const { signOut } = useAuth();
  const [userMenuIsOpened, setUserMenuIsOpened] = useState(false);

  useEffect(() => {
    function handleBlur(event: MouseEvent) {
      if (!isChildOf(event.target as HTMLElement, '#userMenu')) {
        setUserMenuIsOpened(false);
      }
    }

    document.addEventListener('click', handleBlur);
    return () => document.removeEventListener('click', handleBlur);
  }, []);

  return (
    <Container isOpened={userMenuIsOpened} id="userMenu">
      <button
        type="button"
        id="userMenuDropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={() => setUserMenuIsOpened(!userMenuIsOpened)}
      >
        <HiOutlineUserCircle />
        <span>Gerente</span>
      </button>
      <div aria-labelledby="userMenuDropdown">
        <button type="button">
          <FiUser />
          Minha conta
        </button>
        <button type="button" onClick={signOut}>
          <FiPower />
          Sair
        </button>
      </div>
    </Container>
  );
};

export default UserMenu;
