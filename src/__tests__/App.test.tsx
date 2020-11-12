import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Nav from '../Components/Nav/index';
// configure({adapter: new Adapter()});

let component: any;
beforeEach(() => {
  component = shallow(<App />);
})

describe('Parent Component', () => {
  it('renders Child component', () => {
    expect(component.containsMatchingElement(<Nav />)).toEqual(true);
  });


  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});