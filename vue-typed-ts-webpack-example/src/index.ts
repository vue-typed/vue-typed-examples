import * as Vue from 'vue';
import { Component } from 'vue-typed';
import { Footer } from './components/footer'

@Component({ 
	template: require('./index.html'),
	components: {
		'my-foot': Footer
	} 
})
class App extends Vue {

}

new App().$mount('#app');