import { animated, useTransition } from 'react-spring';

export const PageAnimatedWrapper = ({ children, direction }) => {
  const transitions = useTransition(true, {
    from: { opacity: 0, transform: `translate${direction}(-10%)` },
    enter: {
      opacity: 1,
      transform: `translate${direction}(0)`,
      transition: 'all 150ms',
    },
    leave: {
      opacity: 0,
      transform: `translate${direction}(10%)`,
      transition: 'all 150ms',
    },
    delay: 250,
  });
  return transitions(
    (styles, item) =>
      item && (
        <animated.div style={{ ...styles, overflow: 'hidden' }}>
          {children}
        </animated.div>
      )
  );
};
