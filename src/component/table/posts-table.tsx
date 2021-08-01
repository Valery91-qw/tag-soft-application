import * as React from 'react';
import {
    GroupHeader,
    GroupedList,
    IGroupHeaderProps,
    IGroupRenderProps,
    IGroup,
} from '@fluentui/react/lib/GroupedList';
import {IColumn, IObjectWithKey, DetailsRow} from '@fluentui/react/lib/DetailsList';
import {FocusZone} from '@fluentui/react/lib/FocusZone';
import { SelectionMode } from '@fluentui/react/lib/Selection';
import {useConst} from '@fluentui/react-hooks';
import {createGroups, IExampleItem} from '@fluentui/example-data';
import {PostType} from "../../bll/posts-reducer";

const groupCount = 10;
const groupDepth = 1;

const groupProps: IGroupRenderProps = {
    onRenderHeader: (props?: IGroupHeaderProps): JSX.Element => (
        <GroupHeader {...props}
                     styles={{"check": {"display": "none"}, "headerCount": {"display": "none"} }}/>
    ),
};

type PostsTablePropsType = {
    posts: Array<PostType>
}

export const PostsTable = ({posts}: PostsTablePropsType) => {
    const items = posts
    const groups = useConst(() => createGroups(groupCount, groupDepth, 0, groupCount, 0, '322', true));

    console.log(groups)


    const columns = useConst(() =>
        Object.keys(items[0])
            .slice(0, 3)
            .map(
                (key: string): IColumn => ({
                    key: key,
                    name: key,
                    fieldName: key,
                    minWidth: 300,
                }),
            ),
    );

    const onRenderCell = React.useCallback(
        (nestingDepth?: number, item?: IExampleItem, itemIndex?: number, group?: IGroup): React.ReactNode => (
            <DetailsRow
                columns={columns}
                groupNestingDepth={nestingDepth}
                item={item}
                itemIndex={itemIndex!}
                selectionMode={SelectionMode.multiple}
                group={group}
            />
        ),
        [columns],
    );

    return (
        <>
            <GroupedList
                items={items}
                onRenderCell={onRenderCell}
                groups={groups}
                groupProps={groupProps}
            />

        </>
    );
};
