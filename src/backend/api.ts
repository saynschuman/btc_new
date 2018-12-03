const articles = [
    {
        id: 1,
        title: 'Article 1'
    },
    {
        id: 2,
        title: 'Article 2'
    },
    {
        id: 3,
        title: 'Article 3'
    }
]

export const getArticies = () => {
    const promise = new Promise((resolve, reject) => {
        const random = Math.random()
        if (random < 0.5) {
            setTimeout(() => resolve(articles), 2000)
        } else {
            setTimeout(() => reject('failed'), 2000)
        }
    })
    return promise.then(res => res).catch(error => error)
}