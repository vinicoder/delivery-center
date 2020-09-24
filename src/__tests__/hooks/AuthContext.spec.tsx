import TestRender from 'react-test-renderer';
import { renderHook } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from 'hooks/AuthContext';

const { act } = TestRender;

describe('Hook: Auth', () => {
  it('should be able to sign in', async () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const user = {
      email: 'johndoe@example.com',
      password: 'secret',
    };

    await act(async () => {
      result.current.signIn(user);
    });

    expect(result.current.user?.email).toEqual('johndoe@example.com');

    expect(setItemSpy).toHaveBeenCalledWith(
      '@DeliveryCenter:user',
      JSON.stringify({ email: user.email }),
    );
  });

  it('should be able to sign out', async () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const user = {
      email: 'johndoe@example.com',
      password: 'secret',
    };

    await act(async () => {
      result.current.signIn(user);
    });

    expect(result.current.user?.email).toEqual('johndoe@example.com');

    expect(setItemSpy).toHaveBeenCalledWith(
      '@DeliveryCenter:user',
      JSON.stringify({ email: user.email }),
    );

    await act(async () => {
      result.current.signOut();
    });

    expect(result.current.user?.email).toBeUndefined();

    expect(setItemSpy).toHaveBeenCalled();
  });
});
