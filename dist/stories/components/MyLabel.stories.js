"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color' }
    }
};
exports.default = meta;
exports.Basic = {
    args: {
        label: 'Pastito.',
        size: 'normal',
        allCaps: false,
    }
};
exports.AllCaps = {
    args: {
        size: 'normal',
        allCaps: true
    }
};
exports.Secondary = {
    args: {
        size: 'normal',
        color: 'secondary'
    }
};
exports.Tertiary = {
    args: {
        size: 'normal',
        color: 'tertiary'
    }
};
exports.CustomFontColor = {
    args: {
        size: 'h1',
        fontColor: "#5517ac"
    }
};
exports.CustomBackgroundColor = {
    args: {
        size: 'h1',
        fontColor: 'white',
        backgroundColor: 'black'
    }
};
