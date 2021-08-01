import {
    IGroupHeaderCheckboxProps,
    IGroupHeaderProps,
    IGroupRenderProps,
    IObjectWithKey
} from "@fluentui/react";
import { Toggle } from '@fluentui/react/lib/Toggle';
import {  GroupedList, GroupHeader } from '@fluentui/react/lib/GroupedList';
import { DetailsRow } from '@fluentui/react/lib/DetailsList';

import {PostType} from "../../bll/posts-reducer";

function grouped(items: Array<PostType>) {

    let currentGroup: any = []

    const groupNames = new Set(items.map(el => el.userId))

    groupNames.forEach( groupName => {
        const groupLength = items.filter(item => item.userId === groupName).length
        const groupIndex = items.map(item => item.userId).indexOf(groupName)
        currentGroup.push({
            key: groupName, name: groupName, level: 0, count: groupLength, startIndex: groupIndex
        })
    })

    return currentGroup

}

type PropsType = {
    posts: Array<PostType>
}

export const PostsTable = ({ posts }: PropsType ) => {

    const items: IObjectWithKey[] = createItems(posts)
    function createItems(posts: Array<PostType>) {
        const itemsGroup: Array<any> = []
        const itemsCount = new Set(posts.map(item => item.userId))
        itemsCount.forEach(currentItems => {
            itemsGroup.push({key: currentItems, name: `user:${currentItems}`})
        })
        return itemsGroup
    }

    const groups = grouped(posts)


    const groupsProps: IGroupRenderProps = {
        onRenderHeader: (props?: IGroupHeaderProps): JSX.Element => (
            <GroupHeader onRenderGroupHeaderCheckbox={onRenderGroupHeaderCheckbox} {...props} />
        )
    }
    const onRenderGroupHeaderCheckbox = (props?: IGroupHeaderCheckboxProps) => (
        <Toggle checked={props ? props.checked : undefined} />
    );

    const onRenderCell = (item?: any, itemIndex?: any, group?: any) => {
        return <DetailsRow item={item} itemIndex={itemIndex} group={group}>
            Hello
        </DetailsRow>
    }

    return (
        <div>
           <GroupedList items={items} onRenderCell={onRenderCell} groups={groups} groupProps={groupsProps}/>
        </div>
    )
}