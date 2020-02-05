
<template>
<div class="row">
<div class="card border-primary mb-12 col-sm-3" style="max-width: 20rem; left:10%; height:300px">
  <div class="card-header">Búsqueda de usuarios</div>
  <div class="card-body">
    <h4 class="card-title">Ingresa un usuario de twitter</h4>
        <div class="form-group has-success">
            <input type="text" v-model="username" class="form-control" id="inputValid">
            <div class="valid-feedback">Usuario encontrado!.</div>
        </div>
        <button type="submit" class="btn-primary" v-on:click="loadTweets()">Enviar Usuario</button>
  </div>
</div>

<div class="card text-white bg-info mb-3 col-sm-9" style="max-width: 70%; left:11%" >
  <div class="card-header">Twitter Feed</div>
  <div class="card-body">
      <div>
    <h4 class="card-title">Usuario: {{username}}</h4>
        <a class="twitter-timeline" :href="url"></a>
      </div>
</div>
  </div>
</div>


</template>

<script>

import { Tweet, Moment, Timeline } from 'vue-tweet-embed'
import appService from '../app.service.js'
export default {
    data(){

        return{
            username:this.username,
            url:'',

        }

    },

methods:{

 loadTweets: function(){

     console.log(this.username);

     this.url= 'https://twitter.com/'+this.username+'?ref_src=twsrc%5Etfw';

    let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      document.head.appendChild(recaptchaScript);

      this.set(this,url, this.username, this.username);

      this.$forceUpdate();
 }
},
}
</script>

