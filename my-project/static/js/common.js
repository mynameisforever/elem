//判断某年份是否为闰年
function isLeapYear(year){
	if(year%4==0 && year%100!=0 || year%400==0){
		return true;
	}
	return false;
}
//将日期格式化输出 “2015|08|24”
function formatDate(oDate,str){
	var year = oDate.getFullYear();
	var month = oDate.getMonth()+1;
	var day = oDate.getDate();
	
	/*if(month<10){
		month = "0"+month;
	}
	if(day<10){
		day = "0"+day;
	}*/
	
	var val = year+str+format(month)+str+format(day);
	
	return val;
	
}
//获得某个月份的天数
function getDays(oDate,month){
	var year = oDate.getFullYear();
	switch(month){
		case 4:
		case 6:
		case 9:
		case 11:
			return 30;
			break;
		case 2:
			if(isLeapYear(year)){
				return 29;
			}
			return 28;
		default:
			return 31;
	}
}
//判断两个日期相差的天数
function getDiffDays(oDate1,oDate2){
	var ms = Math.abs(oDate2-oDate1);
	var day = ms/1000/24/60/60;
	return day;
}
//获得N天以后的日期
function getNDate(n){
	var oDate = new Date();
	var num = oDate.getDate();
	oDate.setDate(num+n);
	return oDate;
}
//个位数补0
function format(num){
	//如果num<10这个条件成立，执行"0"+num,否者的话执行num
	/*if(num<10){
		num = "0"+num;
	}else{
		num = num;
	}*/
	//num =  num<10?"0"+num:num;
	//return num;
	
	return num<10?"0"+num:num;
}
//通过类名获取节点
function getByClass(name){
				if(document.getElementsByClassName){
					return document.getElementsByClassName(name);
				}
				//获取当前页面的所有节点
				var arr1 = [];
				var allNodes = document.getElementsByTagName("*");
				//遍历所有的节点，取到每个节点中的类名
				for(var i = 0; i< allNodes.length; i++){
					//取到的是一个字符串，不能直接使用indexOf方法判断是否含有name
					//转换成数组
					var arr = allNodes[i].className.split(" ");
					//仍然不能使用数组indexOf方法，该方法不兼容
					for(var j= 0; j<arr.length; j++){
						//如果数组中有name，将对应节点保存
						if(arr[j] === name){
							arr1.push(allNodes[i]);
						}
					}
				}
				return arr1;
			}


//样式兼容函数
function getStyle(obj,attr){
				if(window.getComputedStyle){
					return getComputedStyle(obj,null)[attr];
				}
					return obj.currentStyle[attr];
			}


//添加事件
function addEvent(obj,name,fn){
				if(obj.addEventListener){
					obj.addEventListener(name,fn,false);
				}else{
					obj.attachEvent("on"+name,fn);
				}
			}
			
function removeEvent(obj,name,fn){
				if(obj.removeEventListener){
					obj.removeEventListener(name,fn);
				}else{
					obj.detachEvent("on"+name,fn);
				}
			}
			
//cookie操作
function getCookie(name){
				var str = document.cookie;
				var arr = str.split("; ");
				for(var i = 0; i < arr.length; i++){
					var arr1 = arr[i].split("=");
					if(arr1[0]===name){
						return arr1[1];
					}
				}
			}
			
function setCookie(name,val,day){
				var oDate = new Date();
				oDate.setDate(oDate.getDate()+day);
				document.cookie = name + "=" + val +";expires="+oDate+";path=/";
			}
			
function removeCookie(name){
				setCookie(name,1,-1);
			}
			


//缓冲回到顶部     obj为dom对象
function goBackTop(obj){
			//var oDiv = document.getElementById("fanhui");
			obj.onclick = function(){
				clearInterval(timer);
				var st = document.documentElement.scrollTop;
				//var iSpeed = -st/8;
				
				var timer = setInterval(function(){
					var st1 = document.documentElement.scrollTop || document.body.scrollTop;
					console.log(st1);
					iSpeed = (0 - st1)/8;
					iSpeed = iSpeed > 0 ? Math.ceil(iSpeed): Math.floor(iSpeed);
					//console.log(iSpeed);
					document.documentElement.scrollTop = st1+iSpeed;
					
					if(st1 ==0){
						clearInterval(timer);
					}
				},30);
			}
}

/*
 
 缓冲变化某个属性
 
 */
//形参obj表示要发生样式变化的DOM对象，json表示哪些样式属性变化什么样一个目标值
function startMove(obj,json,fn){
	//开启一个定时器之前先清除定时器，这是真理
	//把定时器加到obj上,避免不同DOM对象定时器相互干扰
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		//看见flag，先不用理会，后续你就知道了
		var flag = true;
		//让每一个样式属性同时变化
		for(var attr in json){
			//attr表示的样式属性名称
			//json[attr]表示属性值，及目标值，即最终要达到的属性值
			var iTarget = json[attr];
			//由于像素的变化需要加px，这里又需要考虑透明度的变化，所以需要进行判断
			if(attr == "opacity"){
				//考虑到filter和opacity的取值有100倍的关系，便于计算与取值，在opacity的值基础上乘以100
				//没关系，后边赋值时再除以100
				var iCur = parseInt(getStyle(obj,"opacity")*100);
			}else{
				//parseInt为了去除单位px
				var iCur = parseInt(getStyle(obj,attr));
			}
			//iSpeed为每一次的变化值，这个值是逐渐减小，趋向于0
			var iSpeed = (iTarget - iCur)/8;
			//但是永远不能直接等于0，导致属性值变到某个程度时，不再发生变化
			//iSpeed是一个小于1的数时，考虑取整，涉及向上还是向下的问题
			//如果是一个正数，向下取整，取到0，在没有达到目标值时，就不再变化了，不符合要求
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed): Math.floor(iSpeed);
			
			//在赋值时，仍然考虑透明度和像素
			if(attr == "opacity"){
				obj.style.opacity = (iCur+iSpeed)/100;
				obj.style.filter = "alpha(opacity="+(iCur+iSpeed)+")"
			}else{
				obj.style[attr] = iCur + iSpeed + "px";
			}
			
			//这时需要考虑什么清除定时器的问题，
			//如果所有都达到目标值时，才可以清除定时器
			//判断某个属性值是否达到了目标值，如果没有达到就将flag置为false
			//这个flag可以在上面定义出来，表示所有都达到了目标值
			if(iCur != iTarget){
				flag = false;
			}
			
		}
		//如果flag为true，表示都达到了目标值，可以清除该对象上定时器
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
		
	},30);
}
