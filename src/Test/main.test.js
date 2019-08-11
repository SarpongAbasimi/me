import React from 'react';
import { App } from '../App';
import { shallow } from 'enzyme';
import '../setupTests';

describe('<App/>', ()=> {
  it('renders Hey', ()=>{
    const wrapper = shallow(<App/>);
    expect(wrapper.text()).toBe('hey')
  });
});