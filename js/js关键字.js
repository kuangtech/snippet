//高级程序设计 关键字 debugger是第5版新增
break do instanceof typeof
case else new var
catch finally return void
continue for switch while
debugger function this with
default if throw delete 
in try 

//写一段最短的代码，用上js所有关键字
void function() {//abcd  
  do break;while(typeof delete this); 
  for(var a;;) 
  if (true)  with(null) 
  try{}catch(a){}finally{} else throw new 1; 
     
  switch(1 in 1 instanceof 1) { 
    case false: 
    default: 
  } 
  return; 
}; 
 
// or
new function() { 
    do break;while(typeof delete this); 
    for(var a;void 0;) 
        continue
    if (null) 
        with(0) 
    try{ 
        switch(1 in 1 instanceof 1) { 
            case false: 
            default:throw true
        } 
    }catch(a){}finally{}else return  // console.log("测试") 
};
