import React, { Component, createRef } from 'react';
import { Timeline as OriginalTimeline } from 'antd';

class Timeline extends Component<any, any> {
  ref = createRef<any>();

  componentDidUpdate(prevProps: any) {
    //TODO
  }

  componentDidMount() {
    //TODO
  }

  renderDot(item: any) {
    console.log("renderContent", item)

    if(this.props.renderDot) {
      return this.props.renderDot(item);
    }

    return null;
  }

  renderContent(item: any) {
    console.log("renderContent", item)

    if(this.props.renderContent) {
      return this.props.renderContent(item);
    }

    return item.content;
  }

  renderTimeItem(item: any) {
    console.log("renderTimeItem", item)

    return (
    <OriginalTimeline.Item {...item} dot={this.renderDot(item)}>
      {this.renderContent(item)}
    </OriginalTimeline.Item>
    );
  }

  renderTimeSteps() {
    console.log("renderTimeSteps", this.props)
    const timeSteps = this.props.steps ? this.props.steps : [];

    return timeSteps.map((item) => this.renderTimeItem(item));
  }

  render() {
    return (<OriginalTimeline ref={this.ref} {...this.props}>
      {this.renderTimeSteps()}
      </OriginalTimeline>);
  }
}

(Timeline as any).Item = OriginalTimeline.Item;

/*
(Timeline as any).Item = (props: any) => {
  return (
    <OriginalTimeline.Item {...props}>
      {props.content}
    </OriginalTimeline.Item>
  );
};
*/
export default Timeline;
