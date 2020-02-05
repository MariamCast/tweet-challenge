
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Twitter Feed</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
 <ul class="navbar-nav mr-auto">
     <li class="nav-item active"><router-link to="/" class="nav-link" exact >Home <span class="sr-only">(current)</span></router-link></li>
     <li class="nav-item "><router-link to="/twitterFeed" class="nav-link" > Tweets </router-link></li>

</ul>
  </div>
</nav>
</template>
