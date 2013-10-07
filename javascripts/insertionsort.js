(function(){

	/**
	* Insertion sort
	*/
	function insertionSort(items){
		var len 	= items.length,
			value,
			i, j;

		for(i=0; i<len; i++){
			value = items[i];
			for(j=i-1; j>-1 && items[j] > value; j--){
				items[j+1] = items[j];
			}
			items[j+1] = value;
		}
		return items;
	}
})();