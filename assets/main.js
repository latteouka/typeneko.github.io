placeholder_hashtag = "\n日本語\n語彙\n日語\n日文\n日語學習\n日文小說\njlpt\n日文單字\n日檢\n生活日語\n日文檢定\n日本語能力試驗"

document.getElementById("hashtag").value = placeholder_hashtag;

function clickcopy() {
  /* Get the text field */
  var copyText = document.getElementById("result");

  /* Select the text field */
  copyText.select(); 
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied!!");
}


function hashtag() {
  
  var hashtag = document.getElementById("hashtag").value;
  var hashtags = hashtag.split('\n');

  result = []


  var i;
  for (i = 0; i < hashtags.length; i++) { 
  	result.push("#"+hashtags[i])
  }


  result_string = ""

  for (i = 0; i < result.length; i++) { 
  	result_string = result_string + result[i] + "\n"
  }

  //delete \n
  result_string = result_string.slice(0, -1)

  document.getElementById("result").value = result_string;


  
}
