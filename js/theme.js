function changeTheme(theme){

    const root = document.documentElement;

    if(theme==="blue"){

        root.style.setProperty("--bg1","#0f172a");
        root.style.setProperty("--bg2","#1e3a8a");
        root.style.setProperty("--bg3","#312e81");

    }

    else if(theme==="purple"){

        root.style.setProperty("--bg1","#2d1b69");
        root.style.setProperty("--bg2","#6d28d9");
        root.style.setProperty("--bg3","#a855f7");

    }

    else if(theme==="green"){

        root.style.setProperty("--bg1","#052e16");
        root.style.setProperty("--bg2","#15803d");
        root.style.setProperty("--bg3","#22c55e");

    }

    else if(theme==="red"){

        root.style.setProperty("--bg1","#450a0a");
        root.style.setProperty("--bg2","#b91c1c");
        root.style.setProperty("--bg3","#ef4444");

    }

    else if(theme==="pink"){

        root.style.setProperty("--bg1","#831843");
        root.style.setProperty("--bg2","#db2777");
        root.style.setProperty("--bg3","#f472b6");

    }

    else if(theme==="dark"){

        root.style.setProperty("--bg1","#000000");
        root.style.setProperty("--bg2","#1f2937");
        root.style.setProperty("--bg3","#111827");

    }

    localStorage.setItem("theme",theme);
    document.querySelectorAll(".theme").forEach(btn=>{
    btn.classList.remove("active");
});

event.target.classList.add("active");


}

const savedTheme=localStorage.getItem("theme");

if(savedTheme){

    changeTheme(savedTheme);

}
// ===============================
// Switch between app sections
// ===============================

function showSection(section){

    document.getElementById("clockSection").style.display="none";
    document.getElementById("stopwatchSection").style.display="none";
    document.getElementById("timerSection").style.display="none";
    document.getElementById("alarmSection").style.display="none";

    document.getElementById(section+"Section").style.display="block";

    // Active Tab Highlight
    let tabs=document.querySelectorAll(".tab");

    tabs.forEach(tab=>{
        tab.classList.remove("active");
    });

    event.target.classList.add("active");

}