function solution(queries) {
  let curString = "";
  let curCursor = 0;
  let curSelect = '';
  let clipboard = '';

  return queries.map((query, i) => {
      const operation = query[0];
      const value = query[1];
      const value2 = query[2];
      
      switch(operation) {
          case "APPEND":
              if (curSelect) {
                  curString = curString.replace(curSelect, value);
                  curSelect = '';
                  return curString;
              }
          
              const stringArr = curString.split('');
              stringArr.splice(curCursor, 0, value);
              curString = stringArr.join('');
              curCursor = curCursor + value.split('').length;
              
              return curString;
          
          case "MOVE":
              if (Number(value) < 0) {
                  curCursor = 0;
              } else {
                  curCursor = Number(value);
              }
              
              return curString;
              
          case "FORWARD_DELETE":
              if (curSelect) {
                  curString = curString.replace(curSelect, '');
                  curSelect = '';
                  return curString;
              }
          
              const remainLength = curString.length - curCursor - 1;
              
              if (remainLength > 0) {
                  curString = curString.slice(0, curCursor) + curString.slice(-remainLength);
              }
              
              if (remainLength === 0) {
                  console.log(curString.slice(-1))
                  curString = curString.slice(0, curCursor);
              }

              return curString;
              
          case "SELECT":
              curSelect = curString.slice(value, value2);
              curCursor = value;
              return curString;

          case "COPY":
              if (curSelect) {
                  clipboard = curSelect;
              }
              return curString;
              
          case "PASTE": 
              if (clipboard) {
                  if (curSelect === clipboard) {
                      curString = curString + clipboard
                  } else {
                      curString = curString.replace(curSelect, clipboard);
                  }
                  
                  curSelect = clipboard;
                  curCursor = curString.length;
              }
              return curString;
      }
  })
}
