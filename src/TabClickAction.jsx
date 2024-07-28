import { createElement, useCallback } from "react";

import { TabContainer } from "./components/TabContainer";

export function TabClickAction(props) {
    const { onClickAction, tabName } = props;
    const onClickHandler = useCallback(() => {
        onClickAction.execute();
    }, [onClickAction]);

    return <TabContainer onClickAction={onClickHandler} tabName={tabName} />;
}
