import { createElement, useCallback } from "react";

import { TabContainer } from "./components/TabContainer";

export function TabAction(props) {
    const { onClickAction, tabName } = props;
    const onClickHandler = useCallback(() => {
        if (onClickAction) {
            onClickAction.execute();
        }
    }, [onClickAction]);

    return <TabContainer onClickAction={onClickHandler} tabName={tabName} />;
}
