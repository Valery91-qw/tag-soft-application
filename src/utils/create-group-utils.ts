import {PostType} from "../bll/posts-reducer";
import {IGroup} from "@fluentui/react/lib/DetailsList";

export function groped(posts: Array<PostType>): IGroup[] {
    // array of unique users
    let intermediateGroups: Array<PostType> = [];
    for (let i = 0; i < posts.length; i++) {
        if(isAdd(posts[i])) intermediateGroups.push(posts[i])
    }
    //compare
    function isAdd(current: PostType): boolean {
        if(intermediateGroups.length === 0){
            return true
        } else {
            return current.userId !== intermediateGroups[intermediateGroups.length - 1].userId
        }
    }

    return intermediateGroups.map((el, index )=> ({
        key: `user with id ${el.userId}`,
        name: `users message`,
        count: intermediateGroups.length,
        startIndex: index * intermediateGroups.length,
        isCollapsed: true,
        level: 0,
    }))
}