function togglePassword() {
    const passwordInputs = document.querySelectorAll('.inputPassword'); // Всі інпути з класом InputPassword
    const passwordIcons = document.querySelectorAll('.toggle-password'); // Всі іконки для кожного поля
  
    passwordInputs.forEach((passwordInput, index) => {
      const passwordIcon = passwordIcons[index]; // Отримуємо іконку відповідно до індексу інпута
  
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Змінюємо тип на текст
        passwordIcon.innerHTML = `
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.74294 3.09232C10.1494 3.03223 10.5686 3 11.0004 3C16.1054 3 19.4553 7.50484 20.5807 9.28682C20.7169 9.5025 20.785 9.61034 20.8231 9.77667C20.8518 9.90159 20.8517 10.0987 20.8231 10.2236C20.7849 10.3899 20.7164 10.4985 20.5792 10.7156C20.2793 11.1901 19.8222 11.8571 19.2165 12.5805M5.72432 4.71504C3.56225 6.1817 2.09445 8.21938 1.42111 9.28528C1.28428 9.50187 1.21587 9.61016 1.17774 9.77648C1.1491 9.9014 1.14909 10.0984 1.17771 10.2234C1.21583 10.3897 1.28393 10.4975 1.42013 10.7132C2.54554 12.4952 5.89541 17 11.0004 17C13.0588 17 14.8319 16.2676 16.2888 15.2766M2.00042 1L20.0004 19M8.8791 7.87868C8.3362 8.42157 8.00042 9.17157 8.00042 10C8.00042 11.6569 9.34356 13 11.0004 13C11.8288 13 12.5788 12.6642 13.1217 12.1213" stroke="#007AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `;
      } else {
        passwordInput.type = 'password'; // Змінюємо тип назад на пароль
        passwordIcon.innerHTML = `
          <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.42012 8.71318C1.28394 8.49754 1.21584 8.38972 1.17772 8.22342C1.14909 8.0985 1.14909 7.9015 1.17772 7.77658C1.21584 7.61028 1.28394 7.50246 1.42012 7.28682C2.54553 5.50484 5.8954 1 11.0004 1C16.1054 1 19.4553 5.50484 20.5807 7.28682C20.7169 7.50246 20.785 7.61028 20.8231 7.77658C20.8517 7.9015 20.8517 8.0985 20.8231 8.22342C20.785 8.38972 20.7169 8.49754 20.5807 8.71318C19.4553 10.4952 16.1054 15 11.0004 15C5.8954 15 2.54553 10.4952 1.42012 8.71318Z" stroke="#007AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M11.0004 11C12.6573 11 14.0004 9.65685 14.0004 8C14.0004 6.34315 12.6573 5 11.0004 5C9.34355 5 8.0004 6.34315 8.0004 8C8.0004 9.65685 9.34355 11 11.0004 11Z" stroke="#007AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        `;
      }
    });
  }
  