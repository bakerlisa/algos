function designerPdfViewer(h, word) {
    word = word.toLowerCase();
    const alpha = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'])
    var max = 0;

    for(var i=0;i<word.length;i++){
        let idx = [...alpha].indexOf(word.charAt(i))
        // console.log(idx)
        console.log(word.charAt(i))
        console.log(h[idx])
        if(h[idx] > max){
            max = h[idx]
        }
    }
    return word.length * max;
}

// console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'));
    //9
console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba'));
console.log(designerPdfViewer([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z], 'qjhwkcexec'));

// console.log(designerPdfViewer([4, 2, 1, 2, 3, 4, 3, 7, 4, 1, 5, 6, 1, 3, 2, 6, 6, 3, 7, 3, 1, 1, 5, 1, 1, 4], 'qjhwkcexec'));
    // 70
// console.log(designerPdfViewer([a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z], 'qjhwkcexec'));
// designerPdfViewer();


