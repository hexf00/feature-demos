
const graph = new G6.Graph({
    container: 'graph1',  // String | HTMLElement，必须，容器 id 或容器本身
    width: Math.floor($('#graph1').width()),              // Number，必须，图的宽度
    height: Math.floor($('#graph1').height()),             // Number，必须，图的高度
    // renderer: "svg",
    modes: {
        default: ['node-click', 'brush-select', 'shortcut-keys', 'custom-drag-node', 'drag-canvas', 'zoom-canvas']
    },
    defaultEdge: {
        style: {
            endArrow: true,
            lineWidth: 3
        }
    },
    nodeStateStyles: {
        selected: {
            // hover 状态为 true 时的样式
            fill: '#d3adf7',
        },
    },
    edgeStateStyles: {
        hover: {
            stroke: '#f00'
        },
        // click 状态为 true 时的样式
        selected: {
            stroke: '#f00'
        }
    },
    animate: true            // Boolean，可选，切换布局时是否使用动画过度
});





// 读取数据和渲染
graph.data(data);
graph.render();