import React, { useRef, FunctionComponent, Children } from 'react';
import { useSpring, useTrail, animated, config } from 'react-spring';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

/*
	useSpring
*/
export const SpringFadeUp: FunctionComponent = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [inView, entry] = useIntersectionObserver(elementRef, {
    threshold: 1,
  });

  const fade = useSpring({
    config: config.slow,
    from: {
      opacity: 0,
      transform: 'translate(0px, 24px)',
    },
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate(0px, 0px)' : 'translate(0px, 24px)',
  });

  return (
    <div ref={elementRef}>
      <animated.div style={fade}>{children}</animated.div>
    </div>
  );
};

/*
	useTrail
*/
export const TrailFadeUp: FunctionComponent = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [inView, entry] = useIntersectionObserver(elementRef, {
    threshold: 0.5,
  });

  const trail = useTrail(Children.count(children), {
    from: {
      opacity: 0,
      transform: 'translate(0px, 24px)',
    },
    opacity: inView ? 1 : 0,
    transform: inView ? 'translate(0px, 0px)' : 'translate(0px, 24px)',
  });

  return (
    <div ref={elementRef}>
      {trail.map((props: any, key: number) => (
        <animated.div key={key} style={props}>
          {Children.toArray(children)[key]}
        </animated.div>
      ))}
    </div>
  );
};
