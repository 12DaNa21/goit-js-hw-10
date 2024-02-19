import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const delay = Number(document.querySelector('input[name="delay"]').value);
  const status = document.querySelector('input[name="state"]:checked').value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status === 'fulfilled') {
        resolve(delay);
      } else if (status === 'rejected') {
        reject(delay);
      }
    }, delay);
  });

  promise.then(() => {
    iziToast.show({
      message: `✅ Fulfilled promise in ${delay}ms`
    });
  }).catch(() => {
    iziToast.show({
      message: `❌ Rejected promise in ${delay}ms`
    });
  });
});