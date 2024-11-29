"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productProperties = exports.categoriesProperties = void 0;
var productProperties = exports.productProperties = function productProperties(Components) {
  return {
    image: {
      isVisible: {
        list: true,
        show: true,
        edit: true
      },
      components: {
        list: Components.ImageCell,
        // Use custom component in list view
        show: Components.ImageCell // Use custom component in show view
      }
    },
    name: {
      isVisible: {
        list: true,
        show: true,
        edit: true
      }
    },
    price: {
      isVisible: {
        list: true,
        show: true,
        edit: true
      }
    },
    discountPrice: {
      isVisible: {
        list: true,
        show: true,
        edit: true
      }
    }
  };
};
var categoriesProperties = exports.categoriesProperties = function categoriesProperties(Components) {
  return {
    image: {
      isVisible: {
        list: true,
        show: true,
        edit: true
      },
      components: {
        list: Components.ImageCell,
        // Use custom component in list view
        show: Components.ImageCell // Use custom component in show view
      }
    },
    name: {
      isVisible: {
        list: true,
        show: true,
        edit: true
      }
    }
  };
};