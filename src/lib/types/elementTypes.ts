export type BlockList<T> = {
	items: T[];
};

export type SpotBlock = {
	content: {
		contentType: string;
		id: string;
		properties: {
			status: 'Ledig' | 'Reserveret' | 'Optaget';
			description: string;
			date: string;
			spots: number;
		};
	};
	settings: unknown | null;
};

export type OpeningHourBlock = {
	content: {
		contentType: string;
		id: string;
		properties: {
			day: string;
			hours: string;
		};
	};
	settings: unknown | null;
};

export type BringItemBlock = {
	content: {
		contentType: string;
		id: string;
		properties: {
			text: string;
			subText?: string;
		};
	};
	settings: unknown | null;
};

export type InfoCardBlock = {
	content: {
		contentType: string;
		id: string;
		properties: {
			icon?: string;
			title: string;
			description: string;
		};
	};
	settings: unknown | null;
};

export type ScheduleItemBlock = {
	content: {
		contentType: string;
		id: string;
		properties: {
			time: string;
			activity: string;
		};
	};
	settings: unknown | null;
};
