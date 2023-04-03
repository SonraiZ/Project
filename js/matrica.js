window.onload = () => {
  // валидация даты рождения
  const toggleError = (field, status = true) => {
    if (status) {
      field.classList.add("error");
      field.nextElementSibling.classList.add("--show");
    } else {
      field.classList.remove("error");
      field.nextElementSibling.classList.remove("--show");
    }
  };

  const dateValidator = (name) => {
    const dateEl = document.querySelector(name);
    console.log(dateEl);
    const maskDateInput = (e) => {
      // if not a number
      if (e.keyCode < 47 || e.keyCode > 57) {
        e.preventDefault();
      }
      const el = e.currentTarget;
      const len = el.value.length;

      if (len !== 1 || len !== 3) {
        if (e.keyCode === 47) {
          e.preventDefault();
        }
      }

      if (len === 2 || len === 5) {
        el.value += ".";
      }
    };
    const checkDate = (e) => {
      const input = e.currentTarget;
      if (!/(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}/.test(input.value)) {
        toggleError(input);
      } else if (input.classList.contains("error")) {
        toggleError(input, false);
      }
    };
    dateEl.addEventListener("keypress", maskDateInput);
    dateEl.addEventListener("input", checkDate);
  };
  dateValidator("#bday");

  //	Расчёт суммы числа
  const sumNumber = (num) => {
    let result = num;
    while (result > 22) {
      result = result
        .toString()
        .split("")
        .reduce((acc, curr) => acc + +curr, 0);
    }
    return result;
  };

  //Расчет suisai

  const newCalcSuisai = (num) => {
    let result = num;
    while (result > 9) {
      result = result
        .toString()
        .split("")
        .reduce((acc, curr) => acc + +curr, 0);
    }
    return result;
  };

  // Расчёт

  document.querySelector("#bday").addEventListener("input", () => {
    const birthDate = document.querySelector("#bday");

    const isValid = () => {
      let valid = true;

      if (!/(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4}/.test(birthDate.value)) {
        toggleError(birthDate);
        valid = false;
      } else if (birthDate.classList.contains("error")) {
        toggleError(birthDate, false);
      }

      return valid;
    };

    if (!isValid()) return;

    // Текущий год для suisai
    const today = new Date();
    const todayYear = today.getFullYear();
    const position_sum_a_a = newCalcSuisai(+day);
    const position_sum_b_b = newCalcSuisai(
      newCalcSuisai(+month) + newCalcSuisai(+day) + newCalcSuisai(sumBirthDateYearNums)
    );
    const position_sum_с_c = newCalcSuisai(newCalcSuisai(+day) + newCalcSuisai(+month) + newCalcSuisai(todayYear));

    const position_num_a_a = document.querySelectorAll(".js-position_num_a_a");
    const position_num_b_b = document.querySelectorAll(".js-position_num_b_b");
    const position_num_c_c = document.querySelectorAll(".js-position_num_с_c");

    position_num_a_a.forEach((e) => (e.textContent = position_sum_a_a));
    position_num_b_b.forEach((e) => (e.textContent = position_sum_b_b));
    position_num_c_c.forEach((e) => (e.textContent = position_sum_с_c));

    // Таблица Чакр
    const position_num_a = document.querySelectorAll(".js-position_num_a");
    const position_num_b = document.querySelectorAll(".js-position_num_b");
    const position_num_l = document.querySelectorAll(".js-position_num_l");
    const position_num_c = document.querySelectorAll(".js-position_num_с");
    const position_num_a1 = document.querySelectorAll(".js-position_num_a1");
    const position_num_a2 = document.querySelectorAll(".js-position_num_a2");
    const position_num_b2 = document.querySelectorAll(".js-position_num_b2");
    const position_num_l1 = document.querySelectorAll(".js-position_num_l1");
    const position_num_b1 = document.querySelectorAll(".js-position_num_b1");
    const position_num_l2 = document.querySelectorAll(".js-position_num_l2");
    const position_num_a3 = document.querySelectorAll(".js-position_num_a3");
    const position_num_b3 = document.querySelectorAll(".js-position_num_b3");
    const position_num_l3 = document.querySelectorAll(".js-position_num_l3");
    const position_num_d = document.querySelectorAll(".js-position_num_d");
    const position_num_e = document.querySelectorAll(".js-position_num_e");
    const position_num_l4 = document.querySelectorAll(".js-position_num_l4");
    const position_num_c1 = document.querySelectorAll(".js-position_num_c1");
    const position_num_d1 = document.querySelectorAll(".js-position_num_d1");
    const position_num_l5 = document.querySelectorAll(".js-position_num_l5");
    const position_num_l6 = document.querySelectorAll(".js-position_num_d");
    const position_num_d3 = document.querySelectorAll(".js-position_num_d3");
    const position_num_c3 = document.querySelectorAll(".js-position_num_c3");
    const position_num_e3 = document.querySelectorAll(".js-position_num_e3");
    const position_num_f = document.querySelectorAll(".js-position_num_f");
    const position_num_y = document.querySelectorAll(".js-position_num_y");
    const position_num_0 = document.querySelectorAll(".js-position_num_0");
    const position_num_g = document.querySelectorAll(".js-position_num_g");
    const position_num_k = document.querySelectorAll(".js-position_num_k");
    const position_num_u = document.querySelectorAll(".js-position_num_u");
    const position_num_h = document.querySelectorAll(".js-position_num_h");
    const position_num_j = document.querySelectorAll(".js-position_num_j");
    const position_num_m = document.querySelectorAll(".js-position_num_m");
    const position_num_n = document.querySelectorAll(".js-position_num_n");
    const position_num_t = document.querySelectorAll(".js-position_num_t");
    const position_num_z = document.querySelectorAll(".js-position_num_z");
    const position_num_s = document.querySelectorAll(".js-position_num_s");

    const [day, month, year] = birthDate.value.split(".");

    const sumBirthDateYearNums = +year
      .toString()
      .split("")
      .reduce((acc, curr) => acc + +curr, 0);
    console.log(sumBirthDateYearNums);
    const position_sum_a = sumNumber(+day);
    const position_sum_b = sumNumber(+month);
    const position_sum_l = sumNumber(position_sum_a + position_sum_b);
    const position_sum_с = sumNumber(sumBirthDateYearNums);
    const position_sum_d = sumNumber(position_sum_a + position_sum_b + position_num_c);
    const position_sum_e = sumNumber(position_sum_a + position_sum_b + position_sum_с + position_sum_d);
    const position_sum_a1 = sumNumber(position_sum_a + position_sum_e);
    const position_sum_a2 = sumNumber(position_sum_a + position_sum_a1);
    const position_sum_b1 = sumNumber(position_sum_b + position_sum_e);
    const position_sum_b2 = sumNumber(position_sum_b + position_sum_b1);
    const position_sum_l1 = sumNumber(position_sum_a2 + position_sum_b2);
    const position_sum_l2 = sumNumber(position_sum_a1 + position_sum_b1);
    const position_sum_a3 = sumNumber(position_sum_a1 + position_sum_e);
    const position_sum_b3 = sumNumber(position_sum_b1 + position_sum_e);
    const position_sum_l3 = sumNumber(position_sum_a3 + position_sum_b3);
    const position_sum_l4 = sumNumber(position_sum_e + position_sum_e);
    const position_sum_c1 = sumNumber(position_num_c + position_sum_e);
    const position_sum_d1 = sumNumber(position_sum_d + position_sum_e);
    const position_sum_l5 = sumNumber(position_sum_d1 + position_sum_c1);

    const position_sum_l6 = sumNumber(position_sum_d + position_num_c);
    const position_sum_d3 = sumNumber(
      position_sum_a +
        position_sum_a2 +
        position_sum_a1 +
        position_sum_a3 +
        position_sum_e +
        position_sum_c1 +
        position_num_c
    );
    const position_sum_c3 = sumNumber(
      position_sum_b +
        position_sum_b2 +
        position_sum_b1 +
        position_sum_b3 +
        position_sum_e +
        position_sum_d1 +
        position_sum_d
    );
    const position_sum_e3 = sumNumber(
      position_sum_l +
        position_sum_l1 +
        position_sum_l2 +
        position_sum_l3 +
        position_sum_l4 +
        position_sum_l5 +
        position_sum_l6
    );
    const position_sum_f = sumNumber(position_sum_a + position_sum_b);
    const position_sum_y = sumNumber(position_num_c + position_sum_d);
    const position_sum_0 = sumNumber(position_sum_f + position_sum_y);
    const position_sum_g = sumNumber(position_sum_b + position_num_c);
    const position_sum_k = sumNumber(position_sum_a + position_sum_d);
    const position_sum_u = sumNumber(position_sum_g + position_sum_k);
    const position_sum_h = sumNumber(position_sum_b + position_sum_d);
    const position_sum_j = sumNumber(position_sum_a + position_num_c);
    const position_sum_m = sumNumber(position_sum_h + position_sum_j);
    const position_sum_n = sumNumber(position_sum_f + position_sum_y);
    const position_sum_t = sumNumber(position_sum_g + position_sum_k);
    const position_sum_z = sumNumber(position_sum_n + position_sum_t);
    const position_sum_s = sumNumber(position_sum_m + position_sum_z);

    // const numTopValue = sumNumber(+month + arkanYear)
    // const numRightValue = sumNumber(sumNumber(sumBirthDateYearNums) + arkanYear)

    position_num_a.forEach((e) => (e.textContent = position_sum_a));
    position_num_b.forEach((e) => (e.textContent = position_sum_b));
    position_num_l.forEach((e) => (e.textContent = position_sum_l));
    position_num_c.forEach((e) => (e.textContent = position_sum_с));
    position_num_e.forEach((e) => (e.textContent = position_sum_e));
    position_num_a1.forEach((e) => (e.textContent = position_sum_a1));
    position_num_a2.forEach((e) => (e.textContent = position_sum_a2));
    position_num_b2.forEach((e) => (e.textContent = position_sum_b2));
    position_num_l1.forEach((e) => (e.textContent = position_sum_l1));
    position_num_b1.forEach((e) => (e.textContent = position_sum_b1));
    position_num_l2.forEach((e) => (e.textContent = position_sum_l2));
    position_num_a3.forEach((e) => (e.textContent = position_sum_a3));
    position_num_b3.forEach((e) => (e.textContent = position_sum_b3));
    position_num_l3.forEach((e) => (e.textContent = position_sum_l3));
    position_num_l4.forEach((e) => (e.textContent = position_sum_l4));
    position_num_c1.forEach((e) => (e.textContent = position_sum_c1));
    position_num_d1.forEach((e) => (e.textContent = position_sum_d1));
    position_num_l5.forEach((e) => (e.textContent = position_sum_l5));
    position_num_d.forEach((e) => (e.textContent = position_sum_d));
    position_num_l6.forEach((e) => (e.textContent = position_sum_l6));
    position_num_d3.forEach((e) => (e.textContent = position_sum_d3));
    position_num_c3.forEach((e) => (e.textContent = position_sum_c3));
    position_num_e3.forEach((e) => (e.textContent = position_sum_e3));
    position_num_f.forEach((e) => (e.textContent = position_sum_f));
    position_num_y.forEach((e) => (e.textContent = position_sum_y));
    position_num_0.forEach((e) => (e.textContent = position_sum_0));
    position_num_g.forEach((e) => (e.textContent = position_sum_g));
    position_num_k.forEach((e) => (e.textContent = position_sum_k));
    position_num_u.forEach((e) => (e.textContent = position_sum_u));
    position_num_h.forEach((e) => (e.textContent = position_sum_h));
    position_num_j.forEach((e) => (e.textContent = position_sum_j));
    position_num_m.forEach((e) => (e.textContent = position_sum_m));
    position_num_n.forEach((e) => (e.textContent = position_sum_n));
    position_num_t.forEach((e) => (e.textContent = position_sum_t));
    position_num_z.forEach((e) => (e.textContent = position_sum_z));
    position_num_s.forEach((e) => (e.textContent = position_sum_s));
  });
};
