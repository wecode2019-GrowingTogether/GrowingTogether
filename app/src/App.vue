 <template>
 <div id="app">

   <header>
     <h1>Growing Gardens</h1>
     <img src="./assets/GG-Logo.png"><br/>
     <span v-if="user">
        Hello {{user.username}}
     </span>
     <nav v-if="user">
       <button><RouterLink class="button" to="/">Home</RouterLink></button>
       <button @click="logout()"> Logout </button>
     </nav>
   </header>

   <main>
     <RouterView v-if="user" :user="user"></RouterView>
     <Auth v-else
       :onSignUp="handleSignUp"
       :onSignIn="handleSignIn"/>
   </main>

 </div>
</template>

<script>
import api from './services/api';
import Auth from './components/auth/Auth';

export default {
 data() {
   return {
     user: null
   };
 },
 components: {
   Auth
 },
 created() {
   const json = window.localStorage.getItem('profile');
   if(json){
     this.setUser(JSON.parse(json));
   }
 },
 methods: {
   handleSignUp(profile) {
     return api.signUp(profile)
       .then(user => {
         this.setUser(user);
       });
   },
   handleSignIn(credentials) {
     return api.signIn(credentials)
       .then(user => {
         this.setUser(user);
       });
   },
   setUser(user) {
     this.user = user;
     if(user) {
       api.setToken(user.token);
       window.localStorage.setItem('profile', JSON.stringify(user));
     }
     else {
       api.setToken();
       window.localStorage.removeItem('profile');
     }
   },
   logout() {
     window.localStorage.clear();
     this.user = null;
   }
 }

};
</script>

<style scoped>
#app {
 font-family: 'Avenir', Helvetica, Arial, sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 text-align: center;
 color: #2c3e50;
}

.button {
  text-decoration: none;
  color: black;
}

header {
  height: 180px;
  background: black;
  margin: 0;
  padding: 0
}

h1 {
  padding: 0px;
  margin: 0px;
}


</style>