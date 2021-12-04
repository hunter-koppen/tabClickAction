import React, { Component } from "react";

export default class TabAction extends Component {

    constructor(props) {
        super(props);
        this.nodeRef = React.createRef();
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        const parentNode = this.nodeRef.current.parentNode;
        const tabs = parentNode.querySelectorAll('.mx-name-' + this.props.tabName);
        const trigger = this.onClick;
        
        tabs.forEach(eventLoop);
        function eventLoop(item) {
            console.log("item", item)
            item.onclick = function(e) {
                trigger();
            };
        }
    }

    render() {
        return (
            <div ref={this.nodeRef}/>
        );
    }

    onClick() {
        if (this.props.onClickAction && this.props.onClickAction.canExecute) {
            this.props.onClickAction.execute();
        }
    }
}
