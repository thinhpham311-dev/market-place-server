const productProperties = (Components, ...rest) => {
    return {
        image: {
            isVisible: { list: true, show: true, edit: true },
            components: {
                list: Components.ImageCell,  // Use custom component in list view
                show: Components.ImageCell,  // Use custom component in show view
            },

        },
        name: {
            isVisible: { list: true, show: true, edit: true },
        },
        price: {
            isVisible: { list: true, show: true, edit: true },
        },
        discountPrice: {
            isVisible: { list: true, show: true, edit: true },
        },
    }
}

const categoriesProperties = (Components, ...rest) => {
    return {
        image: {
            isVisible: { list: true, show: true, edit: true },
            components: {
                list: Components.ImageCell,  // Use custom component in list view
                show: Components.ImageCell,  // Use custom component in show view
            }
        },
        name: {
            isVisible: { list: true, show: true, edit: true },
        }
    }
}

export {
    productProperties,
    categoriesProperties
}