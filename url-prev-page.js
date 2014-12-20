//go to previous page by deducting the first occurence of a number in the url by 1
javascript:var url=window.location.href;var prev=url.match(/\d /)-1;url=url.replace(/\d /,prev);window.location.href=url;

