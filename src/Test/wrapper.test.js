import React from 'react';
import { Wrapper } from '../components/wrapper';
import { shallow } from 'enzyme';
import { Body } from '../components/body';
import { Description } from '../components/description';

describe('<Wrapper/>', ()=> {
  it('contains the image and body component', ()=>{
    const wrapper = shallow(<Wrapper/>);
    expect(wrapper.contains(<Body/>)).toBe(true);
    expect(wrapper.contains(<Description/>)).toBe(true);
  });
});