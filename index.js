function getSample(name){
    newClip = blip.clip()
    newClip.sample(name)
    return newClip
}

blip.sampleLoader().samples({
    'backing': './sounds/clipped-backing-track.wav',
    'bend1': './sounds/solo-intro-bend.wav',
    'bend2': './sounds/solo-bend-2.wav',
    'weedly': './sounds/solo-descending-weedly.wav',
    'wahwah': './sounds/solo-wahwah.wav',
    'everyooone': './sounds/everyooone.wav',
    'dontforget': './sounds/dontforget.wav',
    'sayyourprayers': './sounds/sayyourprayers.wav',
    'myson': './sounds/myson.wav'
}).done(main).load()

var metronome = blip.loop();

function main(){
    let backing = getSample('backing');
    let bend1 = getSample('bend1');
    let bend2 = getSample('bend2');
    let weedly = getSample('weedly');
    let wahwah = getSample('wahwah');
    let everyooone = getSample('everyooone');
    let dontforget = getSample('dontforget');
    let sayyourprayers = getSample('sayyourprayers');
    let myson = getSample('myson');

    backing.play(0);

    document.onkeydown = (e) => {
        switch(e.key) {
            case 'a':
                bend1.play(0)
                break
            case 's':
                bend2.play(0)
                break
            case 'd':
                weedly.play(0)
                break
            case 'f':
                wahwah.play(0)
                break
            case 'k':
                everyooone.play(0)
                break
            case 'l':
                dontforget.play(0)
                break
            case 'j':
                sayyourprayers.play(0)
                break
            case ';':
                myson.play(0)
                break
        }
    }

}
