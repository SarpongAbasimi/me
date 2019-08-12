import React from 'react';
import { Body } from '../components/body';
import { shallow } from 'enzyme';

describe('<Body/>', ()=>{
  it('renders a message', ()=>{
    const wrapper = shallow(<Body/>)
    expect(wrapper.text()).toBe('Hey, my name is Sarpong and I have empathy')
  });
});