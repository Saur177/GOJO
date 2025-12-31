interface MusicCardProps {
  title: string;
  artist: string;
  image?: string;
  duration: string;
  onPlay: () => void;
}

export default function MusicCard({ title, artist, image, duration, onPlay }: MusicCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer group">
      <div className="aspect-square bg-gray-600 rounded-lg mb-4 flex items-center justify-center relative">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        ) : (
          <span className="text-4xl">🎵</span>
        )}
        <button 
          onClick={onPlay}
          className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <span className="text-3xl">▶️</span>
        </button>
      </div>
      <h3 className="font-semibold text-white truncate">{title}</h3>
      <p className="text-gray-400 text-sm truncate">{artist}</p>
      <p className="text-gray-500 text-xs">{duration}</p>
    </div>
  );
}