import React from 'react';
import { shallow } from 'enzyme';
import { Description } from '../components/description';

describe('<Description/>', ()=>{
  it('gives a description about my current work place', ()=>{
    const wrapper = shallow(<Description/>);
    expect(wrapper.text()).toBe('👨🏿‍💻 Software Engineer at Deloitte.')
  });
});