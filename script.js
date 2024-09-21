    // Handle URL parameters for recipient name
    const urlParams = new URLSearchParams(window.location.search);
    const recipientName = urlParams.get('kepada');
    if (recipientName) {
      document.getElementById('recipient-name').textContent = recipientName.replace(/\+/g, ' ');
    }
  
    // Countdown function
    function countdown() {
      const countDate = new Date("September 1, 2024 19:30:00").getTime();
      const now = new Date().getTime();
      const gap = countDate - now;
  
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
  
      const textDay = Math.floor(gap / day);
      const textHour = Math.floor((gap % day) / hour);
      const textMinute = Math.floor((gap % hour) / minute);
      const textSecond = Math.floor((gap % minute) / second);
  
      document.getElementById('countdown').innerHTML =
        `<div>${textDay} <br/><p style="font-size:10px";>Day</p></div>
         <div>${textHour} <br/><p style="font-size:10px";>Hour</p></div>
         <div>${textMinute} <br/><p style="font-size:10px";>Min</p></div>
         <div>${textSecond} <br/><p style="font-size:10px";>Sec</p></div>`;
    }
  
    setInterval(countdown, 1000);
  
    // Load comments from LocalStorage
    function loadComments() {
      const comments = JSON.parse(localStorage.getItem('comments')) || [];
      const commentSection = document.getElementById('comment-section');
      commentSection.innerHTML = '';
      comments.forEach(comment => {
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `<strong>${comment.name}</strong> (${comment.attendance}): <p>${comment.comment}</p>`;
        commentSection.appendChild(newComment);
      });
    }
  
    // Save comments to LocalStorage
    function saveComment(name, attendance, comment) {
      const comments = JSON.parse(localStorage.getItem('comments')) || [];
      comments.push({ name, attendance, comment });
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  
    // Comment form submission
    document.getElementById('comment-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const attendance = document.getElementById('attendance').value;
      const comment = document.getElementById('comment').value;
  
      saveComment(name, attendance, comment);
  
      const commentSection = document.getElementById('comment-section');
      const newComment = document.createElement('div');
      newComment.className = 'comment';
      newComment.innerHTML = `<strong>${name}</strong> (${attendance}): <p>${comment}</p>`;
      commentSection.appendChild(newComment);
  
      // Clear the form
      document.getElementById('comment-form').reset();
    });
  
    // Load comments on page load
    window.onload = function() {
      loadComments();
    };


    // Copy to clipboard function
    function copyToClipboard(text) {
      navigator.clipboard.writeText(text).then(() => {
        alert('Nomor rekening berhasil disalin!');
      }).catch(err => {
        alert('Gagal menyalin nomor rekening.');
      });
    }

// play music & scroll function

document.addEventListener('DOMContentLoaded', () => {
  const openMusicBtn = document.getElementById('open-music-btn');
  const frameCover = document.getElementById('frame-cover');
  const frame1 = document.getElementById('frame-1');
  const frame2 = document.getElementById('frame-2');
  const frame3 = document.getElementById('frame-3');
  const frame4 = document.getElementById('frame-4');
  const frame5 = document.getElementById('frame-5');
  const frame6 = document.getElementById('frame-6');
  const frame7 = document.getElementById('frame-7');
  const musicControl = document.getElementById('music-control');
  const backgroundMusic = document.getElementById('background-music');

  openMusicBtn.addEventListener('click', () => {
      frameCover.style.display = 'none';
      frame1.style.display = 'flex';
      frame2.style.display = 'flex';
      frame3.style.display = 'flex';
      frame4.style.display = 'flex';
      frame7.style.display = 'flex';

      document.body.style.overflow = 'auto';
      
      backgroundMusic.play();
      musicControl.classList.remove('hidden');
  });

  musicControl.addEventListener('click', () => {
      if (backgroundMusic.paused) {
          backgroundMusic.play();
          musicControl.textContent = '⏸️';
      } else {
          backgroundMusic.pause();
          musicControl.textContent = '▶️';
      }
  });
});

document.getElementById('open-music-btn').addEventListener('click', function() {
  var frame1 = document.getElementById('frame-cover');
  var frame2 = document.getElementById('frame-1');

  frame1.classList.add('hiddentrans');
  frame2.classList.remove('hiddentrans');
  frame2.classList.add('visible');
});

        // Fungsi untuk menghapus UCAPAN / DOA / KOMENTAR
      //  function hapusSemuaItem() {
      //    localStorage.clear();
      //    alert('Semua item di localStorage telah dihapus.');
      //  }


      // EFEK TRANSISI TEKS ATAS BAWAH KANAN KIRI
      document.addEventListener('DOMContentLoaded', function () {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const elements = document.querySelectorAll('.transisi');
        elements.forEach(el => observer.observe(el));
    });


    function showFrame1() {
    document.querySelector('.container').classList.add('show-frame1');
  }


  function besar() {
    document.getElementById('gambar').classList.add('transisi-besar');
}

function kecil() {
    document.getElementById('gambar').classList.remove('transisi-besar');
}
