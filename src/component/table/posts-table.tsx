import * as React from 'react';
import {CheckboxVisibility, DetailsList, IGroup,} from '@fluentui/react/lib/DetailsList';
import {PostType} from "../../bll/posts-reducer";
import {onTableRowHeader} from "./row/table-row-header/table-row-header";
import {groped} from "../../utils/create-group-utils";
import {onTableRowFooter} from "./row/table-row-footer/table-row-footer";
import {onTableHeader} from "./table-header/table-header";


type PostsTablePropsType = {
    posts: Array<PostType>
}


export const PostsTable = ({posts}: PostsTablePropsType) => {
    const items = posts

    const myGroups: IGroup[] = groped(posts)

    return (
            <DetailsList
                items={items}
                groups={myGroups}
                groupProps={{
                    onRenderHeader: onTableRowHeader,
                    onRenderFooter: onTableRowFooter,
                }}
                onRenderDetailsHeader={onTableHeader}
                checkboxVisibility={CheckboxVisibility.hidden}
            />
    );
};
