
console.log("The app starts ...")

document.addEventListener('DOMContentLoaded', function(){

    var body = document.body
    var div1 = document.querySelector('.one')
    var divContent = div1.textContent

    var bodyHeight = body.offsetHeight
    var bodyWidth = body.offsetWidth
    var div1Width = div1.offsetWidth
    var div1Height = div1.offsetHeight

    console.log("Width :", bodyWidth)
    console.log("Height : ", bodyHeight)
    console.log("The div1 : ", div1 + "With" + divContent)
    console.log("THe width of the Div: " + div1Width)
    console.log("THe Height of Div1 : " + div1Height)
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
            div1Height : 0,
            div1Width : 0,

        };
    },
    created(){
        window.onload = ()=>{
            var body = document.body
            var div1 = document.querySelector('.two')
        
            this.bodyWidth = body.offsetWidth
            this.bodyHeight = body.scrollHeight
            this.viewportWidth = window.innerWidth
            this.viewportHeight = window.innerHeight
            this.div1Width = div1.offsetWidth
            this.div1Height = div1.offsetHeight

            this.setSizee()
            // var wishedWidth = 500
            // div1.style.width = wishedWidth+'px'
            var widthStr = this.div1Width.toString()
            var widthFull = widthStr + 'px'
            console.log("Width of DIV1: "+ this.div1Width)
            console.log("THe DivWidth string is :", widthStr)
            console.log("The DivWidthFull String is : ", widthFull)
            var divValue = '400px'

            this.div1Width = widthFull

            div1.style.width = widthFull
            // div1.style.width = '500px'
            div1.style.height = this.div1Height + 'px'
           
            // console.log("again Width of the body:", bodyWidth)
            // console.log("again Height of the body: ", bodyHeight)
            // console.log("THe viewport heigh : ", viewportHeight)
            // console.log("THe viewPort width : ", viewportWidth)
        }
    },
    mounted(){
        console.log("Now mounting")
    },
    computed: {
        setSize(){
            if (this.viewportWidth > 420){
                const fixedWidth = 375
                const fixedHeight = this.viewportHeight
                const obj = {
                    height : fixedHeight,
                    width : fixedWidth
                }
                return obj
            } else {
                const fixedWidth = this.viewportWidth
                const fixedHeight = this.viewportHeight
                const obj = {
                    height : fixedHeight,
                    width : fixedWidth
                }
                return obj
            }
        }
    },
    methods: {
        setSizee(){
            if (this.viewportWidth > 420){
                const fixedWidth = 375
                this.div1Width = 375
                const fixedHeight = this.viewportHeight
                this.div1Height = this.viewportHeight
                const obj = {
                    height : fixedHeight,
                    width : fixedWidth
                }
                return obj
            } else {
                console.log("The FOUND Width is inferior to 420 at :" + this.viewportWidth)
                const fixedWidth = this.viewportWidth
                this.div1Width = this.viewportWidth
                const fixedHeight = this.viewportHeight
                this.div1Height = this.viewportHeight

                const obj = {
                    height : fixedHeight,
                    width : fixedWidth
                }
                return obj
            }
        }
    }

});

App.mount('.two')