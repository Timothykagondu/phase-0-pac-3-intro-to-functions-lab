function shout(string) {
    return string;"Hello!".toUpperCase();
}
function shout(string){
    return string.toUpperCase();
}
function whisper(string) {
    console.log(string);"whisper".toLowerCase();
}
function whisper(string){
    return string.toLowerCase();
    
}
function logShout (shout) {
    console.log(shout.toUpperCase( ));
}
  function logWhisper (whisper) {
    console.log(whisper.toLowerCase( ));
}
function sayHiToHeadphonedRoommate (string) {
    const cantUnswer = "I can't hear you!";
    const yesUnswer = "YES INDEED!";
    const lovUnswer = "I would love to!.";
    const dinUnswer = "Let's have dinner together!"
    if (string.toLowerCase(string) === string) {
      return cantUnswer;
    }
    else if (string.toUpperCase(string) === string) {
      return yesUnswer;
    }
    else if ("I would love to!." === string) {
      return lovUnswer;
    }
    else if ( "I would love to!."=== "Let's have dinner together!") {
    }
}