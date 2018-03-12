'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (name, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
        // nodejs - commonjs canon
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // requirejs - amd canon
        define(factory);
    } else if (window) {
        // window - browser canon
        if (Object.prototype.toString.call(window.zhf).slice(8, -1).toLowerCase() !== 'object') {
            window.zhf = {};
        }
        window.zhf[name] = factory();
    }
})('createUniqueChar', function () {
    /**
     * 生成唯一字符
     * 代码执行时
     * 时间戳重复的几率很大(时间戳是每1毫秒变化一次，但是程序运行的速度是可以小于毫秒这个单位的)
     * 例如:
     * console.log(new Date().getTime());
     * console.log(new Date().getTime());
     * 上面两个同时执行，重复几率几乎是百分之百
     * 随机数重复的几率可以忽略不计
     * 两者结合一下
     * */
    function createUniqueChar() {
        return new Date().getTime() + Math.random().toString().substring(2);
    }

    return createUniqueChar;
});