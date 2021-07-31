


export const postsApi = {
    getPosts() {
        return fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => {
                if(res.status === 200) {
                    return res.json()
                } else {

                }
            })
            .then(res => res)
    }
}