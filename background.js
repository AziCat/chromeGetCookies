/**
 * 获取从ContentScript传来的消息
 */
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	if(request == "getCookies") {
		chrome.cookies.getAll({
			domain: '192.168.18.26'
		}, function(cookies) {
			sendResponse(cookies);
		});
	}
});
chrome.cookies.onChanged.addListener(function(info) {
	console.log("onChanged" + JSON.stringify(info));
});