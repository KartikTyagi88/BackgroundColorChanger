 // Generating the random colours:
    const hex = "0123456789ABCDEF"

    let interval;

    document.querySelector('#start').addEventListener('click', function (e) {
       interval = setInterval(function () {
            let color = "#";
            for (let i = 0; i < 6; i++) {
                color += hex[Math.floor(Math.random() * 16)];
            }

            document.querySelector('body').style.backgroundColor = color;

        }, 1000)
    })

    document.querySelector('#reset').addEventListener('click', (e)=>{
        clearInterval(interval)
        document.querySelector('body').style.backgroundColor = '#212121'
    })

    document.querySelector('#stop').addEventListener('click', function(e){
        clearInterval(interval)
    })