const panels=document.querySelectorAll('.panel')

panels.forEach(panel=>{
  panel.addEventListener('click',(e)=>{
    removePreClass();
    panel.classList.add('active')
  })
})

function removePreClass(){
  panels.forEach(remove=>{
    remove.classList.remove('active')
  })
}
  