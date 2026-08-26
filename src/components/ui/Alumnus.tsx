interface AlumnusProps {
    alumnus: Alumnus
}


function DetailBox({detail, detailName}: {detail:string , detailName: string}) {
    return (<div className="rounded-lg border border-green-500/20 bg-green-500/5 p-2">
        <p className="text-xs text-gray-500">{detailName}</p>
        <p className="mt-1 font-semibold text-gray-300 text-sm">
            {detail}
        </p>
    </div>)
}
export default function Alumnus({ alumnus }: AlumnusProps) {
    return (
        <div
            className="border-2 border-green-500 bg-green-500/10 rounded-xl overflow-hidden shadow-md"
        >

            <div className="flex h-12 w-72 items-center justify-center  border-green-500/5 bg-green-500/10 px-3 rounded-br-lg  shadow-[inset_-4px_2px_8px_0px_rgba(0,0,0,0.3)] backdrop-blur-sm border-b border-r">
                <h3 className=" text-center text-2xl font-bold text-white">
                    {alumnus.name}
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 space-y-6">
                    <img 
                        src={alumnus.image}
                        alt={alumnus.name}
                        className="mx-auto h-32 w-32 rounded-full object-cover border-2 border-green-500/30"
                    />
                    <div>
                        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
                            About
                        </h2>

                        <DetailBox detailName="" detail={alumnus.bio} />
                    </div>
                </div>
                <div className="p-6 space-y-6">

                    <div>
                        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">

                            Career
                        </h2>

                        <div className="grid grid-cols-2 gap-3">
                            <div className="col-span-2">

                                <DetailBox detailName="Current Role" detail={alumnus.currentRole} />
                            </div>
                            <DetailBox detailName="Company" detail={alumnus.company} />


                            <DetailBox detailName="Location" detail={alumnus.location} />


                        </div>
                    </div>

                    <div>
                        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-green-700">
                            Connect
                        </h2>

                        <div className="flex gap-3">
                            <a
                                href={alumnus.links.linkedin}
                                target="_blank"
                                className="rounded-lg border border-b-4 active:border-b active:translate-y-[2px]  border-green-500/30 bg-green-500/5 px-4 py-2 font-medium text-green-500 transition hover:bg-green-500/15 text-sm"
                            >
                                LinkedIn
                            </a>

                            <a
                                href={alumnus.links.github}
                                target="_blank"
                                className="rounded-lg border border-b-4 active:border-b active:translate-y-[2px]  border-green-500/30 bg-green-500/5 px-4 py-2 font-medium text-green-500 transition hover:bg-green-500/15 text-sm"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}