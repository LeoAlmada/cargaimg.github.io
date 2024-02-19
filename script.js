document.getElementById('loadImageBtn').addEventListener('click', () => {
    const imageContainer = document.getElementById('imageContainer');
    const loadingMessage = document.getElementById('loadingMessage');
    const timerMessage = document.getElementById('timerMessage');
    const timerValue = document.getElementById('timerValue');
  
    loadingMessage.style.display = 'block';
  
    let seconds = 0;
    const timer = setInterval(() => {
      seconds++;
      timerValue.textContent = seconds;
    }, 1000);
  
    setTimeout(() => {
      const image = new Image();
      image.src = 'images/sherk.jpg'; 

      image.onload = () => {
        clearInterval(timer);
        loadingMessage.style.display = 'none'; 
        imageContainer.appendChild(image); 
      };
    }, 2000);
  });
  