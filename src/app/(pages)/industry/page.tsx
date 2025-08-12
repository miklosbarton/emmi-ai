
import { industries } from "@/app/data/industries";

export default function Industries() {
    return (
        <div className="bg-background mb-20">
            <main className="w-full max-w-screen-2xl mx-auto px-10">
                <div className="space-y-8 py-20">
                    <h1 className="text-6xl">Industries</h1>
                    <div className="space-y-2">
                        {industries.map((industry, id) => {
                            return (
                                <div key={id}><a href={`/industry/${industry.id}`} key={id}>{industry.title}</a></div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>

    );
};

