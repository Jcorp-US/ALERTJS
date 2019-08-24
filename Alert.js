class Alert {
    constructor(title, contents) {
      this.title = title;
      this.contents = contents;
      
      this.is = document.createElement("div");
      this.isid = Math.random();
      this.is.id = this.isid;
      this.is.innerHTML = "<h1>"+this.title+"</h1><p>"+this.contents+"</p>";
      this.is.className = "alert_main";
    }
    
    call() {
      document.body.appendChild(this.is);
      this.is.style.opacity = "1";
      this.isobj = document.getElementById(this.isid);
      window.temp01 = this.isobj;
  
    }
    
    recall() {
      this.is.style.opacity = "0";
      setTimeout(function(){
        window.temp01.remove();
      }, 2000);
    }
}
