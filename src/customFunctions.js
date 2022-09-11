export function checkNo(x) {
	const cNo = x ? '' : 'not';
	return cNo;
}

export function checkNull(x) {
	const cNo = x ? x : '_____';
	return cNo;
}

export function checkList(x) {
	const cNo = x.length !== 0 ? x : '_____';
	return cNo;
}