import { Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	constructor() { }

	async openSite(url: string) {
		await Browser.open({ url: url });
	}
}
