async function run (){
    console.log(1);
    await setTimeout(()=>{
        console.log(2)
    },200)
    console.log(3);
}
function run1 (){
    console.log(1);
    Promise.resolve(item=>{console.log(2)})
    console.log(3);
}
//run()
run1()
