
import { Product } from './index';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ItemTypes } from '../../types';

describe('Procduct Component', () => {
  const product = {
    price: '10',
    name: 'test',
    description: 'test',
    manufacturer: 'test',
    itemType: ItemTypes.Mug,
    tags: 'Trees',
    added: 12345,
    slug: 'test',
  }
  it('should match snapshot', () => {
    const { asFragment } = render(
      <Product product={product} />,
    );

    expect(asFragment()).toMatchSnapshot();
  })
})