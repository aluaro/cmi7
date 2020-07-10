function Movie_OnStart(){SoundPlay("clip",true);
VideoPlay("vid");
VideoSetVolume("vid",0);

}

function Frame__0_0(ID){Pause();


}

function Button2_OnClick(){SoundPlay("mou",false);
GotoSceneName("audio");

}

function ToggleButton1_OnClick(){SoundPlay("mou",false);
VideoSetVolume("vid",0);
}

function ToggleButton1_OnRelease(){
VideoSetVolume("vid",100);
}

function Button2_OnClick(){SoundPlay("mou",false);
GotoSceneName("audio");

}

function ToggleButton3_OnClick(){SoundPlay("mou",false);
VideoPause("vid");
}

function ToggleButton3_OnRelease(){VideoResume("vid");
}

function ToggleButton2_OnClick(){SoundPlay("mou",false);
SoundPause("clip");

}

function ToggleButton2_OnRelease(){SoundResume("clip");

}

function Button3_OnClick(){SoundPlay("mou",false);
GotoSceneName("video");

}

