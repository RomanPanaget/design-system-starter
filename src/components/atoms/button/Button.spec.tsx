import { render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render normally', () => {
    render(<Button>Hello</Button>);
  });
});
