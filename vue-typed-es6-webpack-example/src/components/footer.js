import { Component } from 'vue-typed'

@Component({
	template: '<div><hr/><small>Officially typed at: <strong>{{now}}<strong>.</small></div>'
})
export class Footer {	
	
	get now() {
		return new Date()
	}
	
}