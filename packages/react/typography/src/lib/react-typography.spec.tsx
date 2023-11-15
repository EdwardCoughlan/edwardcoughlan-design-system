import { render } from '@testing-library/react';

import ReactTypography from './react-typography';

describe('ReactTypography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactTypography />);
    expect(baseElement).toBeTruthy();
  });
});
