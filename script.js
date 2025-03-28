
        document.getElementById("no").addEventListener("mouseover", function() {
            let x = Math.random() * (window.innerWidth - this.offsetWidth);
            let y = Math.random() * (window.innerHeight - this.offsetHeight);
            this.style.left = x + "px";
            this.style.top = y + "px";
        });

        document.getElementById("yes").addEventListener("click", function() {
            alert("Obrigada! Vou cobrar tá? :D");
        });
    