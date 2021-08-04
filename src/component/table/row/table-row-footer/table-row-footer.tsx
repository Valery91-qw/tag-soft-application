import {IDetailsGroupRenderProps} from "@fluentui/react/lib/DetailsList";


export const onTableRowFooter: IDetailsGroupRenderProps['onRenderFooter'] = (props) => {
    if(props) {
        return (
            <div>
                <em>{`Number of (${props.group?.key}) posts ${props.group?.count}`}</em>
            </div>
        )
    }

    return null
}