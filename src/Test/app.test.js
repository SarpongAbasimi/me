import React from 'react';
import { App } from '../App';
import { mount } from 'enzyme';
import '../setupTests';
import { Wrapper } from '../components/wrapper';

describe('<App/>', ()=> {
  it('renders Hey', ()=>{
    const wrapper = mount(<App/>);
    expect(wrapper.contains(<Wrapper/>)).toBe(true);
    wrapper.unmount()
  });
});