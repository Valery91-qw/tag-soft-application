import {IDetailsGroupRenderProps} from "@fluentui/react/lib/DetailsList";
import { mergeStyleSets } from "@fluentui/react/lib/Styling";

const classNames = mergeStyleSets({
    container: {
       textAlign: 'left',
       marginLeft: '2em',
    },
    title: {
        fontSize: '1.5em',
    }
});

export const onRenderGroupHeader: IDetailsGroupRenderProps['onRenderHeader'] = (props) => {
    return (
        <div className={classNames.container}>
            <div className={classNames.title}>{props?.group!.key}</div>
        </div>
    )
}