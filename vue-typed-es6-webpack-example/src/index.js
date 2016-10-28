import { Component } from 'vue-typed';
import { Footer } from './components/footer'

@Component({ 
	template: require('./index.html'),
	components: {
		'my-foot': Footer
	} 
})
class App {

}

new App().$mount('#app');