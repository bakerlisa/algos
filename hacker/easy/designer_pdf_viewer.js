function designerPdfViewer(h, word) {
    word = word.toLowerCase();
    const alpha = new Set(['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','v','y','z'])
    var max = [...alpha].indexOf(word[0]);

    for(var i=0;i<word.length;i++){
        if([...alpha].indexOf(word[i]) > max){
            max = [...alpha].indexOf(word[i])
        }
    }
    return word.length * 1 * max;

}

console.log(designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], 'abc'));
designerPdfViewer();