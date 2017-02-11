import { Injectable } from '@angular/core';

import { AppClass } from './app-class';

import { APPCLASSES } from './app-mock';

@Injectable()
export class AppServiceService {
	getAppClasses(): AppClass[]{
		return APPCLASSES;
	}

}
