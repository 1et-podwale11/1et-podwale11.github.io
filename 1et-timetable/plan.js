function wyswietl(sel){
  var i=sel.selectedIndex
  if(i!=0) parent.plan.location.href='plany/'+sel.name.charAt(0)+sel.options[i].value+'.html'
}
function drukuj(){
    window.print()
}
