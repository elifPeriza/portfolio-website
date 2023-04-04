type ProjectCommits = {
  date: string;
  commitCount: number;
  daysBeforeWithZeroCommits?: number;
};

type CommitGraphProps = {
  projectCommits?: ProjectCommits[];
  gapDays?: number;
  totalDays: number;
  commitCountTotal: number;
};

export default function CommitGraph({
  projectCommits,
  totalDays,
  commitCountTotal,
  gapDays = 0,
}: CommitGraphProps) {
  return (
    <div className="flex flex-col">
      <h2 className="font-inter">
        <span className=" pr-2 font-poppins text-4xl font-bold ">
          {commitCountTotal}
        </span>
        commits in
        <span className="p-3 font-poppins text-4xl font-bold ">
          {totalDays}
        </span>
        days
      </h2>
      <div className="flex h-14 w-[250px] flex-row self-start bg-[#EFF7D4]">
        {projectCommits?.map((commit) => {
          let hue = 76;
          let saturation;
          let lightness;
          if (commit.commitCount > 0 && commit.commitCount <= 4) {
            saturation = 80;
            lightness = 80;
          }
          if (commit.commitCount > 4 && commit.commitCount <= 9) {
            saturation = 60;
            lightness = 60;
          }
          if (commit.commitCount > 9 && commit.commitCount < 15) {
            saturation = 45;
            lightness = 45;
          }
          if (commit.commitCount >= 15) {
            saturation = 50;
            lightness = 35;
          }
          //  Calculate the width of each bar based on the total number of commits and the gap days between them
          const barWidth = 250 / (projectCommits.length + gapDays * 0.5);
          //  If daysBeforeWithZeroCommits is defined, calculate the margin for this commit
          const margin = commit.daysBeforeWithZeroCommits
            ? commit.daysBeforeWithZeroCommits * barWidth * 0.5
            : 0;

          return (
            <div
              key={commit.date}
              style={{
                backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
                marginLeft: `${margin}px`,
                width: `${barWidth}px`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
