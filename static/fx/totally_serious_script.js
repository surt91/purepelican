var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var pos = 0;
document.addEventListener('keydown', function(e) {
    if(e.keyCode == code[pos]) {
        pos++;
        if(pos == code.length) {
            totally_serious_function();
            pos = 0;
        }
    } else {
        pos = 0;
    }
});

function totally_serious_function() {
    console.log("activate all powerups");

    // https://github.com/Okazari/Rythm.js
    var rythm = new Rythm();

    // SuperBluesBros Banana Blitz by RoccoW is licensed under CC-BY
    // http://freemusicarchive.org/music/RoccoW/~/SuperBluesBros_Banana_Blitz
    console.log("The song is courtesy of RoccoW. (CC-BY)")
    rythm.setMusic("/theme/fx/RoccoW_SuperBluesBros_Banana_Blitz.mp3");

    rythm.addRythm('post-title', 'shake', 500, 100);
    rythm.addRythm('tag', 'twist', 500, 100);
    rythm.addRythm('post-time', 'twist', 500, 100, {direction: 'left'});
    rythm.addRythm('category', 'twist', 500, 100, {direction: 'left'});
    rythm.addRythm('icon', 'twist', 500, 100, {min: -90, max: 90});
    rythm.addRythm('post-navigation', 'jump', 500, 100);

    rythm.addRythm('brand-title', 'pulse', 0, 10);
    rythm.addRythm('pure-button', 'pulse', 10, 100);
    rythm.addRythm('sidebar-social-links', 'pulse', 100, 500);
    rythm.addRythm('pure-form', 'pulse', 400, 500);

    rythm.addRythm('post-content', 'vanish', 500, 100);

    rythm.addRythm('sidebar', 'color', 0, 10, {
      from: [100,0,255],
      to:[200,0,255]
    })
    rythm.addRythm('tag', 'color', 100, 500, {
      from: [100,100,255],
      to:[200,255,255]
    })

    rythm.start();
    setTimeout(rythm.stop, 60000);
}
