import { useState, useEffect } from "react";
import Banner from '../HomePage/Banner/Banner';

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
        <div>
            <Banner title={"Daily Trends"} backgroundImage={"./src/assets/day-tours-banner.jpg"}/>
            <div className='relative flex flex-col items-center justify-center p-[20px] bg-slate-100'>
                <h1 className='font-bold mb-5'>Recent Orca Sightings - WA Waters</h1>

                {sightings.length === 0 && <p>No recent orca sightings reported.</p>}

                {summary && (
                    <div className="max-w-2xl text-center mb-6">
                        <p className="text-sm text-slate-500 mb-1">Report: {summary.date}</p>
                        <p className="text-black">{summary.report}</p>
                    </div>
                )}

                <ul className="w-full max-w-2xl">
                    {sightings.map((s) => (
                        <li key={s.entry_id} className="border-b border-slate-300 py-3 text-left">
                            <p className="font-semibold text-black">{s.no_sighted} orcas sighted</p>
                            <p className="font-thin text-gray-800">{s.ssemmi_date_added}</p>
                            <p className="font-thin text-gray-800">{s.latitude}, {s.longitude}</p>
                            <p className="font-normal text-black">{s.data_source_comments}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Trends