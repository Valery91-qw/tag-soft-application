export const postsApi = {
    getPosts(){
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                if (!res.ok) {
                    throw new Error(res.statusText)
                }
                return res.json()
            }).then(res => res)
    }
}