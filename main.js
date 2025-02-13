const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");


menuBtn.addEventListener("click",(e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("opens");
    menuBtnIcon.setAttribute("class" ,isOpen?"ri-close-line":"ri-menu-3-line")
});

navLinks.addEventListener("click" ,(e) =>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-3-line");
});


const scrollRevealOption = {
    origin:"bottom",
    distance:"50px",
    duration:1000,
};
ScrollReveal().reveal(".header_image img" , {
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".header_content h1" , {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".header_content .section_description" , {
    ...scrollRevealOption,
    delay:1000,
});


ScrollReveal().reveal(".about_image img" , {
    ...scrollRevealOption,
    origin:"right",
});
ScrollReveal().reveal(".about_content .section_subheader" , {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".about_content .section_header" , {
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".about_content .section_description" , {
    ...scrollRevealOption,
    delay:1500,
    interval:500
});
ScrollReveal().reveal(".about_btn" , {
    ...scrollRevealOption,
    delay:2500,
});

// const fleet1 = document.querySelector("fleet_wrapper-1 .fleet_images");
// const fleet2 = document.querySelector("fleet_wrapper-2 .fleet_images");

// const fleet1Content = Array.from(fleet1.children);
// const fleet2Content = Array.from(fleet2.children);

// fleet1Content.forEach((item) => {
//     const duplicateNode = item.cloneNode(true);
//     duplicateNode.setAttribute("arria-hidden",true);
//     fleet1.appendChild(duplicateNode);
// });

// fleet2Content.forEach((item) => {
//     const duplicateNode = item.cloneNode(true);
//     duplicateNode.setAttribute("arria-hidden",true);
//     fleet2.appendChild(duplicateNode);
// });
ScrollReveal().reveal(".feature_card" , {
    ...scrollRevealOption,
    interval:500,
});
ScrollReveal().reveal(".banner_container .section_header" , {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".banner_container .section_description" , {
    ...scrollRevealOption,
    delay:500,
});
ScrollReveal().reveal(".banner_btn" , {
    ...scrollRevealOption,
    delay:1000,
});

// Send message

const form = document.getElementById('contactForm');
    const BOT_TOKEN = '7650335694:AAGuhWa1M2XKzvmCgHkAXo_wdm_GkVbvecI';
    const CHAT_ID = '6708106529';

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const address = document.getElementById('address').value;
      const number = document.getElementById('number').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      const text = `🔔 Yangi Xabar:\n\n👤 Ism: ${name}\n📧 Addres: ${address}\n Phone_number: ${number} Email: ${email}\n💬 Xabar: ${message}`;

      try {
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text
          })
        });

        if (response.ok) {
          alert('Xabaringiz muvaffaqiyatli yuborildi!');
          form.reset();
        } else {
          alert('Xabarni yuborishda xatolik yuz berdi.');
        }
      } catch (error) {
        console.error('Telegram API xatosi:', error);
        alert('Xabarni yuborishda xatolik yuz berdi.');
      }
    });