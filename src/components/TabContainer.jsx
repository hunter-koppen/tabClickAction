import React, { createElement, useEffect } from "react";

export function TabContainer(props) {
    const { onClickAction, tabName } = props;
    const nodeRef = React.createRef();

    useEffect(() => {
        const tabs = nodeRef.current.parentNode.parentNode.querySelectorAll(".mx-name-" + tabName);
        tabs.forEach(t => (t.onclick = onClickAction));
    }, []);

    return <div ref={nodeRef} />;
}
