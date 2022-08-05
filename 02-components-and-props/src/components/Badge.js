import React from 'react';

class Badge extends React.Component {
  render() {
    const { badgeText } = this.props;
    return <span className='badge'>{badgeText}</span>
  }
}

export default Badge;