import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const delay = Number(document.querySelector('input[name="delay"]').value);
  const status = document.querySelector('input[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    if (status === 'fulfilled') {
      setTimeout(() => {
        resolve(delay);
      }, delay);
    } else if (status === 'rejected') {
      reject(delay);
    }
  });

  promise.then((value) => {
    iziToast.show({
      
      message: `✅ Fulfilled promise in ${delay}ms`
  });



    
  }).catch((value) => {
    iziToast.show({
      message: `❌ Rejected promise in ${delay}ms`
    });
  });
  
});