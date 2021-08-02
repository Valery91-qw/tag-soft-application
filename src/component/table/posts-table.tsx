import * as React from 'react';
import {DetailsList, IColumn, IGroup,} from '@fluentui/react/lib/DetailsList';
import {useConst} from '@fluentui/react-hooks';
import {PostType} from "../../bll/posts-reducer";
import {onRenderGroupHeader} from "./table-header/table-header";
import {groped} from "../../utils/create-group-utils";



type PostsTablePropsType = {
    posts: Array<PostType>
}


export const PostsTable = ({posts}: PostsTablePropsType) => {
    const items = posts

    const myGroups: IGroup[] = groped(posts)

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



    return (
        <>
            <DetailsList
                items={items}
                groups={myGroups}
                groupProps={{
                    onRenderHeader: onRenderGroupHeader
                }}
            />

        </>
    );
};
