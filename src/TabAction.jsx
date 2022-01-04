import { Component, createElement } from "react";

import TabContainer from "./components/TabContainer";

export default class TabAction extends Component {
    render() {
        return <TabContainer onClickAction={this.props.onClickAction} tabName={this.props.tabName} />;
    }
}
