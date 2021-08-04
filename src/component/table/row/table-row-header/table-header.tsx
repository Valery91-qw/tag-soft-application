import {IDetailsGroupRenderProps, IGroupDividerProps} from "@fluentui/react/lib/DetailsList";
import { mergeStyleSets } from "@fluentui/react/lib/Styling";
import React from "react";
import {Toggle} from "@fluentui/react";

const classNames = mergeStyleSets({
    container: {
       display: 'flex',
       textAlign: 'left',
       margin: '1em 0 1em 2em',
    },
    title: {
        fontSize: '1.5em',
    },
    button : {
        alignSelf: 'center',
        marginRight: '2em',
        marginBottom: '0',
    }
});

export const onRenderGroupHeader: IDetailsGroupRenderProps['onRenderHeader'] = (props) => {

    const handleToggle = (props: IGroupDividerProps) => {
        return () => {
            if (props?.group && props.onToggleCollapse) {
                 props?.onToggleCollapse(props?.group)
            }
        }
    }

    if (props?.group) {
        return (
            <div className={classNames.container}>
                <Toggle className={classNames.button} onClick={handleToggle(props)} />
                <div className={classNames.title}>{props?.group!.key}</div>
            </div>
        )
    }

    return null
}