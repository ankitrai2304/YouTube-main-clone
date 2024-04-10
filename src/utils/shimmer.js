export const HomeShimmer = () => {
  const card = () => {
    return (
      <div className="w-80 h-64 bg-zinc-700 rounded-3xl overflow-hidden">
        <div className="Thumbnail bg-gray-400 w-[90%] h-40 mt-2 m-auto rounded-2xl"></div>
        <div className="texts m-2">
          <div className="w-2/3 h-4 m-2 rounded-3xl bg-zinc-600"></div>
          <div className="w-1/2 h-4 m-2 rounded-3xl bg-zinc-600"></div>
          <div className="w-20 h-4 m-2 rounded-3xl bg-zinc-600"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap gap-10 mx-3 mt-10">
      {Array(12)
        .fill("")
        .map((e, index) => card())}
    </div>
  );
};

export const SearchShimmer = () => {
  const card = () => {
    return (
      <div className="w-5/6 h-72 bg-zinc-700 rounded-3xl overflow-hidden flex items-center">
        <div className="Thumbnail bg-gray-400 w-80 h-52 m-4 rounded-2xl"></div>
        <div className="texts m-2 w-2/3">
          <div className="w-4/5 h-4 m-2 rounded-3xl bg-zinc-600"></div>
          <div className="w-3/5 h-4 m-2 rounded-3xl bg-zinc-600"></div>
          <div className="w-2/5 h-4 m-2 rounded-3xl bg-zinc-600"></div>
          <div className="w-1/5 h-4 m-2 rounded-3xl bg-zinc-600"></div>
          <div className="w-20 h-4 m-2 rounded-3xl bg-zinc-600"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-4 ml-10 flex flex-wrap gap-10 mx-3 ">
      {Array(12)
        .fill("")
        .map((e, index) => card())}
    </div>
  );
};

export const VideoPlayerShimmer = () => {
  const VideoCard = () => {
    return (
      <>
        <div className="w-[55vw] h-[70vh] bg-zinc-700 rounded-3xl overflow-hidden">
          <div className="Thumbnail bg-gray-400 w-[90%] h-[90%] m-auto my-7 rounded-2xl"></div>
        </div>
        <div className="texts m-2">
          <div className="w-2/3 h-4 m-2 rounded-3xl bg-zinc-600"></div>
          <div className="w-1/2 h-4 m-2 rounded-3xl bg-zinc-600"></div>
          <div className="w-20 h-4 m-2 rounded-3xl bg-zinc-600"></div>
        </div>
      </>
    );
  };
  const suggestionsCard = () => {
    return (
      <div className=" h-32 bg-zinc-700 rounded-3xl overflow-hidden flex items-center">
        <div className="Thumbnail bg-gray-400 w-80 h-[90%] m-4 rounded-2xl"></div>
        <div className="texts m-2 w-2/3">
          <div className="w-4/5 h-4 m-2 rounded-3xl bg-zinc-600"></div>
          <div className="w-3/5 h-4 m-2 rounded-3xl bg-zinc-600"></div>
          <div className="w-2/5 h-4 m-2 rounded-3xl bg-zinc-600"></div>
          <div className="w-1/5 h-4 m-2 rounded-3xl bg-zinc-600"></div>
          <div className="w-20 h-4 m-2 rounded-3xl bg-zinc-600"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-screen w-full flex">
      <div className="w-2/3 ml-16">{VideoCard()}</div>
      <div className="w-1/3">{suggestionsCard()}</div>
    </div>
  );
};
