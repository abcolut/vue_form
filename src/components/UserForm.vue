<template>
  <section>
    <h2> User Form</h2>

    <div class="title">Telephone</div>
    <div class="control">
      <input type="tel" v-model.lazy="tel" v-mask="'+7(###)###-##-##'" placeholder="+7(123)456-78-90">
    </div>
    <div class="clear"></div>

    <div class="title">Name</div>
    <div class="control">
      <input type="text" v-model.lazy="name" placeholder="Name">
    </div>
    <div class="clear"></div>

    <div class="title">Agree box</div>
    <div class="control">
      <input type="checkbox" id="checkbox" v-model="checked">
    </div>
    <div class="clear"></div>

    <div class="title"></div>
    <div class="control">      
      <div v-for="er,i of errors">{{er}}</div>
    </div>
    <div class="clear"></div>



    <div class="title">Agree box</div>
    <div class="control">      
      <button :disabled="checkDisabled()">Send form</button>
    </div>

    <div class="clear"></div>
  </section>

</template>

<script>
  export default {
    name: 'userForm',
    components: {},
    data(){
      return{
        tel:null,
        name:null,
        check:null,
        checked:true,
        errors:[null,"",""],
      }
    },

    watch: {
      tel(data){
          //this.tel = data.replace(/[^0-9]/g, '');  
          console.log(this.tel.length)
          if (this.tel.length == 16) {
            this.errors[0]=""
          }else {
            this.errors[0]='Enter the phone correctly '
          }
        },
        name(data){
          // if (this.name.length >3) {
          //   this.errors[1]=""
          // }else {
          //   this.errors[1]='Name must be more than three characters'
          // }
        },
        checked(data){
          console.log(this.checked)
          if (this.checked) {
            this.errors[1]=""
          }else {
            this.errors[1]='You must agree with the data processing conditions'
          }
        },
      },
      methods: {
        checkDisabled(){
          for (var i=0; i<this.errors.length; i++){
            if (this.errors[i] != "") return true
          }
        return false
      },
      sendMessage(){
        //this.messageSent=true;
        //this.$store.dispatch("sendEmail",{tel:this.tel, cat:this.category, message:this.message, sum:this.sum })
      },
    }
  }
// (\+7[-_()\s]+|\+7\s?[(]{0,1}[0-9]{3}[)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2})
</script>


<style scoped>
h2{
  text-align:center;
}
.title{
  font-size: large;
  float: left;
  margin-right: 30px;
  padding: 3px;
  #height: 50px;  
  width:100px;
  margin:10px;
}
.control{
  float:left;
  margin:10px;
}
.clear{
  clear:both;
}
input{
  font-size: large;
}

@media screen and (max-width: 480px) {
.title{
  float:none;
  width:100%;
}
.control{
  float:none;
  #width:100%;
}
input{
  #width:100%
}
}


</style>
