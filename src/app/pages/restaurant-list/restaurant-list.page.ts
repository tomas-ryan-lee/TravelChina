import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { AppService } from 'src/app/services/app.service';

@Component({
	selector: 'app-restaurant-list',
	templateUrl: './restaurant-list.page.html',
	styleUrls: ['./restaurant-list.page.scss'],
})
export class RestaurantListPage implements OnInit {

	list: any;

	constructor(public app: AppService) { }

	ngOnInit() {
		this.getDatas()
	}

	async getDatas() {
		const options = {
			method: 'GET',
			url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants',
			params: {
				locationId: '297415'
			},
			headers: {
				'x-rapidapi-key': 'dd5c75fb94msh6585dc9e0aa91fap1b63c5jsn9050e254bdb4',
				'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
			}
		};
		try {
			const response = await axios.request(options);
			this.list = response.data.data.data;
		} catch (error) {
			console.error(error);
		}
	}

}
