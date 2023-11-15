import { render } from '@testing-library/react';

import ReactCard from './react-card';

describe('ReactCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactCard />);
    expect(baseElement).toBeTruthy();
  });
});
