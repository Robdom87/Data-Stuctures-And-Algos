

var reverseWords = function(s) {
    let left = 0;
    let right = 0; 
    let holder; 
    for(let i = 0; i < 6; i++){
        //in this section we do the switch within the word
        if(s[i]===" "){
            right=i-1;
            //right 4, left 0
            while(right>left){
                console.log(s[left],s[right],holder)
                holder = s[left];
                s[left]=s[right];
                s[right]=holder;
                right--;
                left++;
            }
        }
    }
    return s;   
    
};

let s = "Let's take LeetCode contest";
console.log(reverseWords(s));

