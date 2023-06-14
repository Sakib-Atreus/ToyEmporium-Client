

const SectionTree = () => {
    return (
        <div className="stats grid grid-cols-3 lg:grid-cols-3 text-center shadow  rounded-full m-3 bg-black text-white pt-3 pb-3">

            <div className="  ">
                <div className="stat-figure text-[#ff0844]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
                <div className="stat-title text-white">Total Likes</div>
                <div className="stat-value text-[#ff0844]">77.2K</div>
                <div className="stat-desc text-white">21% more than last month</div>
            </div>

            <div className="">
                <div className="stat-figure text-[#ffb199]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div className="stat-title text-white">Page Views</div>
                <div className="stat-value text-[#ffb199]">8.1M</div>
                <div className="stat-desc text-white">23% more than last month</div>
            </div>

            <div className="">
            <div className="stat-figure text-red-400">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
    </div>

                <div className="stat-value">77 <span className="text-">%</span></div>
                <div className="stat-title text-white">Tasks done</div>
                <div className="stat-desc text-red-400">29 tasks remaining</div>
            </div>

        </div>
    );
};

export default SectionTree;