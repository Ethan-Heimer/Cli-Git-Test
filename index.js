const resolutionsFound = [];

const commonResloutions = [
   "high"
]

function sleep(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

function testURL(resolution){
    fetch(`https://iq-account.s3.amazonaws.com/P9Z129L/gallery/1001022922/${resolution}/3py3gsxej9.jpg`)
    .then(res => {
        if(res.status != 200)
            console.log("url failed: " + resolution);
        else
        {
            console.log("resolution found: " + resolution);
            resolutionsFound.push(resolution);
        }
    })
}

async function findValidResolutions(){
    for(var i = 0; i < commonResloutions.length; i++){ 
        testURL(commonResloutions[i]);
        await sleep(2500);
    }
    
    console.log(resolutionsFound);
}

findValidResolutions();