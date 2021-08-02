import {IDetailsGroupRenderProps} from "@fluentui/react/lib/DetailsList";
import { mergeStyleSets } from "@fluentui/react/lib/Styling";

const classNames = mergeStyleSets({
    container: {
       backgroundColor: 'red'
    }
});

export const onRenderGroupHeader: IDetailsGroupRenderProps['onRenderHeader'] = (props) => {
    return (
        <div className={classNames.container}>
            {props?.group!.key}
        </div>
    )
}