"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.componentLoader = exports.Components = void 0;
var _adminjs = require("adminjs");
var componentLoader = exports.componentLoader = new _adminjs.ComponentLoader();
var Components = exports.Components = {
  Dashboard: componentLoader.add('DashboardComponent', './dashboard'),
  ImageCell: componentLoader.add('ImageCellComponent', './imageCell')
};