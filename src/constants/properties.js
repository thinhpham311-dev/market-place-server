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

const reviewProperties = (Components, ...rest) => {
    return {
        comment: {
            isVisible: { edit: true, show: true },
            components: {
                edit: Components.TextAreaInput,  // Use custom component in list view
                show: Components.TextAreaInput,
            }
        }
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
    categoriesProperties,
    reviewProperties
}