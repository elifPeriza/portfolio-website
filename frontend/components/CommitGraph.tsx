type CommitCount = {
  date: string;
  commitCount: number;
  daysBeforeWithZeroCommits?: number;
};

type CommitGraphProps = {
  commitCountPerDate?: CommitCount[];
  gapDays?: number;
};

export default function CommitGraph({
  commitCountPerDate,
  gapDays = 0,
}: CommitGraphProps) {
  return (
    <div className="flex h-14 w-[250px] flex-row self-start bg-[#EFF7D4]">
      {commitCountPerDate?.map((dateCommit) => {
        const commitRatio = Math.min(1, dateCommit.commitCount / 15);
        let hue = 76;
        let saturation;
        let lightness;
        if (dateCommit.commitCount > 0 && dateCommit.commitCount <= 4) {
          saturation = 80;
          lightness = 80;
        }
        if (dateCommit.commitCount > 4 && dateCommit.commitCount <= 9) {
          saturation = 60;
          lightness = 60;
        }
        if (dateCommit.commitCount > 9 && dateCommit.commitCount < 15) {
          saturation = 45;
          lightness = 45;
        }
        if (dateCommit.commitCount >= 15) {
          saturation = 50;
          lightness = 35;
        }

        const barWidth = 250 / (commitCountPerDate.length + gapDays * 0.5);

        const margin = dateCommit.daysBeforeWithZeroCommits
          ? dateCommit.daysBeforeWithZeroCommits * barWidth * 0.5
          : 0;

        return (
          <div
            key={dateCommit.date}
            style={{
              backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
              marginLeft: `${margin}px`,
              width: `${barWidth}px`,
            }}
          ></div>
        );
      })}
    </div>
  );
}
