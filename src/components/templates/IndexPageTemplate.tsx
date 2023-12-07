'use client';

import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { usePageStateContext } from '@/contexts/PageStateContext';
import { useResize } from '@/hooks/useResize';
import { useScroll } from '@/hooks/useScroll';

export function IndexPageTemplate() {
  const windowRef = useRef<Window>(window);
  const { windowWidth, windowHeight } = useResize();
  const { scrollTop } = useScroll(windowRef);
  const { isLoading, setIsLoading } = usePageStateContext();

  useEffect(() => {
    const delay = 1000;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, [setIsLoading]);

  return (
    <Wrapper>
      <p>App Router</p>
      <div className='console'>
        <p>windowWidth: { windowWidth }</p>
        <p>windowHeight: { windowHeight }</p>
        <p>scrollTop: { scrollTop }</p>
        <p>isLoading: { String(isLoading) }</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 8px;
  height: 200vh;

  .console {
    position: fixed;
    top: 8px; right: 8px;
    text-align: right;
  }
`;
