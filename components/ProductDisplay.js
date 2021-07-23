app.component('product-display',{
    props:{
        premium:{
            type:Boolean,
            required:true
        }

    },

    template:
    /*html*/
    `
    <div class="container">
        <div class="row">
            <div class="col-6 d-flex justify-content-center">
                <img v-bind:src="image" alt="">
            </div>
            <div class="col-6">
                <div class="add-info">
                    <ul>
                        <li class="sku-js">
                            <span>SKU:</span>
                            <span class="value">{{ code }}</span>
                        </li>
                        <li>
                            <span>Availability:</span>
                            <span v-if="inStock" class="value">In Stock</span>
                            <span v-else class="value">Out Of Stock</span>
                        </li>
                        <li>
                            <span>Shipping: </span> {{ shipping }}
                        </li>
                    </ul>
                </div>
                
                <div class="title">
                    <h2>{{ name }}</h2>
                </div>
                
                <div class="price">
                  <i class="fas fa-dollar-sign"></i>  
                  <span> {{ price }} </span>
                </div>

                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>

                <div class="title-option">  
                    COLOR:
                    <span> {{ color }} </span>
                </div>

                <div class="image-option d-flex p-3">
                    <div class="card m-2" style="width: 3rem;" v-for="(item,index) in items" :key="item.id" >
                        <img  v-bind:src="item.image"  class="card-img-top" alt="..."  @mouseover="updateItem(index)">
                    </div>
                </div>

                <div class="d-flex item">
                    <div class="count-item"> {{ cart }} </div>
                    <button 
                      type="button" 
                      class="btn btn-primary btn-add-to-cart" 
                      :class="{disabledButton: !inStock}"
                      :disable="!inStock"
                      v-on:click="addToCart"
                    >
                        <i class="fas fa-shopping-bag"></i>
                        Add To Cart
                    </button>

                </div>
            </div>
          </div>
    </div>
    `,

    data(){
        return{
            cart:0,
            name:'Premier Cropped Skinny Jean',
            selectedItem:0,
            items:[
                {id:1,code:456,color:'blue',price:56,image:'./images/blue_jean.jpg',quantity:50},
                {id:2,code:578,color:'pink',price:89,image:'./images/pink_jean.jpg',quantity:20},
                {id:3,code:789,color:'orange',price:78,image:'./images/orange_jean.jpg',quantity:0},
                {id:4,code:999,color:'ligh blue',price:99,image:'./images/lightblue_jean.jpg',quantity:5}, 
            ]
        }
    },
    methods:{
        addToCart(){
            return this.cart += 1
        },
        updateItem(index){
            this.selectedItem = index
        }
    },
    computed:{
        image(){
           return this.items[this.selectedItem].image
        },
        price(){
            return this.items[this.selectedItem].price
        },
        color(){
            return this.items[this.selectedItem].color
        },
        code(){
            return this.items[this.selectedItem].code
        },
        inStock(){
            return this.items[this.selectedItem].quantity
        },
        shipping(){
            if(this.premium){
                return 'Free'
            }
            return '$45'
        }
    }

})