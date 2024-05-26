export type TCountry = {
	name: {
		common: string;
		official: string;
	};
	flag: string;
	capital: string[] | undefined;
	population: number;
};
