import React from 'react';
import { App } from '../App';
import { mount } from 'enzyme';
import '../setupTests';
import { Body } from '../components/body';

describe('<App/>', ()=> {
  it('renders Hey', ()=>{
    const wrapper = mount(<App/>);
    expect(wrapper.contains(<div><Body/></div>)).toBe(true);
    wrapper.unmount()
  });
});