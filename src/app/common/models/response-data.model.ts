export interface ResponseData<T> {
	status: string;
	message: string;
	data: T;
}

export interface ResponseDataRe<T> {
	status: string;
	message: string;
	datareturn: T;
}