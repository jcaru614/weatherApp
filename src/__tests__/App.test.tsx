import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from '../App';
import Nav from '../Components/Nav/index';

// configure({adapter: new Adapter()});

let wrapped:any;
beforeEach(() => {
    wrapped = shallow(<App />);
})
it('renders the component', () => {
    expect(wrapped.find(Nav).length).toEqual(1)
  });

  it('matches snapshot', () => {
    let component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });