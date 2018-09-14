function getSample(name){
    newClip = blip.clip()
    newClip.sample(name)
    return newClip
}

blip.sampleLoader().samples({
    'backing': './sounds/backing-track.wav',
    'bend1': './sounds/solo-intro-bend.wav',
    'bend2': './sounds/solo-bend-2.wav',
    'weedly': './sounds/solo-descending-weedly.wav',
    'intro1': './sounds/intro-riff-1.wav',
    'intro2': './sounds/intro-riff-2.wav',
    'intro3': './sounds/intro-riff-3.wav',
    'intro4': './sounds/intro-riff-4.wav',
    'call': './sounds/call.wav',
    'hiweedly': './sounds/higherweedly.wav',
    'bend3': './sounds/bend3.wav',
    'solooutro': './sounds/solo-outro.wav',

    'sayyourprayers': './sounds/sayyourprayers.wav',
    'dontforget': './sounds/dontforget.wav',
    'myson': './sounds/myson.wav',
    'everyooone': './sounds/everyooone.wav',
    'sleepwithoneeye': './sounds/sleepwithoneeyeopen.wav',
    'enter': './sounds/enter.wav',
    'light': './sounds/light.wav',
    'exit' : './sounds/exit.wav',
    'night': './sounds/night.wav',
    'take' : './sounds/take.wav',
    'myhand' : './sounds/myhand.wav',
    'offtoneverneverland' : './sounds/offtoneverneverland.wav',

}).done(main).load()

function wireButton(id, sample, sampleText, key){
    let button = document.getElementById(id);
    button.querySelector(".buttonSampleName").innerHTML = sampleText;
    button.querySelector(".buttonKeyLabel").innerHTML = key;
}

function main(){
    let backing = getSample('backing');

    let intro1 = getSample('intro1');
    let intro2 = getSample('intro2');
    let intro3 = getSample('intro3');
    let intro4 = getSample('intro4');
    let bend1 = getSample('bend1');
    let bend2 = getSample('bend2');
    let weedly = getSample('weedly');
    let wahwah = getSample('wahwah');
    let call = getSample('call');
    let hiweedly = getSample('hiweedly');
    let bend3 = getSample('bend3');
    let solooutro = getSample('solooutro');

    let everyooone = getSample('everyooone');
    let dontforget = getSample('dontforget');
    let sayyourprayers = getSample('sayyourprayers');
    let myson = getSample('myson');
    let sleepwithoneeye = getSample('sleepwithoneeye');
    let enter = getSample('enter');
    let light = getSample('light');
    let exit = getSample('exit');
    let night = getSample('night');
    let take = getSample(('take'));
    let myhand = getSample('myhand');
    let offtoneverneverland = getSample('offtoneverneverland');


    let backtrackPlaying = false;

    let backtrackButton = document.getElementById("playBacktrackButton");
    backtrackButton.onclick = () => {
        if(!backtrackPlaying){
            backtrackPlaying = !backtrackPlaying;
            backing.play(0);
        }
    };

    wireButton('guitarSample0', bend1, "Intro Riff 1", "Q");
    wireButton('guitarSample1', bend1, "Intro Riff 2", "W");
    wireButton('guitarSample2', bend1, "Intro Riff 3", "E");
    wireButton('guitarSample3', bend1, "Intro Riff 4", "R");
    wireButton('guitarSample4', bend1, "Solo Intro Bend", "A");
    wireButton('guitarSample5', bend1, "Bend 2", "S");
    wireButton('guitarSample6', bend1, "Wahwaaah", "D");
    wireButton('guitarSample7', bend1, "Desc. Weedly", "F");
    wireButton('guitarSample8', bend1, "Solo Call", "Z");
    wireButton('guitarSample9', bend1, "Bend 3", "X");
    wireButton('guitarSample10', bend1, "High Weedly", "C");
    wireButton('guitarSample11', bend1, "Solo Outro", "V");

    wireButton('voiceSample0', bend1, "sayyerprayers", "U");
    wireButton('voiceSample1', bend1, "my son", "I");
    wireButton('voiceSample2', bend1, "don't forget", "O");
    wireButton('voiceSample3', bend1, "everyooOoOoone", "P");
    wireButton('voiceSample4', bend1, "sleep with one i open", "J");
    wireButton('voiceSample5', bend1, "exit", "K");
    wireButton('voiceSample6', bend1, "light", "L");
    wireButton('voiceSample7', bend1, "enter", ";");
    wireButton('voiceSample8', bend1, "night", "M");
    wireButton('voiceSample9', bend1, "taaaaake", ",");
    wireButton('voiceSample10', bend1, "mahh handdd", ".");
    wireButton('voiceSample11', bend1, "roffta nevernever land", "/");

    document.onkeydown = (e) => {
        switch(e.key) {
        case 'q':
            intro1.play(0);
            break;
        case 'w':
            intro2.play(0);
            break;
        case 'e':
            intro3.play(0);
            break;
        case 'r':
            intro4.play(0);
            break;
        case 'a':
            bend1.play(0);
            break;
        case 's':
            bend2.play(0);
            break;
        case 'd':
            wahwah.play(0);
            break;
        case 'f':
            weedly.play(0);
            break;
        case 'z':
            call.play(0);
            break;
        case 'x':
            bend3.play(0);
            break;
        case 'c':
            hiweedly.play(0);
            break;
        case 'v':
            solooutro.play(0);
            break;
        case 'u':
            sayyourprayers.play(0);
            break;
        case 'i':
            myson.play(0);
            break;
        case 'o':
            dontforget.play(0);
            break;
        case 'p':
            everyooone.play(0);
            break;
        case 'j':
            sleepwithoneeye.play(0);
            break;
        case 'k':
            exit.play(0);
            break;
        case 'l':
            light.play(0);
            break;
        case ';':
            enter.play(0);
            break;
        case 'm':
            night.play(0);
            break;
        case ',':
            take.play(0);
            break;
        case '.':
            myhand.play(0);
            break;
        case '/':
            offtoneverneverland.play(0);
            break;
        }
    }
}
