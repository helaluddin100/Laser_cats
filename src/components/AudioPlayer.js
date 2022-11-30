import '../styles/audioplayer.scss';
import Player from './Player/Player';
import { songsdata } from './Player/Audios';
import { useRef, useState, useEffect } from 'react';

const AudioPlayer = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[0]);
  const [isMaximized, setMaximized] = useState (false);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }

  const playPrev = ()=>
  {
    const index = songs.findIndex(x=>x.title == currentSong.title);
    if (index == 0)
    {
      setCurrentSong(songs[songs.length - 1]);
    }
    else
    {
      setCurrentSong(songs[index - 1]);
    }
    audioElem.current.currentTime = 0;
  }

  const playNext = () => {
    const index = songs.findIndex(x=>x.title == currentSong.title);

    if (index == songs.length-1)
    {
      setCurrentSong(songs[0]);
    }
    else
    {
      setCurrentSong(songs[index + 1]);
    }
    audioElem.current.currentTime = 0;
  }

  const canPlayEvent = () => {
    if (isplaying)
      audioElem.current.play();
  }

  return (
    <div className="AudioPlayer">
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} onEnded={playNext} onCanPlay={canPlayEvent} />
      <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong}
        isMaximized={isMaximized} setMaximized={setMaximized} playPrev={playPrev} playNext={playNext} />
    </div>
  );
}

export default AudioPlayer;
