import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Song {
  id: number;
  title: string;
  artist: string;
  addedBy: string;
  story?: string;
}

const Playlist = () => {
  const [isAddingSong, setIsAddingSong] = useState(false);
  const [songTitle, setSongTitle] = useState('');
  const [songArtist, setSongArtist] = useState('');
  const [songStory, setSongStory] = useState('');
  
  const [songs, setSongs] = useState<Song[]>([
    { 
      id: 1, 
      title: "Piano Man", 
      artist: "Billy Joel", 
      addedBy: "Kenny", 
      story: "This takes me back to our opening night in '98. The old piano in the corner was barely in tune, but nobody cared."
    },
    { 
      id: 2, 
      title: "Brown Eyed Girl", 
      artist: "Van Morrison", 
      addedBy: "Sarah", 
      story: "My husband and I had our first dance to this song right by the oak barrel tables."
    },
    { 
      id: 3, 
      title: "Whiskey in the Jar", 
      artist: "Thin Lizzy", 
      addedBy: "Mike", 
    },
    { 
      id: 4, 
      title: "Sweet Caroline", 
      artist: "Neil Diamond", 
      addedBy: "The Thursday Regulars",
      story: "Every Thursday at 10pm, without fail, for the last decade."
    }
  ]);
  
  const handleAddSong = () => {
    if (songTitle && songArtist) {
      const newSong: Song = {
        id: songs.length + 1,
        title: songTitle,
        artist: songArtist,
        addedBy: "You",
        story: songStory || undefined
      };
      
      setSongs([...songs, newSong]);
      setSongTitle('');
      setSongArtist('');
      setSongStory('');
      setIsAddingSong(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-kenny-dark to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 wood-grain"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="handwritten text-5xl mb-2">The Heartbeat</h2>
          <h3 className="text-white text-2xl mb-6">Our Community Playlist</h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            Every great memory has a soundtrack. Add the songs that remind you of Kenny's, and share the story behind the music.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {isAddingSong ? (
            <Card className="bg-kenny-dark border border-kenny-amber/30 shadow-lg mb-8">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="song-title" className="block text-sm font-medium text-white mb-1">Song Title</label>
                    <Input 
                      id="song-title"
                      value={songTitle} 
                      onChange={(e) => setSongTitle(e.target.value)} 
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="What's the song called?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="song-artist" className="block text-sm font-medium text-white mb-1">Artist</label>
                    <Input 
                      id="song-artist"
                      value={songArtist} 
                      onChange={(e) => setSongArtist(e.target.value)} 
                      className="bg-white/10 border-white/20 text-white"
                      placeholder="Who performs it?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="song-story" className="block text-sm font-medium text-white mb-1">Your Kenny's Memory (Optional)</label>
                    <textarea 
                      id="song-story"
                      value={songStory} 
                      onChange={(e) => setSongStory(e.target.value)} 
                      className="w-full bg-white/10 border-white/20 text-white rounded-md p-2 min-h-[100px]"
                      placeholder="Share why this song matters to you at Kenny's..."
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-2">
                    <Button 
                      variant="outline"
                      onClick={() => setIsAddingSong(false)}
                      className="border-white/30 text-white hover:bg-white/5"
                    >
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleAddSong}
                      className="bg-kenny-amber hover:bg-kenny-amber/90 text-kenny-dark"
                    >
                      Add to Playlist
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="flex justify-center mb-8">
              <Button 
                onClick={() => setIsAddingSong(true)}
                className="bg-kenny-amber hover:bg-kenny-amber/90 text-kenny-dark"
              >
                Add Your Song
              </Button>
            </div>
          )}
          
          <div className="space-y-4">
            {songs.map((song) => (
              <Card key={song.id} className="bg-kenny-dark/60 backdrop-blur border border-white/10 overflow-hidden transition-all hover:border-kenny-amber/30 group">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-white text-lg font-medium">{song.title}</h4>
                      <p className="text-white/70">{song.artist}</p>
                      {song.story && (
                        <div className="mt-3 text-white/80 italic border-l-2 border-kenny-amber/40 pl-3 text-sm">
                          "{song.story}"
                        </div>
                      )}
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="text-sm text-white/50">Added by {song.addedBy}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Playlist;
