import React, { PureComponent } from 'react';
import { View } from 'react-native';

class Line extends PureComponent {

  render() {
    return (
      <View style={{ backgroundColor: this.props.backgroundColor, height: this.props.height, paddingLeft: this.props.paddingLeft, paddingRight: this.props.paddingRight, marginTop: this.props.marginTopAndBottom, marginBottom: this.props.marginTopAndBottom}} >
        <View style={{ flex: 1, backgroundColor: this.props.lineColor }} />
      </View>
    )
  }
}

Line.defaultProps = {
  height: 0.5,
  paddingLeft: 0,
  paddingRight: 0,
  backgroundColor: '#FFFFFF',
  lineColor: '#D3D3D3',
  marginTopAndBottom: 10,
}

// Line.propTypes = {
//   height: React.PropTypes.number,
//   paddingLeft: React.PropTypes.number,
//   paddingRight: React.PropTypes.number,
//   backgroundColor: React.PropTypes.string,
//   lineColor: React.PropTypes.string,
// }

export default Line