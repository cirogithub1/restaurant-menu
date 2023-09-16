export interface Billboard {
	id: 				string
	name: 			string
	imageUrl: 	string
}

export interface Category {
	id: 				string
	name: 			string
	billboard: 	Billboard
}

export interface Region {
	id: 		string
	name: 	string
}

export interface Style {
	id: 		string
	name: 	string
}	

export interface Grape {
	id: 		string
	name: 	string
}	

export interface Malt {
	id: 		string
	name: 	string
}	

export interface Color {
	id: 		string
	name: 	string
	value: 	string
}

export interface Plat {
	id: 					string
	name: 				string
	description: 	string
	category: 		Category
	formats: 			Format[]
	images: 			Image[]
	isFeatured: 	boolean
}

export interface Dessert {
	id: 					string
	name: 				string
	description: 	string
	category: 		Category
	formats: 			Format[]
	images: 			Image[]
	isFeatured: 	boolean
}

export interface Vin {
	id: 					string
	name: 				string
	description: 	string
	category: 		Category
	region: 			Region
	grape: 				Grape
	color: 				Color
	formats: 			Format[]
	images: 			Image[]
	isFeatured: 	boolean
}

export interface Bier {
	id: 					string
	name: 				string
	description: 	string
	category: 		Category
	region: 			Region
	malt: 				Malt
	color: 				Color
	formats: 			Format[]
	images: 			Image[]
	isFeatured: 	boolean
}

export interface Format {
	id: 			string
	name: 		string
	price: 		string
}

export interface Image {
	id: 	string
	url: 	string
}	