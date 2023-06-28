document.addEventListener('alpine:init',()=>{
    Alpine.data('shortestWord',()=>{
        return{
            ShortWord:'',
            shortestWordResults:'',
            shortestWord_(){
                this.shortestWordResults=shortestWord(this.ShortWord);
                
            }
        }
    })
})