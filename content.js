chrome.tabs.query({windowType:'normal'}, function(tabs) {
  alert('Number of open tabs in all normal browser windows:',tabs.length);
  console.log(tabs);
}); 