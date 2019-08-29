import toJson from 'enzyme-to-json';
import Enzyme, { mount } from 'enzyme';
import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import EllipisWithTooltip from './index';

Enzyme.configure({ adapter: new Adapter() });
jest.unmock('./index');
jest.mock('uuid/v4', () => jest.fn(() => 1));

const setup = (children, placement = 'top', style) =>
  mount(
    <EllipisWithTooltip id="a" placement={placement} style={style}>
      {children}
    </EllipisWithTooltip>
  );

describe('Ellipsis', () => {
  it('create a tooltip and ellipsis on text elemennt', () => {
    const wrapper = setup('this is some long text');
    const domElement = wrapper.find('#a div').getDOMNode();

    expect(wrapper.state().hasOverflowingChildren).toEqual(false);
    Object.defineProperty(domElement, 'clientWidth', {
      get() {
        return 300;
      },
    });
    Object.defineProperty(domElement, 'scrollWidth', {
      get() {
        return 400;
      },
    });
    wrapper.find('#a div').simulate('mouseEnter');
    expect(wrapper.state().hasOverflowingChildren).toEqual(true);
  });
  it('Should not be ellipsis', () => {
    const wrapper = setup('this is some short text');
    const domElement = wrapper.find('#a div').getDOMNode();

    expect(wrapper.state().hasOverflowingChildren).toEqual(false);
    Object.defineProperty(domElement, 'clientWidth', {
      get() {
        return 400;
      },
    });
    Object.defineProperty(domElement, 'scrollWidth', {
      get() {
        return 300;
      },
    });
    wrapper.find('#a div').simulate('mouseEnter');
    expect(wrapper.state().hasOverflowingChildren).toEqual(false);
  });

  it('create a tooltip  and elipsis on anchor elemennt', () => {
    const wrapper = setup(<a href="#"> long text </a>);
    const domElement = wrapper.find('#a div').getDOMNode();

    Object.defineProperty(domElement, 'clientWidth', {
      get() {
        return 300;
      },
    });
    Object.defineProperty(domElement, 'scrollWidth', {
      get() {
        return 400;
      },
    });
    wrapper.find('#a div').simulate('mouseEnter');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('use bottom tooltip placement', () => {
    const wrapper = setup('text', 'bottom');
    const domElement = wrapper.find('#a div').getDOMNode();

    Object.defineProperty(domElement, 'clientWidth', {
      get() {
        return 300;
      },
    });
    Object.defineProperty(domElement, 'scrollWidth', {
      get() {
        return 400;
      },
    });
    wrapper.find('#a div').simulate('mouseEnter');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should override styles', () => {
    const stylesToOverride = { someNewStyle: 'a', overflow: 'b' };
    const wrapper = setup('some text', 'top', stylesToOverride);

    const domElement = wrapper.find('#a div').getDOMNode();
    Object.defineProperty(domElement, 'clientWidth', {
      get() {
        return 300;
      },
    });
    Object.defineProperty(domElement, 'scrollWidth', {
      get() {
        return 400;
      },
    });
    wrapper.find('#a div').simulate('mouseEnter');

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
