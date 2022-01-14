const initailState = {
    orders: []
}

function addToCart(state, item) {
    let newState = []
    let counter = state.filter(elem => (elem.article === item.article && elem.size === item.size))

    if (counter.length > 0) {

        newState = state.map(elem => {

            if (elem.article === item.article && elem.size === item.size) elem.count += 1
            return elem
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
    const newState = state.filter(elem => !(elem.article === item.article && elem.size === item.size))
    const newOrder = newState.map(e => {
        return { article: e.article, count: e.count, size: e.size }
    })



    localStorage.setItem('cart', JSON.stringify(newOrder))

    return newState

}

function decrement(state, dec) {
    let newOrder = []

    state.forEach(e => {
        let elem = { ...e }
        if (elem.article === dec.article && elem.size === dec.size) {
            elem.count -= 1
            if (elem.count > 0) {
                newOrder.push(elem)
            }
        } else newOrder.push(elem)

    })

    localStorage.setItem('cart', JSON.stringify(newOrder))

    return newOrder
}

function increment(state, inc) {
    const newOrder = state.map(elem => {
        if (elem.article === inc.article && elem.size === inc.size) elem.count += 1
        return elem
    })
    localStorage.setItem('cart', JSON.stringify(newOrder))
    return newOrder
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
                orders: removeFromCart(state.orders, payload)
            }
        case 'decrement':
            return {
                orders: decrement(state.orders, payload)
            }
        case 'increment':
            return {
                orders: increment(state.orders, payload)
            }
        case 'updateCart':
            return {
                orders: payload.order
            }
        default: return state
    }

}