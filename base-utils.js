var JSUTILS = {
	//深度合并source对象至target对象
	objectMerge :function(target,source){
    let ss = JSON.parse(JSON.stringify(source))//深拷贝source对象，防止合并后source对象存在属性对象的引用
    return  Object.assign({}, target,ss)
},

//对象数组，通过对象中的k-v值来返回匹配的第一个对象
 getObjByArrayOfKV :(array,key,value){
    let obj = null
    if("object" === typeof(array)){
        array.every(item=>{
            if("object" === typeof item){
                if("undefined" !== typeof item[key]){
                    if(item[key] == value){
                        obj = item
                        return false
                    }
                }
            }
            return true
        })
    }
    return obj
}
	
}


