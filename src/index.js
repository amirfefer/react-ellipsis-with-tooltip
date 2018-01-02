import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';
import uuidV4 from 'uuid/v4';

const ellipsisDefaultStyle = {
    overflow: 'hidden',
    overflowWrap: 'break-word',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordBreak: 'break-all',
};

class EllipisWithTooltip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasOverflowingChildren: false,
      text: undefined,
    };
    this.updateOverflow = this.updateOverflow.bind(this);
  }
  updateOverflow(e) {
    const el = e.target;
    const { hasOverflowingChildren, text } = this.state;

    if (!hasOverflowingChildren && el.scrollWidth > el.clientWidth) {
      this.setState({ hasOverflowingChildren: true });
      if (el.textContent !== text) {
        this.setState({ text: el.textContent });
      }
    } else {
      this.setState({ hasOverflowingChildren: false });
    }
  }

  render() {
    const { hasOverflowingChildren, text } = this.state;
    const { placement = 'top', style = {}, children } = this.props;
    const tooltip = <Tooltip id={`tooltip-${uuidV4()}`}>{text}</Tooltip>;

    const ellipsisStyle = { ...ellipsisDefaultStyle, ...style };

    return hasOverflowingChildren ? (
      <OverlayTrigger
        placement = {placement}
        overlay={tooltip}
      >
        <div style={ellipsisStyle}>{children}</div>
      </OverlayTrigger>
    ) : (
      <div style={ellipsisStyle} onMouseEnter={this.updateOverflow}>
        {this.props.children}
      </div>
    );
  }
}

EllipisWithTooltip.propTypes = {
    placement: PropTypes.string,
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};

export default EllipisWithTooltip;
