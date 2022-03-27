 document.getElementById('textArea').addEventListener('input',function(){
        let char = document.getElementById('character');
        let textArea = document.getElementById('textArea');
        let text = textArea.value;
        char.innerHTML = text.length;
        
        let word = document.getElementById('word');
        text = text.trim();
        let words = text.split(" ");
        let cleanword = words.filter((element)=>{
           return element != "";
        })
        function maxwordlength(){
            if (cleanword.length>10){
                document.getElementById('maxword').innerHTML = "Maximum word reached!!!!";
                textArea.setAttribute('maxlength',Number(text.length));
                
                console.log(textArea);

                console.log(text.maxlength = text.length);
            }else{
                word.innerHTML = cleanword.length;
            }

        }
        maxwordlength();
                
        
       
        
       })
