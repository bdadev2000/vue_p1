const app = Vue.createApp({
    data(){
        return{
            cart:0,
            inStock:true,
            name:'Premier Cropped Skinny Jean',
            image:'./images/blue_jean.jpg',
            color:'blue',
            items:[
                {id:1,code:456,color:'blue',price:56,image:'./images/blue_jean.jpg'},
                {id:2,code:578,color:'pink',price:89,image:'./images/pink_jean.jpg'},
                {id:3,code:789,color:'orange',price:78,image:'./images/orange_jean.jpg'},
                {id:4,code:999,color:'ligh blue',price:99,image:'./images/lightblue_jean.jpg'}, 
            ]
        }
    },
    methods:{
        addToCart(){
            return this.cart += 1
        },
        updateImage(itemImage){
            this.image = itemImage
        }
    }
})