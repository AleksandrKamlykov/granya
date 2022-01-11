const initailState = {
    orders: []
}

function addToCart(state, item) {
    let newState = []
    let counter = state.find(elem => elem.article === item.article)

    if (counter) {
        state.forEach(elem => {
            if (elem.article === item.article) {
                elem.count += 1
                newState.push(elem)
            } else newState.push(elem)
        })
    } else {
        item.count = 1
        newState = [...state, item]
    }
    localStorage.setItem('cart', JSON.stringify(newState.map(e => {
        return {
            article: e.article,
            count: e.count,
            size: e.size
        }
    })))

    return newState
}
function removeFromCart(state, item) {

    const newState = state.filter(elem => elem.article !== item)
    const newOrder = newState.map(e => {
        return { article: e.article, count: e.count, size: e.size }
    })



    localStorage.setItem('cart', JSON.stringify(newOrder))

    return newState

}
export const cartReducer = (state = initailState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'addToCart':
            return {
                orders: addToCart(state.orders, payload.order)
            };
        case 'removeFromCart':
            return {
                orders: removeFromCart(state.orders, payload.removeArticle)
            }
        default: return state
    }

}