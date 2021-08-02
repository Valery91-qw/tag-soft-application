import {PostType} from "../bll/posts-reducer";

export function groped(posts: Array<PostType>) {
    let intermediateGroups: Array<any> = [];
    for (let i = 0; i < posts.length; i++) {
        if(isAdd(posts[i])) intermediateGroups.push(posts[i])
    }
    function isAdd(current: any) {
        if(intermediateGroups.length === 0){
            return true
        } else {
            return current.userId !== intermediateGroups[intermediateGroups.length - 1].userId
        }
    }
    return intermediateGroups.map((el, index )=> ({
        key: `user message id ${el.userId}`,
        name: `users message`,
        count: intermediateGroups.length,
        startIndex: index * intermediateGroups.length,
        isCollapsed: true,
    }))
}