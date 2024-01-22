document.addEventListener('DOMContentLoaded', function () {
    var movingImage = document.getElementById('moving-image');
    var inputModal = document.getElementById('input-modal');
    var userInput = document.getElementById('user-input');
    var submitBtn = document.getElementById('submit-btn');
    var cancelBtn = document.getElementById('cancel-btn');
  
    function closeModal() {
      inputModal.style.display = 'none';
      userInput.value = '';
    }

    function updateModalPosition(){
        const rect = movingImage.getBoundingClientRect();
        inputModal.style.left = rect.left + 'px';
        inputModal.style.top = rect.bottom + 'px';
    }
  
    movingImage.addEventListener('click', function () {
      updateModalPosition();
      inputModal.style.display = 'flex';
    });
  
    submitBtn.addEventListener('click', function () {
      var inputText = userInput.value;
      if (inputText !== '') {
        console.log('用户输入:', inputText);
        closeModal();
      }
    });
  
    cancelBtn.addEventListener('click', function () {
      closeModal();
    });
  
    window.addEventListener('click', function (event) {
      if (event.target === inputModal) {
        closeModal();
      }
    });

    movingImage.addEventListener('mouseenter', function () {
        movingImage.style.opacity = '0.6';
      });
      
    movingImage.addEventListener('mouseleave', function () {
      movingImage.style.opacity = '0.3';
    });


    let xPos = 10;

    function animate() {
    xPos += 5.2;
    // 当图像到达右侧边界时，将其移动回左侧边界
    if (xPos >= window.innerWidth) {
        xPos = -movingImage.clientWidth;
        // xPos -= 10.4;
    }
    movingImage.style.transform = `translateX(${xPos}px)`;

    updateModalPosition();
    // 使用 requestAnimationFrame 持续进行动画
    requestAnimationFrame(animate);
    }
    animate();
  });
  
  