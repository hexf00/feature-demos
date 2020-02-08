
var repeatEdgesIndex = [];

for (let edgeAIndex = 0; edgeAIndex < data.edges.length; edgeAIndex++) {
    const edgeA = data.edges[edgeAIndex];

    if (repeatEdgesIndex.indexOf(edgeAIndex) !== -1) {
        continue;
    }

    var repeatEdges = data.edges.filter((edgeB, edgeBIndex) => {
        // if (edgeAIndex == edgeBIndex) {
        //     return false;
        // }
        let { source, target } = edgeB;
        if (source == edgeA.source && target == edgeA.target) {
            repeatEdgesIndex.push(edgeBIndex)
            return true;
        }
    });

    if (repeatEdges.length > 1) {
        //重复元素
        console.log(repeatEdges);
    }

}
