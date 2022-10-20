/**
 * /ajax1/src/main/webapp/js/ajax.js
 */
 
 function ajax(url,params,callback,method) {
	const xhttp = new XMLHttpRequest()
	method = method.toUpperCase() //대문자로 변환
	if(method != 'POST'){
		method = 'GET'
	}
	if(method == 'GET'){ //요청 url+파라미터정보
		url = url+"?"+params
	}
	
	//true : 비동기 방식을 사용할거라는 뜻(응답이올때까지 기다리는것은 동기방식)
	xhttp.open(method,url,true)
	
	//POST 방식인 경우(GET방식은 있어도되고 없어도됨)
	xhttp.setRequestHeader('Content-Type',
	'application/x-www-form-urlencoded;charset=UTF-8')
	xhttp.send(method =='POST'?params : null) //post방식이면 params 넣어서전송 아니면 null값
	xhttp.onreadystatechange = callback
}