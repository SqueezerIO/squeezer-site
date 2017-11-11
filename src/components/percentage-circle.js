import React, { Component } from 'react';

// const styles = require('style-loader!css-loader!./style.css');

class PercentageCircle extends Component {
  constructor(props) {
    super(props);
    const percent = props.percent;
    let leftTransformerDegree = '0deg';
    let rightTransformerDegree = '0deg';
    if (percent >= 50) {
      rightTransformerDegree = '180deg';
      leftTransformerDegree = (percent - 50) * 3.6 + 'deg';
    } else {
      rightTransformerDegree = percent * 3.6 + 'deg';
      leftTransformerDegree = '0deg';
    }
    this.state = {
      percent: this.props.percent,
      borderWidth: this.props.borderWidth < 2 || !this.props.borderWidth ? 2 : this.props.borderWidth,
      leftTransformerDegree: leftTransformerDegree,
      rightTransformerDegree: rightTransformerDegree,
    };
  }
  render() {
    return (
      <div
        className="circle"
        style={{
          overflow: 'hidden',
          position: 'relative',
          backgroundColor: '#e3e3e3',
          width: this.props.radius * 2,
          height: this.props.radius * 2,
          borderRadius: this.props.radius,
          backgroundColor: this.props.bgcolor,
        }}
      >
        <div
          className="left-wrap"
          style={{
            overflow: 'hidden',
            position: 'absolute',
            top:0,
            width: this.props.radius,
            height: this.props.radius * 2,
            left: 0,
          }}
        >
          <div
            id="id1"
            className="loader"
            style={{
              position:'absolute',
              left:0,
              top:0,
              borderRadius:1000,
              transformOrigin: '0 50%',
              left: this.props.radius,
              width: this.props.radius,
              height: this.props.radius * 2,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundColor: this.props.color,
              transform: 'rotate(' + this.state.leftTransformerDegree + ')',
            }}
          />
        </div>
        <div
          className="right-wrap"
          style={{
            overflow: 'hidden',
            position: 'absolute',
            top:0,
            width: this.props.radius,
            height: this.props.radius * 2,
            left: this.props.radius,
          }}
        >
          <div
            id="id2"
            className="loader2"
            style={{
              position:'absolute',
              left:0,
              top:0,
              borderRadius:1000,
              transformOrigin: '100% 50%',
              left: -this.props.radius,
              width: this.props.radius,
              height: this.props.radius * 2,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: this.props.color,
              transform: 'rotate(' + this.state.rightTransformerDegree + ')',
            }}
          />
        </div>
        <div
          className="inner-circle"
          style={{
            position: 'relative',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            left: this.props.borderWidth,
            top: this.props.borderWidth,
            width: (this.props.radius - this.props.borderWidth) * 2,
            height: (this.props.radius - this.props.borderWidth) * 2,
            borderRadius: this.props.radius - this.props.borderWidth,
            backgroundColor: this.props.innerColor,
          }}
        >
          {this.props.children ? this.props.children : <span className={'text ' + this.props.textStyle}>{this.props.percent}%</span>}
        </div>
      </div>
    );
  }
}

PercentageCircle.propTypes = {
  color: React.PropTypes.string,
  bgcolor: React.PropTypes.string,
  innerColor: React.PropTypes.string,
  radius: React.PropTypes.number,
  percent: React.PropTypes.number,
  borderWidth: React.PropTypes.number,
  textStyle: React.PropTypes.string,
};

PercentageCircle.defaultProps = {
  color: '#000',
  radius: 20,
  percent: 0,
  borderWidth: 2,
  bgcolor: '#e3e3e3',
  innerColor: '#fff',
  disabled: false,
  textStyle: '',
};

export default PercentageCircle;