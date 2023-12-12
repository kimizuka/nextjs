import { useEffect } from 'react';

declare global {
  interface Window {
    electron: {
      sayHello: () => void
      receiveHello: (handler: (event: any, args: any) => void) => void
      stopReceivingHello: (handler: (event: any, args: any) => void) => void
    }
  }
}

export function IndexPageTemplate() {
  useEffect(() => {
    window.electron.receiveHello(handleMessage);

    return () => {
      window.electron.stopReceivingHello(handleMessage);
    }
  }, [])

  function handleMessage (_evt, args) {
    alert(args);
  }

  function handleClickBtnHello() {
    window.electron.sayHello();
  }

  return (
    <div>
      <button onClick={ handleClickBtnHello }>HELLO</button>
    </div>
  );
}