function Add(){
    var inputarr = [];
    var size = 5;
    var s=0;
    for(var a=0; a<size; a++) 
    { 
    inputarr[a] = prompt('Enter array Element ' + (a+1));

        s +=+inputarr[a];

    }
    console.log("Input :["+inputarr+"]");
    document.write("Input :["+inputarr+"]<br>")
    const m=Math.max(...inputarr);
    const result={
        sum: s,
        max:m
    }
    console.log(result);
    document.write("Output:{sum: "+result.sum+", max: "+result.max+"}");
}
Add()



