import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';

@Component({
	selector: 'app-convertisseur-list',
	templateUrl: './convertisseur-list.page.html',
	styleUrls: ['./convertisseur-list.page.scss'],
})
export class ConvertisseurListPage {

	result: number = 0.00;
	currency: string = ' €';

	public form: FormGroup = this.fb.group({
		montant: ['', Validators.required],
		convert: [, Validators.required],
	})

	constructor(public fb: FormBuilder) { }

	submitForm() {
		const data = this.form.value;
		if (data.montant) {
			data.convert 
				? this.convertInit('EUR', 'CNY', data.montant).then(() => this.currency = ' ¥')
				: this.convertInit('CNY', 'EUR', data.montant).then(() => this.currency = ' €')
		} else {
			console.error("Veuillez indiquer le montant");
		}
	}


	async convertInit(from: string, to: string, amount: string) {
		const options = {
			method: 'GET',
			url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',
			params: {
				from: from,
				to: to,
				amount: amount
			},
			headers: {
				'x-rapidapi-key': 'dd5c75fb94msh6585dc9e0aa91fap1b63c5jsn9050e254bdb4',
				'x-rapidapi-host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
			}
		};

		try {
			const response = await axios.request(options);
			this.result = response.data.result
		} catch (error) {
			console.error(error);
		}
	}

}
