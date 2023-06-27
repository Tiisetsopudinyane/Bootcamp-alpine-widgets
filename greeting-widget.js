

document.addEventListener("alpine:init",()=>{
    Alpine.data('greeting',()=>{
        return{
            name:'',
            message:'',
            greeting_(){
                this.message=greet(this.name);
            }
        }
    })
})