import {DetailsRow, IColumn} from "@fluentui/react/lib/DetailsList";

type PostsRowTypes = {
    nestingDepth: any
    items: Array<any>
    itemIndex: any
    group: any
    item: any
}

export const PostsRow = ({nestingDepth, group, items, itemIndex, item} : PostsRowTypes) => {

    const columns = () => Object.keys(items[1])
        .map(
            (key: string): IColumn => ({
                key: key,
                name: key,
                fieldName: key,
                minWidth: 300,
                maxWidth: 1000,
            }),
        )

    return <DetailsRow groupNestingDepth={nestingDepth} columns={columns()} item={item} itemIndex={itemIndex} group={group} />

}