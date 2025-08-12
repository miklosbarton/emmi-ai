
import { ModelsData } from "@/app/data/models";

export default function Models() {
    return (
        <div className="bg-background mb-20">
            <main className="w-full max-w-screen-2xl mx-auto px-10">
                <div className="space-y-8 py-20">
                    <h1 className="text-6xl">Our AI Models</h1>
                    <div className="space-y-2">
                        {ModelsData.map((model, id) => {
                            return (
                                <div key={id}><a href={`/models/${model.id}`} key={id}>{model.title}</a></div>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>

    );
};

