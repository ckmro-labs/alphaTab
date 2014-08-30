using System.Runtime.CompilerServices;
using AlphaTab.Collections;
using AlphaTab.Platform;
using AlphaTab.Platform.Model;

namespace AlphaTab.Model
{
    /// <summary>
    /// This public class describes a single track or instrument of score
    /// </summary>
    public class Track
    {
        private const int ShortNameMaxLength = 10;

        [IntrinsicProperty]
        public int Capo { get; set; }
        [IntrinsicProperty]
        public int Index { get; set; }
        [IntrinsicProperty]
        public string Name { get; set; }
        [IntrinsicProperty]
        public string ShortName { get; set; }
        [IntrinsicProperty]
        public FastList<int> Tuning { get; set; }
        [IntrinsicProperty]
        public string TuningName { get; set; }
        [IntrinsicProperty]
        public Color Color { get; set; }

        [IntrinsicProperty]
        public PlaybackInformation PlaybackInfo { get; set; }
        [IntrinsicProperty]
        public bool IsPercussion { get; set; }

        [IntrinsicProperty]
        public Score Score { get; set; }
        [IntrinsicProperty]
        public FastList<Bar> Bars { get; set; }

        [IntrinsicProperty]
        public FastDictionary<string, Chord> Chords { get; set; }

        public Track()
        {
            Name = "";
            ShortName = "";
            Tuning = new FastList<int>();
            Bars = new FastList<Bar>();
            Chords = new FastDictionary<string, Chord>();
            PlaybackInfo = new PlaybackInformation();
            Color = new Color(200, 0, 0);
        }

        public void AddBar(Bar bar)
        {
            var bars = Bars;
            bar.Track = this;
            bar.Index = Bars.Count;
            if (bars.Count > 0)
            {
                bar.PreviousBar = bars[bars.Count - 1];
                bar.PreviousBar.NextBar = bar;
            }
            bars.Add(bar);
        }

        public void Finish()
        {
            if (string.IsNullOrEmpty(ShortName))
            {
                ShortName = Name;
                if (ShortName.Length > ShortNameMaxLength)
                    ShortName = ShortName.Substring(0, ShortNameMaxLength);
            }

            for (int i = 0, j = Bars.Count; i < j; i++)
            {
                Bars[i].Finish();
            }
        }
    }
}