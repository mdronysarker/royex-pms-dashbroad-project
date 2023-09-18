////////////////////// IMAGE UPLOAD with DRAG & DROP
const dropImgZone = document.querySelector('.upload-img-box');
const dropLogoZone = document.querySelector('.upload-img-box--logo');
const dropVidZone = document.querySelector('.upload-vid-box');
let files = [];

const form = document.querySelector('.upload-img-form');
// where the img will show
const imgContainer = document.querySelector('.product-photo');
const select = document.querySelector('.upload-pic img');
const inputFile = document.querySelector('.upload-img-form input');
select.addEventListener('click', ()=> inputFile.click());
inputFile.addEventListener('change',()=>{
  let file = inputFile.files;
  for(i=0; i< file.length; i++){

    if(files.every(e => e.name !== file[i].name)){
      files.push(file[i])
    }
  }
  // reseting form
  form.reset();
  showImg();
})

/////////////////////////// show img
const showImg = () => {
  let images = '';
  files.forEach((e,i) => {
    console.log('e',e)
    images += ` 
       <div class="details-card details-card--fileupload mt-4">                          
          <div class="product product-1">
               <div
                class="product-circle d-flex justify-content-center align-items-center"
                           >
                  <i class="fas fa-times" onclick='delImage(${i})'></i>
                </div>
              <img
                src="${URL.createObjectURL(e)}"
                alt="cup-png"
              />
          </div>
        </div>`
  })
  imgContainer.innerHTML = images;
}
//////////////////////////// delet image 
const delImage = i => {
  files.splice(i,1);
  showImg()
}

/////////////////////////// DRAG AND DROP
dropImgZone.addEventListener('dragover',e=>{
  e.preventDefault();
  dropImgZone.classList.add('dragover')
})
dropImgZone.addEventListener('dragleave',e=>{
  e.preventDefault();
  dropImgZone.classList.remove('dragover')
})
dropImgZone.addEventListener('drop',e=>{
  e.preventDefault();
  dropImgZone.classList.remove('dragover');
  let file = e.dataTransfer.files;
  for(i=0; i < file.length; i++){
    if(files.every(e => e.name !== file[i].name)){
      files.push(file[i])
    }
  }
  showImg()
})

// const darkSwitch = document.querySelector('.dark-switcher');
// darkSwitch.addEventListener('click',function(){
//   console.log('It worked')
// })