(function(global){
	var algojs = {
		linear_search: function(values, target){
			for(var i=0; i<values.length; i++){
				if(values[i] === target)
					return i;
			}
			return -1;
		}
	};

	if(global.algojs){
		throw new Error('algojs has already been defined');
	}else{
		global.algojs = algojs;
	}
})(typeof window == 'undefined' ? this : window);