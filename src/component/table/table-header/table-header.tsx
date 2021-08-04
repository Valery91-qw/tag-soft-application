import {IDetailsListProps} from "@fluentui/react/lib/DetailsList";
import * as React from "react";


export const onTableHeader: IDetailsListProps['onRenderDetailsHeader'] = (props) => {
    return (
        <div>
            Table Header
        </div>
    )
}