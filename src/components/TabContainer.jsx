import React, { createElement, useEffect } from "react";

function TabContainer(props) {
    const nodeRef = React.createRef();

    useEffect(() => {
        const tabs = nodeRef.current.parentNode.querySelectorAll(".mx-name-" + props.tabName);
        tabs.forEach(t => (t.onclick = onClick));
    }, []);

    function onClick() {
        if (props.onClickAction?.canExecute) {
            props.onClickAction.execute();
        }
    }

    return <div ref={nodeRef} />;
}

export default TabContainer;
