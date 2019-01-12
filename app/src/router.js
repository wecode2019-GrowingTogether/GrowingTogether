import VueRouter from 'vue-router';
import Home from './components/Home';
import IntakeSurvey from './components/intake-survey/IntakeSurvey';
import QuarterlySurvey from './components/intake-survey/QuarterlySurvey';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/survey', component: IntakeSurvey },
    { path: '/survey2', component: QuarterlySurvey },
    { path: '*', redirect: '/' }
  ]
});