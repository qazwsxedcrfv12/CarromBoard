var ele = document.getElementById("myCanvas");
      var ctx = ele.getContext("2d");

      var interval;
      var inx = 200,
        iny = 390;
      carrom();
      function striker() {
        ctx.beginPath();
        ctx.arc(inx, iny, 15, 0, 2 * Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.stroke();
        if (inx >= 450 && iny <= 100) {
          inx = inx - 10;
          iny = iny - 2;
        } else if (inx <= 450 && iny <= 100) {
          inx = inx - 10;
          iny = iny - 1.8;
        } else {
          inx = inx + 10;
          iny = iny - 10;
        }
        ctx.clearRect(0,0,500,500);
        carrom();
        
      }

      function carrom() {
        //   creating lines
        ctx.moveTo(90, 90);
        ctx.lineTo(410, 90);
        ctx.lineWidht = 7;
        ctx.stroke();

        ctx.moveTo(420, 100);
        ctx.lineTo(420, 380);
        ctx.lineWidht = 7;
        ctx.stroke();

        ctx.moveTo(80, 100);
        ctx.lineTo(80, 380);
        ctx.lineWidht = 7;
        ctx.stroke();

        ctx.moveTo(90, 390);
        ctx.lineTo(410, 390);
        ctx.lineWidht = 7;
        ctx.stroke();

        //   Creating end holes
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 35, 0, 0.5 * Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.stroke();
        ctx.moveTo(500, 500);
        ctx.arc(500, 500, 35, 0, 0.5 * Math.PI, true);
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.stroke();
        ctx.moveTo(500, 0);
        ctx.arc(500, 0, 35, 0, 0.5 * Math.PI, true);
        ctx.fillStyle = "greenyellow";
        ctx.fill();
        ctx.stroke();
        ctx.moveTo(0, 500);
        ctx.arc(0, 500, 35, 0, 0.5 * Math.PI, true);
        ctx.fillStyle = "greenyellow";
        ctx.fill();
        ctx.stroke();

        // Creating center circles
        ctx.beginPath();
        ctx.arc(250, 250, 10, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow";
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(250, 250, 22, 0, 2 * Math.PI);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "green";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(250, 250, 47, 0, 2 * Math.PI);
        ctx.lineWidth = 4;
        ctx.strokeStyle = "red";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(250, 250, 65, 0, 2 * Math.PI);
        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
        ctx.stroke();
      }
      interval = setInterval(striker, 80);