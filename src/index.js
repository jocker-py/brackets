module.exports = function check(str, bracketsConfig) {
  // your solution
    const stack = [];
    const open_brackets = [];
    const brackets_pair = {};
    
    for (let i in bracketsConfig) {
        open_brackets.push(bracketsConfig[i][0]);
        brackets_pair[bracketsConfig[i][1]] = bracketsConfig[i][0];
    }
    
    for (let i in str) {
        
        if (open_brackets.includes(str[i])) {
            if (brackets_pair[str[i]] === str[i] && brackets_pair[str[i]] === stack[stack.length - 1]) {
                stack.pop()
            } else {
                stack.push(str[i]);
            }

        } else {
            if (stack.length === 0) {
                return false;
            }

            if (brackets_pair[str[i]] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false
            }
        }
    }
  
    return stack.length === 0;
}



