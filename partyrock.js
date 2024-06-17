document.getElementById("partyButton").addEventListener("click", function () {
    let lights = document.querySelectorAll(".light");
    lights.forEach((light) => {
      setInterval(() => {
        let colors = ["red", "green", "blue", "yellow"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        light.style.backgroundColor = randomColor;
        light.style.boxShadow = `0 0 20px ${randomColor}`;
      }, 500);
    });
  });
  

/*   dns1.p02.nsone.net
dns2.p02.nsone.net
dns3.p02.nsone.net
dns4.p02.nsone.net */