import { useState, useEffect } from "react";
import Banner from '../HomePage/Banner/Banner';
import SightingCard from './SightingCard/SightingCard'
import TrendsMap from './TrendsMap/TrendsMap'

const Trends = () => {
    const [sightings, setSightings] = useState([]);
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        const fetchTrends = async () => {
            const res = await fetch(import.meta.env.VITE_SERVER_URL + "/trends");
            const data = await res.json();

            const sorted = [...data.sightings].sort(
                (a, b) => new Date(b.created) - new Date(a.created)
            );

            setSightings(sorted);
            console.table(sorted);
            setSummary(data.summary)
        };
        fetchTrends();
    }, []);

    return (
        <div className="mt-36">
            {/* <Banner title={"Daily Trends"} backgroundImage={"./src/assets/day-tours-banner.jpg"}/> */}
            <div className='relative flex flex-col items-center justify-center p-[20px] bg-slate-100'>
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-slate-900">
                        Recent Orca Sightings
                    </h1>

                    <p className="mt-2 text-slate-500">
                        Washington State Waters • Updated Daily
                    </p>
                </div>


                <div className="w-full max-w-6xl">
                    <TrendsMap sightings={sightings}/>
                </div>

                {sightings.length === 0 && <p className="text-black">No recent orca sightings reported.</p>}

                {summary && (
                    <div className="w-full max-w-4xl mb-8 mt-10">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <h1 className="text-2xl font-semibold mb-4">
                                Daily Summary
                            </h1>

                            <p className="text-sm text-slate-500 mb-1">
                                Report: {summary.date}
                            </p>
                            
                            <div className="space-y-4 text-left text-slate-700 leading-7">
                                {summary.report.split("\n\n").map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                )}



                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    {sightings.map((s) => (
                        <SightingCard key={s.entry_id} sighting={s} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Trends