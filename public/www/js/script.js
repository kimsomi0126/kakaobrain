// header 메뉴 이벤트
window.addEventListener("load", function () {
  const moreBt = document.querySelector(".icon-more");
  const mbHeader = document.querySelector(".header");
  const mbBg = document.querySelector(".mobile-bg");
  //click 감지
  // let isClick = true;

  // 스크롤 감지 이벤트
  this.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      mbHeader.classList.add("hd-line");
    } else {
      mbHeader.classList.remove("hd-line");
    }
  });

  // 햄버거 메뉴 클릭 이벤트
  moreBt.addEventListener("click", function (e) {
    e.preventDefault();
    // if (isClick === false) {
    //   return;
    // }
    // isClick = false;
    // mbBg.classList.toggle("active");
    // mbHeader.classList.toggle("active");
    const isOpen = mbHeader.classList.contains("active");
    if (!isOpen) {
      mbHeader.classList.add("active");
      mbBg.classList.add("active");
      // setTimeout(() => {
      //   isClick = true;
      // }, 300);
    } else {
      mbHeader.classList.remove("active");
      mbBg.classList.remove("active");
      // setTimeout(() => {
      //   isClick = true;
      // }, 300);
    }
  });

  // 모바일사이즈가 아니면 active 없애기
  this.addEventListener("resize", function () {
    if (window.innerWidth >= 1024) {
      mbHeader.classList.remove("active");
      mbBg.classList.remove("active");
    }
  });
});

// 로고 슬라이드
window.addEventListener("load", function () {
  // Logo Swiper
  const swHeaderLogo = new Swiper(".swLogo", {
    effect: "fade",
    speed: 600,
    loop: true,
    autoplay: {
      delay: 200,
      disableOnInteraction: false,
    },
  });
  // 마우스 오버가 되면 play 하기
  const swLogTag = document.querySelector(".swLogo");
  swHeaderLogo.autoplay.stop();
  swLogTag.addEventListener("mouseover", function () {
    swHeaderLogo.autoplay.start();
  });
  swLogTag.addEventListener("mouseout", function () {
    swHeaderLogo.autoplay.stop();
    swHeaderLogo.slideTo(0);
  });
});

// 메인비주얼 배너 슬라이드
window.addEventListener("load", function () {
  // 1. json 호출 하고 성공하면
  const jsonUrl = "./api/banner.json";
  fetch(jsonUrl)
    .then((res) => {
      // console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // 자료를 기반으로 html 태그 생성
      makeHtmlTag(data);
      makeSwiper();
    })
    .catch((err) => {
      console.log(err);
    });

  // html 태그 생성,
  const makeHtmlTag = (_data) => {
    // html 태그 글자
    let tag = "";
    // 이미지 경로
    const path = "./images";
    _data.forEach((item) => {
      console.log(item);
      const tempTag = `
        <div class="swiper-slide">
          <div class="mv-slider" data-id="${item.id}">
            <a href="${item.link}">
            <img src='${path}/${item.imgpath}' alt="b1"  />
            <div class="mv-title"><pre>${item.text}</pre></div>
            </a>
          </div>
        </div>`;

      tag += tempTag;
    });

    // 배치장소
    const swBannerElement = document.querySelector(
      ".mv-banner .swiper-wrapper"
    );
    swBannerElement.innerHTML = tag;
    return swBannerElement;
  };

  const makeSwiper = () => {
    const mainVisualBanner = new Swiper(".mv-banner", {
      speed: 1000,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // 마우스 오버가 되면 멈추기
    const swBannerTag = document.querySelector(".mv-banner");
    swBannerTag.addEventListener("mouseover", function () {
      mainVisualBanner.autoplay.stop();
    });
    swBannerTag.addEventListener("mouseout", function () {
      mainVisualBanner.autoplay.start();
    });
  };
});

// 메인비주얼 이벤트 슬라이드
window.addEventListener("load", function () {
  const jsonUrl = "./api/event.json";
  fetch(jsonUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      makeHtmlTag(data);
      makeSwiper();
    })
    .catch((err) => {
      console.log(err);
    });

  const makeHtmlTag = (_data) => {
    let tag = "";
    const path = "./images";
    _data.forEach((item) => {
      console.log(item);
      const tempTag = `
        <div class="swiper-slide">
          <div class="mv-slider" data-id="${item.id}">
            <a href="${item.link}">
            <img src='${path}/${item.imgpath}' alt="b1"  />
            <div class="mv-title"><pre>${item.text}</pre></div>
            </a>
          </div>
        </div>`;

      tag += tempTag;
    });

    // 배치장소
    const swBannerElement = document.querySelector(".mv-event .swiper-wrapper");
    swBannerElement.innerHTML = tag;
    return swBannerElement;
  };
  const makeSwiper = () => {
    const mainVisualEvent = new Swiper(".mv-event", {
      speed: 1000,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // 마우스 오버가 되면 멈추기
    const swBannerTag = document.querySelector(".mv-event");
    swBannerTag.addEventListener("mouseover", function () {
      mainVisualEvent.autoplay.stop();
    });
    swBannerTag.addEventListener("mouseout", function () {
      mainVisualEvent.autoplay.start();
    });
  };
});

// 메인 카드 슬라이드
window.addEventListener("load", function () {
  // 1. json 호출 하고 성공하면
  const jsonUrl = "./api/cards.json";
  fetch(jsonUrl)
    .then((res) => {
      // console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // 자료를 기반으로 html 태그 생성
      makeHtmlTag(data);
      makeSwiper();
    })
    .catch((err) => {
      console.log(err);
    });

  // html 태그 생성,
  const makeHtmlTag = (_data) => {
    // html 태그 글자
    let tag = "";
    // 이미지 경로
    const path = "./images";
    _data.forEach((item) => {
      console.log(item);
      const tempTag = `
        <div class="swiper-slide">
          <a href=${item.link} class="main-card" data-id="${item.id}">
            <img src='${path}/${item.imgpath}' alt="" />
              <p>${item.cardname} <span>${item.cardno}</span></p>
          </a>
        </div>
        `;

      tag += tempTag;
    });

    // 배치장소
    const swCardElement = document.querySelector(
      ".main-cards-slide .swiper-wrapper"
    );
    swCardElement.innerHTML = tag;
    return swCardElement;
  };

  const makeSwiper = () => {
    // 초기로딩시 처리
    // 화면의 너비를 보자
    let windowWidth;
    // Swiper 슬라이드
    let swCards = null;
    // 화면 리사이징
    window.addEventListener("resize", function () {
      windowWidth = window.innerWidth;
      if (windowWidth > 1024) {
        // swiper 제거
        if (swCards !== null) {
          swCards.destroy();
        }
        swCards = null;
      } else {
        // swiper 실행
        // swCards 가 비어 있으면 한 번만 만들어라
        if (swCards === null) {
          swCards = new Swiper(".main-cards-slide", {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 20,
            breakpoints: {
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            },
          });
        }
      }
    });
  };
});

// news 데이터 출력
window.addEventListener("load", function () {
  // 1. json 호출 하고 성공하면
  const jsonUrl = "./api/news.json";
  fetch(jsonUrl)
    .then((res) => {
      // console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // 자료를 기반으로 html 태그 생성
      makeHtmlTag(data);
    })
    .catch((err) => {
      console.log(err);
    });

  // html 태그 생성,
  const makeHtmlTag = (_data) => {
    // html 태그 글자
    let tag = "";
    // 이미지 경로
    const path = "./images";
    const iconPath = "./images/icon";
    _data.forEach((item) => {
      const tempTag = `
         <a href=${item.link} class="content-list-link" data-id=${item.id}>
          <div class="content-list-img">
            <div class="content-list-thumb">
              <img src='${path}/${item.imgpath}' alt="" />
            </div>
          </div>
          <div class="content-list-txt">
            <span class="content-list-cate" style="color:${item.txtcolor}">
              <img src='${iconPath}/${item.icon}' alt=${item.category}/>
                ${item.category}
            </span>
            <h4 class="content-list-title">
              ${item.title}
            </h4>
            <span class="content-list-date">${item.day}</span>
          </div>
        </a>`;

      tag += tempTag;
    });

    // 배치장소
    const newsElement = document.querySelector(".news-list");
    newsElement.innerHTML = tag;
    return newsElement;
  };
});
// crews 데이터 출력
window.addEventListener("load", function () {
  // 1. json 호출 하고 성공하면
  const jsonUrl = "./api/crews.json";
  fetch(jsonUrl)
    .then((res) => {
      // console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // 자료를 기반으로 html 태그 생성
      makeHtmlTag(data);
    })
    .catch((err) => {
      console.log(err);
    });

  // html 태그 생성,
  const makeHtmlTag = (_data) => {
    // html 태그 글자
    let tag = "";
    // 이미지 경로
    const path = "./images";
    const iconPath = "./images/icon";
    _data.forEach((item) => {
      const tempTag = `
         <a href=${item.link} class="content-list-link" data-id=${item.id}>
          <div class="content-list-img">
            <div class="content-list-thumb">
              <img src='${path}/${item.imgpath}' alt="" />
            </div>
          </div>
          <div class="content-list-txt">
            <span class="content-list-cate" style="color:${item.txtcolor}">
              <img src='${iconPath}/${item.icon}' alt=${item.category}/>
                ${item.category}
            </span>
            <h4 class="content-list-title">
              ${item.title}
            </h4>
            <span class="content-list-date">${item.day}</span>
          </div>
        </a>`;

      tag += tempTag;
    });

    // 배치장소
    const newsElement = document.querySelector(".crew-list");
    newsElement.innerHTML = tag;
    return newsElement;
  };
});
