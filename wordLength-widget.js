document.addEventListener('alpine:init',()=>{
    Alpine.data('wordLength',()=>{
        return{
            str:'',
            wordLengthResults:0,
            wordLength_(){
                this.wordLengthResults=wordLength(this.str);
            }
        }
    })
})