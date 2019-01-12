import VueRouter from 'vue-router';
import Home from './components/Home';
import IntakeSurvey from './components/intake-survey/IntakeSurvey';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/survey', component: IntakeSurvey },
    { path: '*', redirect: '/' }
  ]
});