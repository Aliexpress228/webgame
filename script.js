let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let maxRadius = canvas.height/2;
let radius = maxRadius;
let r = [];
let a = [];
let v = [];
let x0, y0;
let sp=5;
let speed=1/sp;
let delta=speed;
let mode1 = 1, lwidth = 1, rsize=1, counter=0, pass = 0,n=30;
$('document').ready(function(){
    jQuery('#OK').on('click',function(){
        $( "#OK" ).remove();
        n = $( "#inputn" ).val();
        $( "#inputn" ).remove();
        $( "#dtext" ).remove();
        pass++;
        console.log("button deleted");
        for(let i = 0; i < n; i++){
        r[i] = radius;
        a[i] = 0;
        v[i] = speed;
        radius -= maxRadius/n;
        speed += delta;
    }
    ctx.strokeStyle = 'white';
    ctx.lineWidth = lwidth;
    function MoveDraw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);// clearing canvas
        counter++;
        x0 = canvas.width/2;
        y0 = canvas.height/2;
        let preX = x0;
        let preY = y0;
        mode.onclick = function() {
            mode1+=1;
        };
        speedup.onclick = function() {
            if(sp>1)
                sp--;
            speed=1/sp;
            delta=speed;
            console.log(speed);
            for(let i = 0; i < n; i++){
                v[i] = speed;
                speed += delta;
            }
        };
        speeddown.onclick = function() {
            if(sp<15)
                sp++;
            speed=1/sp;
            delta=speed;
            console.log(speed);
            for(let i = 0; i < n; i++){
                v[i] = speed;
                speed += delta;
            }
        };
        widthup.onclick = function() {
            if(lwidth<10)
                lwidth++;
            ctx.lineWidth = lwidth;
        };
        widthdown.onclick = function() {
            if(lwidth>0.2)
                lwidth/=2;
            ctx.lineWidth = lwidth;
        };
        sizeup.onclick = function() {
            if(rsize<10)
                rsize++;
        };
        sizedown.onclick = function() {
            if(rsize>0.2)
                rsize/=2;
        };

        for(let i=0;i<n;i++){
            let x = x0 + r[i] * Math.cos(a[i] * 0.017444);//degries to radians
            let y = y0 + r[i] * Math.sin(a[i] * 0.017444);
            if(i==0){
                preX = x;
                preY = y;
            }
            //console.log(y);
            ctx.beginPath();
            ctx.arc(x, y, rsize, 0, Math.PI*2);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.moveTo(preX,preY);
            ctx.lineTo(x, y);
            ctx.stroke();//lines behind dots
            ctx.closePath();
            preX = x;
            preY = y;
            if(mode1%2==1)
                a[i] += v[i];
            else
                a[i] -= v[i];

        }
        //console.log("Step " + counter );


    }

    setInterval(MoveDraw, 20

    );
    });
});