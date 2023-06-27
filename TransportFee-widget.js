document.addEventListener("alpine:init",()=>{
    Alpine.data('transport',()=>{
        return{
            dayTime:'',
            results:'',
            dayTime_(){
                console.log("nothing at all")
                this.results=transportFee(this.dayTime);
                console.log(this.results+' after')
            }
        }
    })
})