chrome.tabs.onActivated.addListener(tab => {
	console.log('on activated');
    chrome.tabs.get(tab.tabId, current_tab_info => {
        chrome.tabs.executeScript(null, { file: './contentscript.js' }, () => console.log('i injected'))
        console.log(current_tab_info.url)
    });
});
 
//chrome.tabs.onUpdated.addListener(tab => {
//    console.log('on updated');
//    chrome.tabs.executeScript(null, { file: './contentscript.js' }, () => console.log('i injected'));
//});