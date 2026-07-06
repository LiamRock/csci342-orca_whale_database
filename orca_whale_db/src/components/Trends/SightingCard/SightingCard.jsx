/* eslint-disable react/prop-types */

const SightingCard = ({ sighting }) => {
    const sightedDate = new Date(sighting.created).toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    });

    return (
        <div className="bg-white rounded-xl shadow-md flex flex-col hover:shadow-lg transition-shadow duration-200">
            {sighting.photo_url && (
                <div className="relative group overflow-visible">
                    <img
                        src={sighting.photo_url}
                        alt="Orca sighting"
                        className="w-full h-40 object-cover rounded-t-xl transition-transform duration-300 ease-out group-hover:scale-[2.8] group-hover:z-20 group-hover:shadow-2xl group-hover:rounded-lg relative"
                    />
                </div>
            )}

            <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-black text-lg">
                        {sighting.no_sighted} orca{sighting.no_sighted != 1 && "s"} sighted
                    </p>
                    <span
                        className={`text-xs font-medium px-2 py-1 rounded-full ${
                            sighting.trusted
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-500"
                        }`}
                    >
                        {sighting.trusted ? "Verified" : "Unverified"}
                    </span>
                </div>

                <p className="text-sm text-slate-500">{sightedDate}</p>

                <p className="text-sm text-slate-500">
                    {Number(sighting.latitude).toFixed(3)}, {Number(sighting.longitude).toFixed(3)}
                </p>

                {sighting.data_source_comments && (
                    <p className="text-sm text-slate-700 italic border-t border-slate-100 pt-2 mt-1">
                        “{sighting.data_source_comments}”
                    </p>
                )}
            </div>
        </div>
    );
};

export default SightingCard;