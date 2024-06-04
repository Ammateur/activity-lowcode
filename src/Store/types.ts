// 页面生成之后需要导出的类型

import { CSSProperties } from "react";

interface RenderPage {
    [key: `x-${string}`]: string;
}
// 组件模块的公用类型， 其他业务组件的类型需要继承这个接口
interface CommonTreeNode {
    uid: string;
    x: number;
    y: number;
    w: number;
    h: number;
    scale: number;
    rotate: number;
    zLevel: number;
}
interface TextTreeNode extends CommonTreeNode {
    text: {
        content: string;
        color: string;
        size: number;
        font: string;
    };
    border: {
        width: number;
        style: string;
        color: string;
    };
    background: {
        color: string;
    };
}
// 画布渲染列表类型
type TreeNodeList = CommonTreeNode[];

export type { CommonTreeNode, TreeNodeList, RenderPage };
