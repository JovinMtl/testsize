
console.log("The app starts ...")

document.addEventListener('DOMContentLoaded', function(){

    var body = document.body

    var bodyHeight = body.offsetHeight
    var bodyWidth = body.offsetWidth

    console.log("Width :", bodyWidth)
    console.log("Height : ", bodyHeight)
})

window.onload = ()=>{
    var body = document.body

    var bodyWidth = body.offsetWidth
    var bodyHeight = body.scrollHeight
    var viewportWidth = window.innerWidth
    var viewportHeight = window.innerHeight
   

    console.log("again Width of the body:", bodyWidth)
    console.log("again Height of the body: ", bodyHeight)
    console.log("THe viewport heigh : ", viewportHeight)
    console.log("THe viewPort width : ", viewportWidth)
}

const App = Vue.createApp({

    data(){
        return {
            bodyHeight : 0,
            bodyWidth : 0,
            viewportWidth : 0,
            viewportHeight : 0,

        };
    },
    mounted(){
        window.onload = ()=>{
            var body = document.body
        
            this.bodyWidth = body.offsetWidth
            this.bodyHeight = body.scrollHeight
            this.viewportWidth = window.innerWidth
            this.viewportHeight = window.innerHeight
           
            // console.log("again Width of the body:", bodyWidth)
            // console.log("again Height of the body: ", bodyHeight)
            // console.log("THe viewport heigh : ", viewportHeight)
            // console.log("THe viewPort width : ", viewportWidth)
        }
    },

});

App.mount('.one')